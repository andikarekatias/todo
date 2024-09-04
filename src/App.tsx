import { useState } from 'react'
import './App.css'
import InputField from './components/InputField';
import { Todo } from './model';
import TodoList from './components/TodoList';

const App: React.FC = () => {

  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([
        ...todos, 
          {
            id: Date.now(), 
            todo: todo, 
            isDone: false
          }
      ]);
      setTodo("");
    }
  }

  console.log(todo);

  return (
    <div className='w-screen h-screen flex flex-col items-center bg-base-200'>
      <h1 className='text-3xl font-bold uppercase my-8'>Todo List</h1>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App
