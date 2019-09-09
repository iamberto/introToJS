<<<<<<< HEAD
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
=======
// Day 5 Takehome

const greeting = document.getElementById('greeting');
const groceryList = document.getElementById('groceryList');
// const groceryItem = document.getElementById('groceryItem');
const getGroceryItem = document.getElementById('getGroceryItem');

let arrayOfGroceryItems = [];

greeting.innerHTML = 'Berto\'s Grocery List';


// function addGroceryItem(arr, value) {
//     arr.push(value);
// }


// function ejectGroceryItemToList(values) { 
//     //goal push array items to list on html

//     if (arrayOfGroceryItems !== undefined) {
//         for (gcheckout rocery = 0; grocery < arrayOfGroceryItems.length; grocery++) {
//             let li = document.getElementById(`groceryItem${grocery + 1}`);
//             li.innerHTML = values[grocery];
//         }
//     }
//     else {
//         alert('Sorry, the array is empty right now.');
//     }
// }


// // console.log(arrayOfGroceryItems);
// ejectGroceryItemToList(arrayOfGroceryItems);
function addToList(){
    if(getGroceryItem.value == ""){
        console.log('Nuthin');
    } else{
    console.log('Sumthin')
    arrayOfGroceryItems.push(getGroceryItem.value);
    for (grocery = 0; grocery < arrayOfGroceryItems.length; grocery++){
        let li = document.getElementById(`groceryItem${grocery + 1}`);
        li.innerHTML = `# ${grocery + 1} ${arrayOfGroceryItems[grocery]}`;
        getGroceryItem.value = '';
    }
    console.log(arrayOfGroceryItems);
};

}

>>>>>>> gh-pages
