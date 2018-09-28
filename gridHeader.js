import React from "react";
import { connect } from "react-redux";
import GridHeaderColumn from "./gridHeaderColumn";

const GridHeader = ({ columnIds }) => {
  return (
    <thead>
      <tr>
        {columnIds.map(columnId => (
          <GridHeaderColumn key={columnId} columnId={columnId} />
        ))}
      </tr>
    </thead>
  );
};

const mapStateToProps = ({ gridColumns }) => {
  return { columnIds: gridColumns.ids };
};

export default connect(mapStateToProps)(GridHeader);
