

class Monster implements Prototype {
    public health: number;
    public speed: number;
    public type: string;
    public abilities: string[];

    constructor(type: string) {
        this.type = type;
        this.health = this.calculateHealth(); // Expensive computation
        this.speed = this.calculateSpeed();   // Expensive computation
        this.abilities = this.loadAbilities(); // Expensive I/O operation
    }

    private calculateHealth(): number {
        // Simulate expensive computation
        console.log("Calculating health...");
        return 100;
    }

    private calculateSpeed(): number {
        // Simulate expensive computation
        console.log("Calculating speed...");
        return 50;
    }

    private loadAbilities(): string[] {
        // Simulate expensive I/O operation
        console.log("Loading abilities...");
        return ["Fire Breath", "Fly"];
    }

    // Clone method to create a copy of the monster
    clone(): Monster {
        const clone = Object.create(this);
        clone.abilities = [...this.abilities]; // Deep copy the array
        return clone;
    }
}

// Create a prototype monster (expensive initialization happens only once)
const dragonPrototype = new Monster("Dragon"); // Logs: Calculating health..., Calculating speed..., Loading abilities...

// Cloning the prototype is cheap
const dragon1 = dragonPrototype.clone(); // No logs, cloning is fast
const dragon2 = dragonPrototype.clone(); // No logs, cloning is fast