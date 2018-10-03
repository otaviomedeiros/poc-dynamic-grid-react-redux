import React from 'react';
import { connect } from 'react-redux';

const GridValueEnvironment = ({ environmentList, rowId, columnId, environmentId, onChange }) => {
  console.log('GridValueEnvironment: ', rowId, columnId);

  return (
    <select value={environmentId} onChange={event => onChange(rowId, event.target.value)}>
      {environmentList &&
        environmentList.map(i => (
          <option key={i.value} value={i.value}>
            {i.label}
          </option>
        ))}
    </select>
  );
};

const mapStateToProps = ({ gridRows, gridColumns }, ownProps) => {
  return {
    environmentList: gridRows.byId[ownProps.rowId].environmentList,
    columnId: ownProps.columnId,
    rowId: ownProps.rowId,
    environmentId: gridRows.byId[ownProps.rowId].environmentId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onChange: (id, environmentId) =>
      dispatch({
        type: 'UPDATE_ITEM',
        payload: { id, environmentId }
      })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GridValueEnvironment);
