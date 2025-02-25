import React from 'react'

const Tasklist = () => {
    const list = ["complete assignment", "read a book", "workout", "cook dinner"];

    return (
        <div>
            <h1>Tasklist</h1>
            <ul>
                {list.map((task, index) => (
                    <li key={index}>{task}</li>
                ))}
            </ul>
        </div>

    )
}

export default Tasklist