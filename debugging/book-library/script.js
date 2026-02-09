let myLibrary = [];

window.addEventListener("load", function (e) {
  populateStorage();
});

function populateStorage() {
  if (myLibrary.length == 0) {
    let book1 = new Book("Robison Crusoe", "Daniel Defoe", "252", true);
    let book2 = new Book(
      "The Old Man and the Sea",
      "Ernest Hemingway",
      "127",
      true
    );
    myLibrary.push(book1);
    myLibrary.push(book2);
    render();
  }
}

const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const check = document.getElementById("check");

//check the right input from forms and if its ok -> add the new book (object in array)
//via Book function and start render function
function submit() {
  if (
    title.value == null ||
    title.value == "" ||
    pages.value == null ||
    pages.value == ""
  ) {
    alert("Please fill all fields!");
    return false;
  } else {
    let book = new Book(title.value, title.value, pages.value, check.checked);
    console.log(book);
    myLibrary.push(book);
    render();
  }
}

function Book(title, author, pages, check) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.check = check;
}



function render() {
  let table = document.getElementById("display");
    //delete old table
  let rowsNumber = table.rows.length;
  for(j=rowsNumber-1;j>0;j--){
    table.deleteRow(j);
  }

    //insert updated row and cells
  for(i=0;i<rowsNumber;i++){
    let newRow = table.insertRow(i+1);
    let titleCell = newRow.insertCell(0);
    let authorCell = newRow.insertCell(1)
    let pagesCell = newRow.insertCell(2);
    let wasReadCell = newRow.insertCell(3);
    let deleteCell = newRow.insertCell(4);

    titleCell.innerHTML = myLibrary[i].title;
    authorCell.innerHTML = myLibrary[i].author;
    pagesCell.innerHTML = myLibrary[i].pages;

    let changeBut = document.createElement("button");
    changeBut.id = i;
    changeBut.className = "btn btn-success";
    wasReadCell.appendChild(changeBut);
    let readStatus = "";

    if (myLibrary[i].check == false){
      readStatus = "No";
    }
    else{
      readStatus = "Yes";
    }
    //change value of read
    changeBut.innerText = readStatus;
    changeBut.addEventListener("click", () => {
      myLibrary[changeBut.id].check = !myLibrary[changeBut.id].check;
      console.log(myLibrary.length);
      render();
    });

    
        // add delete button to every row and render again
    let delButton = document.createElement("button");
    delButton.id = i;
    deleteCell.appendChild(delButton);
    delButton.className = "btn btn-warning";
    delButton.innerHTML = "Delete";
    delButton.addEventListener("click", function () {
      alert(`You've deleted title: ${myLibrary[delButton.id].title}`);
      myLibrary.splice(delButton.id, 1);
      render();
    });
  
  }
}
