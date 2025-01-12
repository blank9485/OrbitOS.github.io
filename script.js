const output = document.getElementById('output');
const inputField = document.getElementById('input');
const prompt = document.getElementById('prompt');

function executeCommand(command) {
    command = command.trim();
    let response = '';

    if (command === 'exit') {
        response = 'Exiting OrbitOS...';
        setTimeout(() => {
            window.close();
        }, 1000);
    } else if (command === 'help') {
        response = `
            <p>exit - Exits OrbitOS</p>
            <p>help - Shows this message</p>
            <p>clear - Clears the screen</p>
            <p>echo - Prints the message</p>
            <p>ls - Lists the files in the current directory</p>
            <p>processes - Shows the processes</p>
            <p>neofetch - Shows system information</p>
            <p>system - Shows the system main directory</p>
            <p>rm - Removes a file</p>
            <p>battery - Shows battery percentage</p>
            <p>software - Shows system changelog</p>
        `;
    } else if (command === 'clear') {
        output.innerHTML = '';
        response = 'Screen cleared.';
    } else if (command === 'echo') {
        const message = promptForMessage();
        response = message;
    } else if (command === 'ls') {
        response = 'No files found.';
    } else if (command === 'processes') {
        response = 'Processes: [System process list placeholder]';
    } else if (command === 'neofetch') {
        response = `
            <p>OrbitOS version: 3.0 - stable</p>
            <p>Kernel version: 5.4.0-1059-gcp</p>
            <p>Architecture: x86_64</p>            
            <p>Total memory: 4.0GiB</p>
            <p>Free disk space: 1.0GiB</p>
            <p>Total processes: 3</p>
        `;
    } else if (command === 'system') {
        response = window.location.href;
    } else if (command === 'rm') {
        response = 'No files to remove.';
    } else if (command === 'battery') {
        response = 'Battery: 100%\nCharging: False\nTime remaining: 2d 7h';
    } else if (command === 'software') {
        response = 'OrbitOS 3.0 introduces the stable version with new features and a revamped layout, offering improved performance, a better user interface, and enhanced customization options for a more seamless experience.';
    } else if (command === 'rm os') {
        response = 'Critical system error: No operating system detected. Restart device.';
    } else {
        response = `Command '${command}' not found. Type 'help' for a list of commands.`;
    }

    displayResponse(response);
}

function displayResponse(response) {
    const div = document.createElement('div');
    div.innerHTML = `<p>${response}</p>`;
    output.appendChild(div);
    scrollToBottom();
    inputField.value = '';
}

function scrollToBottom() {
    output.scrollTop = output.scrollHeight;
}

function promptForMessage() {
    const message = prompt('Enter a message:');
    return message || 'No message entered.';
}

inputField.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        executeCommand(inputField.value);
    }
});
