
import useFetch from "./useFetch"


export default function Info(){

    let {data , error , loading} = useFetch('https://jsonplaceholder.typicode.com/users')

    if(loading){
        return <p>Data is loading</p>
    }

    if(error){
        return <p>{error.message}</p>
    }

    return (
        <div>
            <ul>
            {
                data.map(item => <li>{item.name}</li>)
            }
            </ul>
        </div>
    )
}