import PropTypes from 'prop-types';
import React from 'react';

export default class Subreddit extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      isSelected: false,
    };
  }

  onClick() {
    this.props.onChildClick(this.props.name);
    this.props.activate(this.props.url);
  }

  render() {
    return (
      <li onClick={this.onClick.bind(this)} className={this.props.selected ? "selected" : ""}>
        {this.props.name}
      </li>
    );
  }
}

Subreddit.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  activate: PropTypes.func.isRequired
}
