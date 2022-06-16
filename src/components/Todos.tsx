import Todo from "../types/todo";
import EachTodo from "./EachTodo";

const Todos: React.FC<{todos: Todo[]}> = (props) => {
  return (
    <ul>
      {props.todos.map(todo => (<EachTodo key={todo.id} text={todo.text}/>))}
    </ul>
  );
};

export default Todos;
