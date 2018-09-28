import React from "react";
import { connect } from "react-redux";
import GridRow from "./gridRow";

const GridBody = ({ rowIds }) => {
  return (
    <tbody>
      {rowIds.map(rowId => (
        <GridRow key={rowId} rowId={rowId} />
      ))}
    </tbody>
  );
};

const mapStateToProps = ({ gridRows }) => {
  return { rowIds: gridRows.ids };
};

export default connect(mapStateToProps)(GridBody);
