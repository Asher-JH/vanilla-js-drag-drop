const draggableList = document.getElementById("draggable-list");
const checkBtn = document.getElementById("check");

const richestPeople = [
  "Jeff Bezos",
  "Bill Gates",
  "Warren Buffett",
  "Bernard Arnault",
  "Carlos Slim Helu",
  "Amancio Ortega",
  "Larry Ellison",
  "Mark Zuckerberg",
  "Michael Bloomberg",
  "Larry Page",
];

// Store the list items
const listItems = [];

let dragStartIndex;

createList();

// Insert list items into DOM
function createList() {
  [...richestPeople]
    .map((a) => ({ value: a, sortValue: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value)
    .forEach((p, idx) => {
      const listItem = document.createElement("li");
      listItem.setAttribute("data-index", idx);
      listItem.innerHTML = `
        <span class="number">${idx + 1}</span>
        <div class="draggable" draggable="true">
            <p class="person-name">${p}</p>
            <i class="fas fa-grip-lines"></i>
        </div>
    `;

      listItems.push(listItem);

      draggableList.appendChild(listItem);
    });

  addEventListeners();
}

function dragStart() {
  dragStartIndex = +this.closest("li").getAttribute("data-index");
}

function dragOver(e) {
  e.preventDefault();
}

function dragDrop() {
  const dragEndIndex = +this.getAttribute("data-index");
  swapItems(dragStartIndex, dragEndIndex);

  this.classList.remove("over");
}

function dragEnter() {
  this.classList.add("over");
}

function dragLeave() {
  this.classList.remove("over");
}

// Swap list items that are drag n drop
function swapItems(fromIndex, toIndex) {
  const itemOne = listItems[fromIndex].querySelector(".draggable");
  const itemTwo = listItems[toIndex].querySelector(".draggable");

  listItems[fromIndex].appendChild(itemTwo);
  listItems[toIndex].appendChild(itemOne);
}

// Check the order of list items on btn click
function checkOrder() {
  listItems.forEach((l, idx) => {
    const personName = l.querySelector(".draggable").innerText.trim();

    if (personName !== richestPeople[idx]) {
      l.classList.add("wrong");
    } else {
      l.classList.remove("wrong");
      l.classList.add("right");
    }
  });
}

function addEventListeners() {
  const draggables = document.querySelectorAll(".draggable");
  const dragListItems = document.querySelectorAll(".draggable-list li");

  draggables.forEach((draggable) => {
    draggable.addEventListener("dragstart", dragStart);
  });

  dragListItems.forEach((item) => {
    item.addEventListener("dragover", dragOver);
    item.addEventListener("drop", dragDrop);
    item.addEventListener("dragenter", dragEnter);
    item.addEventListener("dragleave", dragLeave);
  });
}

checkBtn.addEventListener("click", checkOrder);
