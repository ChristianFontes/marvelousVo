Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _nativeBase = require('native-base');

var _reactNative = require('react-native');

var styles = _reactNative.StyleSheet.create({
  label: {
    backgroundColor: '#fff',
    opacity: 0.9,
    paddingLeft: 15,
    paddingRight: 15
  }
});

var LabelLogin = function (_Component) {
  babelHelpers.inherits(LabelLogin, _Component);

  function LabelLogin() {
    babelHelpers.classCallCheck(this, LabelLogin);
    return babelHelpers.possibleConstructorReturn(this, (LabelLogin.__proto__ || Object.getPrototypeOf(LabelLogin)).apply(this, arguments));
  }

  babelHelpers.createClass(LabelLogin, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          label = _props.label,
          password = _props.password,
          setInput = _props.setInput;

      return _react2.default.createElement(
        _reactNative.View,
        { style: styles.label },
        _react2.default.createElement(
          _nativeBase.Item,
          { inlineLabel: true },
          _react2.default.createElement(
            _nativeBase.Label,
            null,
            label
          ),
          _react2.default.createElement(_nativeBase.Input, {
            secureTextEntry: password,
            onChangeText: function onChangeText(text) {
              setInput(text);
            } })
        )
      );
    }
  }]);
  return LabelLogin;
}(_react.Component);

exports.default = LabelLogin;