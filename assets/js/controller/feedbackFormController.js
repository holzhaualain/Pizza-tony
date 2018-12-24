
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
        let likeRadio = document.forms["feedback-form"]["like"];
        let thinkRadio = document.forms["feedback-form"]["think"];
        let yourname = document.forms["feedback-form"]["yourname"];
        let email = document.forms["feedback-form"]["email"];
        let message = document.forms["feedback-form"]["message"];

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
    /*
        if (formValues[2].value === "") {
              document.getElementsByClassName('yname')[0].classList.add("show");

        } else {
              document.getElementsByClassName('yname')[0].classList.remove("show");
            inputValid = true;
        }

        if (formValues[3].value === "" || !formValues[3].value.match(emailPattern)) {
            document.getElementsByClassName('noemail')[0].classList.add("show");

        } else {
            document.getElementsByClassName('noemail')[0].classList.remove("show");
            inputValid = true;
        }
*/
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
        let formData = {};
        document.getElementsByClassName("submit")[0].disabled = true;

        formData = {
            "like" :   formValues[0].value,
            "think":   formValues[1].value,
            "name":    formValues[2].value,
            "email":   formValues[3].value,
            "message": formValues[4].value
        }

        localStorage.setItem('feedback', JSON.stringify(formData));

        if (checkInputs && checkRadios === true) {
            document.getElementsByClassName("submit")[0].disabled = false;


        }
    }
