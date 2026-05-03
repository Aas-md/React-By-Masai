import  {Link} from 'react-router-dom'

export default function Navbar() {
  return (
   
      <nav style={{  padding: '10px',position: 'fixed', top: 0, width: "100%" }}>
        <Link to="/" style={{margin : "10px",color : "black", textDecoration : "none" }}>Home</Link>
        <Link to="/about" style={{margin : "10px",color : "black", textDecoration : "none" }}>About</Link>
    
      </nav>
  
  );
}
