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
]

const App = () => {
  // define state variables
  const [grid, setGrid] = useState(initialGrid);

  return (
    <div className="app">
      <h1 className="title">Grid Maker</h1>

      <Table grid={grid} />

    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
