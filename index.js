#! /usr/bin/env node
import inquirer from "inquirer";
let accountBalance = 10000;
console.log("The total balance in your account is :" + accountBalance);
let pinNumber = 1234;
console.log("Use this pin number :" + pinNumber);
const userPinNumber = await inquirer.prompt({
    type: "number",
    message: "Enter your pin number :",
    name: "pinPass",
});
if (pinNumber === userPinNumber.pinPass) {
    console.log("Correct!! Login in Succesfully ");
    const operation = await inquirer.prompt({
        message: "Which operation you want to perform :",
        type: "list",
        name: "Options",
        choices: ["Withdraw", "Check Balance", "Fast Withdraw", "Deposit"]
    });
    if (operation.Options === "Withdraw") {
        const withDrawAmount = await inquirer.prompt({
            message: "How much money do you want to withdraw :",
            type: "number",
            name: "accountBalance",
        });
        if (withDrawAmount.accountBalance <= accountBalance && withDrawAmount.accountBalance >= 0) {
            accountBalance -= withDrawAmount.accountBalance;
            console.log("The remaining balance of your account is :" + accountBalance);
        }
        else if (withDrawAmount.accountBalance > accountBalance || withDrawAmount.accountBalance < 0) {
            console.log("Enter Sufficient funds");
        }
    }
    else if (operation.Options === "Check Balance") {
        console.log("The current balance of your account is :" + accountBalance);
    }
    else if (operation.Options === "Fast Withdraw") {
        const fastWidraw = await inquirer.prompt([{
                message: "How much money do you want to withdraw?",
                type: "list",
                name: "fastWithdraw",
                choices: [500, 1000, 5000, 7500, 10000],
            }]);
        accountBalance -= fastWidraw.fastWithdraw;
        console.log("Success ,the remaining funds in your account are : " + accountBalance);
    }
    else if (operation.Options === "Deposit") {
        const mDeposit = await inquirer.prompt([{
                type: "number",
                message: "How much Money do you want to deposit :",
                name: "Deposist",
            }]);
        accountBalance += mDeposit.Deposist;
        console.log("Your account balance has been updated to :" + accountBalance);
    }
}
else {
    console.log("Incorrect pin");
}
console.log("******" + " " + "THANK-YOU FOR USING MY ATM MACHINE" + " " + "******");
