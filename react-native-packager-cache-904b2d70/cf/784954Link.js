Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = babelHelpers.interopRequireDefault(_propTypes);

var _reactNative = require('react-native');

var Link = function (_Component) {
  babelHelpers.inherits(Link, _Component);

  function Link() {
    var _ref;

    var _temp, _this, _ret;

    babelHelpers.classCallCheck(this, Link);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = babelHelpers.possibleConstructorReturn(this, (_ref = Link.__proto__ || Object.getPrototypeOf(Link)).call.apply(_ref, [this].concat(args))), _this), _this.handlePress = function () {
      var history = _this.context.router.history;
      var _this$props = _this.props,
          to = _this$props.to,
          replace = _this$props.replace;


      if (replace) {
        history.replace(to);
      } else {
        history.push(to);
      }
    }, _temp), babelHelpers.possibleConstructorReturn(_this, _ret);
  }

  babelHelpers.createClass(Link, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          Component = _props.component,
          to = _props.to,
          replace = _props.replace,
          rest = babelHelpers.objectWithoutProperties(_props, ['component', 'to', 'replace']);

      return _react2.default.createElement(Component, babelHelpers.extends({}, rest, { onPress: this.handlePress }));
    }
  }]);
  return Link;
}(_react.Component);

Link.contextTypes = {
  router: _propTypes2.default.shape({
    history: _propTypes2.default.shape({
      push: _propTypes2.default.func.isRequired,
      replace: _propTypes2.default.func.isRequired
    }).isRequired
  }).isRequired
};
Link.propTypes = {
  component: _propTypes2.default.func,
  replace: _propTypes2.default.bool,
  to: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object])
};
Link.defaultProps = {
  component: _reactNative.TouchableHighlight,
  replace: false
};
exports.default = Link;