const button = document.getElementById("addButton");
function handleButtonClick (event){
    let taskName = document.getElementById("nameValue").value;
    let taskText  = document.getElementById("textValue").value;
    let taskPriority = document.getElementById("prioretyValue").value;
    const element = new Element(taskName,taskText,taskPriority)
    console.log(document.getElementById("containerId"))
    element.render().insert(document.getElementById("containerId"))
}
// button.onclick = handleButtonClick;
button.addEventListener('click', handleButtonClick);


