
import { useContext } from "react"
import { NewContext } from "../NewContext"

export default function GrandChild(){

    let data = useContext(NewContext)

    return (
        <>
            <h2>This blongs to the GrandChild component</h2>
            <h3>{data.isLogin?'Welcome':'please log in'}</h3>
            <h3>Your browser is : {data.browser}</h3>
        </>
    )
}