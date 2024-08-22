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
            outputElement.textContent += 
OrbitOS v1.3
-------------
Kernel: GeminiKernel 5.0.0-mvm
OS Type: Linux
Host: localhost
Shell: GeminiShell v1.0
Resolution: 1920x1080
DE: OrbitDE
WM: OrbitWM
Terminal: OrbitTerm
CPU: OrbitCPU @ 3.5GHz
Memory: 16384MB / 32768MB
\n;
            break;
        case 'software-update':
            outputElement.textContent += 'Searching for updates.....\n';
            setTimeout(() => {
                outputElement.textContent += 
Last update: 06.08.2024
Version 1.3:
- Added echo command
- Enhanced neofetch output
- Improved software update functionality (beta)
Updating system... Please wait.
;
                setTimeout(() => {
                    outputElement.textContent += 'Update complete. System is now up to date.\n';
                }, 3000);
            }, 3000);
            break;
        case 'help':
            outputElement.textContent += 'Available commands:\n- neofetch\n- software-update\n- calc <expression>\n- help\n- date\n- time\n- clear\n- ls\n- echo <message>\n';
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
                    outputElement.textContent += Result: ${result}\n;
                } catch (error) {
                    outputElement.textContent += 'Invalid expression\n';
                }
            } else if (command.startsWith('echo ')) {
                const message = command.substring(5);
                outputElement.textContent += ${message}\n;
            } else {
                outputElement.textContent += Command not found: ${command}\n;
            }
            break;
    }
}
