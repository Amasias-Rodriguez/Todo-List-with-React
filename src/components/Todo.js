import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/fontawesome-free'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
export const Todo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
    return (
        <div className='Todo'>
            <p onClick={() => toggleComplete(task.id)} className={`${task.completed ? 'completed' : ""}`}>{task.task}</p>
            <dic>
                <FontAwesomeIcon icon={faPenToSquare} onClick={() => editTodo(task.id)} />
                <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)} />
            </dic>
        </div>
    )
}
