// Abstract Product Interfaces
class Button {
    render() { }
}

class Checkbox {
    render() { }
}

// Concrete Products for Light Theme
class LightButton extends Button {
    render() {
        console.log("Rendering Light Button");
    }
}

class LightCheckbox extends Checkbox {
    render() {
        console.log("Rendering Light Checkbox");
    }
}

// Concrete Products for Dark Theme
class DarkButton extends Button {
    render() {
        console.log("Rendering Dark Button");
    }
}

class DarkCheckbox extends Checkbox {
    render() {
        console.log("Rendering Dark Checkbox");
    }
}

// Abstract Factory Interface
class GUIFactory {
    createButton() { }
    createCheckbox() { }
}

// Concrete Factory for Light Theme
class LightGUIFactory extends GUIFactory {
    createButton() {
        return new LightButton();
    }

    createCheckbox() {
        return new LightCheckbox();
    }
}

// Concrete Factory for Dark Theme
class DarkGUIFactory extends GUIFactory {
    createButton() {
        return new DarkButton();
    }

    createCheckbox() {
        return new DarkCheckbox();
    }
}

// Client code
function getUIFactory(theme) {
    if (theme === 'light') {
        return new LightGUIFactory();
    } else if (theme === 'dark') {
        return new DarkGUIFactory();
    }
}

// Using the abstract factory
const theme = 'light'; // Or 'dark'
const factory = getUIFactory(theme);

const button = factory.createButton();
const checkbox = factory.createCheckbox();

button.render();    // Rendering Light Button
checkbox.render();  // Rendering Light Checkbox
