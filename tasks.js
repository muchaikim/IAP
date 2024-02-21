document.addEventListener('DOMContentLoaded', function() {
    // Query for submit and input
    const submit = document.getElementById('submit');
    const newTaskInput = document.getElementById('task');
    submit.disabled = true;

    // Listen for input
    newTaskInput.addEventListener('input', function() {
        // Enable or disable the submit button
        submit.disabled = !newTaskInput.value.trim();
    });

    // Listen for submit
    document.querySelector('form').addEventListener('submit', function(event) {
        event.preventDefault();
        
    // Find the task
        const newTaskText = newTaskInput.value.trim();
        
    // Create a list item
        const newTaskItem = document.createElement('li');
        newTaskItem.textContent = newTaskText;
        
    // Add the new element to our unordered list
        document.getElementById('tasks').appendChild(newTaskItem);
        newTaskInput.value = '';
        
    // Disable submit functionality
        submit.disabled = true;
    });
    return false;
});
