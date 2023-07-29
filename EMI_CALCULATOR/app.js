calculateEmi = () => {
    let amount = document.getElementById("amount");
    let interestRate = document.getElementById("interest_rate");
    let loanTenure = document.getElementById("loan_tenure");
    let monthlyInterest = interestRate.value/1200;
    let emi = amount.value*monthlyInterest*(Math.pow((1+monthlyInterest), (loanTenure.value*12))/((Math.pow((1+monthlyInterest), (loanTenure.value*12)))-1));
    document.getElementById("result").innerText = "₹" + emi.toFixed();
    amount.value="";
    interestRate.value="";
    loanTenure.value="";
    //console.log(emi.toFixed(0));
}