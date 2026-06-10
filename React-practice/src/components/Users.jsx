
import { useEffect, useState } from "react"
import UserCard from "./UserCard"

export default function Users({onClick}){

    let [users, setUsers] = useState([
        {name : "John", id : 1},
        {name : "Jack", id : 2},
        {name : "Sara", id : 3},
        {name : "Alex", id : 4},
    ])

    function handleDelete(id){
        setUsers(users.filter(user => user.id !== id));
        alert('Component updated')
    }

    useEffect(()=>{
        alert("Component mounted")
    },[])


    return (
        <div className="container">

        <h1>Component Lifecycle</h1>
        {
        users.map((user)=> <UserCard name={user.name} key={user.id} id={user.id} onClick={()=>handleDelete(user.id)}/>)
        }
        <button onClick={onClick} className="unmounting-btn" >Unmounting</button>

        </div>
    )
}