const shoppingForm = document.querySelector('.shopping');
const list = document.querySelector('.list');

// We need an array to hold our state
const items = [];

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
        <input type ="checkbox">
        <span class="itemName">${item.name}</span>
        <button aria-label="Remove ${item.name}" class="x">&times;</button>
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
    const lsItems = JSON.parse(localStorage.getItem(items));
    list.innerHTML = lsItems;
}

shoppingForm.addEventListener('submit', handleSubmit);
list.addEventListener('itemsUpdated', displayItems);
list.addEventListener('itemsUpdated', mirrorToLocalStorage);

restoreFromLocalStorage();
