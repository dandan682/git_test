// TODO app. Example of DOM handle
let filter = document.querySelector(".search")         // Item to search
let form = document.querySelector(".addItem")         // Add item button
let itemInput = document.querySelector(".item-input") // Item to add
let container = document.querySelector(".container")  // Container of items (divs)

filter.addEventListener("keyup", filterItems)         // Filter event
form.addEventListener("submit", addItem)            // Form submit event

// Add item
function addItem(e) {
  e.preventDefault()
  let div = document.createElement("div")           // Create new div element
  div.className = "items"                           // Add class

  let input = document.createElement("input")       // Create input element
  input.className = "item"                          // Add classes to input element
  input.type = "text";
  input.disabled = true;
  input.value = itemInput.value;

  let editBtn = document.createElement("button")    // Create edit button element
  editBtn.className = "button edit"                 // Add classes to edit button
  editBtn.innerHTML = "EDIT";

  let deleteBtn = document.createElement("button")  // Create del button element
  deleteBtn.className = "button delete"             // Add classes to delete button
  deleteBtn.innerHTML = "X"

  container.appendChild(div)                        // Append div to container

  div.appendChild(input)                            // Append input to div
  div.appendChild(editBtn)                          // Append button to div
  div.appendChild(deleteBtn)                        // Append button to div

  editBtn.addEventListener("click", editItem(input))  // Call Edit event
  deleteBtn.addEventListener("click", removeItem)     // Call Delete event

  itemInput.value = ""                                // Clear add item value
}

// Edit item
function editItem(e) {
  e.disabled = !e.disabled                            // Allow input interaction
}

// Delete item
function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are You Sure?")) {
      let div = e.target.parentElement;
      container.removeChild(div);                       // Remove div from DOM
    }
  }
}

// Filter Items
function filterItems(e) {
  let text = e.target.value.toLowerCase()               // Convert search text to lowercase
  let container = document.querySelector(".container")  // Get parent of all divs
  let items = container.querySelectorAll(".items")      // Get divs

  // Convert divs to an array
  Array.from(items).forEach(function (item) {           // For each div
    let itemName = item.firstChild.value                 // Get input value
    if (itemName.toLowerCase().indexOf(text) != -1) {   // search text = input value?
      item.style.display = "block"                      // Display item
    } else {
      item.style.display = "none"                       // Not display item
    }
  })
}