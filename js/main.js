let h1 = document.querySelector(`h1`);

const container = document.querySelector('.container');
console.log(container);

function globalListItems() {
    // create ul/ol with classes, attributes needed, create li with classes, attributes, or IDs needed 

    //create ul
    const ul = document.createElement('ul');
    const li = document.createElement('li');
    //atributes/classes/id
    li.className = 'list-group-item list-group-item-info';
    li.innerText = 'I am a list item.';
    li.id = 'mySpecialListItem';

    const image = document.createElement('img');
    image.setAttribute('alt', 'This is an empty image container.');
    console.log(image);

    //Append to container->ul->li
    ul.appendChild(li);

    container.appendChild(ul);
    
}

globalListItems();

function createDynamicCard() {
    //create Elements needed for card
    const cardDiv = document.createElement('div');
    cardDiv.className = 'panel panel-default text-center col-md-6';

    const h1 = document.createElement('h1');
    h1.className = 'panel-title text-center';
    h1.innerHTML = 'This is the title';

    const image = document.createElement('img');
    image.className = 'col-md-4 img-responsive';

    const p = document.createElement('p');
    p.innerText = 'Exhale, expel, Recast my tale, Read my allegorical elegy';

    const icon = document.createElement('i'); 

    console.log('this is the div: ', cardDiv);

    //Append cardDiv to container

    container.appendChild(cardDiv);
    //Append child tags to cardDiv div
    cardDiv.appendChild(h1);
    cardDiv.appendChild(image);
    cardDiv.appendChild(p);
    cardDiv.appendChild(icon);

    //add classes, IDs, and attributes






}

createDynamicCard()