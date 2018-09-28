import React from "react";
import { connect } from "react-redux";

const GridHeaderColumn = ({ gridColumn }) => {
  return <th key={gridColumn.id}>{gridColumn.name}</th>;
};

const mapStateToProps = (state, ownProps) => {
  return { gridColumn: state.gridColumns.byId[ownProps.columnId] };
};

export default connect(mapStateToProps)(GridHeaderColumn);
