import React, { Component, PropTypes } from 'react';
import { Motion, spring } from "react-motion";

export default class ReactTextCollapse extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    options: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);

    const { options: { collapse } } = this.props;
    this.state = {
      collapse: collapse ? collapse : true
    }
  }

  renderHelperText() {
    const { options: { collapseText, expandText } } = this.props; 
    const { collapse } = this.state;
    if (collapse) {
      return <div style={{float:'left'}}>{collapseText}</div>
    } else {
      return <div style={{float:'left'}}>{expandText}</div>
    }
  }

  toggleAction() {
    let { collapse } = this.state;
    collapse = !collapse;
    this.setState({ collapse});
  }

  render() {
    const { children } = this.props;
    const { minHeight, maxHeight } = this.props.options;
    const { collapse } = this.state;
    return (
      <Motion
        defaultStyle={{h:0}}
        style={{h: spring(collapse ? minHeight : maxHeight)}}>
        {
          ({h}) => (
            <div>
              <div 
                  style={{
                    display: `block`,
                    overflow: `hidden`,
                    height: `${h}`
                  }}>
                {children}
              </div>
              <div onClick={this.toggleAction.bind(this)}>{this.renderHelperText()}</div>
            </div>
          )
        }
      </Motion>
    );
  }
}
