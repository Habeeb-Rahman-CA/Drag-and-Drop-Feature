let lists = document.getElementsByClassName("list")
let rightBox = document.getElementById("right")
let leftBox = document.getElementById("left")

for (const list of lists) { //Looping all the draggable item.
    list.addEventListener("dragstart", (drag) => {
        let selected = drag.target //when an item dragged, the item save into the variable "selected"

        rightBox.addEventListener("dragover", (dragging) => {
            dragging.preventDefault(); //when you drag an item over the box, it allows to drop there
        })

        rightBox.addEventListener("drop", () => {
            rightBox.appendChild(selected) //when you drop the item into the box, it added into the box.
            selected = null //then the selction will will clear after dropping
        }) 
        leftBox.addEventListener("dragover", (dragging) => {
            dragging.preventDefault();
        })

        leftBox.addEventListener("drop", () => {
            leftBox.appendChild(selected)
            selected = null
        }) 
    })
}

// "dragstart" will captures the item being dragged.

// "dragover" will allows the box to accept drops.

// "drop" will moves the dragged item to the new box.