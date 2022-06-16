import Todo from "../types/todo";
import EachTodo from "./EachTodo";
import "./styles.css";

const Todos: React.FC<{todos: Todo[]; onDelTodo: (id: string) => void}> = (props) => {
  return (
    <ul className="todos">
      {props.todos.map(todo => (<EachTodo key={todo.id} text={todo.text} onDelTodo={props.onDelTodo.bind(null, todo.id)}/>))}
    </ul>
  );
};

export default Todos;
