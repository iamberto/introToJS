// const firstVariable = "Ay fam";
// const secondVariable = new String ("Yo dawg");

// const firstVariable = 1;
// const secondVariable = new String ("1");

// Use the logical operators to determine 
// if they are strictly equal.
// Now use the logical operators to determine 
// if they are loosely equal.

// if (firstVariable == secondVariable){
//     console.log(`Yuuuh, ${firstVariable} and ${secondVariable} are hella equal.`);
// } else {
//     console.log(`No way...Not eva. ${firstVariable} and ${secondVariable} will never be equal.`);
// } if (firstVariable != secondVariable) {
//     console.log(`It's a sad fact of reality that the greetings ${firstVariable} and ${secondVariable} will never be equal.`);
// }

// const numberOne = prompt('Pick a Number');
// const numberTwo = prompt('Okay, now pick another number, pls.');

// //turn the strings into integers
// let parseEmBaybee = (parseInt(numberOne, 10) + parseInt(numberTwo, 10));

// alert(parseEmBaybee);

//Oh shiiiiiiit. I did it!!

// Asks if the user is over 18


// If the user is over 18, allow them to proceed, otherwise 
// alert the user that they are not old enough.

const ofAge = confirm("Are you over 18?");

if (ofAge == true){
    alert("Great! Let's keep going.")
} else if (ofAge != true){
    alert('Bye, Felicia. Not old enough.');
} 
// Now that all your users at this point are at least 18,
// ask if they are less than 80 years old.
 const underOldAge = confirm("Now, are you UNDER 80?");
// Now ask the users who are between 18 and 80 if 
// they like Star Wars. 
// If they are over 80, ask if they like prunes.
if (ofAge == true && underOldAge == true){
    confirm("So...You like Stah Wahs?")
} else if (underOldAge != true){
    confirm("Do you like prunes?");
}

// If they say they don't Star Wars, end the program. In all other 
// cases, alert them with a message.
// if (ageAnswer == false){
//     alert("Ok. We're done.")
// } else {
//     alert("Woop, woop!!");
// }





