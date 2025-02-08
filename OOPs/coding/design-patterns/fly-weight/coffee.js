// Flyweight class - The intrinsic state (shared)
class CoffeeType {
    constructor(type) {
        this.type = type;  // Coffee type (shared)
    }

    serve() {
        console.log(`Serving a ${this.type} coffee.`);
    }
}

// Flyweight Factory - Manages and shares CoffeeType instances
class CoffeeTypeFactory {
    constructor() {
        this.coffeeTypes = {};  // Dictionary to store shared coffee types
    }

    getCoffeeType(type) {
        if (!this.coffeeTypes[type]) {
            this.coffeeTypes[type] = new CoffeeType(type);  // Create only if not already created
            console.log(`Creating new coffee type: ${type}`);
        }
        return this.coffeeTypes[type];  // Return the existing or newly created coffee type
    }
}

// Client code - Coffee Order
class CoffeeOrder {
    constructor(customerName, coffeeType) {
        this.customerName = customerName;
        this.coffeeType = coffeeType;  // The shared coffee type (intrinsic state)
    }

    serveOrder() {
        console.log(`Order for ${this.customerName}:`);
        this.coffeeType.serve();  // Apply the shared coffee type
    }
}

// Client usage
const coffeeFactory = new CoffeeTypeFactory();

// Orders that share coffee types
const order1 = new CoffeeOrder("Alice", coffeeFactory.getCoffeeType("Espresso"));
const order2 = new CoffeeOrder("Bob", coffeeFactory.getCoffeeType("Espresso"));
const order3 = new CoffeeOrder("Charlie", coffeeFactory.getCoffeeType("Latte"));
const order4 = new CoffeeOrder("David", coffeeFactory.getCoffeeType("Espresso"));

// Serving orders
order1.serveOrder();
order2.serveOrder();
order3.serveOrder();
order4.serveOrder();

// Output:
// Creating new coffee type: Espresso
// Creating new coffee type: Latte
// Serving a Espresso coffee.
// Serving a Espresso coffee.
// Serving a Latte coffee.
// Serving a Espresso coffee.
