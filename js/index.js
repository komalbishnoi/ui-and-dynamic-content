//getting references

let item = document.getElementById("item");
let button = document.getElementById("add");
let list = document.getElementById("list");
let error = document.querySelector(".error");

function addItem() {
    //console.log("it works");

    //collect the value
    let data = item.value;
    //console.log(data);

    //trim the white space
    data = data.trim();

    if (data.length !== 0) {

        error.innerText = "";
        //create a list item
        let li = document.createElement("li");

        //add the content to li 
        li.innerText = data;

        //<li>.....</li>  appended to unordered list <ul>...</ul>
        list.appendChild(li);

        //access text field and overwrite the existing value with ""
        item.value = "";

        //sends cursor back inside the text block
        item.focus();
    } else {
        error.innerText = "Please add some items";
    }


}

button.addEventListener("click", addItem);
