Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = babelHelpers.interopRequireDefault(_propTypes);

var _MemoryRouter = require('react-router/MemoryRouter');

var _MemoryRouter2 = babelHelpers.interopRequireDefault(_MemoryRouter);

var _reactNative = require('react-native');

var NativeRouter = function NativeRouter(props) {
  return _react2.default.createElement(_MemoryRouter2.default, props);
};

NativeRouter.propTypes = {
  initialEntries: _propTypes2.default.array,
  initialIndex: _propTypes2.default.number,
  getUserConfirmation: _propTypes2.default.func,
  keyLength: _propTypes2.default.number,
  children: _propTypes2.default.node
};

NativeRouter.defaultProps = {
  getUserConfirmation: function getUserConfirmation(message, callback) {
    _reactNative.Alert.alert('Confirm', message, [{ text: 'Cancel', onPress: function onPress() {
        return callback(false);
      } }, { text: 'OK', onPress: function onPress() {
        return callback(true);
      } }]);
  }
};

exports.default = NativeRouter;