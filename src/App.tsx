import Todos from './components/Todos';
import Todo from './types/todo';
import NewTodo from './components/NewTodo';

function App() {
  const todos = [
    new Todo('./components/Todos'),
    new Todo('./components/Todos'),
  ]


  return (
    <div>
      <NewTodo/>
     <Todos todos={todos}/>
    </div>
  );
}

export default App;
