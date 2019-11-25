import React from 'react';
import PropTypes from 'prop-types';

import List from 'components/List';
import ListItem from 'components/ListItem';
import LoadingIndicator from 'components/LoadingIndicator';
import RepoListItem from 'containers/RepoListItem';
import { Alert, Button } from 'reactstrap';

const ReposList = ({
  loading, error, codeFound, username
}) => {
  if (loading) {
    return <List component={LoadingIndicator} />;
  }

  if (error !== false) {
    const ErrorComponent = () => (
      <ListItem item={'Something went wrong, please try again!'} />
    );
    return <List component={ErrorComponent} />;
  }
  if (username.trim() !== '') {
    if (codeFound) {
      console.log('value in Message component');
      console.log(codeFound);
      return (
        <div>
          <Alert color="success">
            You remember CODE
          </Alert>
        </div>
      );
    }
    return (
      <div>
        <Alert color="danger">
            This is a danger alert — you Forgot CODE!
        </Alert>
      </div>
    );
  }

  return null;
};

ReposList.propTypes = {
  loading: PropTypes.bool,
  codeFound: PropTypes.bool,
  error: PropTypes.any,
  username: PropTypes.any
};

export default ReposList;
