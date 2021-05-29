
console.log("Hi world")
console.log(document.title)
console.log(document.body)
console.log(document.domain)
console.log(document.all)
console.log(document.forms)

// let headerTitle = document.getElementById('header-title')
// let header = document.getElementById("main-header");
// console.log(headerTitle)
// headerTitle.innerText = "Goodbye"
// console.log(headerTitle.textContent);
// console.log(headerTitle.innerText);
// headerTitle.innerHTML = "<h3>Adios</h3>"
// headerTitle.style.borderBottom = 'solid 3px #000'
// header.style.borderBottom = 'solid 3px #000'

// QUERYSELECTOR

// let header = document.querySelector('#main-header') 
// header.style.borderBottom = 'solid 4px #ccc'
// let input = document.querySelector("input") 
// input.value = 'Hello World'
// let submit = document.querySelector('input[type="submit"]') 
// submit.value = 'SEND'
// let item = document.querySelector('.list-group-item')
// item.style.color = 'red'
// let lastItem = document.querySelector(".list-group-item:last-child")
// lastItem.style.color = "blue"
// let secondItem = document.querySelector(".list-group-item:nth-child(2")
// secondItem.style.color = "coral"

//QUERYSELECTORALL

// let titles = document.querySelectorAll('.title')
// console.log(titles)

// let odd = document.querySelectorAll("li:nth-child(odd)")
// let even = document.querySelectorAll('li:nth-child(even)')

// for (let i = 0; i < odd.length; i++) {
//     odd[i].style.backgroundColor = "#f4f4f4"
//     even[i].style.backgroundColor = '#ccc'
// }

//  let itemList = document.querySelector('#items')
// console.log(itemList.parentNode)
// itemList.parentNode.style.backgroundColor = '#f4f4f4'
 
// Child nodes
// console.log(itemList.children)
// console.log(itemList.children[1])
// itemList.children[1].style.backgroundColor = 'yellow'
// Firstelementchild
// console.log(itemList.firstElementChild)
// itemList.firstElementChild.textContent = 'Hello 1'
// Lastlementchild
// console.log(itemList.lastElementChild)
// itemList.lastElementChild.textContent = 'Hello 4'

// itemList.previousElementSibling.style.color = "green";

// Create a div
// let newDiv = document.createElement('div')
// Add class
// newDiv.className = 'hello'
// Add id
// newDiv.id = 'hello1'
// Add attr
// newDiv.setAttribute('title', 'Hello div')
// Create text node
// let newDivText = document.createTextNode('Hello World')
// Add text to div
// newDiv.appendChild(newDivText)
// let container = document.querySelector('header .container')
// let h1 = document.querySelector('header h1')

// console.log(newDiv)
// newDiv.style.fontSize = '30px'
// container.insertBefore(newDiv, h1)

// let button = document.getElementById('button').addEventListener('click', buttonClick)

// function buttonClick(e) {
//     // console.log('Button clicked')
//     // document.getElementById('header-title').textContent = 'Changed'
//     // document.querySelector('#main').style.backgroundColor = '#606060'
//     console.log(e.target)
//     console.log(e.type)
//     console.log(e.clientX)
//     console.log(e.offsetX)
//     console.log(e.altKey);
// }

// let button = document.getElementById('button').addEventListener('click', runEvent)
// let button = document.getElementById('button').addEventListener('dblclick', runEvent)
//  let button = document.getElementById('button').addEventListener('mousedown', runEvent)
let box  = document.getElementById('box')
let itemInput = document.querySelector('input[type="text"]')

let form = document.querySelector('form')

// itemInput.addEventListener('keydown',runEvent)
// itemInput.addEventListener("keyup", runEvent);
// itemInput.addEventListener("keypress", runEvent);
// itemInput.addEventListener("focus", runEvent);
// itemInput.addEventListener("blur", runEvent);
// itemInput.addEventListener("cut", runEvent);
// itemInput.addEventListener("paste", runEvent);
itemInput.addEventListener("input", runEvent);



// box.addEventListener('mouseenter',runEvent)
// box.addEventListener('mouseleave',runEvent)

// box.addEventListener("mouseover", runEvent);
// box.addEventListener("mouseout", runEvent);

box.addEventListener("mousemove", runEvent);


function runEvent(e) {
    console.log('EVENT TYPE: '+e.type)
    // output.innerHTML = '<h3>MouseX:'+e.offsetX+'</h3>'
    // box.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+",40)"
    // document.body.style.backgroundColor = "rgb(" + e.offsetX + "," + e.offsetY + ",40)";
}
