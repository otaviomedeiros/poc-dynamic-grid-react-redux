import React from "react";
import { connect } from "react-redux";

const GridHeaderColumn = ({ gridColumn, onMoveRight, onMoveLeft }) => {
  console.log("GridHeaderColumn");
  return (
    <th key={gridColumn.id}>
      <button onClick={() => onMoveLeft(gridColumn.id)}>L</button>
      {gridColumn.name}
      <button onClick={() => onMoveRight(gridColumn.id)}>R</button>
    </th>
  );
};

const mapStateToProps = (state, ownProps) => {
  return { gridColumn: state.gridColumns.byId[ownProps.columnId] };
};

const mapDispatchToProps = dispatch => {
  return {
    onMoveRight: id => dispatch({ type: "MOVE_RIGHT", id }),
    onMoveLeft: id => dispatch({ type: "MOVE_LEFT", id })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GridHeaderColumn);
