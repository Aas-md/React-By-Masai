import { useEffect, useRef, useState } from "react";

export default function Home() {
  let [data, setData] = useState([]);
  
  let url = "https://rickandmortyapi.com/api/character";

    let currPage = useRef(1)

  let fetchData = async () => {
    let response = await fetch(url);
    let res = await response.json();
    setData(res.results);
  };

  useEffect(() => {
    fetchData();
  }, []);

  let handlePrev = ()=>{
    currPage.current -=1
    console.log(currPage.current)
  }

  return (
    <>
      <h1>Hello world home page </h1>

      <div>
        {data.map((item) => (
          <div key={item.id}>
            <h1>ID : {item.id}</h1>
            <h2>Name : {item.name}</h2>
            <p>species : {item.species}</p>
            <p>status : {item.status}</p>
            <p>Gender : {item.gender}</p>
          </div>
        ))}
      </div>
      {/* {console.log(currPage.current)}    */}

        <button onClick={handlePrev}>Prev</button>
        
    </>
  );
}
