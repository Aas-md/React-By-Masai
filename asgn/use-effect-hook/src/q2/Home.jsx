import { useEffect, useState } from "react";

export default function Home() {
  let [qoute, setQuotes] = useState({});

  let fetchQoates = async () => {
    let url = "https://dummyjson.com/quotes/random";

    try {
      let response = await fetch(url);
      let res = await response.json();
      setQuotes(res);
    } catch (err) {
      console.log("Somethign went wrong in fetching quotes " + err);
    }
  };

  useEffect(() => {
    fetchQoates();

    let id = setInterval(fetchQoates, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <h1>Hello world</h1>

      <div key={qoute.id}>
        <h1>Author : {qoute.author}</h1>
        <h4>Quote : {qoute.quote}</h4>
      </div>

      <button onClick={fetchQoates}>New Quotes</button>
    </>
  );
}
