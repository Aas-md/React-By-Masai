import { useContext } from "react"
import { AuthContext } from "./DataContext"

export default function Home() {

   let {isLogin} = useContext(AuthContext)

    return (
        <div>
            {isLogin ? <h1>Welcome to Home Page</h1> : <h1>Please Login to see the content</h1>}
        </div>
    )
}