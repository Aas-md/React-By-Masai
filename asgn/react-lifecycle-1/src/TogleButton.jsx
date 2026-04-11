export default function TogleButton({ toggle, setToggle }) {
    return (
        <button 
            onClick={() => setToggle(!toggle)} 
            style={{
                display: "block",
                margin: "0 auto",
                color: toggle ? "green" : "red",
                padding: "10px 20px",
                fontSize: "16px"
            }}
        >
            {toggle ? "ON" : "OFF"}
        </button>
    )
}