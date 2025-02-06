class OrderService {
    placeOrder(name, nos, price) {
        console.log(`Order placed: ${nos} stocks of ${name} at $${price} each.`);
        return true; // Simulating successful order
    }
}

class StockService {
    recentPrice(name) {
        console.log(`Fetching latest price for ${name}...`);
        return 100; // Simulated stock price
    }
}

class AccountService {
    fetchBalance(id) {
        console.log(`Fetching balance for user ${id}...`);
        return 500; // Simulated balance
    }
}

class NotificationService {
    sendNotificationSuccess(id) {
        console.log(`✅ Success! Order placed for User ID: ${id}`);
    }

    sendNotificationOrderCantplaced(id) {
        console.log(`❌ Order couldn't be placed for User ID: ${id}`);
    }

    sendNotificationFailure(id) {
        console.log(`⚠️ Insufficient funds for User ID: ${id}`);
    }
}

class TradingFacade {
    constructor() {
        this.orderService = new OrderService();
        this.stockService = new StockService();
        this.accountService = new AccountService();
        this.notificationService = new NotificationService();
    }

    buy(name, nos, id) {
        let recentPrice = this.stockService.recentPrice(name);
        let accountBalance = this.accountService.fetchBalance(id);

        if (accountBalance >= recentPrice * nos) {
            let result = this.orderService.placeOrder(name, nos, recentPrice);
            if (result) {
                this.notificationService.sendNotificationSuccess(id);
            } else {
                this.notificationService.sendNotificationOrderCantplaced(id);
            }
        } else {
            this.notificationService.sendNotificationFailure(id);
        }
    }
}

// ✅ Testing the Facade
let trading = new TradingFacade();
trading.buy("AAPL", 3, "user123");
