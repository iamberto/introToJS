const name = prompt("What is your name?");
const favColor = prompt(`Cool, ${name}! What's your favorite color? red, orange, yellow, green, blue, pink, purple, black, white, or grey?`);

// Prompts your user for their name.
// Next, ask the user's favorite color. 
// (Provide the user with the basic 10 colors as options i.e. red, 
//     orange, yellow, green, blue, pink, purple, black, white, and grey).
// Depending on the color, write 9 different responses for the possible answers.
// Include the user's name in the response message.

switch (favColor){
    case 'red':
        console.log(`Hey ${name}, ${favColor} is your favorite color! cool, huh? `);
        break;
    case 'orange':
        console.log(`Hey ${name}, ${favColor} is your favorite color! cool, huh? `);
        break;
    case 'yellow':
        console.log(`Hey ${name}, ${favColor} is your favorite color! cool, huh? `);
        break;
    case 'green':
        console.log(`Hey ${name}, ${favColor} is your favorite color! cool, huh? `);
        break;
    case 'blue':
        console.log(`Hey ${name}, ${favColor} is your favorite color! cool, huh? `);
        break;           
    case 'pink':
        console.log(`Hey ${name}, ${favColor} is your favorite color! cool, huh? `);
        break;           
    case 'purple':
        console.log(`Hey ${name}, ${favColor} is your favorite color! cool, huh? `);
        break;                
    case 'black':
        console.log(`Hey ${name}, ${favColor} is your favorite color! cool, huh? `);                
        break;
    case 'white':
        console.log(`Hey ${name}, ${favColor} is your favorite color! cool, huh? `);    
        break;
    case 'grey':
        console.log(`Hey ${name}, ${favColor} is your favorite color! cool, huh? `);
        break;
    }