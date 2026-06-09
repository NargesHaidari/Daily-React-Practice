
import { useEffect, useState } from "react"
import UserCard from "./UserCard"

export default function Users(){

    let [users, setUsers] = useState([
        {name : "John", id : 1}
    ])

    function handleDelete(){
        setUsers()
    }

    useEffect(()=>{
        alert('component mounted')
    },[])

    return (
        <>

        <h1>Component Lifecycle</h1>
        {
        users.map((user)=> <UserCard name={user.name} key={user.id} id={user.id} onClick={handleDelete}/>)
        }

        </>
    )
}