// Observer Interface
class Observer {
    update(temperature) {
        // To be implemented by concrete observers
    }
}

// Subject Interface
class Subject {
    subscribe(observer) {
        // To be implemented by concrete subjects
    }
    unsubscribe(observer) {
        // To be implemented by concrete subjects
    }
    notify() {
        // To be implemented by concrete subjects
    }
}

// MobileApp Observer
class MobileApp extends Observer {
    constructor(name) {
        super();
        this.name = name;
    }

    // Called when the weather station updates the temperature
    update(temperature) {
        console.log(`${this.name} app: The current temperature is ${temperature}°C`);
    }
}

// DisplayUnit Observer
class DisplayUnit extends Observer {
    constructor(name) {
        super();
        this.name = name;
    }

    // Called when the weather station updates the temperature
    update(temperature) {
        console.log(`${this.name} display: The current temperature is ${temperature}°C`);
    }
}

// WeatherAlertSystem Observer
class WeatherAlertSystem extends Observer {
    constructor(name) {
        super();
        this.name = name;
    }

    // Called when the weather station updates the temperature
    update(temperature) {
        if (temperature > 30) {
            console.log(`${this.name}: Alert! Temperature is above 30°C!`);
        }
    }
}

// WeatherStation Subject
class WeatherStation extends Subject {
    constructor() {
        super();
        this.observers = [];
        this.temperature = null;
    }

    // Subscribe an observer (device)
    subscribe(observer) {
        this.observers.push(observer);
    }

    // Unsubscribe an observer (device)
    unsubscribe(observer) {
        const index = this.observers.indexOf(observer);
        if (index !== -1) {
            this.observers.splice(index, 1);
        }
    }

    // Notify all observers about the temperature change
    notify() {
        this.observers.forEach(observer => observer.update(this.temperature));
    }

    // Update the temperature and notify observers
    setTemperature(temperature) {
        this.temperature = temperature;
        this.notify(); // Notify all observers
    }

    // Get the current temperature
    getTemperature() {
        return this.temperature;
    }
}

// Create a weather station (Subject)
const weatherStation = new WeatherStation();

// Create devices (Observers)
const mobileApp = new MobileApp('Mobile');
const displayUnit = new DisplayUnit('Display');
const weatherAlert = new WeatherAlertSystem('Weather Alert');

// Subscribe devices to the weather station
weatherStation.subscribe(mobileApp);
weatherStation.subscribe(displayUnit);
weatherStation.subscribe(weatherAlert);

// Change the temperature (this will notify all observers)
weatherStation.setTemperature(32); // All devices will get notified

// Unsubscribe the display unit and change the temperature again
weatherStation.unsubscribe(displayUnit);
weatherStation.setTemperature(25); // Only mobile and weather alert will get notified
