# 🚛 Fuel Board Queue Monitor 🛢️

## 🌟 Description
Fuel Board Queue Monitor is an Electron-based desktop application that brings order to the chaos of fuel station queues! 🎯 Manage and display fuel tanker queues for AGO (Automotive Gas Oil) and PMS (Premium Motor Spirit) with style and efficiency.

## ✨ Features
- 📊 Display separate queues for AGO and PMS fuel types
- 🔢 Show the next two vehicles in each queue
- ➕ Add new vehicles to the appropriate queue
- ⏭️ Move to the next vehicle in the queue
- 🚫 Prevent duplicate entries in each queue
- 🎨 User-friendly interface with color-coded queues (AGO: 💚, PMS: ❤️)

## 🚀 Installation

### Prerequisites
- Node.js (v12.0.0 or higher) 📦
- npm (usually comes with Node.js) 🛠️

### Steps
1. Clone the repository or download the source code:
   ```bash
   git clone https://github.com/your-username/fuel-board-queue-monitor.git
   cd fuel-board-queue-monitor
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

## 🎮 Usage

### Running the Application
To start the application in development mode:
```bash
npm start
```

### Building the Application
To package the application for distribution:
```bash
npm run make
```
This will create executable files for your operating system in the `out` folder. 📦✨

### Using the Application
1. 🖥️ The main window displays two queues: AGO (💚) and PMS (❤️).
2. To add a new vehicle to a queue:
   - 🚛 Enter the vehicle code in the input field (e.g., AGO345 or PMS678)
   - 🖱️ Click the "ADD" button or press Enter
3. To move to the next vehicle in a queue, click the "Next" button under the respective queue.

## 🗂️ Project Structure
- `main.js`: Main process file for the Electron app 🏗️
- `index.html`: HTML file for the app's user interface 🎨
- `renderer.js`: Renderer process file handling UI logic 🧠
- `preload.js`: Preload script for secure main-to-renderer process communication 🔒
- `forge.config.js`: Configuration file for Electron Forge ⚙️
- `package.json`: Project metadata and dependencies 📄

## 🛠️ Technologies Used
- Electron ⚛️
- HTML/CSS 🌐
- JavaScript 🚀

## 👥 Contributing
Contributions to improve the Fuel Board Queue Monitor are welcome! Let's make it awesome together! 🤝

1. Fork the repository 🍴
2. Create a new branch (`git checkout -b feature/AmazingFeature`) 🌿
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`) 💾
4. Push to the branch (`git push origin feature/AmazingFeature`) 🚀
5. Open a Pull Request 📬

## 📜 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. 📄

## 🆘 Support
If you encounter any problems or have any questions, please open an issue in the GitHub repository. We're here to help! 🦸‍♀️🦸‍♂️

