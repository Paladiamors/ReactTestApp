import React from "react";
import { Table } from "reactstrap";

export function SimpleTable(data, styles) {
    // https://reactstrap.github.io/components/tables/
    // information on how to use these here
      const columns = Object.keys(data[0]);
      var counter = 0;
  
    return (
      <Table {...styles}>
        <thead>
          <tr>
            {columns.map((column) => {
              return <th key={counter++}>{column}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((row) => {
            return (
              <tr key={counter++}>
                {columns.map((column) => (
                  <td key={counter++}>{row[column]}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </Table>
    );
  }

