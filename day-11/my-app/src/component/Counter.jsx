import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "./action"

export default function Counter(){

    let count = useSelector((state)=> state.count)
    let dispatch = useDispatch()

    return (
        <>

            <h1>Count : {count}</h1>
            <button onClick={()=> dispatch(increment())}>Increment</button>
            <button onClick={()=> {dispatch(decrement())}}>Decrement</button>
        </>
    )
}