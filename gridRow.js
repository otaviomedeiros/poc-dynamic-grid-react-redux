import React from "react";
import { connect } from "react-redux";
import GridBodyColumn from "./gridBodyColumn";

const GridRow = ({ rowId, columnIds, onDeleteRow, onMoveUp, onMoveDown }) => {
  console.log("GridRow");
  return (
    <tr>
      {columnIds.map(columnId => (
        <GridBodyColumn key={columnId} columnId={columnId} rowId={rowId} />
      ))}
      <td>
        <button onClick={() => onDeleteRow(rowId)}>Delete</button>
      </td>
      <td>
        <button onClick={() => onMoveUp(rowId)}>Up</button>
      </td>
      <td>
        <button onClick={() => onMoveDown(rowId)}>Down</button>
      </td>
    </tr>
  );
};

const mapStateToProps = ({ gridColumns }, ownProps) => {
  return { rowId: ownProps.rowId, columnIds: gridColumns.selectedIds };
};

const mapDispatchToProps = dispatch => {
  return {
    onDeleteRow: id => dispatch({ type: "DELETE_ITEM", id }),
    onMoveUp: id => dispatch({ type: "MOVE_UP", id }),
    onMoveDown: id => dispatch({ type: "MOVE_DOWN", id })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GridRow);
