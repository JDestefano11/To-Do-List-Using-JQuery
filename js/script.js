

function newItem() {
    // Adding a new item to the list of items
    let li = $("<li></li>");
    let inputValue = $("#input").val();
    li.append(inputValue);
    inputValue === "" ? alert("You must write something") : $("#list").append(li);


    function crossOut() {
        li.toggleClass("strike");
    }
    // Cross out an item from the list of items
    li.on("dblclick", crossOut);


    // Adding the delete button 
    let crossOutButton = $("<crossOutButton></crossOutButton>");
    crossOutButton.append(document.createTextNode("X"));
    li.append(crossOutButton);

    function deleteListItem() {
        li.addClass("delete");
    }

    crossOutButton.on("click", deleteListItem);
    // Reordering the list of items
    $("#list").sortable();
}

