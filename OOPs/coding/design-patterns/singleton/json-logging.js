class JSONLogger {
    constructor() {
      if (JSONLogger.instance) return JSONLogger.instance;
      this.logs = [];
      JSONLogger.instance = this;
    }
  
    log(message, level = "INFO") {
      const logEntry = {
        timestamp: new Date().toISOString(),
        level,
        message,
      };
  
      this.logs.push(logEntry);
      console.log(JSON.stringify(logEntry));
    }
  
    getLogs() {
      return this.logs;
    }
  }
  
  // Usage
  const jsonLogger = new JSONLogger();
  jsonLogger.log("API request received", "INFO");
  jsonLogger.log("Unexpected input format", "WARN");
  console.log(jsonLogger.getLogs());
  