import React from "react";
import TableCell from "./tableCell";

export default function TableRow({ row, color }) {
    return (
        <>
            <tr>
                {row.cells.map((cell) => (
                    <TableCell key={cell.cID} color={color} />
                ))}
            </tr>
        </>
    )
}