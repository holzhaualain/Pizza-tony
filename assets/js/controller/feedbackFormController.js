watchRadios();
function watchRadios() {
    let radioBtns = getFormParts();

    for (let i = 0; i < radioBtns[0].length; i++) {
        radioBtns[0][i].addEventListener('change', function () {
            validateRadios(radioBtns);
            onInput(event.target);
        });
    }
    for (let i = 0; i < radioBtns[1].length; i++) {
        radioBtns[1][i].addEventListener('change', function () {
            validateRadios(radioBtns);
            onInput(event.target);
        });
    }
}

function getFormParts() {

    let inputFields = [];
    let likeRadio = document.forms["feedback-form"]["pizzaRating"];
    let thinkRadio = document.forms["feedback-form"]["prizeRating"];
    let yourname = document.forms["feedback-form"]["name"];
    let email = document.forms["feedback-form"]["email"];
    let message = document.forms["feedback-form"]["feedback"];

    inputFields.push(likeRadio, thinkRadio, yourname, email, message);
    return inputFields;
}

function validateRadios(formValues) {
    let radioLikeValid = false;
    let radioThinkValid = false;

    for (var i = 0; i < formValues[0].length; ++i) {
        if (formValues[0][i].checked) {
            radioLikeValid = true;
            break;

        }
    }

    for (var i = 0; i < formValues[1].length; ++i) {
        if (formValues[1][i].checked) {
            radioThinkValid = true;
            break;
        }

    }

    if(radioLikeValid === true && radioThinkValid === true) {
        document.getElementsByClassName('ylike')[0].classList.remove("show");
        return true;
    } else {
        document.getElementsByClassName('ylike')[0].classList.add("show" );
        return false;
    }

}

function validateForm() {
    var x = document.getElementById("email");
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
        text= "Not a valid e-mail address";
    }
}


function validateInputs(formValues) {
    let emailPattern = '[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$';
    let inputValid = false;

    for (let u = 0; formValues.length > u; u++ ) {
        if(formValues[u].value === '' && formValues[u].type !== undefined){
            formValues[u].nextElementSibling.classList.add('show');

        } else if(formValues[u].type !== undefined) {
            formValues[u].nextElementSibling.classList.remove('show');
            inputValid = true;
        }
    };

        if (formValues[3].value === "" || !formValues[3].value.match(emailPattern)) {
            document.getElementsByClassName('noemail')[0].classList.add("show");
        } else {
            document.getElementsByClassName('noemail')[0].classList.remove("show");
            inputValid = true;
        }



    if (formValues[4].value.length < 50 ) {
        document.getElementsByClassName('ymessage')[0].classList.add("show");

    } else {
        document.getElementsByClassName('ymessage')[0].classList.remove("show");
        inputValid = true;

    }

    return inputValid;
}

function onInput() {
    let formValues = getFormParts();
    let checkRadios = validateRadios(formValues);
    let checkInputs = validateInputs(formValues);
    let formData = {
        "pizzaRating" : formValues[0].value,
        "prizeRating":   formValues[1].value,
        "name":    formValues[2].value,
        "email":   formValues[3].value,
        "feedback": formValues[4].value
    }

    document.getElementsByClassName("submit")[0].disabled = true;

    localStorage.setItem('feedback', JSON.stringify(formData));

    if (checkInputs && checkRadios === true) {
        document.getElementsByClassName("submit")[0].disabled = false;

    }
}