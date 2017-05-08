Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _nativeBase = require('native-base');

var _reactRouterNative = require('react-router-native');

var _auth2 = require('../views/auth');

var _auth3 = babelHelpers.interopRequireDefault(_auth2);

var _dashboard = require('../views/dashboard');

var _dashboard2 = babelHelpers.interopRequireDefault(_dashboard);

var PrivateRoute = function PrivateRoute(_ref) {
  var Component = _ref.component,
      rest = babelHelpers.objectWithoutProperties(_ref, ['component']);
  return _react2.default.createElement(_reactRouterNative.Route, babelHelpers.extends({}, rest, { render: function render(props) {
      return true ? _react2.default.createElement(Component, props) : _react2.default.createElement(_reactRouterNative.Redirect, { to: {
          pathname: '/',
          state: { from: props.location }
        } });
    } }));
};

var Routes = function (_Component) {
  babelHelpers.inherits(Routes, _Component);

  function Routes(props) {
    babelHelpers.classCallCheck(this, Routes);
    return babelHelpers.possibleConstructorReturn(this, (Routes.__proto__ || Object.getPrototypeOf(Routes)).call(this, props));
  }

  babelHelpers.createClass(Routes, [{
    key: 'auth',
    value: function auth(_auth) {
      if (_auth) {
        return _react2.default.createElement(
          _reactRouterNative.NativeRouter,
          null,
          _react2.default.createElement(
            _nativeBase.Container,
            null,
            _react2.default.createElement(_reactRouterNative.Route, { exact: true, path: '/', component: _auth3.default }),
            _react2.default.createElement(PrivateRoute, { exact: true, path: '/dashboard', component: _dashboard2.default })
          )
        );
      } else {
        return _react2.default.createElement(
          _reactRouterNative.NativeRouter,
          null,
          _react2.default.createElement(
            _nativeBase.Container,
            null,
            _react2.default.createElement(_reactRouterNative.Route, { path: '/', component: _auth3.default })
          )
        );
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var state = this.props.state;

      return this.auth(state.auth);
    }
  }]);
  return Routes;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(function (state) {
  return {
    state: state.auth
  };
})(Routes);