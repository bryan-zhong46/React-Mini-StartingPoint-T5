import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
// import "/components/table";
import Table from "../components/table";

const App = () => {

  const [rowCount, setRowCount]=useState(3);
  function addRow() {setRowCount(rowCount+1)}

  function changeColor() {setCellColor(cellColor)}

  return (
    <div className="app">
      <h1 className="title">Hello Team 5</h1>
     
      <Table rowCount={rowCount} />
      
      <button onClick={addRow}>Add Row</button>
      <button>Add Column</button>
     {/* <select>
      <option>Yellow</option>
      <option>Red</option>
     </select> */}

      {/* making the colorpicker */}
      <input type="color"  name="colorPicker" id="cellColor" />
      

    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
