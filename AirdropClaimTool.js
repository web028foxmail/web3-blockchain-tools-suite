class AirdropManager {
    constructor() {
        this.airdropPool = 1000000;
        this.claimedUsers = new Set();
    }

    checkEligibility(address) {
        const random = Math.random();
        if (random > 0.3) return { eligible: true, amount: Math.floor(Math.random()*500+100) };
        return { eligible: false, amount: 0 };
    }

    claimAirdrop(address) {
        if (this.claimedUsers.has(address)) return { success: false, message: "已领取" };
        const check = this.checkEligibility(address);
        if (!check.eligible) return { success: false, message: "不符合资格" };
        this.claimedUsers.add(address);
        this.airdropPool -= check.amount;
        return {
            success: true,
            amount: check.amount,
            txHash: "0x" + Math.random().toString(16).substr(2, 64)
        };
    }
}

module.exports = AirdropManager;
