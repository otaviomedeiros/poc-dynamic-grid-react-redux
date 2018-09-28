import React from "react";
import { connect } from "react-redux";
import GridBodyColumn from "./gridBodyColumn";

const GridRow = ({ rowId, columnIds, onDeleteRow }) => {
  console.log("GridRow");
  return (
    <tr>
      {columnIds.map(columnId => (
        <GridBodyColumn key={columnId} columnId={columnId} rowId={rowId} />
      ))}
      <td>
        <button onClick={() => onDeleteRow(rowId)}>Delete</button>
      </td>
    </tr>
  );
};

const mapStateToProps = ({ gridColumns }, ownProps) => {
  return { rowId: ownProps.rowId, columnIds: gridColumns.selectedIds };
};

const mapDispatchToProps = dispatch => {
  return {
    onDeleteRow: id => dispatch({ type: "DELETE_ITEM", id })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GridRow);
