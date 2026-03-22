import { useContext } from "react";
import { DataContext } from "../DataContext/DataProvider";

export default function ShowData() {

    let { state, fetchData } = useContext(DataContext);
    console.log(state);

    return (
        <>

            <button onClick={fetchData}>Fetch Data</button>
            {state.loading && <h1>Loading...</h1>}
            {state.error && <h1>{state.error}</h1>}
            {state.data && state.data.map((item) => {
                return (
                    <div key={item.id}>
                        <h1>{item.title}</h1>
                   
                    </div>
                )
            })}

        </>
    )

}