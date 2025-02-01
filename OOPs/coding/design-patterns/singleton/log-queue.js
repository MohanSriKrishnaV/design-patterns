const fs = require("fs");

class AsyncLogger {
  constructor() {
    this.logQueue = [];  // Queue to hold log messages
    this.isProcessing = false;  // Flag to prevent multiple write operations
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;

    this.logQueue.push(logMessage);
    this.processLogs();  // Start processing logs if not already processing
  }

  async processLogs() {
    if (this.isProcessing) return;  // Prevent multiple processing

    this.isProcessing = true;  // Set flag to indicate we're processing logs

    while (this.logQueue.length > 0) {
      const logMessage = this.logQueue.shift();  // Get the next log message

      // Asynchronously write to the file
      await new Promise((resolve, reject) => {
        fs.appendFile("app.log", logMessage, (err) => {
          if (err) reject(err);
          else resolve();
        });
      });
    }

    this.isProcessing = false;  // Reset flag after processing
  }
}

const logger = new AsyncLogger();
logger.log("Asynchronous log message 1");
logger.log("Asynchronous log message 2");
