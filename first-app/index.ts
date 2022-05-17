import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

// define structure of object
interface Todo {
  id: number;
  title: string;
  completed: boolean;
};

const logToDo = (id: number, title: string, completed: boolean) => {
  console.log(`The todo with ID ${id}: ${title} is ${completed}`);
};

axios.get(url).then(res => {
  const todo = res.data as Todo;
  const { id, title, completed } = todo;
  logToDo(id, title, completed);
});