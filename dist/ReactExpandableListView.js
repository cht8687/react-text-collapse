'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _libListHeader = require('./lib/ListHeader');

var _libListHeader2 = _interopRequireDefault(_libListHeader);

var _libListItemsManager = require('./lib/ListItemsManager');

var _libListItemsManager2 = _interopRequireDefault(_libListItemsManager);

var _reactMotion = require("react-motion");

var ReactListView = (function (_Component) {
  _inherits(ReactListView, _Component);

  _createClass(ReactListView, null, [{
    key: 'propTypes',
    value: {
      data: _react.PropTypes.array.isRequired,
      headerAttName: _react.PropTypes.string.isRequired,
      itemsAttName: _react.PropTypes.string.isRequired,
      styles: _react.PropTypes.object.isRequired
    },
    enumerable: true
  }]);

  function ReactListView(props) {
    _classCallCheck(this, ReactListView);

    _get(Object.getPrototypeOf(ReactListView.prototype), 'constructor', this).call(this, props);
    var data = this.props.data;

    this.state = {
      data: data
    };
  }

  _createClass(ReactListView, [{
    key: 'render',
    value: function render() {
      var _this = this;

      var _props = this.props;
      var headerAttName = _props.headerAttName;
      var itemsAttName = _props.itemsAttName;
      var _props$styles = this.props.styles;
      var outerDiv = _props$styles.outerDiv;
      var ul = _props$styles.ul;
      var listHeader = _props$styles.listHeader;
      var listItems = _props$styles.listItems;
      var li = _props$styles.li;
      var data = this.state.data;

      var _refi = 0;
      var makeHeaderRef = function makeHeaderRef() {
        return 'ListHeader-' + _refi;
      };

      var makeItemRef = function makeItemRef() {
        return 'ListItem-' + _refi;
      };

      return _react2['default'].createElement(
        'div',
        { ref: 'listview', style: outerDiv },
        _react2['default'].createElement(
          'ul',
          { style: ul },
          Object.keys(data).map(function (k, index) {
            var header = data[k][headerAttName];
            var items = data[k][itemsAttName];
            var isOpened = data[k].isOpened;

            _refi++;
            var headerRef = makeHeaderRef();
            var itemRef = makeItemRef();

            return _react2['default'].createElement(
              _reactMotion.Motion,
              {
                defaultStyle: { h: 0 },
                style: { h: (0, _reactMotion.spring)(isOpened ? 110 : 0) } },
              function (_ref) {
                var h = _ref.h;
                return _react2['default'].createElement(
                  'div',
                  { key: k },
                  _react2['default'].createElement(
                    'li',
                    { li: li },
                    _react2['default'].createElement(_libListHeader2['default'], {
                      ref: headerRef,
                      header: header,
                      headerIndex: index,
                      styles: listHeader,
                      handleToggle: _this.handleToggle.bind(_this, index)
                    }),
                    _react2['default'].createElement(
                      'div',
                      {
                        style: {
                          display: 'block',
                          overflow: 'hidden',
                          height: '' + h
                        } },
                      _react2['default'].createElement(_libListItemsManager2['default'], {
                        ref: itemRef,
                        items: items,
                        styles: listItems
                      })
                    )
                  )
                );
              }
            );
          })
        )
      );
    }
  }, {
    key: 'handleToggle',
    value: function handleToggle(headerIndex) {
      var data = this.state.data;

      var dataCopy = data;
      dataCopy[headerIndex].isOpened = !dataCopy[headerIndex].isOpened;
      var newData = Object.assign({}, dataCopy);

      this.setState(newData);
    }
  }]);

  return ReactListView;
})(_react.Component);

exports['default'] = ReactListView;
module.exports = exports['default'];
//# sourceMappingURL=ReactExpandableListView.js.map