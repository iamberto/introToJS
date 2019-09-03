// Day 6 Takehome

let valueInput = document.getElementById('valueInput');
let changeToFahrenheit = document.getElementById('changeToFahrenheit');
let changeToCelcius = document.getElementById('changeToCelcius');
let valueOutput = document.getElementById('valueOutput');

changeToCelcius.addEventListener('click', () => {
    let checkNumber = isNaN(valueInput.value);
    if (!checkNumber) {
        console.log('Yee, fam. That is a number.');
        changeToCelcius.value = `${parseFloat((valueInput.value - 32) * 5 / 9).toFixed(2)}`;
        console.log(changeToCelcius.value);
        valueOutput.innerHTML = `${changeToCelcius.value}`;
    } else {
        console.log('Bruh, not a number!');
    };

});

changeToFahrenheit.addEventListener('click', () => {
    let checkNumber = isNaN(valueInput.value);
    if (!checkNumber) {
        console.log('Yee, fam. That is a number.');
        changeToFahrenheit.value = `${parseFloat((valueInput.value * 9 / 5) + 32).toFixed(2)}`;
        console.log(changeToFahrenheit.value);
        valueOutput.innerHTML = `${changeToFahrenheit.value}`;

    } else {
        console.log('Bruh, not a number!');
    };
});

// Add Event Listener to h3 id
valueOutput.addEventListener('click', () => {
    let valueOutputToCelcius = `${changeToCelcius.valueOutput.value)}`;
    console.log(valueOutputToCelcius);
}
);