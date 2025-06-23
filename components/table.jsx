import React from "react";
import TableRow from "./tablerow";

function random(){
    return Math.floor(Math.random() * 100)
}

export default function Table(props){
    let {rowCount} = props;
    let output = [];
    const filledWithNull = Array(rowCount).fill(null);
    


    return (
        <div>
            <table>
                <tbody>
                    {filledWithNull.map(()=>(
                        <TableRow key={random()}/>
                    ))}
                </tbody>

            </table>
        </div>
    );

};


