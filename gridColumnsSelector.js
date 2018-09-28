import React from "react";
import { connect } from "react-redux";

const GridColumnsSelector = ({ columnIds, toggleColumn }) => {
  return (
    <div>
      <div>Click on the Field Name to Add/Remove it to/from the Grid</div>
      <ul>
        {columnIds.map(columnId => (
          <li key={columnId} onClick={() => toggleColumn(columnId)}>
            {columnId}
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = ({ gridColumns }) => {
  return {
    columnIds: gridColumns.ids
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleColumn: columnId =>
      dispatch({
        type: "TOGGLE_COLUMN",
        columnId
      })
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GridColumnsSelector);
