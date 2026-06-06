import { useState } from "react"


export default function TodoList(){

    let [inpValue, setInpValue] = useState('')
    let [toDoList , setToDoList] = useState([{text:'breakfast', completed:false}])

    function handleClick(){
        setToDoList([...toDoList, {text:inpValue, completed:false}]);
        setInpValue('')
    }

    function handleDelete(indexToDel){
        setToDoList(
            toDoList.filter((item , index)=>(index !== indexToDel))
        )
    }

    function handleCheck(indexToCheck){
        setToDoList(
            toDoList.map((item, index) =>
                index === indexToCheck
                    ? {
                        ...item,
                        completed: !item.completed
                    }
                    : item
            )
        );
    }

    function clearCompleted(){
        setToDoList(
            toDoList.filter(item => !item.completed)
        );
    }

    return (
        <div className="toDoList-container">

            <h1 className="heading">ToDoList</h1>

            <div className="inp-btn">
                <input className="input" value={inpValue} type="text" placeholder="Enter a task..." onChange={(e)=>{setInpValue(e.target.value)}}/>
                <button className="add-btn" onClick={handleClick}>Add</button>
            </div>

            <p className="tasks-left">Tasks left : {}</p>

            <ul>
                {
                toDoList.map(
                    (item , index)=>{
                        return <li key={index}>
                            <input type="checkbox" className="checkbox" checked={item.completed}
                            onChange={(e)=>{handleCheck(index)}}/>
                            <span className="toDoList">{item.text}</span>
                            <button className="delete-btn" onClick={()=>{handleDelete(index)}}>Delete</button>
                        </li>
                    }
                )
                }
            </ul>

            <button className="clear-completed" onClick={clearCompleted}>Clear Completed</button>
        </div>
    )
}