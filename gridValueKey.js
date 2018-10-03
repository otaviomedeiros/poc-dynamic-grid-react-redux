import React from 'react';
import { connect } from 'react-redux';

const GridValueKey = ({ entityKey }) => {
  console.log('GridValueKey: ', entityKey);
  return <span>{entityKey}</span>;
};

const mapStateToProps = ({ gridRows }, ownProps) => {
  return {
    entityKey: gridRows.byId[ownProps.rowId].key
  };
};

export default connect(mapStateToProps)(GridValueKey);
