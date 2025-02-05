// Old Weather API
class OldWeatherService {
    getTemperature(city) {
        console.log(`Fetching temperature from OldWeatherService...`);
        return 25; // Temperature in Celsius
    }
}

// New Weather API (Different format)
class NewWeatherService {
    fetchWeather(city) {
        console.log(`Fetching temperature from NewWeatherService...`);
        return { tempF: 77 }; // Temperature in Fahrenheit
    }
}

// Correct Adapter
class WeatherAdapter {
    constructor(newService) {
        this.newService = newService; // Store reference to new API
    }

    getTemperature(city) {
        const weatherData = this.newService.fetchWeather(city); // Fetch Fahrenheit temp
        const tempCelsius = ((weatherData.tempF - 32) * 5) / 9; // Convert to Celsius
        console.log(`Converted temperature: ${tempCelsius.toFixed(2)}°C`);
        return tempCelsius;
    }
}

// Using the Adapter
const newWeatherService = new NewWeatherService();
const adapter = new WeatherAdapter(newWeatherService);

adapter.getTemperature("New York"); // Should fetch from new service and return Celsius
