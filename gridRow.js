import React from "react";
import { connect } from "react-redux";
import GridBodyColumn from "./gridBodyColumn";

const GridRow = ({ rowId, columnIds }) => {
  return (
    <tr>
      {columnIds.map(columnId => (
        <GridBodyColumn key={columnId} columnId={columnId} rowId={rowId} />
      ))}
    </tr>
  );
};

const mapStateToProps = ({ gridColumns }, ownProps) => {
  return { rowId: ownProps.rowId, columnIds: gridColumns.ids };
};

export default connect(mapStateToProps)(GridRow);
