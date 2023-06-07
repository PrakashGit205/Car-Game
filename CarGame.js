var left = 10;
var right = 1800;
var flag1 = false;
var flag2 = false;
var refToCar1 = document.getElementById("second");
var refToCar2 = document.getElementById("third");
var refToCarIm = document.getElementById("accident");
var refToCarim1 = document.getElementById("car2");
var refToslow1 = document.getElementById("car1break");
var refToslow2 = document.getElementById("car12break");

function Move() {
    refToslow1.disabled = null;
    debugger;
    left = left + .5;
    refToCar1.style.marginLeft = left + "px";
    if (right == left) {
        Break1();
        Break2();
        refToCar1.style.opacity = 0;
        document.getElementById("car2").src = "newacc.png";
        document.getElementById("car2").style.height = 200 + "px";
                document.getElementById("car12but").disabled = "disabled";
        document.getElementById("car1acc").disabled = "disabled";

    }
}

function Move1() {
    refToslow2.disabled = null;
    right = right - .5;
    refToCar2.style.left = right + "px";
    if (right == left) {
        Break1();
        Break2();
        refToCar1.style.opacity = 0;
        document.getElementById("car2").src = "newacc.png";
        document.getElementById("car2").style.height = 200 + "px";
        document.getElementById("car2").style.width = 200 + "px";
        document.getElementById("car2").style.marginTop = -50 + "px"
        document.getElementById("car12but").disabled = "disabled";
        document.getElementById("car1acc").disabled = "disabled";
    }
}





var queNo = new Array();
function MoveLeft() {
    var queNo1 = window.setInterval(Move, .05);
    queNo.push(queNo1);
}
var queNo2 = new Array();
function MoveRight() {
    var queNo3 = window.setInterval(Move1, .05);
    queNo2.push(queNo3);
}
function slow1() {
    window.clearInterval(queNo.pop());

}
function Break1() {
    for (i = 0; i < queNo.length; i++)
        window.clearInterval(queNo[i]);
}
function Break2() {
    for (i = 0; i < queNo2.length;i++)    
    window.clearInterval(queNo2[i]);
}
function slow2() {
    window.clearInterval(queNo2.pop());
}
