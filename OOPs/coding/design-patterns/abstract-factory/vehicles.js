// Abstract Product Interfaces
class Car {
    drive() { }
}

class Bike {
    ride() { }
}

// Concrete Products for Electric Fuel
class ElectricCar extends Car {
    drive() {
        console.log("Driving Electric Car!");
    }
}

class ElectricBike extends Bike {
    ride() {
        console.log("Riding Electric Bike!");
    }
}

// Concrete Products for Gasoline Fuel
class GasolineCar extends Car {
    drive() {
        console.log("Driving Gasoline Car!");
    }
}

class GasolineBike extends Bike {
    ride() {
        console.log("Riding Gasoline Bike!");
    }
}

// Abstract Factory Interface
class VehicleFactory {
    createCar() { }
    createBike() { }
}

// Concrete Factory for Electric Vehicles
class ElectricVehicleFactory extends VehicleFactory {
    createCar() {
        return new ElectricCar();
    }

    createBike() {
        return new ElectricBike();
    }
}

// Concrete Factory for Gasoline Vehicles
class GasolineVehicleFactory extends VehicleFactory {
    createCar() {
        return new GasolineCar();
    }

    createBike() {
        return new GasolineBike();
    }
}

// Client code
function getVehicleFactory(type) {
    if (type === 'electric') {
        return new ElectricVehicleFactory();
    } else if (type === 'gasoline') {
        return new GasolineVehicleFactory();
    }
}

// Using the abstract factory to create vehicles
const fuelType = 'electric';  // Could be 'electric' or 'gasoline'
const factory = getVehicleFactory(fuelType);

const car = factory.createCar();
const bike = factory.createBike();

car.drive();  // Driving Electric Car!
bike.ride();  // Riding Electric Bike!
