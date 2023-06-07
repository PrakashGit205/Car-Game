var balance1 = 50000;
var count = 0;
loop();
function check() {
    var refToLogin = document.getElementById("login");
    var refToPass = document.getElementById("password");
    var refToError = document.getElementById("ErrorDiv");
    if (refToLogin.value == "" || refToPass.value == "")
        refToError.innerText = "Please Fill the Input";
    else {
        if (refToLogin.value == "Prakash" &&
            refToPass.value == "Prakash") {
                window.location.href = "Account.html";
                
            }
        else
            refToError.innerText = "Wrong UserName or PassWord";

    }
}

function update(num) {
    var refToWithdraw = document.getElementById("withdraw");
    var refTOCredit = document.getElementById("credit")
    var refToBalance = document.getElementById("balance")
    debugger;
    if (num == 1) {
        if (refToWithdraw.value != "") {
            balance1 = balance1 - parseFloat(refToWithdraw.value);
            refToBalance.innerText = balance1;
        }
    }
    else {
        if (refTOCredit.value != "") {
            balance1 = balance1 + parseFloat(refTOCredit.value);
            refToBalance.innerText = balance1;
        }
    }
}
function call() {
    window.location.href = "Login.html";
}
function loop() {
        window.setInterval(print, 1000);
}
function print() {
    refToTImer = document.getElementById("Timer")
    debugger;
    refToTImer.innerText = 15 - count;
    if (count == 15)
        call();
    count++;

}