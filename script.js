// clearing input fields
function clearInput() {
    document.getElementById('showPin').value = "Generate Pin Code";
    document.getElementById('typePin').value = "";
}
clearInput();

// pin generator
function generatePin() {
    document.getElementById('unmatched').style.display = "none";
    document.getElementById('matched').style.display = "none";
    let pin = Math.ceil(1000 + Math.random() * 9000);
    document.getElementById('showPin').value = pin;
}

// keyboard typing
function keyPress(id) {
    let prevValue = document.getElementById('typePin').value;
    let key = document.getElementById(id).innerHTML;
    document.getElementById('typePin').value = prevValue + key;
}

// matching pin
function submit() {
    let generatedPin = document.getElementById('showPin').value;
    let typedPin = document.getElementById('typePin').value;
    if (generatedPin == typedPin) {
        document.getElementById('matched').style.display = "block";
        clearInput();
    } else {
        document.getElementById('unmatched').style.display = "block";
        trialCount();
        clearInput();
    }
}

// clearing last digit (bonus)
function clearLast() {
    let typedPin = document.getElementById('typePin').value;
    let lastErased = typedPin.slice(0, typedPin.length - 1);
    document.getElementById('typePin').value = lastErased;
}

// clearing all digits (bonus)
function clearAll() {
    let typedPin = document.getElementById('typePin').value;
    document.getElementById('typePin').value = "";
}

// decreasing trial count (optional)
function trialCount() {
    let trials = document.getElementById('leftTry').innerHTML;
    document.getElementById('leftTry').innerHTML -= 1;
    if (trials == "1") {
        disableBtn()
    }
}

// disable submit button (optional)
function disableBtn() {
    let button = document.getElementById('check');
    button.style.cursor = "not-allowed";
    button.style.opacity = 0.5;
    button.setAttribute('disabled', '');
}