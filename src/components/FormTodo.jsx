import { useState } from "react";

const FormTodo = (props) => {

  const { handleAddItem } = props
  const [input, setInput] = useState('')
  const handleInput = (e) => setInput(e.target.value)

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddItem({
      done: false,
      id: (+new Date()).toString(),
      input
    })
    setInput("")
  }

  return (
    <div className="form-todo">
      <h3>Add ToDo</h3>
      <form onSubmit={handleSubmit}>
        <input className="input__form" type="text" value={input} onChange={handleInput} />
        <button className='button--' disabled={input ? "" : "disabled"}>
          Add
        </button>
      </form>
      <hr className="horizon-line"/>
      <h3>-- ToDo List --</h3>
    </div>
  )
}

export default FormTodo
