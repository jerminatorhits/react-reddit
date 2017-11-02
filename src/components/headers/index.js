import PropTypes from 'prop-types';
import React from 'react';
import Header from './item';

export default class HeaderContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
    	<Header activeSubreddit={this.props.activeSubreddit} />
    );
  }
}
