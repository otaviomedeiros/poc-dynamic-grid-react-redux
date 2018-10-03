import React from 'react';
import { connect } from 'react-redux';

import GridValueName from './gridValueName';

const GridCell = ({ rowId, columnId, valueComponent }) => {
  console.log('GridCell: ', columnId);

  const ValueComponent = valueComponent;
  return (
    <td>
      <ValueComponent columnId={columnId} rowId={rowId} />
    </td>
  );
};

const mapStateToProps = ({ gridRows, gridColumns }, ownProps) => {
  return {
    rowId: ownProps.rowId,
    columnId: ownProps.columnId,
    valueComponent: gridColumns.byId[ownProps.columnId].valueComponent
  };
};

export default connect(mapStateToProps)(GridCell);
