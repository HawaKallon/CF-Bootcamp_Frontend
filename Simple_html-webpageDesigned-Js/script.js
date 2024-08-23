const changeTextBtn = document.getElementById('change-text-btn');
const textChange = document.getElementById('text-change');

// Adding an event listener to the button for toggling text
changeTextBtn.addEventListener('click', function() {
    if (textChange.textContent === 'The text has been changed!') {
        textChange.textContent = 'This text will change when you click the button.';
    } else {
        textChange.textContent = 'The text has been changed!';
    }
});

const styleBtn = document.getElementById('style-btn');
const styleText = document.getElementById('style-text');

// Adding an event listener to the button for toggling style
styleBtn.addEventListener('click', function() {
    if (styleText.style.color === 'rgb(231, 76, 60)') { 
        styleText.style.color = ''; 
        styleText.style.fontWeight = '';
        styleText.style.fontSize = '';
    } else {
        styleText.style.color = '#e74c3c';
        styleText.style.fontWeight = 'bold';
        styleText.style.fontSize = '1.5rem';
    }
});


// Selecting elements for adding items
const addItemBtn = document.getElementById('add-item-btn');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');

// Adding an event listener to the button for adding items
addItemBtn.addEventListener('click', function() {
    const newItemText = itemInput.value.trim(); 

    if (newItemText !== "") {
        const newItem = document.createElement('li'); 
        newItem.textContent = newItemText; 
        itemList.appendChild(newItem); 
        itemInput.value = ''; 
    } else {
        alert("Please enter an item to add."); 
    }
});
