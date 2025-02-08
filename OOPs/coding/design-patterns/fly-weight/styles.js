// Flyweight class - Defines the shared intrinsic state (style)
class TextStyle {
    constructor(style) {
        this.style = style;
    }

    applyStyle(text) {
        console.log(`${text} is styled with ${this.style}`);
    }
}

// Flyweight Factory - Manages shared flyweight instances
class TextStyleFactory {
    constructor() {
        this.styles = {};
    }

    // Creates or retrieves a shared flyweight instance
    getTextStyle(style) {
        if (!this.styles[style]) {
            this.styles[style] = new TextStyle(style);
            console.log(`Creating new style: ${style}`);
        }
        return this.styles[style];
    }
}

// Client code - Uses the Flyweight object
class TextClient {
    constructor() {
        this.textStylesFactory = new TextStyleFactory();
    }

    // Applies the style to text, sharing common styles using the factory
    applyTextStyle(text, style) {
        const textStyle = this.textStylesFactory.getTextStyle(style);
        textStyle.applyStyle(text);
    }
}

// Client usage
const client = new TextClient();

client.applyTextStyle("Hello, World!", "Bold");
client.applyTextStyle("Flyweight Pattern", "Italic");
client.applyTextStyle("Shared Style Example", "Bold");
client.applyTextStyle("Another Text", "Italic");
