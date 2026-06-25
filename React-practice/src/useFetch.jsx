import { useState } from "react"

export default function useFetch(url){

    let [data , setData] = useState(null)
    let [error , serError] = useState(null)
    let [loading , setLoading] = useState(true)

    fetch(url)
    .then(response => response.json())
    .then(result => setData(result))
    .catch(e => serError(e))
    .finally(()=>{setLoading(false)})

    return {data , error , loading}

}