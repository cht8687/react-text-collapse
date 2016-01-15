import React, { Component, PropTypes } from 'react';

export default class ReactTextCollapse extends Component {
  static propTypes = {
    styles: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);

    this.state = {
      styles: this.props.styles
    }
  }

  render() {
    const { styles } = this.state;
    return (
      <div>
        Hellow awesome component!
      </div>
    );
  }

}
