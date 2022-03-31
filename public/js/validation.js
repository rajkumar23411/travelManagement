const username = document.querySelector('#regusername'),
    regemail = document.querySelector('#regemail'),
    regcontact = document.querySelector('#regcontact'),
    regpassword = document.querySelector('#regpassword');

function seterror(id, msg) {
    submitVal = false;
    const inputField = id.parentElement,
        errorMsg = inputField.querySelector('.error_text');

    errorMsg.innerText = msg;

    inputField.classList.add('error');
    inputField.classList.remove('success');
}

function setsuccess(id) {
    const inputField = id.parentElement,
        errorMsg = inputField.querySelector('.error_text');

    errorMsg.innerText = '';

    inputField.classList.remove('error');
    inputField.classList.add('success');
}

function validate() {
    var submitVal = true;

    var onlyLetters = /^[A-Za-z]+$/;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var onlyNumbers = /^[0-9]+$/;

    const usernameVal = username.value.trim(),
        regemailVal = regemail.value.trim(),
        regcontactVal = regcontact.value.trim(),
        regpasswordVal = regpassword.value.trim();

    if (usernameVal === '') {
        seterror(username, 'Please enter you name here');
        submitVal = false;
    } else if (usernameVal.length > 150 || usernameVal.length < 4) {
        seterror(username, 'Invalid Username');
        submitVal = false;
    } else {
        setsuccess(username);
    }

    if (regemailVal === '') {
        seterror(regemail, 'Require Email ID');
        submitVal = false;
    } else if (!regemailVal.match(mailformat)) {
        seterror(regemail, 'Please provid a valid Email ID');
        submitVal = false;
    } else {
        setsuccess(regemail);
    }

    if (regcontactVal === '') {
        seterror(regcontact, 'Please provid a conact no.');
        submitVal = false;
    } else if (regcontactVal.length > 10 || regcontactVal.length < 10) {
        seterror(regcontact, 'Invalid contact no.');
        submitVal = false;
    } else if (!regcontactVal.match(onlyNumbers)) {
        seterror(regcontact, 'Please provid a valid contact no.');
        submitVal = false;
    } else {
        setsuccess(regcontact);
    }

    if (regpasswordVal === '') {
        seterror(regpassword, 'A password is required');
        submitVal = false;
    } else if (regpasswordVal.length > 10 || regpasswordVal.length < 6) {
        seterror(regpassword, 'Password must be of 6 to 10 characters.');
        submitVal = false;
    } else {
        setsuccess(regpassword);
    }

    return submitVal;
}

async function form_check(element) {
    const data = {
        email: element.querySelector('#loginMail').value,
        pass: element.querySelector('#Password').value,
    };

    const response = await fetch(`/login/validate`, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data),
    });

    response.json().then((data) => {
        if (data.userExists) {
            alert('logged in successfully');
            window.location.href = data.redirect;
        } else {
            alert('user does not exist');
            window.location.href = data.redirect;
        }
    });
    return false;
}