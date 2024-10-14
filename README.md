
# System Resource Monitor

## Description

The **System Resource Monitor** is a web-based application built with **Node.js** and **Express** that monitors and logs system resources such as CPU load, memory usage, and disk usage. This application utilizes a dedicated log file to store system metrics, which are fetched and displayed in real-time on a web interface. The application leverages the **CORS** module to allow cross-origin requests from the frontend to the backend.

## Features

- Real-time monitoring of system resources (CPU, memory, and disk usage).
- Logs resource data every 2 seconds and saves it to a text file.
- Fetches and displays the latest log entries on the web page.
- Provides a user-friendly interface to visualize system resource metrics.

## Requirements

- Node.js 16.x or higher
- Express.js
- CORS
- Basic knowledge of JavaScript and HTML
- Terminal or Command Prompt

## Steps for Execution

1. #### Open the Terminal and Clone the Repository
   ```bash
   git clone https://github.com/YourUsername/System_Resource_Monitor.git
   ```
2. #### Navigate to the Project Directory
   ```bash
   cd System_Resource_Monitor/
   ```
3. #### Install Dependencies
   ```bash
   npm install
   ```
4. #### Execute the Monitor Script
   ```bash
   node monitor.js
   ```
5. #### In Another Terminal Window, Navigate to the Project Directory
   ```bash
   cd System_Resource_Monitor/
   ```
6. #### Start the Express Server
   ```bash
   node app.js
   ```
7. #### Open Your Web Browser
   - Visit `http://localhost:3000` to access the System Resource Monitor.

## Additional Notes

- Ensure that you have the necessary permissions to access system resources.
- For detailed explanations of the code and architecture, please refer to the comments within the source files.
```

### Instructions for Use
- Replace `YourUsername` in the GitHub link with your actual GitHub username or organization name.
- Adjust any details in the descriptions or features to better reflect your application.
- Make sure the formatting is preserved when you add it to your GitHub repository.
