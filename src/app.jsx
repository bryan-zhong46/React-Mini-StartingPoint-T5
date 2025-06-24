import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import Table from "./table";

// Define the initial grid as an array of row objects
// Each row object contains an rID and an array of cell objects with cID
const initialGrid = [
  {rID: 0,
   cells: [{cID: 0}, {cID: 1}, {cID: 2}]
  },
  {rID: 1,
   cells: [{cID: 0}, {cID: 1}, {cID: 2}]
  },
  {rID: 2,
   cells: [{cID: 0}, {cID: 1}, {cID: 2}]
  },
];

const App = () => {
  // define state variables
  const [grid, setGrid] = useState(initialGrid);
  const [color, setColor] = useState("");

  // get number of rows and columns in the grid
  const rowCount = grid.length;
  let colCount = 0;
  if (grid.length !== 0) {
    colCount = grid[0].cells.length;
  }

  // function to add another row to the grid
  function handleAddRow(colCount) {
    // Create a new row with a unique rID and empty cells
    const cellsArray = [];
    for (let i = 0; i < colCount; i++) {
      cellsArray.push({ cID: i });
    }
    const newRow = {
      rID: rowCount,
      cells: cellsArray
    };
    setGrid([...grid, newRow]);
  }

  // function to add another column to the grid
  function handleAddCol() {
    // Create a new column for each existing row
    const updatedGrid = grid.map((row) => {
      return {
        ...row,
        cells: [...row.cells, { cID: row.cells.length }]
      };
    });
    setGrid(updatedGrid);
  }

  // function to change selected color
  function handleColorChange(newColor) {
    setColor(newColor);
  }

  return (
    <div className="app">
      <h1 className="title">Grid Maker</h1>

      <Table grid={grid} color={color} />

      <button className="add-row" onClick={() => handleAddRow(colCount)}>Add Row</button>
      <button className="add-col" onClick={() => handleAddCol()}>Add Column</button>
      <select className="select-color" onChange={(e) => {handleColorChange(e.target.value)}}>
        <option value="">Select Color</option>
        <option value="red">Red</option>
        <option value="green">Green</option>
      </select>
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);