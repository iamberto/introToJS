// Day 4 Takehome

// Create three variables of prompt values

// const taskOne = prompt(`What's your first task?`);
// const taskTwo = prompt(`What's your second task?`);
// const taskThree = prompt(`What's your last task?`);

// let arrayOfTasks = [taskOne, taskTwo, taskThree];

// let secondArrayofTasks = [
//     {taskOne},
//     {taskTwo},
//     {taskThree}
// ];

// console.log(arrayOfTasks);

// const limit = 3;

// for(b = 0; b < limit; b++);

// // b is adding to the loop

// arrayOfTasks[b].push(`this will take ${Math.floor(Math.random() * 15)}`);


// //Anonymous function
// let example = function(val){
//     console.log(val);
// }

// //Named Function
// function exampleName(){
//     console.log(`Hello there!`);
// }
//Parameters are the placeholder values that are declared before the function fires
//Arguments are the values inside the function that have come into play.


// let turnValueUppercase = val => console.log(val.toUpperCase());
// turnValueUppercase(`hi`);

// turnValueUppercase(`sup, doe`);

// function turnValueUppercase(val){
//     console.log(val.toUpperCase());
// }

// const multiplyValues = (arg1, arg2) => console.log(arg1*arg2);
// multiplyValues(2,6);

// const multiplyValues = (arg1, arg2) => {return arg1 * arg2};
// console.log(multiplyValues(3,5));

//Create array of three names
// let names = [
//     `Berto`,
//     `Jason`,
//     `Beth`,
//     `Alex`,
// ];

//create a greeting that uses a name value
// const greeting = name => `Good Evening, ${name}`;

//test this ish out
// console.log(`The array of names ${names}`, `greeting function value: ${greeting(`Example`)}`);

//loop through names and add greeting function to it
// const limit = 3;
// for(i = 0; i <= names; i++) {
//     console.log(greeting(names[i]));
// }

//Grab elements from HTML
//     const h1 = document.getElementById(`greeting`);

//     const myList = document.getElementById(`groceryList`);

//     const listItem = document.getElementById(`groceryItem`)

//     const myInput = document.getElementById(`getGroceryItem`);

//     let arrayOfGroceryItems = [];

// greeting.innerHTML = `Berto\'s Grocery List`;

// //Function that adds to Grocery List

// const addGroceryItem = (arr, value) => arr.push(value);

// console.log(addGroceryItem(arrayOfGroceryItems, ``));
// console.log(arrayOfGroceryItems);

// function getGroceryItems(arr, value){
//     arr.push(value);
// }

// function ejectGroceryItemToList(values) { 
//     //goal: push array items to list on html
// ​
//     /* the reason I called my list items in here because i need to loop through the id #'s to add individual array values into them, i do this by adding the `grocery` param by one so it adds; i am just appending the GROCERY val to the name to the id*/
//     for (grocery = 0; grocery < arrayOfGroceryItems.length; grocery++) {
//             let li = document.getElementById(`groceryItem${grocery + 1}`);
//             // now that I can loop through my list items, i can now eject EACH array val into EACH seperate list item.
//             li.innerHTML = values[];
//         }
// }

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
//         for (grocery = 0; grocery < arrayOfGroceryItems.length; grocery++) {
//             let li = document.getElementById(`groceryItem${grocery + 1}`);
//             li.innerHTML = values[grocery];
//         }
//     }
//     else {
//         alert('Sorry, the array is empty right now.');
//     }
// }


// //addGroceryItem(arrayOfGroceryItems, 'Testing');
// // addGroceryItem(arrayOfGroceryItems, 'Testing');
// // addGroceryItem(arrayOfGroceryItems, );
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
        li.innerHTML = arrayOfGroceryItems[grocery];
        getGroceryItem.value = '';
    }
    console.log(arrayOfGroceryItems);
};

}

