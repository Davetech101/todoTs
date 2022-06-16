import { useState } from 'react';
import Todos from './components/Todos';
import Todo from './types/todo';
import NewTodo from './components/NewTodo';

function App() {
  const [todos, setTodos] = useState<Todo[]>([])

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText)

    setTodos(todos => (todos.concat(newTodo)))
  }

  const delTodoHandler = (todoId: string) => { 
    setTodos(todos => todos.filter(todo => todo.id !== todoId))
  }

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler}/>
     <Todos todos={todos} onDelTodo={delTodoHandler}/>
    </div>
  );
}

export default App;
