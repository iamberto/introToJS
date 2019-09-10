
// const formCreationFunction()


function letsGetThisCred(){
    createForm();
    labelGenerator();
    const initializeButton = document.getElementById('clickyClick');
    initializeButton.classList.add('hidden');
}



function createFormInput(elementTag, elementType, elementName, elementMethod = '', elementAction, elementClass, elementPlaceholder, elementInnerText=''){
    const formInput = document.createElement(elementTag);
    formInput.setAttribute('type', elementType);
    formInput.setAttribute('name', elementName);
    formInput.setAttribute('method', elementMethod);
    formInput.setAttribute('action', elementAction);
    formInput.setAttribute('class', elementClass);
    formInput.setAttribute('placeholder', elementPlaceholder);
    formInput.innerText = elementInnerText;
    return formInput;



}

const createForm = () => {
    let container = document.getElementById('container');
    let form = createFormInput('form', '', 'myForm', 'GET', '','myForm','', '');
    let inputName = createFormInput('input', 'text', '', '', '', 'form-control', '', '');
    let inputEmail = createFormInput('input', 'email', 'email', '', '', 'form-control', '', '');
    let inputText = createFormInput('textarea', 'text', '', '', '','form-control','', '');
    let submitButton = createFormInput('button', 'submit', 'submit', '', '','btn btn-warning','', 'Submit');

    

    container.appendChild(form);
    form.appendChild(labelForName);
    form.appendChild(inputName);
    form.appendChild(labelForEmail);
    form.appendChild(inputEmail);
    form.appendChild(labelForTextbox);
    form.appendChild(inputText);
    form.appendChild(submitButton);



    // let container = document.getElementById('container');
    // let form = inputCreation('form', '', 'formName', 'GET', 'js/formSubmission.js', 'inputform', '', '');
}

const labelGenerator = (forElement, text) => {
    const label = document.createElement('label');
    label.setAttribute('for', forElement);
    label.innerText = text;
    return label; 

}

const labelForEmail = labelGenerator('inputName', 'Name');
const labelForName = labelGenerator('inputEmail', 'eMail');
const labelForTextbox = labelGenerator('inputText', 'Ur Txt here');
    //Append all the shizz
