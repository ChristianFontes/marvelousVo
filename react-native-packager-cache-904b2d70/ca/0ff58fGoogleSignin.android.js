var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var RNGoogleSignin = _reactNative.NativeModules.RNGoogleSignin;


var RNGoogleSigninButton = (0, _reactNative.requireNativeComponent)('RNGoogleSigninButton', null);

var GoogleSigninButton = function (_Component) {
  babelHelpers.inherits(GoogleSigninButton, _Component);

  function GoogleSigninButton() {
    babelHelpers.classCallCheck(this, GoogleSigninButton);
    return babelHelpers.possibleConstructorReturn(this, (GoogleSigninButton.__proto__ || Object.getPrototypeOf(GoogleSigninButton)).apply(this, arguments));
  }

  babelHelpers.createClass(GoogleSigninButton, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this._clickListener = _reactNative.DeviceEventEmitter.addListener('RNGoogleSigninButtonClicked', function () {
        _this2.props.onPress && _this2.props.onPress();
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this._clickListener && this._clickListener.remove();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          style = _props.style,
          props = babelHelpers.objectWithoutProperties(_props, ['style']);


      return _react2.default.createElement(RNGoogleSigninButton, babelHelpers.extends({ style: [{ backgroundColor: 'transparent' }, style] }, props));
    }
  }]);
  return GoogleSigninButton;
}(_react.Component);

GoogleSigninButton.propTypes = babelHelpers.extends({}, _reactNative.View.propTypes, {
  size: _react.PropTypes.number,
  color: _react.PropTypes.number
});


GoogleSigninButton.Size = {
  Icon: RNGoogleSignin.BUTTON_SIZE_ICON,
  Standard: RNGoogleSignin.BUTTON_SIZE_STANDARD,
  Wide: RNGoogleSignin.BUTTON_SIZE_WIDE
};

GoogleSigninButton.Color = {
  Auto: RNGoogleSignin.BUTTON_COLOR_AUTO,
  Light: RNGoogleSignin.BUTTON_COLOR_LIGHT,
  Dark: RNGoogleSignin.BUTTON_COLOR_DARK
};

var GoogleSigninError = function (_Error) {
  babelHelpers.inherits(GoogleSigninError, _Error);

  function GoogleSigninError(error, code) {
    babelHelpers.classCallCheck(this, GoogleSigninError);

    var _this3 = babelHelpers.possibleConstructorReturn(this, (GoogleSigninError.__proto__ || Object.getPrototypeOf(GoogleSigninError)).call(this, error));

    _this3.name = 'GoogleSigninError';
    _this3.code = code;
    return _this3;
  }

  return GoogleSigninError;
}(Error);

var GoogleSignin = function () {
  function GoogleSignin() {
    babelHelpers.classCallCheck(this, GoogleSignin);

    this._user = null;
  }

  babelHelpers.createClass(GoogleSignin, [{
    key: 'hasPlayServices',
    value: function hasPlayServices() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { autoResolve: true };

      return RNGoogleSignin.playServicesAvailable(params.autoResolve);
    }
  }, {
    key: 'configure',
    value: function configure() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      params = [params.scopes || [], params.webClientId || null, params.offlineAccess || false, params.forceConsentPrompt || false, params.accountName || null, params.hostedDomain || null];

      return RNGoogleSignin.configure.apply(RNGoogleSignin, babelHelpers.toConsumableArray(params));
    }
  }, {
    key: 'currentUserAsync',
    value: function currentUserAsync() {
      var _this4 = this;

      return new Promise(function (resolve, reject) {
        var sucessCb = _reactNative.DeviceEventEmitter.addListener('RNGoogleSignInSilentSuccess', function (user) {
          _this4._user = babelHelpers.extends({}, user);

          RNGoogleSignin.getAccessToken(user).then(function (token) {
            _this4._user.accessToken = token;
            _this4._removeListeners(sucessCb, errorCb);
            resolve(_this4._user);
          }).catch(function (err) {
            _this4._removeListeners(sucessCb, errorCb);
            resolve(_this4._user);
          });
        });

        var errorCb = _reactNative.DeviceEventEmitter.addListener('RNGoogleSignInSilentError', function (err) {
          _this4._removeListeners(sucessCb, errorCb);
          resolve(null);
        });

        RNGoogleSignin.currentUserAsync();
      });
    }
  }, {
    key: 'currentUser',
    value: function currentUser() {
      return babelHelpers.extends({}, this._user);
    }
  }, {
    key: 'signIn',
    value: function signIn() {
      var _this5 = this;

      return new Promise(function (resolve, reject) {
        var sucessCb = _reactNative.DeviceEventEmitter.addListener('RNGoogleSignInSuccess', function (user) {
          _this5._user = babelHelpers.extends({}, user);
          RNGoogleSignin.getAccessToken(user).then(function (token) {
            _this5._user.accessToken = token;
            _this5._removeListeners(sucessCb, errorCb);
            resolve(_this5._user);
          }).catch(function (err) {
            _this5._removeListeners(sucessCb, errorCb);
            resolve(_this5._user);
          });
        });

        var errorCb = _reactNative.DeviceEventEmitter.addListener('RNGoogleSignInError', function (err) {
          _this5._removeListeners(sucessCb, errorCb);
          reject(new GoogleSigninError(err.error, err.code));
        });

        RNGoogleSignin.signIn();
      });
    }
  }, {
    key: 'signOut',
    value: function signOut() {
      var _this6 = this;

      return new Promise(function (resolve, reject) {
        var sucessCb = _reactNative.DeviceEventEmitter.addListener('RNGoogleSignOutSuccess', function () {
          _this6._removeListeners(sucessCb, errorCb);
          resolve();
        });

        var errorCb = _reactNative.DeviceEventEmitter.addListener('RNGoogleSignOutError', function (err) {
          _this6._removeListeners(sucessCb, errorCb);
          reject(new GoogleSigninError(err.error, err.code));
        });

        _this6._user = null;
        RNGoogleSignin.signOut();
      });
    }
  }, {
    key: 'revokeAccess',
    value: function revokeAccess() {
      var _this7 = this;

      return new Promise(function (resolve, reject) {
        var sucessCb = _reactNative.DeviceEventEmitter.addListener('RNGoogleRevokeSuccess', function () {
          _this7._removeListeners(sucessCb, errorCb);
          resolve();
        });

        var errorCb = _reactNative.DeviceEventEmitter.addListener('RNGoogleRevokeError', function (err) {
          _this7._removeListeners(sucessCb, errorCb);
          reject(new GoogleSigninError(err.error, err.code));
        });

        RNGoogleSignin.revokeAccess();
      });
    }
  }, {
    key: '_removeListeners',
    value: function _removeListeners() {
      for (var _len = arguments.length, listeners = Array(_len), _key = 0; _key < _len; _key++) {
        listeners[_key] = arguments[_key];
      }

      listeners.forEach(function (lt) {
        return lt.remove();
      });
    }
  }]);
  return GoogleSignin;
}();

module.exports = { GoogleSignin: new GoogleSignin(), GoogleSigninButton: GoogleSigninButton };