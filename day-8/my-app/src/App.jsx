import { useState } from "react";
import "./App.css";
import { Routes, Route, Link, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { use } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>

      <Routes>
        <Route path="/" element={<ProductList/>}/>
        <Route path="/products/:id" element={<ShowProduct/>}/>
      </Routes>
    </>
  );
}

export default App;



function ProductList(){

  let url = "https://fakestoreapi.com/products"
  let [products,setProducts] = useState([])
  let fetchProducts = async ()=>{

    let response = await fetch(url)
    let res = await response.json()
    setProducts(res)
  }

    useEffect(()=>{
         fetchProducts()
    },[])


  return (
    <>

      <h1>Producs</h1>

      <div style={{display : "grid",gridTemplateColumns : "repeat(3,1fr)", gap: "10px"}}>
        {products.map((product)=>(
         <div key={product.id} style={{border:"1px solid black"}}>
           <img src={product.image} width="150" alt="" />
           <h3>{product.title}</h3>
           <Link to={`/products/${product.id}`}>Show Details</Link>
         </div>
        ))}
      </div>
    </>
  )
}


function ShowProduct(){

  let {id} = useParams()
  console.log(id)
  let [product,setProduct] = useState(null) 

  let url = `https://fakestoreapi.com/products/${id}`

  let fetchProduct = async ()=>{
    let response = await fetch(url)
    let res = await response.json()
    setProduct(res)
  }

  useEffect(()=>{
    fetchProduct()
  },[])


  if(!product){
    return <h1>Loading...</h1>
  }

  return (
    <>
      <h1>Show Product Page</h1>
      {product && (
        <>
          <img src={product.image} width="150" alt={product.title} />
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>Price: ${product.price.toFixed(2)}</p>
        </>
      )}
    </>
    )
}

function Navbar(){
  return (
    <>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/">Home</Link>
    </>
  )
}
