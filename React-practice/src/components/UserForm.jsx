

export default function ColorBox({onSubmit}){
    return(
        <form className="container" onSubmit={onSubmit}>
            <input type="text" placeholder="name..." required />
            <input type="text" placeholder="last name..." required />
            <button className="submit-btn" type="submit">Submit</button>
        </form>
    )
}