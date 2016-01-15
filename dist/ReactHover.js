'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _HoverComponent = require('./lib/HoverComponent');

var _HoverComponent2 = _interopRequireDefault(_HoverComponent);

var _TriggerComponent = require('./lib/TriggerComponent');

var _TriggerComponent2 = _interopRequireDefault(_TriggerComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactHover = (function (_Component) {
  _inherits(ReactHover, _Component);

  function ReactHover(props) {
    _classCallCheck(this, ReactHover);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ReactHover).call(this, props));

    _this.state = {
      styles: _this.props.styles
    };
    return _this;
  }

  _createClass(ReactHover, [{
    key: 'render',
    value: function render() {
      var componentHtml = this.props.componentHtml;
      var styles = this.state.styles;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_TriggerComponent2.default, {
          styles: styles,
          componentHtml: componentHtml,
          setVisibility: this.setVisibility.bind(this),
          getCursorPos: this.getCursorPos.bind(this)
        }),
        _react2.default.createElement(_HoverComponent2.default, {
          styles: styles,
          componentHtml: componentHtml
        })
      );
    }
  }, {
    key: 'setVisibility',
    value: function setVisibility(flag) {
      var styles = this.state.styles;

      var currentStyles = styles;
      var currentHoverComponent = styles.hoverComponent;
      if (flag) {
        Object.assign(currentHoverComponent, { display: 'block' });
      } else {
        Object.assign(currentHoverComponent, { display: 'none' });
      }
      Object.assign(currentStyles, currentHoverComponent);
      this.setState({
        styles: currentStyles
      });
    }
  }, {
    key: 'getCursorPos',
    value: function getCursorPos(e) {
      var cursorX = e.pageX;
      var cursorY = e.pageY;

      var _props$options = this.props.options;
      var followCursor = _props$options.followCursor;
      var shiftX = _props$options.shiftX;
      var shiftY = _props$options.shiftY;
      var styles = this.state.styles;

      var currentStyles = styles;

      if (!followCursor) {
        return;
      }

      var currentHoverComponent = styles.hoverComponent;
      Object.assign(currentHoverComponent, { top: cursorY + shiftY, left: cursorX + shiftX });
      Object.assign(currentStyles, currentHoverComponent);

      this.setState({
        styles: currentStyles
      });
    }
  }]);

  return ReactHover;
})(_react.Component);

ReactHover.propTypes = {
  styles: _react.PropTypes.object.isRequired,
  componentHtml: _react.PropTypes.object.isRequired,
  options: _react.PropTypes.object.isRequired
};
exports.default = ReactHover;
//# sourceMappingURL=ReactHover.js.map