Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = babelHelpers.interopRequireDefault(_propTypes);

var _reactNative = require('react-native');

var AndroidBackButton = function (_Component) {
  babelHelpers.inherits(AndroidBackButton, _Component);

  function AndroidBackButton() {
    var _ref;

    var _temp, _this, _ret;

    babelHelpers.classCallCheck(this, AndroidBackButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = babelHelpers.possibleConstructorReturn(this, (_ref = AndroidBackButton.__proto__ || Object.getPrototypeOf(AndroidBackButton)).call.apply(_ref, [this].concat(args))), _this), _this.handleBack = function () {
      var history = _this.context.router.history;

      if (history.index === 0) {
        return false;
      } else {
        history.goBack();
        return true;
      }
    }, _temp), babelHelpers.possibleConstructorReturn(_this, _ret);
  }

  babelHelpers.createClass(AndroidBackButton, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _reactNative.BackAndroid.addEventListener('hardwareBackPress', this.handleBack);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _reactNative.BackAndroid.removeEventListener('hardwareBackPress', this.handleBack);
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.children || null;
    }
  }]);
  return AndroidBackButton;
}(_react.Component);

AndroidBackButton.contextTypes = {
  router: _propTypes2.default.shape({
    history: _propTypes2.default.shape({
      goBack: _propTypes2.default.func.isRequired,
      index: _propTypes2.default.number.isRequired
    }).isRequired
  }).isRequired
};
exports.default = AndroidBackButton;