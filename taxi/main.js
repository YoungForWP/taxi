function calculateTaxiFee(distance, waitMinute) {
    if (distance < 0) {
        return 'Input Error!';
    }
    let fee = 0;
    const waitFee = 0.25 * waitMinute;
    if (distance < 2) {
        fee = Math.round(6 + waitFee);
    } else if (distance <= 8) {
        fee = Math.round(distance * 0.8 + waitFee);
    } else if (distance > 8) {
        fee = Math.round(6.4 + (distance - 8) * 1.2 + waitFee);
    }
    return fee;
}