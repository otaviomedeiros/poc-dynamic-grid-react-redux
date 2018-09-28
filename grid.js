import React from "react";
import GridHeader from "./gridHeader";
import GridBody from "./gridBody";
import GridColumnsSelector from "./gridColumnsSelector";

const Grid = () => {
  return (
    <div>
      <GridColumnsSelector />
      <table>
        <GridHeader />
        <GridBody />
      </table>
    </div>
  );
};

export default Grid;
