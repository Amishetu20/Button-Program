const button = document.getElementById('addItemBtn');
const itemList = document.getElementById('itemList');

button.addEventListener('click', () => {
    const newItem = document.createElement('li');
    newItem.textContent = `Item ${itemList.children.length + 1}`;
    itemList.appendChild(newItem);
});