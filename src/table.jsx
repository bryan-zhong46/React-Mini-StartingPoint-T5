import React from "react";
import TableRow from "./tableRow";

export default function Table({ grid, color }) {
    return (
        <>
            <table>
                <tbody>
                    {grid.map((row) => (
                        <TableRow key={row.rID} row={row} color={color} />
                    ))}
                </tbody>
            </table>
        </>
    )
}