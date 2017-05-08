Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _nativeBase = require('native-base');

var _reactNative = require('react-native');

var text = {
    textAlign: 'center',
    marginTop: 10
};

var LoginMessage = function (_Component) {
    babelHelpers.inherits(LoginMessage, _Component);

    function LoginMessage() {
        babelHelpers.classCallCheck(this, LoginMessage);
        return babelHelpers.possibleConstructorReturn(this, (LoginMessage.__proto__ || Object.getPrototypeOf(LoginMessage)).apply(this, arguments));
    }

    babelHelpers.createClass(LoginMessage, [{
        key: 'render',
        value: function render() {
            var loginMessage = this.props.loginMessage;

            return _react2.default.createElement(
                _nativeBase.Text,
                { style: text },
                loginMessage
            );
        }
    }]);
    return LoginMessage;
}(_react.Component);

exports.default = LoginMessage;