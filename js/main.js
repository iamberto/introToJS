
//Old Way
// console.log('My name is ' + firstName + ' and my age is ' + age);

//Better way (use backticks, not quote marks)
// console.log(`My name is ${firstName} and my age is ${age}.`);

// alert(`My name is ${firstName} and my age is ${age}.`);

// const birthday = '07/26/1991';

// let fixDate = new Date(birthday);
// console.log(fixDate);

// let hello = new String('Sup, fam!');
// alert(hello);

// console.log(firstName.length);

// const topThreeMovies = ['Batman Begins', ' The Dark Knight', ' and The Dark Knight Rises'];
// console.log(`My top three movies are ${topThreeMovies}.`);



// Asks for the user's first name
let firstName = prompt('What is your name?');
// Asks for the user's last name
let lastName = prompt('What is your last name?');
// Logs the user's first name to the console
console.log(firstName);
// Alerts the user's last name
alert(lastName);
// *Asks for the user's birthday
let birthday = prompt('What is your birthday?');
// confirms whether the birthday recieved is correct
let verifyDate = confirm(`Is your birthday ${birthday}?`)
// alerts the resulting birthday
alert(new Date(birthday);

// Merge your takehome-day2 branch with gh-pages so I can test it
// Send me the url of the gh-pages on Slack
// * Extra points if you use JavaScript's Date object for the birthday.