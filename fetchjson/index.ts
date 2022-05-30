import axios from 'axios';

const Url = "https://jsonplaceholder.typicode.com/todos/1";

interface Todo {
    id:number;
    title:string;
    completed:boolean;
}


axios.get(Url).then(response =>{
    console.log(response.data);
    const todo = response.data as Todo;

    const id = todo.id;
    const title = todo.title;
    const completed = todo.completed;

    console.log(
        `The Todo with Id: ${id}
        Has a title of :${title}`

    );
    
    
})