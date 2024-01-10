import React, { useState } from 'react'
import './Todo.css'

const Todo = () => {
    const [todo, setTodo] = useState('');
    const [allTodo, setAllTodo] = useState([]);
    const [isEdit, setIsEdit] = useState(false)

    const handleAddTask = () => {
        if (todo) {
            const obj = {
                taskName: todo,
                id: allTodo[allTodo.length - 1]?.id + 1 || 1
            }
            setAllTodo(p => [...p, obj]);
            setTodo("")
        }
    }

    const handleDeleteTodo = (id) => {
        const filteredArray = allTodo.filter(item => item.id !== id)
        setAllTodo(filteredArray);
    }

    const handleEditTodo = (item) => {
        setIsEdit(item.id)
        setTodo(item.taskName);
    }

    const handleEdit = () => {
        const editedTodo = allTodo.map(item => {
            if (item.id === isEdit) {
                return { ...item, taskName: todo }
            }
            return { ...item }
        })
        setAllTodo(editedTodo)
        setTodo("")
        setIsEdit(false)
    }

    return (
        <>
            <div className='todo-container'>
                <input
                    type="text"
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                />
                {
                    isEdit ? <button onClick={handleEdit}>Edit</button> : <button onClick={handleAddTask}>Add</button>
                }
            </div>
            <div>
                {allTodo.map((item, index) => {
                    return (
                        <div
                            key={item.id}
                            className='todo-display'
                        >
                            <span>{index + 1}.</span>
                            <span>{item.taskName}</span>
                            <button onClick={() => handleEditTodo(item)}>Edit</button>
                            <button onClick={() => handleDeleteTodo(item.id)}>Delete</button>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Todo
