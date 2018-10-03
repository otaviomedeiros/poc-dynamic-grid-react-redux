import React from 'react';
import { connect } from 'react-redux';

const GridValueName = ({ urlKey, name }) => {
  console.log('GridValueName: ');
  return (
    <a href={urlKey}>
      <span>{name}</span>
    </a>
  );
};

const mapStateToProps = ({ gridRows, gridColumns }, ownProps) => {
  return {
    urlKey: gridRows.byId[ownProps.rowId].urlKey,
    name: gridRows.byId[ownProps.rowId].name
  };
};

export default connect(mapStateToProps)(GridValueName);
