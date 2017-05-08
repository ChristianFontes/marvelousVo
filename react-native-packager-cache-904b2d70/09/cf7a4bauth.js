'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _redux = require('redux');

var _authActions = require('../actions/authActions');

var authActions = babelHelpers.interopRequireWildcard(_authActions);

var _reactRedux = require('react-redux');

var _nativeBase = require('native-base');

var _logo = require('../components/logo');

var _logo2 = babelHelpers.interopRequireDefault(_logo);

var _buttonAuth = require('../components/buttonAuth');

var _buttonAuth2 = babelHelpers.interopRequireDefault(_buttonAuth);

var _buttonNetwork = require('../components/buttonNetwork');

var _buttonNetwork2 = babelHelpers.interopRequireDefault(_buttonNetwork);

var _loginMessage = require('../components/loginMessage');

var _loginMessage2 = babelHelpers.interopRequireDefault(_loginMessage);

var _labelLogin = require('../components/labelLogin');

var _labelLogin2 = babelHelpers.interopRequireDefault(_labelLogin);

var styles = _reactNative.StyleSheet.create({
  backgroundImage: {
    flex: 1,
    alignSelf: 'stretch',
    width: null
  },
  centerItems: {
    flex: 1,
    justifyContent: 'center'
  }
});

var Auth = function (_Component) {
  babelHelpers.inherits(Auth, _Component);

  function Auth(props) {
    babelHelpers.classCallCheck(this, Auth);
    return babelHelpers.possibleConstructorReturn(this, (Auth.__proto__ || Object.getPrototypeOf(Auth)).call(this, props));
  }

  babelHelpers.createClass(Auth, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          history = _props.history,
          state = _props.state,
          actions = _props.actions;

      return _react2.default.createElement(
        _nativeBase.Container,
        null,
        _react2.default.createElement(
          _reactNative.Image,
          { source: require('../images/background.png'), style: styles.backgroundImage },
          _react2.default.createElement(
            _reactNative.View,
            { style: styles.centerItems },
            _react2.default.createElement(_logo2.default, null),
            _react2.default.createElement(_labelLogin2.default, { label: 'Email:', setInput: actions.setEmail }),
            _react2.default.createElement(_labelLogin2.default, { label: 'Password:', password: true, setInput: actions.setPassword }),
            _react2.default.createElement(_loginMessage2.default, { loginMessage: state.message }),
            _react2.default.createElement(_buttonAuth2.default, babelHelpers.extends({ history: history, title: 'Iniciar Sesion' }, actions, { email: state.email, password: state.password })),
            _react2.default.createElement(_buttonNetwork2.default, { network: 'Facebook', icon: 'logo-facebook' }),
            _react2.default.createElement(_buttonNetwork2.default, { network: 'Twitter', icon: 'logo-twitter', color: 'info' }),
            _react2.default.createElement(_buttonNetwork2.default, { network: 'Google', icon: 'logo-google', color: 'danger' })
          )
        )
      );
    }
  }]);
  return Auth;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(function (state) {
  return {
    state: state.auth
  };
}, function (dispatch) {
  return {
    actions: (0, _redux.bindActionCreators)(authActions, dispatch)
  };
})(Auth);