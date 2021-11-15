
const PASSWORD = "TrustNo1";

const pwdBtn = document.querySelector('input[type="button"].button-ok');
const pwdField = document.querySelector('input[type="password"].login');
const checkBtns = document.querySelectorAll('input[type="checkbox"].button-checkbox');
const radioBtns = document.querySelectorAll('input[type="range"].button-range');
const launchBtn = document.querySelector('input[type="button"].launch');
let rocket = document.querySelector('.rocket');
let style = getComputedStyle(rocket);
function isMatch() {
    let inputPassword = document.getElementsByClassName('login')[0].value;
    return PASSWORD === inputPassword;
}
function enable(element) {
    element.disabled = false;
}
function disable(element) {
    element.disabled = true;
}

function relevant() {
    let checkedButtonCheckboxes = true;
    let checkedButtonRanges = true;
    for (let index = 0; index < checkBtns.length; index++) {
        const element = checkBtns[index];
        if(!element.checked){
            checkedButtonCheckboxes = false;
        }
    }
    for (let index = 0; index < radioBtns.length; index++) {
        const element = radioBtns[index];
        if(element.value < 100) {
            checkedButtonRanges = false;
        }
    }
    if(checkedButtonCheckboxes && checkedButtonRanges) {
        enable(launchBtn);
    } else {
        disable(launchBtn);
    }
}

pwdBtn.addEventListener('click', function() {
    if (isMatch()) {
        // Enable all buttons
        checkBtns.forEach(enable);
        radioBtns.forEach(enable);
        checkBtns.forEach( button => {
            button.onchange = relevant;
        });
        radioBtns.forEach( button => {
            button.onchange = relevant;
        });
        // Disable input field and button
        disable(pwdField)
        disable(pwdBtn)
    } else {
        console.log("dont match")
    }
})

function intoTheSpace() {
    const power = setInterval(liftOff, 100);
    setTimeout(function () {
        clearInterval(power);
    }, 12000);
}


function liftOff() {
    rocket.style.top = rocket.offsetTop - 200 + "px";
    rocket.style.left = rocket.offsetLeft + 200 + "px";
}
// launchBtn.addEventListener('click', () => fly());

