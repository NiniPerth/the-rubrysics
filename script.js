function show_topic(topic_name) {
    // Hide all topics
    var topics = document.getElementsByClassName('topic');
    for (var i = 0; i < topics.length; i++) {
        topics[i].style.display = 'none';
    }

    // Show the selected topic
    document.getElementById(topic_name).style.display = 'block';
}function updateEquations() {
    const type = document.getElementById('calculation-type').value;
    const suggestions = document.getElementById('suggestions');
    const equationSelect = document.getElementById('equation-select');
    
    equationSelect.innerHTML = '<option value="">Select an equation</option>'; // Reset

    switch (type) {
        case 'displacement':
            suggestions.innerHTML = `Use the equations below:`;
            equationSelect.innerHTML += `
                <option value="s1">s = ut + (1/2)at²</option>
                <option value="s2">s = vt - (1/2)at²</option>
                <option value="s3">s = (u + v)/2 * t</option>`;
            break;
        case 'final-velocity':
            suggestions.innerHTML = `Use the equations below:`;
            equationSelect.innerHTML += `
                <option value="v1">v = u + at</option>
                <option value="v2">v² = u² + 2as</option>
                <option value="v3">v = s/t + u</option>`;
            break;
        case 'initial-velocity':
            suggestions.innerHTML = `Use the equations below:`;
            equationSelect.innerHTML += `
                <option value="u1">u = (s - (1/2)at²) / t</option>
                <option value="u2">u = v - at</option>
                <option value="u3">u = s/t - (1/2)at</option>`;
            break;
        case 'acceleration':
            suggestions.innerHTML = `Use the equations below:`;
            equationSelect.innerHTML += `
                <option value="a1">a = (s - ut) / (1/2)t²</option>
                <option value="a2">a = (v - u) / t</option>
                <option value="a3">a = (v² - u²) / (2s)</option>`;
            break;
        case 'time':
            suggestions.innerHTML = `Use the equations below:`;
            equationSelect.innerHTML += `
                <option value="t1">t = (v - u) / a</option>
                <option value="t2">t = (s - ut) / (1/2)a</option>
                <option value="t3">t = (2s) / (u + v)</option>`;
            break;
        default:
            suggestions.innerHTML = "Select a calculation to see suggestions.";
    }
}

let selectedEquation = '';

function updateSelectedEquation() {
    selectedEquation = document.getElementById('equation-select').value;
}

function performCalculation() {
    // Your existing code...
    // Use `selectedEquation` to determine which formula to apply
    switch (selectedEquation) {
        case 's1': // For example: s = ut + (1/2)at²
            if (!isNaN(u) && !isNaN(a) && !isNaN(t)) {
                s = u * t + 0.5 * a * t * t;
                // Set result and calculation steps...
            }
            break;
        case 'v1': // For example: v = u + at
            if (!isNaN(u) && !isNaN(a) && !isNaN(t)) {
                v = u + a * t;
                // Set result and calculation steps...
            }
            break;
        // Handle other cases similarly...
        default:
            alert("Please select a valid equation.");
    }
}
function saveInputValues() {
    localStorage.setItem('graphTitle', document.getElementById('graph-title').value);
    localStorage.setItem('xStart', document.getElementById('x-start').value);
    localStorage.setItem('yStart', document.getElementById('y-start').value);
    localStorage.setItem('xValues', document.getElementById('x-values').value);
    localStorage.setItem('yValues', document.getElementById('y-values').value);
    localStorage.setItem('xLabel', document.getElementById('x-label').value);
    localStorage.setItem('yLabel', document.getElementById('y-label').value);
}

function loadInputValues() {
    document.getElementById('graph-title').value = localStorage.getItem('graphTitle') || '';
    document.getElementById('x-start').value = localStorage.getItem('xStart') || '0';
    document.getElementById('y-start').value = localStorage.getItem('yStart') || '0';
    document.getElementById('x-values').value = localStorage.getItem('xValues') || '';
    document.getElementById('y-values').value = localStorage.getItem('yValues') || '';
    document.getElementById('x-label').value = localStorage.getItem('xLabel') || '';
    document.getElementById('y-label').value = localStorage.getItem('yLabel') || '';
}

window.onload = loadInputValues;
window.onbeforeunload = saveInputValues;

