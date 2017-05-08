Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var styles = _reactNative.StyleSheet.create({
  button: {
    width: 100,
    height: 30,
    padding: 10,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 3
  }
});

var Counter = function (_Component) {
  babelHelpers.inherits(Counter, _Component);

  function Counter(props) {
    babelHelpers.classCallCheck(this, Counter);
    return babelHelpers.possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));
  }

  babelHelpers.createClass(Counter, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          counter = _props.counter,
          increment = _props.increment,
          decrement = _props.decrement;

      return _react2.default.createElement(
        _reactNative.View,
        { style: { flex: 1, alignItems: 'center', justifyContent: 'center' } },
        _react2.default.createElement(
          _reactNative.Text,
          null,
          counter
        ),
        _react2.default.createElement(
          _reactNative.TouchableOpacity,
          { onPress: increment, style: styles.button },
          _react2.default.createElement(
            _reactNative.Text,
            null,
            'up'
          )
        ),
        _react2.default.createElement(
          _reactNative.TouchableOpacity,
          { onPress: decrement, style: styles.button },
          _react2.default.createElement(
            _reactNative.Text,
            null,
            'down'
          )
        )
      );
    }
  }]);
  return Counter;
}(_react.Component);

exports.default = Counter;