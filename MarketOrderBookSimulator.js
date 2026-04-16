class OrderBookSimulator {
    constructor(symbol) {
        this.symbol = symbol;
        this.bids = [];
        this.asks = [];
    }

    generateMockOrders() {
        this.bids = [];
        this.asks = [];
        for(let i=0;i<10;i++){
            const price = (Math.random()*300+280).toFixed(2);
            const amount = (Math.random()*10+0.5).toFixed(3);
            this.bids.push({price, amount, type:"buy"});
        }
        for(let i=0;i<10;i++){
            const price = (Math.random()*300+300).toFixed(2);
            const amount = (Math.random()*10+0.5).toFixed(3);
            this.asks.push({price, amount, type:"sell"});
        }
        return { bids: this.bids, asks: this.asks };
    }

    getMarketPrice() {
        const book = this.generateMockOrders();
        return {
            buy: book.bids[0].price,
            sell: book.asks[0].price
        };
    }
}

module.exports = OrderBookSimulator;
