const input_box = document.getElementById("input-box")
const list_box = document.getElementById("input-box");
const listContainer = document.getElementById("List_container")
function addTask()
{
    if(input_box.value === '')
    {
        alert("You must write something!");
    }
    else
    {
        let li = document.createElement("li");
        li.innerHTML = input_box.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    input_box.value = " ";
    saveData();
}
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI")
    {
        e.target.classList.toggle("checked");
        saveData();

    }
else if(e.target.tagName === "SPAN")
{
    e.target.parentElement.remove();
    saveData();
}
})

function saveData()
{
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask()
{
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();