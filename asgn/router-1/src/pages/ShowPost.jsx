import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function ShowPost(){

    let {id} = useParams()

    let [post,setPost] = useState({})

     let url = `https://dummyjson.com/posts/${id}`;
   

    let fetchData = async ()=>{

        let response =await fetch(url)
        let res = await response.json()
        setPost(res)
        
    }

    useEffect(()=>{
        fetchData()
    },[])

    return (
        <>
            <h1>Show Post</h1>

            <div>
                <h2>Post title : {post.title}</h2>
                <h2>Post id : {post.id}</h2>
                <h2>Post body : {post.body}</h2>
                

            </div>
          
        </>
    )
}