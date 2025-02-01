class Logger {
    static #instance = null;
    static levels = {
      DEBUG: "DEBUG",
      INFO: "INFO",
      WARN: "WARN",
      ERROR: "ERROR",
    };
  
    constructor() {
      if (Logger.#instance) return Logger.#instance;
      this.logs = [];
      Logger.#instance = this;
    }
  
    log(message, level = Logger.levels.INFO) {
      const timestamp = new Date().toISOString();
      const logEntry = `[${timestamp}] [${level}] ${message}`;
      this.logs.push(logEntry);
      console.log(logEntry);
    }
  
    getLogs(level = null) {
      return level ? this.logs.filter(log => log.includes(level)) : this.logs;
    }
  }
  
  // Usage
  const logger = new Logger();
  logger.log("This is an info message", Logger.levels.INFO);
  logger.log("This is a warning", Logger.levels.WARN);
  logger.log("This is an error!", Logger.levels.ERROR);
  console.log(logger.getLogs(Logger.levels.WARN)); // Fetch only WARN logs
  