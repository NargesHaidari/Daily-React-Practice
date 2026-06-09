
export default function UserCard({name , id}){

    let handleDelete = ()=>{
        
    }

    return(
        <div>
            <p>name : {name}</p>
            <button onClick={()=> handleDelete(id)}>Remove</button>
        </div>
    )
}