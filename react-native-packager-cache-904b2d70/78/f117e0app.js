Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _store = require('./store');

var _routes = require('./routes');

var _routes2 = babelHelpers.interopRequireDefault(_routes);

var App = function (_Component) {
  babelHelpers.inherits(App, _Component);

  function App() {
    babelHelpers.classCallCheck(this, App);
    return babelHelpers.possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  babelHelpers.createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactRedux.Provider,
        { store: _store.store },
        _react2.default.createElement(_routes2.default, null)
      );
    }
  }]);
  return App;
}(_react.Component);

exports.default = App;