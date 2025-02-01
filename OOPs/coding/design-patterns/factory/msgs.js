class msg{

}

class WaMsg extends msg {
    constructor(){
        super()
    }
}

class Mail extends msg {
    constructor(){
        super()
    }
}


class PushNotification extends msg {
    constructor(){
        super()
    }
}




// Step 3: Create a Single Factory Class
class MsgFactory {
    static createMsg(type) {
        switch (type) {
            case "whatsapp":
                return new WaMsg();
            case "email":
                return new Mail();
            case "push":
                return new PushNotification();
            default:
                throw new Error("Invalid message type");
        }
    }
}

// Step 4: Usage
const msg1 = MsgFactory.createMsg("whatsapp"); // Output: WhatsApp Message Created
const msg2 = MsgFactory.createMsg("email");    // Output: Email Message Created
const msg3 = MsgFactory.createMsg("push");     // Output: Push Notification Created
console.log(msg1,"msg1");
console.log(msg2,"msg2");
console.log(msg3,"msg3");
