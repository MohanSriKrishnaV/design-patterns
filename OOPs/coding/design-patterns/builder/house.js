// Product: The House class
class House {
    constructor() {
        this.walls = null;
        this.roof = null;
        this.windows = null;
        this.garage = null;
    }

    toString() {
        return `House [walls=${this.walls}, roof=${this.roof}, windows=${this.windows}, garage=${this.garage}]`;
    }
}

// Builder: The HouseBuilder class
class HouseBuilder {
    constructor() {
        this.house = new House();
    }

    buildWalls(walls) {
        this.house.walls = walls;
        return this; // Return 'this' for method chaining
    }

    buildRoof(roof) {
        this.house.roof = roof;
        return this;
    }

    buildWindows(windows) {
        this.house.windows = windows;
        return this;
    }

    buildGarage(garage) {
        this.house.garage = garage;
        return this;
    }

    getHouse() {
        return this.house;
    }
}

// Director: The HouseDirector class (optional)
class HouseDirector {
    constructor(builder) {
        this.builder = builder;
    }

    constructHouse() {
        return this.builder
            .buildWalls("Brick Walls")
            .buildRoof("Tile Roof")
            .buildWindows("Glass Windows")
            .buildGarage("2-Car Garage")
            .getHouse();
    }
}

// Client Code
const builder = new HouseBuilder();
const director = new HouseDirector(builder);

const house = director.constructHouse();
console.log(house.toString());