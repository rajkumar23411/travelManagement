const qName = document.querySelector('#qName'),
    qEmail = document.querySelector('#qEmail'),
    qNum = document.querySelector('#qNum'),
    qMsg = document.querySelector('#qMsg');


function setError(id, msg) {
    const inputField = id.parentElement,
        errorMsg = inputField.querySelector('.qError');

    errorMsg.innerHTML = msg;

    inputField.classList.add('error');
    inputField.classList.remove('success');
}

function setSuccess(id) {
    const inputField = id.parentElement,
        errorMsg = inputField.querySelector('.qError');

    errorMsg.innerHTML = '';

    inputField.classList.remove('error');
    inputField.classList.add('success');
}

function validateQform() {
    const qNameval = qName.value.trim(),
        qEmailVal = qEmail.value.trim(),
        qNumVal = qNum.value.trim(),
        qMsgVal = qMsg.value.trim();

    var letters = /^[A-Za-z]+$/;
    var numbers = /^[0-9]+$/;
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    var submitVal = true;

    // ---------------for name--------
    if (qNameval === '') {
        setError(qName, 'Name cannot be empty.');
        submitVal = false;
    } else if (qNameval.length <= 3 || qNameval.length >= 150) {
        setError(qName, 'Please provid your valid name');
        submitVal = false;
    } else if (!qNameval.match(letters)) {
        setError(qName, 'Please provid your valid name');
        submitVal = false;
    } else {
        setSuccess(qName);
        submitVal = true;
    }


    if (qEmailVal === '') {
        setError(qEmail, 'Email cannot be empty');
        submitVal = false;
    } else if (!qEmailVal.match(emailRegex)) {
        setError(qEmail, 'Invalid Email ID');
        submitVal = false;
    } else {
        setSuccess(qEmail);
        submitVal = true;
    }

    if (qNumVal === '') {
        setError(qNum, 'Require phone number');
        submitVal = false;
    } else if (!qNumVal.match(numbers)) {
        setError(qNum, 'Invalid phone number');
        submitVal = false;
    } else if (qNumVal.length < 10 || qNumVal.length > 10) {
        setError(qNum, 'Please provid a valid phone number');
        submitVal = false;
    } else {
        setSuccess(qNum);
        submitVal = true;
    }

    if (qMsgVal === '') {
        setError(qMsg, 'Please enter your query here');
        submitVal = false;
    } else if (qMsgVal.match(numbers)) {
        setError(qMsg, 'Enter a valid message');
        submitVal = false;
    } else {
        setSuccess(qMsg);
        submitVal = true;
    }
    return submitVal;

}