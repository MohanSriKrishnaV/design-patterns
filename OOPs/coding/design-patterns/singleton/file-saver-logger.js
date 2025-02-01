const fs = require("fs");
const path = require("path");

class FileLogger {
  static #instance = null;
  static levels = {
    DEBUG: "DEBUG",
    INFO: "INFO",
    WARN: "WARN",
    ERROR: "ERROR",
  };

  constructor() {
    if (FileLogger.#instance) return FileLogger.#instance;
    
    this.logFile = path.join(__dirname, "app.log");
    FileLogger.#instance = this;
  }

  log(message, level = FileLogger.levels.INFO) {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] ${message}\n`;

    // Append log to file
    fs.appendFileSync(this.logFile, logEntry, "utf8");

    console.log(logEntry);
  }

  getLogs() {
    return fs.readFileSync(this.logFile, "utf8");
  }
}

// Usage
const fileLogger = new FileLogger();
// fileLogger.log("Server started", FileLogger.levels.INFO);
// fileLogger.log("Database connected", FileLogger.levels.DEBUG);
// fileLogger.log("Unauthorized access attempt", FileLogger.levels.WARN);

console.log(fileLogger.getLogs()); // Read logs from file
