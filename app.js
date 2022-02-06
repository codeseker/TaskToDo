console.log("hello");
showTaks();
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', function (e) {
   // console.log("Add a task clicked");

    // get the task and tittle from here
    let addTitle = document.getElementById('addTitle');
    let addTask = document.getElementById('addTxt');

    // objects of title and tasks from local storage
    let title = localStorage.getItem('title');
    let task = localStorage.getItem('task');

    // giving values to title and tasks object
    if (title == null) {
        titleObj = [];
    }
    else {
        // convert titleObj object values in strings by js function JSON.parse()
        titleObj = JSON.parse(title);
    }
    if (task == null) {
        taskObj = [];
    }
    else {

        // convert taskObj object values in strings by js function JSON.parse()
        taskObj = JSON.parse(task);
    }

    // pushing strings values to the objects

    titleObj.push(addTitle.value);
    taskObj.push(addTask.value);
    //   console.log(addTitle.value);
    //   console.log(addTask.value);

    // updating local storage

    localStorage.setItem('title', JSON.stringify(titleObj));
    localStorage.setItem('task', JSON.stringify(taskObj));
    //   console.log(titleObj);
    //   console.log(taskObj);

    addTitle.value = "";
    addTask.value = "";

    showTaks();

});

function showTaks() {
    // console.log("Tasks will be visible");
    
    let title = localStorage.getItem('title');
    if (title == null) {
        titleObj = [];
    }
    else {
        // convert titleObj object values in strings by js function JSON.parse()
        titleObj = JSON.parse(title);
    }
    let task = localStorage.getItem('task');
    if (task == null) {
        taskObj = [];
    }
    else {

        // convert taskObj object values in strings by js function JSON.parse()
        taskObj = JSON.parse(task);
    }

    let html = "";
    for (let j=0, i = 0; j<taskObj.length,i < titleObj.length; j++, i++) {
        html += `<div id="notes" class="row container-fluid">
        <div class="card my-3">
            <div class="card-body">
              <h5 class="card-title" id="titleHead">Title: ${titleObj[i]}</h5>
              <p class="card-text">${taskObj[i]}.</p>
              <button id="${i}" onclick="deleteNote(this.id)" class="btn btn-outline-danger">Delete Note</button>
            </div>
          </div>
    </div>`;
    }

    let titleElem = document.getElementById('notes');
    if(titleObj.length != 0)
    {
        titleElem.innerHTML = html;
    }
    else if(taskObj.length == 0 && titleObj.length == 0){
        titleElem.innerHTML = `Nothing to show here use "Add a task", by Entering title and tasks to add a task`;
    }
    let taskElem = document.getElementById('notes');
    if(taskObj.length != 0)
    {
        taskElem.innerHTML = html
    }
    
}

function deleteNote(index) {
    
    let title = localStorage.getItem('title');
    if (title == null) {
        titleObj = [];
    }
    else {
        // convert titleObj object values in strings by js function JSON.parse()
        titleObj = JSON.parse(title);
    }
    let task = localStorage.getItem('task');
    if (task == null) {
        taskObj = [];
    }
    else {

        // convert taskObj object values in strings by js function JSON.parse()
        taskObj = JSON.parse(task);
    }
    titleObj.splice(index,1);
    taskObj.splice(index,1);
    localStorage.setItem('title', JSON.stringify(titleObj));
    localStorage.setItem('task', JSON.stringify(taskObj));
    showTaks();
}






