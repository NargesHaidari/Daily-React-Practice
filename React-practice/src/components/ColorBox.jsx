

export default function ColorBox({onClick}){
    return(
        <div className="container">
            <button onClick={onClick} className="btn">Click me</button>
            <div className="color-box"></div>
        </div>
    )
}