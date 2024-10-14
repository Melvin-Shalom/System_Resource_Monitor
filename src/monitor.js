const fs = require('fs');
const os = require('os');
const path = require('path');
const { execSync } = require('child_process');
const logFilePath = path.resolve(__dirname, '../logs/resource-log.txt');


function getDiskUsage() {
    try {
        const result = execSync('df -BM /').toString();
        const diskInfo = result.split('\n')[1].split(/\s+/);
        const usedDisk = parseInt(diskInfo[2].replace('M', ''));  // Used space in MB
        const totalDisk = parseInt(diskInfo[1].replace('M', '')); // Total space in MB
        return `${usedDisk} MB used / ${totalDisk} MB total`;
    } catch (error) {
        console.error('Error fetching disk usage:', error);
        return 'Error fetching disk usage';
    }
}


function logSystemResource() {
    const timestamp = new Date().toISOString();
    const cpuUsage = os.loadavg().map(avg => avg.toFixed(2)).join(', ');

    const memoryUsageUsed = (os.totalmem() - os.freemem()) / 1024 / 1024; // Convert to MB
    const memoryUsageTotal = os.totalmem() / 1024 / 1024; // Convert to MB
    const memoryUsage = `${memoryUsageUsed.toFixed(2)} MB used / ${memoryUsageTotal.toFixed(2)} MB total`;

    const diskUsage = getDiskUsage();
    const logEntry = `\n${timestamp}\nCPU Load Avg: [${cpuUsage}]\nMemory Usage: ${memoryUsage}\nDisk Usage: ${diskUsage}\n`;

    fs.appendFile(logFilePath, logEntry, (err) => {
        if (err) {
            console.error('Error writing to log file:', err);
        } else {
            console.log('\nLog entry added:', logEntry.trim());
        }
    });
}


setInterval(logSystemResource, 2000);
logSystemResource();
