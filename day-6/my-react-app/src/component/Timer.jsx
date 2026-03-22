import { useEffect, useState } from "react"

export default function Timer(){

    let [second,setSecond] = useState(0)

    useEffect(()=>{
       
        let timer = setInterval(()=>{
            setSecond((prev)=>prev+1)
             console.log(`Timer starts ${second}`)
            
        },1000)

    return (()=>{
        console.log("Compo unmounted")
        clearInterval(timer)
    })
    },[])

    return (
        <h1>Timer : {second}</h1>
    )


}