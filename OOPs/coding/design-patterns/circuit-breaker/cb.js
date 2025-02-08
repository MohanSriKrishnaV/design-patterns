class CircuitBreaker {
    constructor(failureThreshold, recoveryTimeout) {
        this.failureThreshold = failureThreshold;  // How many failures before opening the circuit
        this.recoveryTimeout = recoveryTimeout;    // Time before trying again
        this.failureCount = 0;  // Number of failures
        this.state = 'CLOSED';  // Current state of the breaker
    }

    async callService(serviceFunc) {
        if (this.state === 'OPEN') {
            console.log("Circuit breaker is open. Skipping service call.");
            return 'Service unavailable, try again later';
        }

        try {
            // Call the service
            const result = await serviceFunc();
            this.reset();
            return result;
        } catch (error) {
            this.failureCount++;
            console.log("Service failed. Incrementing failure count.");

            if (this.failureCount >= this.failureThreshold) {
                this.state = 'OPEN';
                console.log("Circuit breaker is now open.");
                setTimeout(() => this.state = 'HALF-OPEN', this.recoveryTimeout);
            }

            return 'Service error, please try again later';
        }
    }

    reset() {
        this.failureCount = 0;
        this.state = 'CLOSED';
    }
}

// Example service function (simulate a payment service)
const paymentService = async () => {
    if (Math.random() > 0.7) {
        throw new Error("Payment service failed");
    } else {
        return "Payment processed successfully";
    }
};

// Create a circuit breaker with a threshold of 3 failures and a 5-second recovery timeout
const circuitBreaker = new CircuitBreaker(3, 5000);

// Simulating requests
async function makePayment() {
    const response = await circuitBreaker.callService(paymentService);
    console.log(response);
}

// Make multiple payment attempts
for (let i = 0; i < 10; i++) {
    makePayment();
}
