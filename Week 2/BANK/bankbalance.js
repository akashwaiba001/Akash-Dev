let balance = 10000;
const correctPin = "1234";

function updateBalance() {
    document.getElementById("balance").innerText = balance;
}

function validateAmount(amount) {
    if (isNaN(amount) || amount <= 0) {
        document.getElementById("message").innerText = "Enter valid amount!";
        return false;
    }

    if (amount % 100 !== 0) {
        document.getElementById("message").innerText = "Only multiples of 100 allowed!";
        return false;
    }

    return true;
}

function withdrawMoney() {
    let amount = parseInt(document.getElementById("amount").value);

    if (!validateAmount(amount)) return;

    let pin = prompt("Enter PIN:");

    if (pin === correctPin) {

        if (amount > balance) {
            document.getElementById("message").innerText = "Insufficient Balance!";
            return;
        }

        balance -= amount;
        updateBalance();

        document.getElementById("message").innerText = "Withdraw Successful!";
    } else {
        document.getElementById("message").innerText = "Wrong PIN!";
    }
}

function depositMoney() {
    let amount = parseInt(document.getElementById("amount").value);

    if (!validateAmount(amount)) return;

    let pin = prompt("Enter PIN:");

    if (pin === correctPin) {

        balance += amount;
        updateBalance();

        document.getElementById("message").innerText = "Deposit Successful!";
    } else {
        document.getElementById("message").innerText = "Wrong PIN!";
    }
}