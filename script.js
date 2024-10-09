const outputElement = document.getElementById('output');
const inputElement = document.getElementById('input');
const terminalElement = document.getElementById('terminal');

const welcomeMessage = "Welcome to OrbitOS Beta 2.0!\n Type \"help\" for navigation.";

function createStars() {
    for (let i = 0; i < 50; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.width = `${Math.random() * 3}px`;
        star.style.height = star.style.width;
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        document.body.appendChild(star);
    }
}

function typeWriter(text, i = 0) {
    if (i < text.length) {
        outputElement.innerHTML += text.charAt(i);
        i++;
        setTimeout(() => typeWriter(text, i), 50);
    } else {
        outputElement.innerHTML += '<br><span id="prompt">orbit@user:~$</span> ';
        inputElement.focus();
    }
}

window.addEventListener('load', () => {
    createStars();
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
    outputElement.innerHTML += `<span class="command">${command}</span><br>`;
    
    switch (command.toLowerCase()) {
        case 'neofetch':
            displayNeofetch();
            break;
        case 'software-update':
            simulateSoftwareUpdate();
            break;
        case 'help':
            displayHelp();
            break;
        case 'date':
            displayDate();
            break;
        case 'time':
            displayTime();
            break;
        case 'clear':
            clearTerminal();
            break;
        case 'ls':
            listDirectory();
            break;
        default:
            if (command.startsWith('calc ')) {
                calculateExpression(command.substring(5));
            } else if (command.startsWith('echo ')) {
                echoMessage(command.substring(5));
            } else {
                outputElement.innerHTML += `<span class="error">Command not found: ${command}</span><br>`;
            }
            break;
    }
    
    outputElement.innerHTML += '<span id="prompt">orbit@user:~$</span> ';
    inputElement.focus();
}

function displayNeofetch() {
    const neofetchOutput = `
    <span class="success">       .:/+oosso+/:.       </span>  OrbitOS v2.0 Beta
    <span class="success">    -+ydddddddddddddy+-    </span>  ----------------
    <span class="success">  /yddddddddddddddddddy/   </span>  Kernel: CosmosKernel 6.1.0
    <span class="success"> oddddddddddddddddddddddo  </span>  OS Type: Linux
    <span class="success">+dddddddddddddddddddddddd+ </span>  Host: starship_enterprise
    <span class="success">dddddddddddddddddddddddddd </span>  Shell: NovaShell v2.1
    <span class="success">dddddddddddddddddddddddddd </span>  Resolution: 3840x2160
    <span class="success">+dddddddddddddddddddddddd+ </span>  DE: OrbitDE 2.0
    <span class="success"> oddddddddddddddddddddddo  </span>  WM: GalaxyWM
    <span class="success">  /yddddddddddddddddddy/   </span>  Terminal: QuantumTerm
    <span class="success">    -+ydddddddddddddy+-    </span>  CPU: StarDrive @ 5.0GHz
    <span class="success">       .:/+oosso+/:.       </span>  Memory: 32768MB / 65536MB
    `;
    outputElement.innerHTML += neofetchOutput + '<br>';
}

function simulateSoftwareUpdate() {
    outputElement.innerHTML += 'Initiating software update sequence...<br>';
    setTimeout(() => {
        outputElement.innerHTML += `
Last update: 09.10.2024
Version 2.0 Beta:
- Improved UI with space theme
- Enhanced command processing
- Added new 'neofetch' design
- Optimized performance

Checking for updates... Please wait.<br>`;
        setTimeout(() => {
            outputElement.innerHTML += '<span class="success">System is at the frontier of innovation. No updates available.</span><br>';
        }, 3000);
    }, 2000);
}

function displayHelp() {
    const helpText = `
Available commands:
- neofetch : Display system information
- software-update : Check for system updates
- calc <expression> : Perform calculations
- help : Display this help message
- date : Show current date
- time : Show current time
- clear : Clear the terminal
- ls : List directory contents
- echo <message> : Display a message
`;
    outputElement.innerHTML += helpText;
}

function displayDate() {
    const currentDate = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    outputElement.innerHTML += currentDate.toLocaleDateString('en-US', options) + '<br>';
}

function displayTime() {
    const currentTime = new Date();
    const timeOptions = { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
    outputElement.innerHTML += currentTime.toLocaleTimeString('en-US', timeOptions) + '<br>';
}

function clearTerminal() {
    outputElement.innerHTML = '';
}

function listDirectory() {
    outputElement.innerHTML += 'documents  downloads  music  pictures  videos  quantum_data<br>';
}

function calculateExpression(expression) {
    try {
        const result = eval(expression);
        outputElement.innerHTML += `<span class="success">Result: ${result}</span><br>`;
    } catch (error) {
        outputElement.innerHTML += '<span class="error">Invalid expression</span><br>';
    }
}

function echoMessage(message) {
    outputElement.innerHTML += `${message}<br>`;
    }
