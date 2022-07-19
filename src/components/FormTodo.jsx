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
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleInput} /* value={input} *//>
        <button disabled={input ? "" : "disabled"}>
          Add
        </button>
      </form>

    </div>
  )
}

export default FormTodo
