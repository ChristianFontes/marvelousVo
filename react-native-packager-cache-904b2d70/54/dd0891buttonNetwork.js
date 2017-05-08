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