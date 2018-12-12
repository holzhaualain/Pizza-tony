

function getFormParts() {

    var inputFields = [];
    var yourname = document.getElementById("yourname");
    var email = document.getElementById("email");
    var message = document.getElementById("message");

    inputFields.push(yourname, email, message);
    return inputFields;
}


function checkForm() {
    event.preventDefault();

    var formValues = getFormParts();
    var emailPattern = '[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$';

    if(formValues[0].value =="") {
        document.getElementsByClassName('yname')[0].classList.add("show","error");

    }
    if(formValues[1].value =="" || !formValues[1].value.match(emailPattern)) {
        document.getElementsByClassName('noemail')[0].classList.add("show","error");

    }
    if(formValues[2].value =="") {
        document.getElementsByClassName('ymessage')[0].classList.add("show","error");

    }

    /*
    * form check as switch
    *
    switch (true) {

        case (formValues[0].value ===""):
            document.getElementsByClassName('yname')[0].classList.add("show","error");
            break;

        case (formValues[1].value ==="" || !formValues[1].value.match(emailPattern)):
            document.getElementsByClassName('noemail')[0].classList.add("show","error");
            break;

        case(formValues[2].value ===""):
            document.getElementsByClassName('ymessage')[0].classList.add("show","error");
            break;
        default:
             break;
    }
    * */

}


function onInput(e) {
        var el = e.target;
        el.nextElementSibling.classList.remove('show');
        el.nextElementSibling.classList.add('hidden');
}