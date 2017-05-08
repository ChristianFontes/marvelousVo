Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = babelHelpers.interopRequireDefault(_propTypes);

var _reactNative = require('react-native');

var regex = /.*?:\/\//g;

var DeepLinking = function (_Component) {
  babelHelpers.inherits(DeepLinking, _Component);

  function DeepLinking() {
    var _ref;

    var _temp, _this, _ret;

    babelHelpers.classCallCheck(this, DeepLinking);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = babelHelpers.possibleConstructorReturn(this, (_ref = DeepLinking.__proto__ || Object.getPrototypeOf(DeepLinking)).call.apply(_ref, [this].concat(args))), _this), _this.handleChange = function (e) {
      _this.push(e.url);
    }, _this.push = function (url) {
      var pathname = url.replace(regex, '');
      _this.context.router.history.push(pathname);
    }, _temp), babelHelpers.possibleConstructorReturn(_this, _ret);
  }

  babelHelpers.createClass(DeepLinking, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var url;
      return regeneratorRuntime.async(function componentDidMount$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return regeneratorRuntime.awrap(_reactNative.Linking.getInitialURL());

            case 2:
              url = _context.sent;

              if (url) this.push(url);
              _reactNative.Linking.addEventListener('url', this.handleChange);

            case 5:
            case 'end':
              return _context.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _reactNative.Linking.removeEventListener('url', this.handleChange);
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.children;
    }
  }]);
  return DeepLinking;
}(_react.Component);

DeepLinking.contextTypes = {
  router: _propTypes2.default.shape({
    history: _propTypes2.default.shape({
      push: _propTypes2.default.func.isRequired
    }).isRequired
  }).isRequired
};
exports.default = DeepLinking;