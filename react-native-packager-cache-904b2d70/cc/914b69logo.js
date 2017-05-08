'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _nativeBase = require('native-base');

var _reactNative = require('react-native');

var _logo = require('../images/logo.png');

var _logo2 = babelHelpers.interopRequireDefault(_logo);

var logo = {
  width: 80,
  height: 80,
  borderRadius: 40,
  marginBottom: 15
};

var styles = _reactNative.StyleSheet.create({
  logo: {
    alignItems: 'center'
  }
});

var Logo = function (_Component) {
  babelHelpers.inherits(Logo, _Component);

  function Logo() {
    babelHelpers.classCallCheck(this, Logo);
    return babelHelpers.possibleConstructorReturn(this, (Logo.__proto__ || Object.getPrototypeOf(Logo)).apply(this, arguments));
  }

  babelHelpers.createClass(Logo, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactNative.View,
        { style: styles.logo },
        _react2.default.createElement(_nativeBase.Thumbnail, { style: logo, source: _logo2.default })
      );
    }
  }]);
  return Logo;
}(_react.Component);

exports.default = Logo;