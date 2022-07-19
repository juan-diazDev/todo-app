const Checkbox = (props) => {

  const {
    data: { id, input, done },
    onChange} = props
  return (
    <>
    <label className="todo-list">
      <input className="checkbox" type="checkbox"  name={id} defaultChecked={done} onChange={onChange}/>
      <div>{input}</div>
    </label>
    </>
  )
}

export default Checkbox
