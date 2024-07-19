const outputElement = document.getElementById('output');
const inputElement = document.getElementById('input');

const welcomeMessage = "Welcome to OrbitOS !\nType \"help\" for a list of available commands.";

function typeWriter(text, i = 0) {
    if (i < text.length) {
        outputElement.textContent += text.charAt(i);
        i++;
        setTimeout(() => typeWriter(text, i), 50); 
    } else {
        inputElement.focus();
    }
}

window.addEventListener('load', () => {
    typeWriter(welcomeMessage);
});

inputElement.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        const command = inputElement.value.trim();
        handleCommand(command);
        inputElement.value = '';
    }
});

function handleCommand(command) {
    switch (command) {
        case 'neofetch':
            outputElement.textContent += 'OrbiOS v1.0\n';
            break;
        case 'software-update':
            // 1. Show "Searching for updates..."
            outputElement.textContent += 'Searching for updates.....\n';

            // 2. Wait 3 seconds
            setTimeout(() => {
                // 3. Display the changelog
                outputElement.textContent += 'Last update: 19.07.2024\nVersion 1.0:\nno updates found.\n\n';
            }, 3000); // 3000 milliseconds = 3 seconds

            break;
        case 'help':
            outputElement.textContent += 'Available commands:\n- neofetch\n- software-update\n- help\n';
            break;
        default:
            outputElement.textContent += `Command not found: ${command}\n`;
    }
    }
