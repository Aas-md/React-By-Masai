import { useState } from "react";

export default function FetchDataQ1() {
  let url = "https://fakestoreapi.com/products";
  let [apiData, setApiData] = useState({ loading: false, error: false, data: true });

  let fetchData = async () => {
    setApiData({ ...apiData, loading: true });
    let response = await fetch(url);
    let data = await response.json();
    setApiData({ ...apiData, loading: false, data: false });

    console.log(data);
  };

  return (
    <>
      <h1>Data fetching</h1>

      {apiData.loading && <span>Loading....</span>}
      {apiData.error && <span>Error occurred!</span>}
      {apiData.data && <span>Data fetched! </span>}
      <button onClick={fetchData}>Fetch Data</button>
    </>
  );
}
