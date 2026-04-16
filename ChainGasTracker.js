class GasTracker {
    constructor(chain) {
        this.chain = chain;
        this.gasPrices = {
            slow: 0,
            standard: 0,
            fast: 0
        };
    }

    fetchGasPrice() {
        switch(this.chain) {
            case "bsc":
                this.gasPrices.slow = (Math.random()*5+3).toFixed(2);
                this.gasPrices.standard = (Math.random()*8+5).toFixed(2);
                this.gasPrices.fast = (Math.random()*12+8).toFixed(2);
                break;
            case "eth":
                this.gasPrices.slow = (Math.random()*20+10).toFixed(2);
                this.gasPrices.standard = (Math.random()*30+20).toFixed(2);
                this.gasPrices.fast = (Math.random()*40+30).toFixed(2);
                break;
            default:
                this.gasPrices.slow = "1.00";
                this.gasPrices.standard = "2.00";
                this.gasPrices.fast = "3.00";
        }
        return this.gasPrices;
    }

    calculateFee(gasLimit, speed) {
        const gas = this.fetchGasPrice()[speed];
        return (gasLimit * gas).toFixed(6);
    }
}

module.exports = GasTracker;
