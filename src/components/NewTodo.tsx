const NewTodo = () => {
  const submitHandler = (e: object) => {
     console.log(e);
     
  }

  return (
    <form action="" onSubmit={submitHandler}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text"/>
      <button>Add Todo</button>
    </form>
  )
}

export default NewTodo