export default function Counter({count,setCount}){

    let handleCount = ()=>{

        setCount((prev)=>{
            if(prev == 0)return prev;
            return prev-1;
        })

    }

    return (
        <>
            <h4>Counter value is : {count}</h4>
            <button onClick={()=> setCount(prev => prev+1)}>Increment</button>
            <button onClick={handleCount}>Decrement </button>
        </>
    )
}