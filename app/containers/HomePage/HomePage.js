/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import ReposList from 'components/ReposList';
import Message from 'components/Message';
import './style.scss';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */
  componentDidMount() {
    const { username, onSubmitForm } = this.props;
    if (username && username.trim().length > 0) {
      onSubmitForm();
    }
  }

  render() {
    const {
      loading, error, codeFound,username, onChangeUsername, onSubmitForm} = this.props;
    const reposListProps = {
      loading,
      error,
      codeFound,
      username
    };

    return (
      <article>
        <Helmet>
          <title>Home Page</title>
          <meta name="description" content="M3" />
        </Helmet>
        <div className="home-page">
          <section className="centered">
            <h2>M3 - Please Start search for Code</h2>
          </section>
          <section>
            <form>
              <label htmlFor="username">
                <input
                  id="username"
                  type="text"
                  placeholder="Enter Code"
                  value={username}
                  onChange={onSubmitForm}
                />
              </label>
            </form>
            <Message {...reposListProps} />
          </section>
        </div>
      </article>
    );
  }
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  //repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
  codeFound: PropTypes.bool,
  onChangeUsername: PropTypes.func
};
