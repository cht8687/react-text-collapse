import React, { Component } from 'react'
import { Motion, spring } from 'react-motion'
import PropTypes from 'prop-types'

export default class ReactTextCollapse extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    options: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props)

    const {
      options: { collapse }
    } = this.props
    this.state = {
      collapse: collapse ? collapse : true
    }
  }

  renderHelperText() {
    const {
      options: { collapseText, expandText, textStyle }
    } = this.props
    const { collapse } = this.state

    if (collapse) {
      return <div style={{ float: `left`, ...textStyle }}>{collapseText}</div>
    }

    return <div style={{ float: `left`, ...textStyle }}>{expandText}</div>
  }

  toggleAction = () => {
    this.setState(state => ({ collapse: !state.collapse }))
  }

  render() {
    const {
      options: { minHeight, maxHeight },
      children
    } = this.props
    const { collapse } = this.state
    return (
      <Motion
        defaultStyle={{ h: 0 }}
        style={{ h: spring(collapse ? minHeight : maxHeight) }}
      >
        {({ h }) => (
          <div>
            <div
              style={{
                display: `block`,
                overflow: (collapse ? `hidden` : `auto`),
                height: `${h}` + 'px'
              }}
            >
              {children}
            </div>
            <div onClick={this.toggleAction}>{this.renderHelperText()}</div>
          </div>
        )}
      </Motion>
    )
  }
}
