let filter = document.querySelector(".search");
let form = document.querySelector(".addItem");
let itemInput = document.querySelector(".item-input");
let container = document.querySelector(".container");

filter.addEventListener("keyup", filterItems)     // Filter event
form.addEventListener("submit", addItem)        // Form submit event


// Add item
function addItem(e) {
  e.preventDefault();
  //  let newItem = document.querySelector(".itemInput").value; // Get input value

  let div = document.createElement("div"); // Create new div  element
  div.className = "items"; // Add class

  let input = document.createElement("input"); // Create del button element
  input.className = "item"; // Add classes to del button
  input.value = itemInput.value; // Append text node
  input.type = "text";
  input.disabled = true;

  let editBtn = document.createElement("button"); // Create del button element
  editBtn.className = "button edit"; // Add classes to del button
  editBtn.innerHTML = "EDIT"; // Append text node

  let deleteBtn = document.createElement("button"); // Create del button element
  deleteBtn.className = "button delete"; // Add classes to del button
  deleteBtn.innerHTML = "X"; // Append text node

  container.appendChild(div); // Append div to container
  console.log(container);

  div.appendChild(input); // Append button to div
  div.appendChild(editBtn); // Append button to div
  div.appendChild(deleteBtn); // Append button to div

  editBtn.addEventListener("click", editItem(input)); // Delete event
  deleteBtn.addEventListener("click", removeItem); // Delete event

  itemInput.value = ""; // Clear input item value
}

function editItem(e) {
  e.disabled = !e.disabled
}
// Remove item
function removeItem(e) {
  console.log("remove")
  if (e.target.classList.contains("delete")) {
    if (confirm("Are You Sure?")) {
      let div = e.target.parentElement;
      container.removeChild(div);
    }
  }
}

// Filter Items
function filterItems(e) {
  let text = e.target.value.toLowerCase(); // convert text to lowercase
  let items = container.querySelector(".items"); // Get divs
  console.log(items);

  // Convert to an array
  Array.from(items).forEach(function (item) {
    let itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
