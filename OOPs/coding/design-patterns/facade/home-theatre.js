// Subsystem Components
class DVDPlayer {
    on() {
        console.log("DVD Player is on");
    }

    play(movie) {
        console.log(`Playing movie: ${movie}`);
    }

    off() {
        console.log("DVD Player is off");
    }
}

class Projector {
    on() {
        console.log("Projector is on");
    }

    setInput(input) {
        console.log(`Projector input set to: ${input}`);
    }

    off() {
        console.log("Projector is off");
    }
}

class SoundSystem {
    on() {
        console.log("Sound System is on");
    }

    setVolume(volume) {
        console.log(`Sound System volume set to: ${volume}`);
    }

    off() {
        console.log("Sound System is off");
    }
}

class Lights {
    dim() {
        console.log("Lights are dimmed");
    }

    on() {
        console.log("Lights are on");
    }
}

// Facade
class HomeTheaterFacade {
    constructor(dvdPlayer, projector, soundSystem, lights) {
        this.dvdPlayer = dvdPlayer;
        this.projector = projector;
        this.soundSystem = soundSystem;
        this.lights = lights;
    }

    watchMovie(movie) {
        console.log("Getting ready to watch a movie...");
        this.lights.dim();
        this.projector.on();
        this.projector.setInput("DVD");
        this.soundSystem.on();
        this.soundSystem.setVolume(10);
        this.dvdPlayer.on();
        this.dvdPlayer.play(movie);
    }

    endMovie() {
        console.log("Shutting down the home theater...");
        this.lights.on();
        this.projector.off();
        this.soundSystem.off();
        this.dvdPlayer.off();
    }
}

// Client Code
const dvdPlayer = new DVDPlayer();
const projector = new Projector();
const soundSystem = new SoundSystem();
const lights = new Lights();

const homeTheater = new HomeTheaterFacade(dvdPlayer, projector, soundSystem, lights);

// Watch a movie
homeTheater.watchMovie("Inception");

// End the movie

homeTheater.endMovie();
