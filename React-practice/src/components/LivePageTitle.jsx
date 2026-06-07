import { useEffect , useState } from "react";


export default function LivePageTitle(){

    const [inputValue , setInputValue] = useState('')

    useEffect(()=>{
        document.title = inputValue || "Live Page Title";
    }, [inputValue])

    return (
        <div className="container">
            <h1>Live Page Title</h1>
            <input type="text" placeholder="Type something..." value={inputValue} onChange={(e)=> setInputValue(e.target.value)}/>
            <p>You typed : {inputValue}</p>
            <p>Characters : {inputValue.length}</p>
        </div>
    )
}