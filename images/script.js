function show_topic(topic_name) {
    // Hide all topics
    var topics = document.getElementsByClassName('topic');
    for (var i = 0; i < topics.length; i++) {
        topics[i].style.display = 'none'; // Hide each topic
    }

    // Show the selected topic with a fade-in effect
    var selectedTopic = document.getElementById(topic_name);
    selectedTopic.style.display = 'block'; // Show the selected topic
    selectedTopic.style.opacity = 0; // Set initial opacity for fade-in
    var fadeEffect = setInterval(function () {
        if (selectedTopic.style.opacity < 1) {
            selectedTopic.style.opacity = parseFloat(selectedTopic.style.opacity) + 0.1; // Increase opacity
        } else {
            clearInterval(fadeEffect); // Stop when fully visible
        }
    }, 50); // Adjust the interval time for fade speed
}
