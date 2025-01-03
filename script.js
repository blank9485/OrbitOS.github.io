/* global styles */
body {
  margin: 0;
  font-family: Arial, sans-serif;
  overflow: hidden;
  background-color: #000;
}

#boot-screen {
  display: flex;
  align-items: center;
  justify-content: center;
  background: black;
  color: lime;
  width: 100vw;
  height: 100vh;
  font-size: 2rem;
  animation: fadeOut 2s forwards 3s;
}

#os-screen {
  display: none;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background: url('wallpaper.jpg') no-repeat center center / cover;
}

#status-bar {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  font-size: 1.2rem;
}

/* home screen layout */
#home-screen {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 20px;
}

.app-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  padding: 20px;
  justify-items: center;
}

.app {
  background: white;
  padding: 20px;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: transform 0.3s;
}

.app:hover {
  transform: scale(1.1);
}

#dock {
  display: flex;
  justify-content: center;
  gap: 10px;
  padding: 10px;
  background: rgba(0, 0, 0, 0.6);
}

.dock-app {
  width: 60px;
  height: 60px;
  background: white;
  text-align: center;
  line-height: 60px;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
}

.dock-app:hover {
  transform: scale(1.2);
}

/* app window */
#app-window {
  display: none;
  position: fixed;
  top: 10%;
  left: 50%;
  transform: translate(-50%, -10%);
  width: 90%;
  max-width: 500px;
  height: 70%;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
  animation: slideIn 0.5s;
  overflow: auto;
}

#close-app {
  position: absolute;
  top: 10px;
  right: 10px;
  background: red;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
}

#app-content {
  padding: 20px;
}

/* responsive styles */
@media (max-width: 768px) {
  .app-grid {
    grid-template-columns: repeat(2, 1fr);
  }
    }
