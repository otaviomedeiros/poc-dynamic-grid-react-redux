import React from 'react';
import { connect } from 'react-redux';

const BulkUpdate = ({ onClick }) => <button onClick={() => onClick()}>Update in Bulk</button>;

const mapDispatchToProps = dispatch => {
  return {
    onClick: () =>
      dispatch({
        type: 'BULK_UPDATE',
        payload: {
          environmentId: 'firefox'
        }
      })
  };
};

export default connect(
  null,
  mapDispatchToProps
)(BulkUpdate);
