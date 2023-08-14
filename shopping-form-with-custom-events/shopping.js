const shoppingForm = document.querySelector('.shopping');
const list = document.querySelector('.list');

// We need an array to hold our state
let items = [];

function handleSubmit(e) {
  e.preventDefault();
  const name = e.target.item.value;
  const item = {
    name,
    id: Date.now(),
    complete: false,
  };
  // Push the items into state
  items.push(item);
  console.log(`There are now ${items.length} in your state`);
  // Clear the form
  e.target.reset();
  // Custom event that will tell anyone else who cares that the items have been updated!
  list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

function displayItems() {
  console.log(items);
  const html = items
    .map((item) => {
      return `
      <li class="shopping-item">
        <input value="${item.id}" type ="checkbox"
        ${item.complete ? 'checked' : ''}
        >
        <span class="itemName">${item.name}</span>
        <button 
        aria-label="Remove ${item.name}" class="x"
        value="${item.id}"
        >&times;</button>
      </li>`;
    })
    .join('');
  list.innerHTML = html;
}

function mirrorToLocalStorage() {
  console.info('Saving items to localstorage');
  localStorage.setItem('items', JSON.stringify(items));
}

function restoreFromLocalStorage() {
  console.info('Restoring from LS');
  // pull the items from LS
  const lsItems = JSON.parse(localStorage.getItem('items'));
  if (lsItems.length) {
    items.push(...lsItems);
    list.dispatchEvent(new CustomEvent('itemsUpdated'));
  }
}

function deleteItem(id) {
  console.log('DELETING ITEM', id);
  // update our items array without this one
  items = items.filter((item) => item.id !== id);
  console.log(items);
  list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

function markAsComplete(id) {
  console.log('Marking as complete', id);
  const itemRef = items.find((item) => item.id === id);
  itemRef.complete = !itemRef.complete;
  list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

shoppingForm.addEventListener('submit', handleSubmit);
list.addEventListener('itemsUpdated', displayItems);
list.addEventListener('itemsUpdated', mirrorToLocalStorage);
// Event Delegation: We listen on the list <ul> but then delegate the click over to the button if that is what was clicked </ul>
list.addEventListener('click', function (e) {
  const id = parseInt(e.target.value);
  if (e.target.matches('button')) {
    deleteItem(id);
  }
  if (e.target.matches('input[type="checkbox"]')) {
    markAsComplete(id);
  }
});

restoreFromLocalStorage();
