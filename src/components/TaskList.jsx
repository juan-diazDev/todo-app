import React from 'react'
import Checkbox from './Checkbox'



  const TaskList = (props) => {

  const { list, setList } = props

  const handleChange = (e) => {
    const { name, checked } = e.target

    const updateList = list.map(item => ({
      ...item,
      done: item.id === name ? checked : item.done
  }))
  setList(updateList)
}

  const handleDelete = (e) => {
    const updateList = list.filter(item => !item.done);
    setList(updateList)
  }


  const loop = list.map(item => (
    <Checkbox key={item.id} data={item} onChange={handleChange}/>
))

  return (
    <div className='all-todos'>
      {list.length ? loop : "There's no task"}
      {list.length ? (<p><button className='button-' onClick={handleDelete}>Delete all done</button></p>) : null}

    </div>
  )
}

export default TaskList
