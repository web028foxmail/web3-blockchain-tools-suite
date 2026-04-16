class TransactionSigner {
    constructor() {
        this.chainId = 56;
        this.nonce = 0;
    }

    generateNonce() {
        this.nonce = Math.floor(Math.random() * 999999);
        return this.nonce;
    }

    signTransaction(from, to, amount, gasLimit) {
        const txData = {
            from: from,
            to: to,
            amount: amount,
            gasLimit: gasLimit,
            nonce: this.generateNonce(),
            timestamp: new Date().getTime(),
            chainId: this.chainId
        };
        let hash = "";
        const chars = "0123456789abcdef";
        for (let i = 0; i < 64; i++) {
            hash += chars[Math.floor(Math.random() * chars.length)];
        }
        return {
            rawData: txData,
            signature: `0x${hash}`,
            status: "pending"
        };
    }

    verifySignature(signature) {
        return signature.length === 66 && signature.startsWith("0x");
    }
}

module.exports = TransactionSigner;
