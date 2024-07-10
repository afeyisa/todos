import createProject,{getProjects} from "./project";
import Todo, {createTodo} from "./todo"

const main = document.getElementById('main');


export function listProjects(projects){
    console.log('hello project')
    renderProjects(projects);
}

export function listTodayTodos(){
    console.log('today todos')
}

export function listUpcamingTodo(){
    console.log('upcaming')
}

export function createTodoForm() {

    main.innerHTML ='';

    // Create title div
    const titleDiv = document.createElement('div');
    const titleLabel = document.createElement('label');
    titleLabel.setAttribute('for', 'title');
    titleLabel.textContent = 'Title';
    const titleInput = document.createElement('input');
    titleInput.setAttribute('id', 'title');
    titleInput.setAttribute('type', 'text');
    titleDiv.appendChild(titleLabel);
    titleDiv.appendChild(titleInput);
    main.appendChild(titleDiv);

    // Create due date div
    const dueDateDiv = document.createElement('div');
    const dueDateLabel = document.createElement('label');
    dueDateLabel.setAttribute('for', 'duedate');
    dueDateLabel.textContent = 'Due Date';
    const dueDateInput = document.createElement('input');
    dueDateInput.setAttribute('id', 'duedate');
    dueDateInput.setAttribute('type', 'date');
    dueDateInput.setAttribute('placeholder', 'duedate');
    dueDateDiv.appendChild(dueDateLabel);
    dueDateDiv.appendChild(dueDateInput);
    main.appendChild(dueDateDiv);


    const project = document.createElement('div');
    const projectLabel = document.createElement('label');
    projectLabel.setAttribute('for','proj');
    projectLabel.textContent = 'Project';
    project.appendChild(projectLabel);


    const ProjectSelect = document.createElement('select');
    ProjectSelect.setAttribute('id','proj');
    let projects = getProjects();

    projects.forEach((proj,index)=>{

        const option = document.createElement('option');
        option.setAttribute('value', proj.name);
        option.textContent = proj.name;
        ProjectSelect.appendChild(option);
    });
    project.appendChild(ProjectSelect);
    main.appendChild(project);



    // Create priority div
    const priorityDiv = document.createElement('div');
    const priorityLabel = document.createElement('label');
    priorityLabel.setAttribute('for', 'priority');
    priorityLabel.textContent = 'Priority';
    const prioritySelect = document.createElement('select');
    prioritySelect.setAttribute('id', 'priority');

    const optionLow = document.createElement('option');
    optionLow.setAttribute('value', 'low');
    optionLow.textContent = 'low';
    const optionNormal = document.createElement('option');
    optionNormal.setAttribute('value', 'normal');
    optionNormal.textContent = 'normal';
    const optionHigh = document.createElement('option');
    optionHigh.setAttribute('value', 'high');
    optionHigh.textContent = 'high';

    prioritySelect.appendChild(optionLow);
    prioritySelect.appendChild(optionNormal);
    prioritySelect.appendChild(optionHigh);

    priorityDiv.appendChild(priorityLabel);
    priorityDiv.appendChild(prioritySelect);
    main.appendChild(priorityDiv);

    // Create description div
    const descriptionDiv = document.createElement('div');
    const descriptionLabel = document.createElement('label');
    descriptionLabel.setAttribute('for', 'discription');
    descriptionLabel.textContent = 'Discription';
    const descriptionTextarea = document.createElement('textarea');
    descriptionTextarea.style =  "height: 100px;";
   
    descriptionTextarea.setAttribute('id', 'discription');
    descriptionTextarea.setAttribute('type', 'text');
    descriptionDiv.appendChild(descriptionLabel);
    descriptionDiv.appendChild(descriptionTextarea);
    main.appendChild(descriptionDiv);

    // Create save button
    const saveButton = document.createElement('button');
    saveButton.setAttribute('id', 'save');
    saveButton.textContent = 'save';

    saveButton.addEventListener('click',()=>{
        console.log(getProjects())
        const project = getProjects().find(proj => proj.name === ProjectSelect.value);


        project.todos.push(
            new Todo(
                titleInput.value,
                dueDateInput.value,
                prioritySelect.value,
                descriptionTextarea.value
            )
        );

        console.log(project)
     
            titleInput.value = '';
            dueDateInput.value = '';
            descriptionTextarea.value = "";
            prioritySelect.value = 'low';
    });


    main.appendChild(saveButton);

   
}



