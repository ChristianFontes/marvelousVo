Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _nativeBase = require('native-base');

var _reactNative = require('react-native');

var _auth = require('../firebase/auth');

var styles = _reactNative.StyleSheet.create({
  botton: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 30,
    paddingLeft: 15,
    paddingRight: 15
  }
});

var ButtonAuth = function (_Component) {
  babelHelpers.inherits(ButtonAuth, _Component);

  function ButtonAuth() {
    babelHelpers.classCallCheck(this, ButtonAuth);
    return babelHelpers.possibleConstructorReturn(this, (ButtonAuth.__proto__ || Object.getPrototypeOf(ButtonAuth)).apply(this, arguments));
  }

  babelHelpers.createClass(ButtonAuth, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          history = _props.history,
          title = _props.title,
          login = _props.login,
          loginMessage = _props.loginMessage,
          email = _props.email,
          password = _props.password;

      return _react2.default.createElement(
        _reactNative.View,
        { style: styles.botton },
        _react2.default.createElement(
          _nativeBase.Button,
          { block: true, warning: true, iconLeft: true, onPress: function onPress() {
              return (0, _auth.loginByEmail)(login, loginMessage, history, email, password);
            } },
          _react2.default.createElement(_nativeBase.Icon, { name: 'home' }),
          _react2.default.createElement(
            _nativeBase.Text,
            null,
            title
          )
        )
      );
    }
  }]);
  return ButtonAuth;
}(_react.Component);

exports.default = ButtonAuth;