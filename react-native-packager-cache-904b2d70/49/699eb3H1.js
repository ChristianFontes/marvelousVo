Object.defineProperty(exports, "__esModule", { value: true });var _reactNative = require('react-native');
var _lodash = require('lodash');var _lodash2 = _interopRequireDefault(_lodash);

var _platform = require('./../variables/platform');var _platform2 = _interopRequireDefault(_platform);function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}exports.default = function () {
  var variables = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _platform2.default;
  var h1Theme = {
    color: variables.textColor,
    fontSize: variables.fontSizeH1,
    lineHeight: variables.lineHeightH1 };

  return h1Theme;
};