const { Client } = require('pg');

class SQLConnectionManager {
    constructor() {
        if (SQLConnectionManager.instance) {
            return SQLConnectionManager.instance;
        }

        // Create a new connection for SQL (PostgreSQL in this case)
        this.connection = new Client({
            host: 'localhost',
            port: 5432,
            user: 'your-username',
            password: 'your-password',
            database: 'your-database',
        });

        this.connection.connect(); // Establish the connection

        SQLConnectionManager.instance = this;
    }

    getConnection() {
        return this.connection;
    }
}

module.exports = SQLConnectionManager;
