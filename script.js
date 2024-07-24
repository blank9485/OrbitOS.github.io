const outputElement = document.getElementById('output');
const inputElement = document.getElementById('input');

const welcomeMessage = "Welcome to OrbitOS !
Type "help" for a list of available commands.";

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
      outputElement.textContent += 'OrbiOS v1.1
';
      break;
    case 'software-update':
      outputElement.textContent += 'Searching for updates.....
';
      setTimeout(() => {
        outputElement.textContent += 'Last update: 24.07.2024
Version 1.1:
-added calculator.

';
      }, 3000);
      break;
    case 'help':
      outputElement.textContent += 'Available commands:
- neofetch
- software-update
- help
- calc
'; // Added 'calc' to help
      break;
    case 'calc': 
      if (args.length === 0) {
        outputElement.textContent += "Usage: calc <expression>
";
      } else {
        const expression = args.join(' ');
        const result = calculate(expression);
        outputElement.textContent += `${result}
`;
      }
      break;
    default:
      outputElement.textContent += `Command not found: ${command}
`;
  }
}

function calculate(expression) {
  try {
    const result = eval(expression);
    return result;
  } catch (error) {
    return "Invalid Expression";
  }
}