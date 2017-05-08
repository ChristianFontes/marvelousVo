Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.google = exports.db = exports.auth = exports.ref = undefined;

var _firebase = require("firebase");

var _firebase2 = babelHelpers.interopRequireDefault(_firebase);

var config = {
  apiKey: "AIzaSyBeIRUbaA5qirbF0Y6PocLAdrNet5RuJ84",
  authDomain: "marvelousvo-96160.firebaseapp.com",
  databaseURL: "https://marvelousvo-96160.firebaseio.com",
  projectId: "marvelousvo-96160",
  storageBucket: "marvelousvo-96160.appspot.com",
  messagingSenderId: "615670358203"
};

_firebase2.default.initializeApp(config);

var ref = exports.ref = _firebase2.default.database().ref();
var auth = exports.auth = _firebase2.default.auth();
var db = exports.db = _firebase2.default.database();
var google = exports.google = new _firebase2.default.auth.GoogleAuthProvider();