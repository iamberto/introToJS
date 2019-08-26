// On your day4 branch, declare a var and define it with an array containing:

// Your favorite movie of 2017
// Your lucky number
// Whether or not you are a Star Wars fan (using a Boolean)
// The year you graduated high school
// console.log the var and the length of the array.

// let myArrayInfo = [
//     'Watchmen',
//     7,
//     true,
//     '2009'
// ];

// //check's Length
// console.log(myArrayInfo.length);

// //Logs 
// console.log(myArrayInfo[0]);

// //checks to see if it's an array or not
// console.log(Array.isArray(myArrayInfo));

// //Adds to end of Array
// myArrayInfo.push('Camaro');
// console.log(myArrayInfo.length);

// //Add to beginning of Array
// myArrayInfo.unshift('New Number 1');
// console.log(myArrayInfo);

// //Remove last item in array
// myArrayInfo.pop();
// console.log(myArrayInfo);

// //Removes first item in array
// myArrayInfo.shift();
// console.log(myArrayInfo);

// //.splice - Remove specific item in array .splice(position, how many you want to replace after (0 if you want to ADD to array), content Value)
// myArrayInfo.splice(1, 0, 8);
// console.log(myArrayInfo);

// //Creates new array ^

// //.slice - Cuts out values in array .slice(delete all up to this, delete all after this)
// let newArrayInfo = myArrayInfo.slice(1); //Becasue Splice calls in a new array, you have to call it under a new var to express it 
// console.log(myArrayInfo);

// // returns the first index at which a given element can be found in the array, or -1 if it is not present.
// console.log(newArrayInfo.indexOf('2009'));

// let findPositionToRemove = newArrayInfo.indexOf(2009);
// console.log(newArrayInfo.indexOf('true'));
// let refreshed = newArrayInfo.splice(findPositionToRemove)


//.reverse reverses order of array

//.sort sorts your array alphabetically


question = prompt('How old are you?');

let returnValue = parseInt(question);

if(returnValue >= 18){
    alert("You're old enough! Hooray!!");
} else {
    alert("Naw, sorry fam. C-ya.")
};

if(returnValue <= 80){
    
}

//5 arrays

// let arrayOne = [
//     'red',
//     'firetruck'
// ];

// let arrayTwo = [
//     'blue',
//     'blueberries'
// ];

// let finalArray = [
//     arrayOne,
//     arrayTwo
// ];

// console.log(finalArray[0][1]);

// // In your scripts.js file, create 5 arrays, each with one of your 
// // top 5 movies' title and the main character's name



// let movieArrayOne = [
//     "The Dark Knight",
//     "Bruce Wayne"
// ];

// let movieArrayTwo = [
//     "Watchmen",
//     "Owlman"
// ];

// let movieArrayThree = [
//     "Lincoln",
//     "Abraham Lincoln"
// ];

// let movieArrayFour = [
//     "Reservoir Dogs",
//     "Mr. Orange"
// ];

// let movieArrayFive = [
//     "Kill Bill",
//     "Beatrix Kiddo"
// ];

// // Add all of these arrays to a final array named favoriteMovies

// let favoriteMovies = [
//     movieArrayOne,
//     movieArrayTwo,
//     movieArrayThree,
//     movieArrayFour,
//     movieArrayFive
// ];

// alert(favoriteMovies);

// // Create an array with just the titles of your favorite movies and alert it

// let movieTitle = [

// ]

// Create another array with your favorite and least favorite of the top 5 
// and console.log it.


// Check the length of your favoriteMovies array by alerting it.




//LOOPS

//while loop
// let x = 0;
// while (x <= 10) {
//     console.log(x);
//     x++;
// }

//for Loop

// for (let i = 0; i < 18; i++) {
//     if (i == 4){
//         continue;
//     }
//     console.log(i);

// }

// for (let i = 15; i > 0; i--) {
//     console.log(i);
// }

// let i = 0;

// do {
//     console.log(i);
//     i++;
// } while(i<10);

// let arrayThree = [1, 2, 3, 4, 5];

// arrayThree.forEach(function(x){
//     console.log(`I am ${x}`);

// })

// let myString = "Hi, my name is WHAT";
// for (i of myString){
//     console.log(i);
// }

// let people = [{
//     firstName : 'Berto',
//     lastName : 'Sandoval',
//     age : 28
// }, {
//     firstName : 'Not',
//     lastName : 'Berto',
//     age : 33
// }];

// for (person of people){
//     console.log(person.firstName)
// } 

// for (person in people) {
//     console.log(people[person]);
// }


// let users = [
//     {
//      username: 'unicorn88',
//      createdAt: new Date()
//  },
//  {
//      username: 'rino44',
//      createdAt: new Date()
//  }
// ]