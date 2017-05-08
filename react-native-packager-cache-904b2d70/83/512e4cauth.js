Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = auth;

var _actionTypes = require('../actions/actionTypes');

var types = babelHelpers.interopRequireWildcard(_actionTypes);


var initialState = {
  auth: false,
  message: '',
  email: '',
  password: ''
};

function auth() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case types.LOGIN:
      return babelHelpers.extends({}, state, {
        auth: state.auth = true
      });
    case types.LOGOUT:
      return babelHelpers.extends({}, state, {
        auth: state.auth = false
      });
    case types.LOGIN_MESSAGE:
      return babelHelpers.extends({}, state, {
        message: state.message = action.payload
      });
    case types.SET_EMAIL:
      return babelHelpers.extends({}, state, {
        email: state.email = action.payload
      });
    case types.SET_PASSWORD:
      return babelHelpers.extends({}, state, {
        password: state.password = action.payload
      });
    default:
      return state;
  }
}