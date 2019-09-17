//Create taco recipe using prototype. First, to create what we need for recipe

function tacoRecipe(meat, seasonings, vegetables, tortilla){
    this.meat = meat;
    this.seasonings = seasonings;
    this.vegetables = vegetables;
    this.tortilla = tortilla;
}

tacoRecipe.prototype.prepIngredients = function(){
    console.log(`Get two pounds of ${this.meat} and add to pan. In a separate bowl, collect ${this.seasonings}. 
    Make sure to get your ${this.vegetables} ready to wash and chop. Then dip the ${this.tortilla} in oil and
    ready to fry.`);
}

const carnitasTaco = new tacoRecipe('carnitas', ['garlic powder', 'cumin', 'onion powder', 'salt and pepper'],['lemon',
'tomatoes', 'onion', 'lettuce', 'raddish'], 'corn tortilla');

// carnitasTaco.prepIngredients();

tacoRecipe.prototype.assembleTaco = function(){
    console.log(`After you cook the ${this.meat}, use the ${this.seasonings} and fry the ${this.tortilla}, 
    place some of the ${this.meat} inside of the ${this.tortilla}. Then top it with all the ${this.vegetables}.`)
}

const assembleAlPastorTaco = new tacoRecipe('Al Pastor', [' chile sauce', ' lime juice', ' pineapple chunks'], 
['cabbage', 'raddish'], 'little corn tortilla');

assembleAlPastorTaco.assembleTaco();

// tacoRecipe.prototype.tacoCost = function()