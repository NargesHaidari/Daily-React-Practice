
// https://jsonplaceholder.typicode.com/posts

import { useEffect, useState } from "react"

export default function Example(){

    let [data, setData] = useState([]);
    let [loading, setLoading] = useState(true);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
            setData(data);
            setLoading(false)
        })
    }, [])

    return (
        <div className="container">
            <h1>Data List</h1>

            {
            loading ? (
                <p>Loading...</p>
            ) : (
                <ul>
                    {
                    data.map(
                        item => <li key={item.id}>{item.title}</li>
                    )
                    }
                </ul>
            )
            }

        </div>
    )
}