import React from "react";
import GridHeader from "./gridHeader";
import GridBody from "./gridBody";
import GridColumnsSelector from "./gridColumnsSelector";
import NewItemForm from "./newItemForm";

const Grid = () => {
  return (
    <div>
      <GridColumnsSelector />
      <NewItemForm />
      <table>
        <GridHeader />
        <GridBody />
      </table>
    </div>
  );
};

export default Grid;
