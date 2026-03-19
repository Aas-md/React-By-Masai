import { createContext, useState } from "react";


export let DataContext = createContext();

export  function DataProvider({ children }) {

    let [state, setState] = useState({
        loading : false,
        error : null,
        data : null
    });

    let url = "https://jsonplaceholder.typicode.com/posts";

    let fetchData = async  () => {
        setState({
            ...state,
            loading : true
        });

      try{
          let response = await fetch(url);
        let res = await response.json()
        setState({
            ...state,
            loading : false,
            data : res
        });
      }catch(err){
        setState({
            ...state,
            loading : false,
            error : "Something went wrong"
        })
      }

    }

    return (
        <DataContext.Provider value={{ state, fetchData }}>
            {children}
        </DataContext.Provider>
    );

}