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
    const [cmd, ...args] = command.split(' ');
    switch (cmd) {
        case 'neofetch':
            outputElement.textContent += `
OrbitOS v1.4
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
\n`;
            break;
        case 'software-update':
            outputElement.textContent += 'Searching for updates.....\n';
            setTimeout(() => {
                outputElement.textContent += `
Last update: 22.08.2024
Version 1.4:
- Added mkdir <directory>
- added touch <filename>
- added cat <filename>
- added whoami
- added uname
- added pwd
- The calc command now works with multi-word expressions
- The command parsing has been improved to separate the command and its arguments.


        case 'help':
            outputElement.textContent += 'Available commands:\n- neofetch\n- software-update\n- calc <expression>\n- help\n- date\n- time\n- clear\n- ls\n- echo <message>\n- mkdir <directory>\n- touch <filename>\n- cat <filename>\n- whoami\n- uname\n- pwd\n';
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
        case 'calc':
            try {
                const expression = args.join(' ');
                const result = eval(expression);
                outputElement.textContent += `Result: ${result}\n`;
            } catch (error) {
                outputElement.textContent += 'Invalid expression\n';
            }
            break;
        case 'echo':
            outputElement.textContent += `${args.join(' ')}\n`;
            break;
        case 'mkdir':
            if (args.length > 0) {
                outputElement.textContent += `Directory created: ${args[0]}\n`;
            } else {
                outputElement.textContent += 'Usage: mkdir <directory>\n';
            }
            break;
        case 'touch':
            if (args.length > 0) {
                outputElement.textContent += `File created: ${args[0]}\n`;
            } else {
                outputElement.textContent += 'Usage: touch <filename>\n';
            }
            break;
        case 'cat':
            if (args.length > 0) {
                outputElement.textContent += `Contents of ${args[0]}:\nThis is a sample file content.\n`;
            } else {
                outputElement.textContent += 'Usage: cat <filename>\n';
            }
            break;
        case 'whoami':
            outputElement.textContent += 'orbituser\n';
            break;
        case 'uname':
            outputElement.textContent += 'OrbitOS\n';
            break;
        case 'pwd':
            outputElement.textContent += '/home/orbituser\n';
            break;
        default:
            outputElement.textContent += `Command not found: ${cmd}\n`;
            break;
    }
}
