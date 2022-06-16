import "./styles.css";

const EachTodo: React.FC<{text: string; onDelTodo: () => void }> = (props) => {
  return (
    <li className="item" onClick={props.onDelTodo }>{props.text}</li>
  )
}

export default EachTodo