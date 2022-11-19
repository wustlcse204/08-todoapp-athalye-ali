document.getElementById("task-button").addEventListener("click", getToDoApi, false);

// console.log('mf button was clicked');

const xhr = new XMLHttpRequest();
       
xhr.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(xhr.responseText);
            displayToDo(data);
            
    }
    else if(this.readyState==4){
        console.log(this.responseText);
    }
                
                
    document.getElementById("")
    }
            
    xhr.open('GET','https://cse204.work/todos');
    xhr.setRequestHeader("x-api-key","5d36de-9e56dc-d665ec-7e0e69-7f948d");
    xhr.send();




//DISPLAY THE GIVEN TASKS
function displayToDo(data) {
    
    for(i=0; i<data.length;i++){
        var task_id = data[i].id;
        const newDiv = document.createElement("div");
        outer = document.getElementById("incomplete-tasks");
                outer.appendChild(newDiv);
                newDiv.setAttribute("class", "single_task");
                newDiv.setAttribute("id", task_id);
                newDiv.innerHTML=data[i].text;

                
                //create a check button for each task that we create
                let cbtn = document.createElement("button");
                newDiv.appendChild(cbtn);
                cbtn.innerHTML="check";
                cbtn.setAttribute("class", "complete-button");
                cbtn.setAttribute("id", data[i].id);
                cbtn.setAttribute("value","complete");
                cbtn.type = "button";
                cbtn.name="cBtn";
                newDiv.appendChild(cbtn);
                cbtn.addEventListener("click", modifyTask, false);

                
                //create a delete button for each task that we create
                let xbtn = document.createElement("button");
                newDiv.appendChild(xbtn);
                xbtn.innerHTML="x";
                xbtn.setAttribute("class", "delete-button");
                xbtn.setAttribute("id", data[i].id);
                xbtn.setAttribute("value","delete");
                xbtn.type = "button";
                xbtn.name="xBtn";
                newDiv.appendChild(xbtn);
                xbtn.addEventListener("click", deleteTask, false);

        
            }
        

    
  }




//ADD THE INPUTTED TASK
function getToDoApi() {
    
    var input = document.getElementById("task-entered").value;
    var data={
        text: input
    }
    document.getElementById("task-entered").value="";
    console.log(input);
    var xhttp = new XMLHttpRequest();
  
  xhttp.onreadystatechange = function(){
      if (this.readyState == 4 && this.status == 200) {
            window.location.reload();
          var nameObject = JSON.parse(this.responseText);
          console.log(nameObject);
          displayToDo(nameObject.text);
      }
      else if (this.readyState==4){
        console.log(this.responseText)
      }
  };
  
  xhttp.open("POST", 'https://cse204.work/todos', true);
  xhttp.setRequestHeader("x-api-key","5d36de-9e56dc-d665ec-7e0e69-7f948d");
  xhttp.setRequestHeader("Content-type", "application/json");
  xhttp.send(JSON.stringify(data));

  
  }

  


  //CHANGE FROM INC TO COMPLETE
  function modifyTask(){
    var id = this.id;
    var url = "https://cse204.work/todos/" + id; 
    console.log(id);
    var xhttp3 = new XMLHttpRequest();
    var data ={
        completed:true
    }
    xhttp3.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById(id).style.color="lightgreen";
            
        }
        else if(this.readyState==4){
            console.log(this.responseText);
        }
            
            
            document.getElementById("")
        }

        xhttp3.open("PUT", url, true);

        xhttp3.setRequestHeader("Content-type", "application/json");
        xhttp3.setRequestHeader("x-api-key","5d36de-9e56dc-d665ec-7e0e69-7f948d");
        xhttp3.send(JSON.stringify(data));
    };
    
  //This function deletes the task once the xbutton has been pressed
  function deleteTask(){
    var id = this.id;
    var url = 'https://cse204.work/todos/' + id; 
    var xhttp = new XMLHttpRequest();
    console.log(id);
  
  xhttp.onreadystatechange = function(){
      if (this.readyState == 4 && this.status == 200) {
          const element = document.getElementById(id);
          element.replaceChildren();
          element.remove();
      }
  };
  //Deletes task from API
  xhttp.open("DELETE", url, true);
  xhttp.setRequestHeader("x-api-key","5d36de-9e56dc-d665ec-7e0e69-7f948d");
  xhttp.setRequestHeader("Content-type", "application/json");
  xhttp.send();

  //Now need to delete display info for task by deleting div
  
  }






