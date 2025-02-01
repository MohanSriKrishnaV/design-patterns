class Logger {
    constructor() {
      if (Logger.instance) {
        return Logger.instance; // Return existing instance
      }
  
      this.logs = []; // Store logs in memory
      Logger.instance = this; // Store instance
    }
  
    log(message, level = "INFO") {
      const timestamp = new Date().toISOString();
      const logEntry = `[${timestamp}] [${level}] ${message}`;
      this.logs.push(logEntry);
      console.log(logEntry);
    }
  
    getLogs() {
      return this.logs;
    }
  }
  
  // Usage
  const logger1 = new Logger();
  // console.log(logger1,"logger1");
  
  logger1.log("Application started"); // INFO
  // logger1.log("User logged in", "DEBUG");
  
  const logger2 = new Logger();
  logger2.log("Fetching data", "WARN");
  
  console.log(logger1 === logger2); // ✅ true (same instance)
  // console.log(logger1.getLogs());   // Logs from both instances
  