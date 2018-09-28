import React from "react";
import { connect } from "react-redux";
import GridBodyColumn from "./gridBodyColumn";

const GridRow = ({ rowId, columnIds }) => {
  console.log("GridRow");
  return (
    <tr>
      {columnIds.map(columnId => (
        <GridBodyColumn key={columnId} columnId={columnId} rowId={rowId} />
      ))}
    </tr>
  );
};

const mapStateToProps = ({ gridColumns }, ownProps) => {
  return { rowId: ownProps.rowId, columnIds: gridColumns.selectedIds };
};

export default connect(mapStateToProps)(GridRow);
