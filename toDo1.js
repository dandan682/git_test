let form = document.getElementById("addForm");
let itemList = document.getElementById("items");
let filter = document.getElementById("filter");
let item = document.getElementById("item");

form.addEventListener("submit", addItem); // Form submit event
itemList.addEventListener("click", removeItem); // Delete event
filter.addEventListener("keyup", filterItems); // Filter event

// Add task
function addItem(e) {
  e.preventDefault();
  let newItem = document.getElementById("item").value; // Get input value
  let li = document.createElement("li"); // Create new li element
  li.className = "list-group-item"; // Add class
  li.appendChild(document.createTextNode(newItem)); // Add text node with input value

  let deleteBtn = document.createElement("button"); // Create del button element
  deleteBtn.className = "delete"; // Add classes to del button
  deleteBtn.appendChild(document.createTextNode("X")); // Append text node
  li.appendChild(deleteBtn); // Append button to li
  itemList.appendChild(li); // Append li to list
  item.value = ""; // Clear input value
}

// Remove item
function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are You Sure?")) {
      let li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Items
function filterItems(e) {
  // convert text to lowercase
  let text = e.target.value.toLowerCase();
  // Get lis
  let items = itemList.getElementsByTagName("li");
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
