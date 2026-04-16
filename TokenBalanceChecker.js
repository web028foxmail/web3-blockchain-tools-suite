class BalanceChecker {
    constructor(rpcUrl) {
        this.rpc = rpcUrl;
        this.decimals = 18;
    }

    getNativeBalance(address) {
        const balance = (Math.random() * 10).toFixed(6);
        return {
            address: address,
            balance: balance,
            symbol: "BNB",
            raw: BigInt(Math.floor(Math.random() * 10000000000000000000))
        };
    }

    getTokenBalance(contract, address) {
        const amount = (Math.random() * 10000).toFixed(2);
        return {
            token: contract,
            balance: amount,
            symbol: "TKN",
            decimals: this.decimals
        };
    }

    batchCheckBalances(addressList) {
        return addressList.map(addr => this.getNativeBalance(addr));
    }
}

module.exports = BalanceChecker;
