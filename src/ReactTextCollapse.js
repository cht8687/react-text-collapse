import React, { Component, PropTypes } from 'react';
import { Motion, spring } from "react-motion";

export default class ReactTextCollapse extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    options: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);

    const { options: { Collapse } } = this.props;
    this.state = {
      Collapse: Collapse,
      height: 100
    }
  }

  componentDidMount() {
    //const height = ReactDOM.findDOMNode(this).offsetHeight;
    //this.setState({height: height});
  }

  renderHelperText() {
    const { options: { collapseText, expandText } } = this.props; 
    const { Collapse } = this.state;
    if (Collapse) {
      return <div style={{float:'left'}}>{expandText}</div>
    } else {
      return <div style={{float:'left'}}>{collapseText}</div>
    }
  }

  toggleAction() {
    let { Collapse } = this.state;
    Collapse = !Collapse;
    this.setState({ Collapse});
  }

  render() {
    const { children } = this.props;
    const { Collapse, height } = this.state;
    return (
      <Motion
        defaultStyle={{h: 0}}
        style={{h: spring(Collapse ? 0 : height)}}>
        {
          ({h}) => (
            <div>
              <div 
                  style={{
                    display: `block`,
                    overflow: `hidden`,
                    height:`${h}`
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
