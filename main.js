window.addEventListener('load', () => {
    const form =document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const list_el = document.querySelector("#tasks");
   

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        //the task the user has written as an input
        const task = input.value;

        if (!task) {
            alert("Please fill out a task")
            return;
        }

        //create a div with the class="task"
        const task_el = document.createElement("div");
        task_el.classList.add("task");

        //create a div with a class="content" 
        const task_content_el = document.createElement("div")
        task_content_el.classList.add("content")
        

        //task_content_el is a child of task_el
        task_el.appendChild(task_content_el);

        //create an inputelement with a class = "text", type="text" and value the actual task
        const task_input_el = document.createElement("input");
        task_input_el.classList.add("text");
        task_input_el.type = "text";
        task_input_el.value = task;
        task_input_el.setAttribute("readonly", "readonly");

        //the task_input_el is a child of task_content_el
        task_content_el.appendChild(task_input_el);

        const task_actions_el = document.createElement("div");
        task_actions_el.classList.add("actions");

        const task_edit_el = document.createElement("button");
        task_edit_el.classList.add("edit");
        task_edit_el.innerText = "EDIT";

        const task_delete_el = document.createElement("button");
        task_delete_el.classList.add("delete");
        task_delete_el.innerText = "DELETE";

        task_actions_el.appendChild(task_edit_el);
        task_actions_el.appendChild(task_delete_el);
        

        task_el.appendChild(task_actions_el);

        //task_el is a child of the tasks list (== list_el)
        list_el.appendChild(task_el);

        //clear the input field 
        input.value="";

        //create the Edit function
        task_edit_el.addEventListener('click', () => {

            if (task_edit_el.innerText == "EDIT") {
                task_edit_el.innerText = "SAVE";
                task_input_el.removeAttribute("readonly");
                task_input_el.focus(); //this specific element will be focused ==> it will recieve keyboard and other events
            }
            else {
                task_edit_el.innerText = "EDIT";
                task_input_el.setAttribute("readonly", "readonly");
            }
        })

        //create the delete function
        task_delete_el.addEventListener('click', () => {
            if (confirm("Are you sure you want to delete this task?")){
                list_el.removeChild(task_el);
            }
            
        })

        
    })
})

