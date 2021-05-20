
console.log("Hi world")
console.log(document.title)
console.log(document.body)
console.log(document.domain)
console.log(document.all)
console.log(document.forms)
let headerTitle = document.getElementById('header-title')
let header = document.getElementById("main-header");
console.log(headerTitle)
// headerTitle.innerText = "Goodbye"
console.log(headerTitle.textContent);
console.log(headerTitle.innerText);
// headerTitle.innerHTML = "<h3>Adios</h3>"
// headerTitle.style.borderBottom = 'solid 3px #000'
header.style.borderBottom = 'solid 3px #000'