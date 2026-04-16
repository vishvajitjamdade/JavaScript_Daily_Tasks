let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let lis = document.querySelectorAll("li");

btn.addEventListener("click",function(){
    let li = document.createElement("li");
    li.innerText = inp.value;

    let delBtn = document.createElement("button"); //created button
    delBtn.innerText = "delete"; //added text delete
    delBtn.classList.add("delete"); //added class .delete

    li.append(delBtn); //added into list
    inp.value="";
    ul.appendChild(li);
});

ul.addEventListener("click",function(event){
    if(event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
    }
});