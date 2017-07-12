Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _nativeBase = require('native-base');

var _reactNative = require('react-native');

var _auth = require('../firebase/auth');

var _reactNativeGoogleSignin = require('react-native-google-signin');

var styles = _reactNative.StyleSheet.create({
  botton: {
    marginTop: 10,
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15
  }
});

var ButtonNetwork = function (_Component) {
  babelHelpers.inherits(ButtonNetwork, _Component);

  function ButtonNetwork() {
    babelHelpers.classCallCheck(this, ButtonNetwork);
    return babelHelpers.possibleConstructorReturn(this, (ButtonNetwork.__proto__ || Object.getPrototypeOf(ButtonNetwork)).apply(this, arguments));
  }

  babelHelpers.createClass(ButtonNetwork, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this._setupGoogleSignin();
    }
  }, {
    key: '_setupGoogleSignin',
    value: function _setupGoogleSignin() {
      var user;
      return regeneratorRuntime.async(function _setupGoogleSignin$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return regeneratorRuntime.awrap(_reactNativeGoogleSignin.GoogleSignin.hasPlayServices({ autoResolve: true }));

            case 3:
              _context.next = 5;
              return regeneratorRuntime.awrap(_reactNativeGoogleSignin.GoogleSignin.configure({
                webClientId: '615670358203-bs16lansc40713koei4obvt9cdmh4blq.apps.googleusercontent.com',
                offlineAccess: true,
                forceConsentPrompt: true
              }));

            case 5:
              _context.next = 7;
              return regeneratorRuntime.awrap(_reactNativeGoogleSignin.GoogleSignin.currentUserAsync());

            case 7:
              user = _context.sent;

              console.log(user);
              _context.next = 14;
              break;

            case 11:
              _context.prev = 11;
              _context.t0 = _context['catch'](0);

              console.log("Play services error", _context.t0.code, _context.t0.message);

            case 14:
            case 'end':
              return _context.stop();
          }
        }
      }, null, this, [[0, 11]]);
    }
  }, {
    key: '_buttonRender',
    value: function _buttonRender(network, icon, color) {
      if (color == 'info') {
        return _react2.default.createElement(
          _nativeBase.Button,
          { block: true, iconLeft: true, info: true, style: styles.button },
          _react2.default.createElement(_nativeBase.Icon, { name: icon }),
          _react2.default.createElement(
            _nativeBase.Text,
            null,
            network
          )
        );
      } else if (color == 'danger') {
        return _react2.default.createElement(
          _nativeBase.Button,
          { block: true, iconLeft: true, danger: true, onPress: function onPress() {
              return (0, _auth.authByGoogle)();
            } },
          _react2.default.createElement(_nativeBase.Icon, { name: icon }),
          _react2.default.createElement(
            _nativeBase.Text,
            null,
            network
          )
        );
      } else {
        return _react2.default.createElement(
          _nativeBase.Button,
          { block: true, iconLeft: true },
          _react2.default.createElement(_nativeBase.Icon, { name: icon }),
          _react2.default.createElement(
            _nativeBase.Text,
            null,
            network
          )
        );
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          network = _props.network,
          icon = _props.icon,
          color = _props.color;

      return _react2.default.createElement(
        _reactNative.View,
        { style: styles.botton },
        this._buttonRender(network, icon, color)
      );
    }
  }]);
  return ButtonNetwork;
}(_react.Component);

exports.default = ButtonNetwork;