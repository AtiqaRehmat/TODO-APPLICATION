var list=document.getElementById("list");
function addTodo()
{
var todo_item=document.getElementById("todo-item");
var li=document.createElement("li");
var liText=document.createTextNode(todo_item.value);
li.appendChild(liText);




var delBtn=document.createElement("img");
delBtn.setAttribute("onclick","deleteItem(this)");
delBtn.src="images/delete1.png";
var addBtn=document.createElement("img");
addBtn.setAttribute("onclick","editItem(this)");
addBtn.src="images/addIcon8.png";
delBtn.style.width="40px";
delBtn.style.height="40px";
delBtn.style.marginLeft="20px";

addBtn.style.width="95px";
addBtn.style.height="45px";
addBtn.style.marginLeft="20px";
li.style.marginTop="20px";
li.style.textAlign="center";
li.style.fontSize="30px";
li.style.fontFamily="Ravie ";
li.style.color="black";
li.style.borderBottom="5px solid burlywood";

li.appendChild(delBtn); 
li.appendChild(addBtn); 
list.appendChild(li);
todo_item.value="";
console.log(li);
}

function deleteItem(e){
    e.parentNode.remove();
}
function editItem(e){
    var val = prompt("Enter edit value",e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue=val;
}
function deleteAll(){
    list.innerHTML="";
}