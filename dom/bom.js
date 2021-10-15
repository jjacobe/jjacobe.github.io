function deleteItem() {
    document.querySelector(".listItem").remove();
    document.querySelector("#fav_chapter").focus();
}


function addBookChapter() {
    let chapterName = document.querySelector("#fav_chapter").value;
    if (chapterName != "") {
        let list = document.querySelector(".list");

        let listItem = document.createElement("li");
        listItem.setAttribute("class", "listItem");
        listItem.textContent = chapterName;

        let deleteButton = document.createElement("button");
        deleteButton.textContent = "X";
        deleteButton.setAttribute("class", "deleteButton");
        deleteButton.addEventListener("click", deleteItem);

        list.appendChild(listItem);
        listItem.appendChild(deleteButton);

        
        document.querySelector("#fav_chapter").focus();
        document.querySelector("#fav_chapter").value = "";
    }

}


document.querySelector("#submit_button").addEventListener("click", addBookChapter);
