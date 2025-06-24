import React from "react";

export default function TableCell({ color }) {
    function handleOnClick(e) {
        // Change the background color of the cell to the selected color
        e.target.style.backgroundColor = color;
    }


    return (
        <>
            <td onClick={(e) => {handleOnClick(e)}}>
            </td>
        </>
    )
}