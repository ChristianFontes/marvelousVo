Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.store = undefined;

var _redux = require('redux');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = babelHelpers.interopRequireDefault(_reduxThunk);

var _reducers = require('../reducers');

var reducers = babelHelpers.interopRequireWildcard(_reducers);


var createStoreWithMiddleware = (0, _redux.applyMiddleware)(_reduxThunk2.default)(_redux.createStore);
var reducer = (0, _redux.combineReducers)(reducers);

var store = exports.store = createStoreWithMiddleware(reducer);