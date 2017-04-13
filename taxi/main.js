function calculateTaxiFee(distance,waitMinute){
    let fee = 0;
    const waitFee = 0.25 * waitMinute;
    if(distance < 2){
        fee = Math.round(6 + waitFee);
    }
    return fee;
}