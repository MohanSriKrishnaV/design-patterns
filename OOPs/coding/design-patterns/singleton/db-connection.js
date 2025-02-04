class db {
    constructor() {
        if (db.instance) {
            return db.instance
        }
        this.connection = "Database connection established"; // Initialize the connection
        db.instance = this
    }
    getConnection() {
        return this.connection
    }
}


const db1 = new db();
const db2 = new db();

console.log(db1 === db2); // Should output: true
console.log(db1.getConnection()); // Should output: "Database connection established"
