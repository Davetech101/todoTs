import { useRef } from "react";
import "./styles.css"


const NewTodo: React.FC<{onAddTodo: (text: string) => void}> = (props) => {
 const textInputRef = useRef<HTMLInputElement>(null)

  const submitHandler = (e: React.FormEvent) => {
   e.preventDefault()
   const enteredText = textInputRef.current!.value
   if (enteredText.trim().length === 0) {
     //throw an error
     return;
   }

   props.onAddTodo(enteredText)
  }

  return (
    <form className="form" action="" onSubmit={submitHandler}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={textInputRef}/>
      <button>Add Todo</button>
    </form>
  )
}

export default NewTodo