import BasicCard from "./BasicCard";

export default function MainContent() {
  return (
    <div style={{display: "flex", flexWrap: "wrap",justifyContent : "space-evenly"}}>
      {(() => {
         let row = [];
        for (let i = 0; i < 50; i++) {
          row.push(<BasicCard style={{ margin: "10px",background : "#F0F8FF" }} key={i} />)
        }
        return row
      })()}
    </div>
  );
}
