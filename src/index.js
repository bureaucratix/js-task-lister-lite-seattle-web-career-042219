document.addEventListener("DOMContentLoaded", () => {
  // your code here

  


  let highPriority = document.createElement("option");
  highPriority.value = "prio-1";
  highPriority.innerHTML = "High";
  let medPriority = document.createElement("option");
  medPriority.value = "prio-2";
  medPriority.innerHTML = "Medium";
  let lowPriority = document.createElement("option");
  lowPriority.value = "prio-3";
  lowPriority.innerHTML = "Low";
  let dropDown = document.createElement("select");
  dropDown.appendChild(highPriority);
  dropDown.appendChild(medPriority);
  dropDown.appendChild(lowPriority);

  document.getElementById("create-task-form").appendChild(dropDown);

  document.querySelector("#create-task-form").addEventListener("submit", (event)=>{
    event.preventDefault();
    let formValue = event.target[0].value;
    let button = document.createElement("button");
    button.innerHTML = "X";
    let newListItem = document.createElement("li");
    newListItem.innerHTML = formValue;
    if(event.target[2].value == "prio-1"){newListItem.style.color="red"};
    if(event.target[2].value == "prio-2"){newListItem.style.color="yellow"};
    if(event.target[2].value == "prio-3"){newListItem.style.color="green"};
    newListItem.appendChild(addDeleteButton(button));
    document.querySelector("#tasks").appendChild(newListItem);
    
    let spanList = [...document.querySelectorAll("li")];
    spanList.sort(function(a, b) {
      return a.style.color > b.style.color ? 1 : -1;
      });
    console.log(spanList)
    });
  
  function addDeleteButton(button){
    button.addEventListener("click", (event)=>{
      button.parentNode.remove();
    });
    return button;
  };

});



