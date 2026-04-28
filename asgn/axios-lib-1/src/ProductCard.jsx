import axios from "axios";
import { useState } from "react";
import "./ProductCards.css";

export default function ProductCard() {
  let url = "https://fakestoreapi.com/products";
  let [state, setState] = useState({ products: [], isLoading: false, error: null });

  let fetchProducts = async () => {
    try {
      let response = await axios.get(url);
      setState({ products: response.data, isLoading: false, error: null });
    } catch (err) {
      console.log("Error fetching products: ", err);
      setState({ products: [], isLoading: false, error: err });
    }
  };

  return (
    <div>
      <h1>Hello product card</h1>
      <button onClick={fetchProducts}>Fetch Products</button>
      {state.isLoading && <p>Loading...</p>}
      <div className="card-container">
        {state.products.map((product, idx) => (
          <div className="cards" key={idx}>
            <img src={product.image} alt={product.title}  />
            <h2>{product.title}</h2>
            <p>{product.category}</p>
            <p>Price: ${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
