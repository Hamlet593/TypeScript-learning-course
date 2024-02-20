import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos/1";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then((response) => {
  const todo = response.data as Todo;
  const id = todo.id;
  const title = todo.title;
  const finished = todo.completed;

  logTodo(7, 8, 9);
});

function logTodo(id: boolean, title: boolean, completed: boolean) {
  console.log(
    `ToDo id: ${id}, ToDo Title: ${title} Todo Completed: ${completed}`
  );
}
