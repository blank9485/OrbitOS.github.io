document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.getElementById("boot-screen").style.display = "none";
    document.getElementById("os-screen").style.display = "flex";
    updateTime();
  }, 3000);
});

function updateTime() {
  const now = new Date();
  document.getElementById("time").textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  document.getElementById("date").textContent = now.toLocaleDateString();
  setTimeout(updateTime, 1000);
}

function openApp(app) {
  const appContent = document.getElementById("app-content");
  appContent.innerHTML = ""; // Clear previous app content
  
  if (app === "calculator") {
    appContent.innerHTML = `
      <h2>Calculator</h2>
      <div id="calculator">
        <input type="text" id="calc-display" readonly />
        <div id="calc-buttons">
          ${['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+']
            .map(btn => `<button onclick="calcPress('${btn}')">${btn}</button>`).join('')}
        </div>
      </div>
    `;
  } else if (app === "calendar") {
    appContent.innerHTML = `<h2>Calendar</h2><p>January 2025</p>`;
  } else if (app === "settings") {
    appContent.innerHTML = `
      <h2>Settings</h2>
      <p>About Device:</p>
      <ul>
        <li>OS Name: NeoOS</li>
        <li>Version: 1.0</li>
       
      </ul>
    `;
  } else if (app === "notes") {
    appContent.innerHTML = `<h2>Notes</h2><textarea placeholder="Write here..." rows="10"></textarea>`;
  }
  
  document.getElementById("app-window").style.display = "block";
}

function closeApp() {
  document.getElementById("app-window").style.display = "none";
}

let calcExpression = "";

function calcPress(key) {
  const display = document.getElementById("calc-display");
  
  if (key === "=") {
    try {
      calcExpression = eval(calcExpression).toString();
    } catch {
      calcExpression = "Error";
    }
  } else {
    calcExpression += key;
  }
  
  display.value = calcExpression;
}
