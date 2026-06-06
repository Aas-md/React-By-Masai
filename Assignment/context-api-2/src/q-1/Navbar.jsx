import { useContext } from 'react'
import {AuthContext} from './DataContext'
import './navbar.css'

export default function Navbar() {

    let auth = useContext(AuthContext)
  
    return (
        <div className="navbar">
           <h3 className='btn-login' onClick={auth.handleLogin} >Login</h3>
           <h4  className='btn-login' onClick={auth.handleLogout}>Logout</h4>
        </div>
    )
}