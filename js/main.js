// Day Eight
// email
// subject
// text area


const body = document.body;
const container = document.createElement('div');
container.className = 'container text-center';

const row = document.createElement('main')
row.className = 'row';

const content = document.createElement('div');

content.className = 'col-md-6 col-md-offset-2 content';

row.appendChild(content);
container.appendChild(row);
body.appendChild(container);


// form tag > input.email - input.subject - text area - submit button

//Add Form
const form = document.createElement('form');
form.setAttribute('name', 'emailForm')
form.className = 'text-center';

//Add Email Input
const inputEmail = document.createElement('input');
inputEmail.setAttribute('name', 'inputEmail')
inputEmail.setAttribute('type','email');
inputEmail.setAttribute('placeholder', 'email')
inputEmail.className = 'form-control'

//Add Email Subject
const inputSubject = document.createElement('input');
inputSubject.setAttribute('name', 'inputSubject');
inputSubject.setAttribute('type', 'text');
inputSubject.setAttribute('placeholder', 'Subject')
inputSubject.className = 'form-control'



//Add Email Text Area
const inputTextArea = document.createElement('textarea');
inputTextArea.setAttribute('name', 'inputTextArea');
inputTextArea.setAttribute('type', 'textarea');
inputTextArea.className = 'form-control';


//Add Submit Button
const submitButton = document.createElement('input');
submitButton.className = 'btn btn-dark';
submitButton.setAttribute('type', 'submit');

//Append elements


content.appendChild(form);

form.appendChild(inputEmail);
form.appendChild(inputSubject);
form.appendChild(inputTextArea);
form.appendChild(submitButton);

// function globalFormElements(newElement, elementtype, elementName, elementClass, elementPlaceholder){
//     //element : create the type of element you want
//     const newElement = document.createElement('type', elementtype);
//     newElement.className = elementClass;
//     newElement.setAttribute('name', 'elementName');
//     newElement.setAttribute('placeholder', 'elementPlaceholder');
//     return newElement;
// };

// console.log(globalFormElements('input', 'text', 'example', 'form-control bg-primary', 'Type your example here'));

// const textAreaElement(name, placeholder, elementClass, placeholder, cols = 4, rows = 2) => {
//     const element = document.createElement('textarea');
//     element.setAttribute('type', 'text');
//     element.setAttribute('name', 'name');
//     element.setAttribute('placeholder', 'placeholder');
//     element.setAttribute('cols', 'cols');
//     element.setAttribute('rows', 'rows');
//     element.id = elementId;
//     return element;


// }