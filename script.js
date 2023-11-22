const itemForm = document.getElementById("item-form");
const itemInput = document.getElementById("item-input");
const itemList = document.getElementById("item-list");
const clearBtn = document.getElementById("clear");
const filterItem = document.getElementById("filter");

function addItem(e) {
  e.preventDefault();

  const newItem = itemInput.value;

  // Validate input

  if (newItem === "") {
    alert("Please add an item");
    return;
  }

  // Create List Item

  const li = document.createElement("li");
  li.appendChild(document.createTextNode(newItem));

  const button = createButton("remove-item btn-link text-red");
  li.appendChild(button);

  itemList.appendChild(li);
  checkUI();
  itemInput.value = "";
}

// create button with classes and append the icon inside of the button;

function createButton(classes) {
  const button = document.createElement("button");
  button.className = classes;
  const icon = createIcon("fa-solid fa-xmark");
  button.appendChild(icon);
  return button;
}
// Create Icon with classes;
function createIcon(classes) {
  const icon = document.createElement("i");
  icon.className = classes;
  return icon;
}

// Remove Items from the list

function removeItem(e) {
  if (e.target.parentElement.classList.contains("remove-item")) {
    if (confirm("Are you sure?")) {
      e.target.parentElement.parentElement.remove();
      checkUI();
    }
  }
}

// Clear Items by one click

function clearItems() {
  while (itemList.firstChild) {
    itemList.removeChild(itemList.firstChild);
  }
  checkUI();
}

// Filter items
function filterItems(e) {
  const text = e.target.value.toLowerCase();
  const items = itemList.querySelectorAll("li");
  console.log(text, "input");
  items.forEach((item) => {
    const textName = item.firstChild.textContent.toLowerCase();
    console.log(textName);
  });
}

// Update UI s

function checkUI() {
  const items = itemList.querySelectorAll("li");
  if (items.length === 0) {
    filterItem.style.display = "none";
    clearBtn.style.display = "none";
  } else {
    filterItem.style.display = "block";
    clearBtn.style.display = "block";
  }
}

//Event Listeners
itemForm.addEventListener("submit", addItem);
itemList.addEventListener("click", removeItem);
clearBtn.addEventListener("click", clearItems);
filterItem.addEventListener("input", filterItems);

checkUI();
