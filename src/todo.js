
let anonymousTodo = [];
export default class Todo{
    constructor(title, dueDate, priority = 'low', description = ''){
        this.title = title;
        this.dueDate = dueDate;
        this.priority = priority;
        this.description = description
    }
 
}

export function createTodo(title,duedate,priority,discription){
    anonymousTodo.push(new Todo(title,duedate,priority,discription));
}

export function getAnounymousTodo(){
    return anonymousTodo;
}

export function setAnounymousTodo(todo){
    anonymousTodo.push(todo);
}

export function sliceAnonymous(){
    
}