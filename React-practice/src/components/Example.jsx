

export default function Example(){

    let array = ['breakfast', 'gym', 'English', 'walk']

    return (
        <div className="toDoList-container">

            <h1 className="heading">ToDoList</h1>

            <div>
                <input className="input" type="text" placeholder="Enter a task..."/>
                <button className="add-btn">Add</button>
            </div>

            <p className="tasks-left">Tasks left : {}</p>

            <ul>
                {
                array.map(
                    (item , index)=>{
                        return <li key={index}>
                            <input className="checkbox" type="checkbox"/>
                            <span className="toDoList">{item}</span>
                            <button className="delete-btn">Delete</button>
                        </li>
                    }
                )
                }
            </ul>

            <button className="clear-completed">Clear Completed</button>
        </div>
    )
}