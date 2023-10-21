import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/fontawesome-free'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
export const Todo = () => {
    return (
        <div className='Todo'>
            <p>Go to School</p>
            <dic>
                <FontAwesomeIcon icon={faPenToSquare} />
                <FontAwesomeIcon icon={faTrash} />
            </dic>
        </div>
    )
}
