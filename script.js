const outputElement = document.getElementById('output');
const inputElement = document.getElementById('input');

const welcomeMessage = "Welcome to OrbitOS Alpha!\nType \"help\" for a list of available commands.";

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
            outputElement.textContent += 'OrbitOS v1.2\n';
            outputElement.textContent += 'Kernel: GeminiKernel 5.0.0-mvm\n';
            outputElement.textContent += 'OS type: Linux\n';
            outputElement.textContent += 'Host: localhost\n';
            break;
        case 'software-update':
            outputElement.textContent += 'Searching for updates.....\n';
            setTimeout(() => {
                outputElement.textContent += 'Last update: 25.07.2024\nVersion 1.2:\n-added clear, ls, time and date. - added more info at neofetch command\n\n';
            }, 3000);
            break;
        case 'help':
            outputElement.textContent += 'Available commands:\n- neofetch\n- software-update\n- calc <expression>\n- help\n- date\n- time\n- clear\n- ls\n';
            break;
        case 'date':
            const currentDate = new Date();
            const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            outputElement.textContent += currentDate.toLocaleDateString('en-US', options) + '\n';
            break;
        case 'time':
            const currentTime = new Date();
            const timeOptions = { hour: 'numeric', minute: 'numeric', second: 'numeric' };
            outputElement.textContent += currentTime.toLocaleTimeString('en-US', timeOptions) + '\n';
            break;
        case 'clear':
            outputElement.textContent = '';
            break;
        case 'ls':
            outputElement.textContent += 'documents downloads music pictures public videos\n';
            break;
        default:
            if (command.startsWith('calc ')) {
                try {
                    const expression = command.substring(5);
                    const result = eval(expression);
                    outputElement.textContent += `Result: ${result}\n`;
                } catch (error) {
                    outputElement.textContent += 'Invalid expression\n';
                }
            } else {
                outputElement.textContent += `Command not found: ${command}\n`;
            }
            break;
    }
}
