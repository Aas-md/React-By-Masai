export default function CardCompo({title,children}) {


    return (
      
        <div style={{ backgroundColor: "lightblue" , color: "black", padding:"10px", borderRadius:"5px", border:"none" , width : "50%" , margin : "20px auto"}}>
            <h1>{title}</h1>
            {children}
        </div>
    )

}