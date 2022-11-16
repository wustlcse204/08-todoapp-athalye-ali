function getToDoApi() {
    var data = document.getElementById("task").value;
    event.preventDefault();
    var url = 'https://cse204.work/todos'; 
    var xhttp = new XMLHttpRequest();
  
  xhttp.onreadystatechange = function(){
      if (this.readyState == 4 && this.status == 200) {
          var nameObject = JSON.parse(this.responseText);
          console.log(nameObject);
          displayToDo(nameObject.name);
      }
  };
  
  xhttp.open("POST", 'https://cse204.work/todos', true);
  xhttp.setRequestHeader("x-api-key","5d36de-9e56dc-d665ec-7e0e69-7f948d");
  xhttp.send(JSON.stringify(data));

    console.log("If you see this in the console, the getFakeNameFromApi() function was called.")
  }

  function modifyTask(id){
    var url = 'https://cse204.work/todos' + id; 
    var xhttp = new XMLHttpRequest();
  
    xhttp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200) {
            var nameObject = JSON.parse(this.responseText);
            console.log(nameObject);
        }
    };
    xhttp.open("GET", url, true);
    xhttp.setRequestHeader("x-api-key","5d36de-9e56dc-d665ec-7e0e69-7f948d");
    xhttp.send();

    

    task2Mod= xhttp2.open("GET",'https://cse204.work/todos'+id, true);
    const bool = new Boolean(task2Mod.completed);
    element.completed=!bool;
    if task2Mod.completed==true{
        task2Mod.setAttribute("class", "completed-tasks")
    }
    else{
        task2Mod.setAttribute("class", "incomplete-tasks"
    }
    

  }
  

  //This function deletes the task once the xbutton has been pressed
  function deleteTask(id){
    var url = 'https://cse204.work/todos' + id; 
    var xhttp = new XMLHttpRequest();
  
  xhttp.onreadystatechange = function(){
      if (this.readyState == 4 && this.status == 200) {
          var nameObject = JSON.parse(this.responseText);
          console.log(nameObject);
      }
  };
  //Deletes task from API
  xhttp.open("DELETE", url, true);
  xhttp.setRequestHeader("x-api-key","5d36de-9e56dc-d665ec-7e0e69-7f948d");
  xhttp.send();

  //Now need to delete display info for task by deleting div
  const element = document.getElementById(id);
  element.empty();
  element.remove();
  }

  function displayToDo(name) {
    const getTasks =()=>{
        const xhr = new XMLHttpRequest();
        xhr.open('GET','https://cse204.work/todos');
        xhr.onload = () => {
            const data = JSON.parse(xhr.response);
            console.log(data)
        }
            for(i=0; i++; i<data.length()){
                const newDiv = document.createElement("div");
                newDiv.setAttribute("class","incomplete-tasks");
                newDiv.appendChild(newTask);
                newTask.innerHTML(data[i].text);

                
                //create a check button for each task that we create
                let cbtn = document.createElement("button");
                cbtn.innerHTML="check";
                cbtn.type = "button";
                cbtn.name="cBtn";
                document.newDiv.appendChild(cbtn);
                cbtn.addEventListener("click", modifyTask(data[i].id));

                
                //create a delete button for each task that we create
                let xbtn = document.createElement("button");
                xbtn.innerHTML="x";
                xbtn.type = "button";
                xbtn.name="xBtn";
                document.newDiv.appendChild(xbtn);
                xbtn.addEventListener("click", deleteTask(data[i].id);
            }
        

    // @TODO: Modify this function so that it displays the name variable in the #result div.
    // Use DOM methods to take the `name` variable and set the innerHTML property of #result.
    document.getElementById("result").innerHTML = name;
    // Bootstrap provides a "d-none" class (it stands for "display: none") that's used to hide a div.
    // Make sure you remove the Bootstrap "d-none" helper class so that the div is displayed. Try using .classList.remove() on your DOM element.
    var element = document.getElementById("result");
    element.classList.remove("d-none");
    // document.getElementById("result").classList.remove();
  }

}