export function createProjectForm() {

    main.innerHTML ='';
    // Create container div
    const projectFormContainer = document.createElement('div');

    // Create title label and input
    const titleLabel = document.createElement('label');
    titleLabel.setAttribute('for', 'title');
    titleLabel.textContent = 'Project name';
    const titleInput = document.createElement('input');
    titleInput.setAttribute('id', 'projectname');
    titleInput.setAttribute('type', 'text');
    projectFormContainer.appendChild(titleLabel);
    projectFormContainer.appendChild(titleInput);
    const saveProjectButton = document.createElement('button');
    saveProjectButton.setAttribute('id','saveproject')
    saveProjectButton.textContent = 'save';

    saveProjectButton.addEventListener('click',()=>{
        if(titleInput.value !== ''){
            createProject(titleInput.value);
        }
        titleInput.value ='';
    });

    projectFormContainer.appendChild(saveProjectButton);
    main.appendChild(projectFormContainer);

} 



function renderProjects(projects) {
    main.innerHTML = '';
    projects.forEach((project, index) => {

        const projectDiv = document.createElement('div');
        projectDiv.classList.add('project');
    
        const projectTitle = document.createElement('h2');
       // projectTitle.style = "";
      //  main.style = "display:flex;flex-direction:column;"
        projectTitle.style.cursor = 'pointer'
        projectTitle.onhover = ()=>{
            projectTitle.style = 'background-color:blue'

        }

        projectTitle.onclick = ()=>{

            console.log(projectTitle.textContent)
            projectDetail(getProjects().find(proj => proj.name === projectTitle.textContent));
        }

        projectTitle.textContent = project.name;
        projectDiv.appendChild(projectTitle);
        main.appendChild(projectDiv);
    });
}


function projectDetail(project){

    console.log(project);
    const ptodos = project.todos;
    const projectDetailDiv = document.createElement('div');
    const pname = document.createElement('h2');
    pname.innerText = project.name;
    projectDetailDiv.appendChild(pname);

    ptodos.forEach((todo,index)=>{
        const tod = document.createElement('p');
        tod.classList.add('todo-list');
        tod.innerText = todo.title;
        projectDetailDiv.appendChild(tod);
    })

    main.innerHTML = '';
    main.appendChild(projectDetailDiv);
}

















function createProjectElement(project, projectIndex) {
    // const projectDiv = document.createElement('div');
    // projectDiv.classList.add('project');

    // const projectTitle = document.createElement('h2');
    // projectTitle.textContent = project.name;
    // projectDiv.appendChild(projectTitle);

    const todoList = document.createElement('ul');
    todoList.classList.add('todo-list');

    function listtodo(){
        project.todos.forEach((todo, todoIndex) => {
            const todoItem = document.createElement('li');
            todoItem.style = "display:flex;gap:1px"
            const p_name = document.createElement('p');
            p_name.style = "font-weight:bold"
            p_name.textContent = todo;
    

           const removeButton = document.createElement('input');
           removeButton.setAttribute('type', 'checkbox');
           removeButton.style.cursor = 'pointer'; 
           

            removeButton.onclick = () => {
                project.removeTodo(todoIndex);
                todoList.innerHTML = '';
                listtodo();
                console.log(project)
            };
    
            todoItem.appendChild(removeButton);
            todoItem.appendChild(p_name);
            todoList.appendChild(todoItem);
        });

    };

    //listtodo();
  
    projectDiv.appendChild(todoList);

    const addTodoInput = document.createElement('input');
    addTodoInput.setAttribute('type', 'text');
    addTodoInput.classList.add('add-todo');
    projectDiv.appendChild(addTodoInput);

    const addTodoButton = document.createElement('button');
    addTodoButton.textContent = 'Add ToDo';


    addTodoButton.onclick = () => {
        const todoText = addTodoInput.value.trim();
        if (todoText) {
            project.addTodo(todoText);
            addTodoInput.value = '';
            todoList.innerHTML = '';
            listtodo();
            console.log(project)
        }
    };

    projectDiv.appendChild(addTodoButton);

    return projectDiv;
}