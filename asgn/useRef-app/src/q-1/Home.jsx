import { useEffect, useRef, useState } from "react";

export default function Home() {
  let [data, setData] = useState([]);
  let [pageData, setPageData] = useState([]);
  let currPage = useRef(1);


  let fetchData = async () => {
    let url = `https://rickandmortyapi.com/api/character?page=${currPage.current}`;
    let response = await fetch(url);
    let res = await response.json();
    setData(res.results);

  };

  useEffect(() => {
    console.log("useEffect called");
    fetchData();
  }, [pageData]);

  let handlePrev = () => {
    currPage.current -= 1;
    let currData = data.slice(0, 10);
    setPageData(currData);
  };

  let handleNext = ()=>{
    currPage.current +=1
   let currData = data.slice(0,10)
    setPageData(currData)
  }

  return (
    <>
      <h1>Hello world home page </h1>

      <div>
        {pageData.map((item) => (
          <div key={item.id}>
            <h1>ID : {item.id}</h1>
            <h2>Name : {item.name}</h2>
            <p>species : {item.species}</p>
            <p>status : {item.status}</p>
            <p>Gender : {item.gender}</p>
          </div>
        ))}
      </div>

      <button onClick={handlePrev}>Prev</button>
      <button onClick={handleNext}>Next</button>

    </>
  );
}
