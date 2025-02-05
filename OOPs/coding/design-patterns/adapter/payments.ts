// Old Payment System
class OldPaymentProcessor {
    processOldPayment(amount) {
        console.log(`Processing payment of $${amount} using Old Payment System`);
    }
}

// New Payment System (Has a different method)
class NewPaymentProcessor {
    processNewPayment(amount) {
        console.log(`Processing payment of $${amount} using New Payment System`);
    }
}


// Adapter Class
class PaymentAdapter {
    newPaymentProcessor
    constructor(newPaymentProcessor) {
        this.newPaymentProcessor = newPaymentProcessor;
    }

    processOldPayment(amount) {
        console.log("Using Adapter to process payment...");
        this.newPaymentProcessor.processNewPayment(amount);
    }
}

// ✅ Client Code
let newPayment = new NewPaymentProcessor();
let adapter = new PaymentAdapter(newPayment);

// Now we can use the adapter like the old system!
adapter.processOldPayment(100);
