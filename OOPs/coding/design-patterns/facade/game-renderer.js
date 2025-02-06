// Subsystem Components
class PhysicsEngine {
    update() {
        console.log("Updating physics...");
    }
}

class GraphicsRenderer {
    render() {
        console.log("Rendering graphics...");
    }
}

class AudioManager {
    playSound(sound) {
        console.log(`Playing sound: ${sound}`);
    }
}

class InputHandler {
    handleInput() {
        console.log("Handling player input...");
    }
}

class GameStateManager {
    constructor() {
        this.state = "playing";
    }

    setState(state) {
        this.state = state;
        console.log(`Game state set to: ${state}`);
    }
}

// Facade
class GameFacade {
    constructor() {
        this.physicsEngine = new PhysicsEngine();
        this.graphicsRenderer = new GraphicsRenderer();
        this.audioManager = new AudioManager();
        this.inputHandler = new InputHandler();
        this.gameStateManager = new GameStateManager();
    }

    startGame() {
        console.log("Starting the game...");
        this.gameStateManager.setState("playing");
        this.audioManager.playSound("background_music");
    }

    update() {
        console.log("Updating game...");
        this.inputHandler.handleInput();
        this.physicsEngine.update();
        this.graphicsRenderer.render();
    }

    pauseGame() {
        console.log("Pausing the game...");
        this.gameStateManager.setState("paused");
        this.audioManager.playSound("pause_sound");
    }

    endGame() {
        console.log("Ending the game...");
        this.gameStateManager.setState("game_over");
        this.audioManager.playSound("game_over_sound");
    }
}

// Client Code
const game = new GameFacade();

game.startGame();
game.update();
game.pauseGame();
game.endGame();