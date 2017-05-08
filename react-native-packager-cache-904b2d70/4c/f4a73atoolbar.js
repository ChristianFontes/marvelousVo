Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _nativeBase = require('native-base');

var Toolbar = function (_Component) {
    babelHelpers.inherits(Toolbar, _Component);

    function Toolbar() {
        babelHelpers.classCallCheck(this, Toolbar);
        return babelHelpers.possibleConstructorReturn(this, (Toolbar.__proto__ || Object.getPrototypeOf(Toolbar)).apply(this, arguments));
    }

    babelHelpers.createClass(Toolbar, [{
        key: 'render',
        value: function render() {
            var name = this.props.name;

            return _react2.default.createElement(
                _nativeBase.Header,
                null,
                _react2.default.createElement(
                    _nativeBase.Left,
                    null,
                    _react2.default.createElement(
                        _nativeBase.Button,
                        { transparent: true },
                        _react2.default.createElement(_nativeBase.Icon, { name: 'arrow-back' })
                    )
                ),
                _react2.default.createElement(
                    _nativeBase.Body,
                    null,
                    _react2.default.createElement(
                        _nativeBase.Title,
                        null,
                        name
                    )
                ),
                _react2.default.createElement(
                    _nativeBase.Right,
                    null,
                    _react2.default.createElement(
                        _nativeBase.Button,
                        { transparent: true },
                        _react2.default.createElement(_nativeBase.Icon, { name: 'menu' })
                    )
                )
            );
        }
    }]);
    return Toolbar;
}(_react.Component);

exports.default = Toolbar;