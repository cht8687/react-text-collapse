'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TriggerComponent = (function (_Component) {
  _inherits(TriggerComponent, _Component);

  function TriggerComponent(props) {
    _classCallCheck(this, TriggerComponent);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(TriggerComponent).call(this, props));
  }

  _createClass(TriggerComponent, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var styles = _props.styles;
      var componentHtml = _props.componentHtml;

      return _react2.default.createElement('h1', {
        style: styles.trigger,
        onMouseOver: this.onMouseOver.bind(this),
        onMouseOut: this.onMouseOut.bind(this),
        onMouseMove: this.onMouseMove.bind(this),
        dangerouslySetInnerHTML: { __html: componentHtml.trigger }
      });
    }
  }, {
    key: 'onMouseOver',
    value: function onMouseOver() {
      var setVisibility = this.props.setVisibility;

      setVisibility(true);
    }
  }, {
    key: 'onMouseOut',
    value: function onMouseOut() {
      var setVisibility = this.props.setVisibility;

      setVisibility(false);
    }
  }, {
    key: 'onMouseMove',
    value: function onMouseMove(e) {
      var getCursorPos = this.props.getCursorPos;

      getCursorPos(e);
    }
  }]);

  return TriggerComponent;
})(_react.Component);

TriggerComponent.propTypes = {
  styles: _react.PropTypes.object.isRequired,
  componentHtml: _react.PropTypes.object.isRequired,
  setVisibility: _react.PropTypes.func.isRequired,
  getCursorPos: _react.PropTypes.func.isRequired
};
exports.default = TriggerComponent;
//# sourceMappingURL=TriggerComponent.js.map