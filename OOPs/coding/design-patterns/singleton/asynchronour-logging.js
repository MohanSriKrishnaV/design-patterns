const fs = require("fs");

class AsyncLogger {
  static #instance = null;
  static buffer = [];
  static logFile = "async_logs.log";

  constructor() {
    if (AsyncLogger.#instance) return AsyncLogger.#instance;
    AsyncLogger.#instance = this;
  }

  log(message, level = "INFO") {
    const logEntry = `[${new Date().toISOString()}] [${level}] ${message}`;
    AsyncLogger.buffer.push(logEntry);

    // Write to file every 5 logs
    if (AsyncLogger.buffer.length >= 5) {
      fs.appendFile(AsyncLogger.logFile, AsyncLogger.buffer.join("\n") + "\n", () => {});
      AsyncLogger.buffer = [];
    }
  }

  flushLogs() {
    if (AsyncLogger.buffer.length > 0) {
      fs.appendFileSync(AsyncLogger.logFile, AsyncLogger.buffer.join("\n") + "\n");
      AsyncLogger.buffer = [];
    }
  }
}

// Usage
const asyncLogger = new AsyncLogger();
asyncLogger.log("User signed up");
asyncLogger.log("Database updated");
asyncLogger.log("Email sent");

// Call flushLogs before application exits
asyncLogger.flushLogs();
