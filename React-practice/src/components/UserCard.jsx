
export default function UserCard({name , onClick}){

    return(
        <div className="user-card">
            <p>name : {name}</p>
            <button onClick={onClick} className="remove-btn" >Remove</button>
        </div>
    )
}