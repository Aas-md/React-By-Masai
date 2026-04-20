export default function ButtonCompo(props) {

    function handleColorChange() {

      if(props.color === "green") {
        props.setColor("yellow")
      }else{
        props.setColor("green")
      }
    }

    return (
        <button  style={{ backgroundColor: props.color , color: props.color === "green" ? "white" : "black", padding:"10px", borderRadius:"5px", border:"none"}} onClick={handleColorChange}>
            Color is : {props.color}
        </button>
    )
}