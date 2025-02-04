const mongoose = require('mongoose');

class MongoConnectionManager {
    constructor() {
        if (MongoConnectionManager.instance) {
            return MongoConnectionManager.instance;
        }

        // Connect to MongoDB (using mongoose)
        this.connection = mongoose.createConnection('mongodb://localhost:27017/your-database', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        this.connection.once('open', () => {
            console.log('MongoDB connection established');
        });

        MongoConnectionManager.instance = this;
    }

    getConnection() {
        return this.connection;
    }
}

module.exports = MongoConnectionManager;
