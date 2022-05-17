import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

// define structure of object
interface Todo {
  id: number;
  title: string;
  completed: boolean;
};

axios.get(url).then(res => {
  const todo = res.data as Todo;
  const { id, title, completed } = todo;
  console.log(`The todo with ID ${id}: ${title} is ${completed}`);
});