//  project name
//  project todos

let projects = [];

 class Project {
    constructor(name) {
        this.name = name;
        this.todos = [];
    };

    addTodo(todo) {
        this.todos.push(todo);
    };

    removeTodo(index) {
        if (index >= 0 && index < this.todos.length) {
            this.todos.splice(index, 1);
        }
    };
}

export default function createProject(name){
    let proj = new Project(name)
    projects.push(proj);
    return proj;
};

export function getProjects(){
    return projects;
}

projects.push(new Project("hello0"))
projects.push(new Project("hello1"))
projects.push(new Project("hello2"))

