import { createTodoForm, createProjectForm,listProjects 
    ,listTodayTodos,listUpcamingTodo,renderProjects} from "./dom";

import {getProjects} from "./project";
import './styles/style.css'




const addTodoBtn     = document.getElementById('addtodo');
const addProjectBtn  = document.getElementById('addprojec');
const listprojects   = document.getElementById('listprojects');
const upcamingTodos  = document.getElementById('listtodos');
const listtodaytodos = document.getElementById('listtodaytodo');
const savaTodobtn    = document.getElementById('save')

addTodoBtn.addEventListener('click',createTodoForm);

addProjectBtn.addEventListener('click',createProjectForm);

listprojects.addEventListener('click',()=>{
    console.log(getProjects())
    listProjects(getProjects());
});

upcamingTodos.addEventListener('click',listUpcamingTodo);

listtodaytodos.addEventListener('click',listTodayTodos);






