import React from "react";
import { connect } from "react-redux";

const GridBodyColumn = ({ gridRow, gridColumn, onChange }) => {
  return (
    <td>
      <input
        defaultValue={gridRow[gridColumn.id]}
        onChange={inputValue =>
          onChange(gridRow, gridColumn, inputValue.target.value)
        }
      />
    </td>
  );
};

const mapStateToProps = ({ gridRows, gridColumns }, ownProps) => {
  return {
    gridRow: gridRows.byId[ownProps.rowId],
    gridColumn: gridColumns.byId[ownProps.columnId]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onChange: (gridRow, gridColumn, newValue) =>
      dispatch({
        type: "UPDATE_ITEM",
        id: gridRow.key,
        payload: { ...gridRow, [gridColumn.id]: newValue }
      })
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GridBodyColumn);
