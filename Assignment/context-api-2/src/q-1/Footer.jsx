import { useContext } from "react"
import {AuthContext} from "./DataContext"

export default function Footer() {

    let auth = useContext(AuthContext)
    return (
        <>
        <div className="footer">
         { auth.isLogin ?  <h1>Congrats you have successfully LogedIn</h1> :  <h1>You are LogedOut</h1>}
        </div>
        </>
    )
}