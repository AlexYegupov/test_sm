(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 37);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(6);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _axios = __webpack_require__(50);

var _axios2 = _interopRequireDefault(_axios);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var basePath = ''; //process.env.REACT_STATIC_ENV === 'production' ? '/Jump-TV' : ''

exports.default = {

  //csiteRoot: 'https://stogniev.github.io/dist',
  basePath: basePath,
  firebase: {
    apiKey: 'AIzaSyCfLjmvUPI2Y4-8YTnwAx6Jg9KCUUgW2D4',
    authDomain: 'jump-tv.firebaseapp.com',
    databaseURL: 'https://jump-tv.firebaseio.com',
    projectId: 'jump-tv',
    storageBucket: 'jump-tv.appspot.com',
    messagingSenderId: '616656212948'
  },
  renderToHtml: function renderToHtml(render, Comp, meta) {
    var html = render(_react2.default.createElement(Comp, null));
    //const styles = flush()
    //meta.styleTags = styles
    return html;
  },
  Document: function (_React$Component) {
    _inherits(CustomHtml, _React$Component);

    function CustomHtml() {
      _classCallCheck(this, CustomHtml);

      return _possibleConstructorReturn(this, (CustomHtml.__proto__ || Object.getPrototypeOf(CustomHtml)).apply(this, arguments));
    }

    _createClass(CustomHtml, [{
      key: 'render',
      value: function render() {
        var _props = this.props,
            Html = _props.Html,
            Head = _props.Head,
            Body = _props.Body,
            children = _props.children,
            renderMeta = _props.renderMeta;


        return _react2.default.createElement(
          Html,
          null,
          _react2.default.createElement(
            Head,
            null,
            _react2.default.createElement('meta', { charSet: 'UTF-8' }),
            _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }),
            _react2.default.createElement('meta', { charSet: 'UTF-8' }),
            _react2.default.createElement('meta', { httpEquiv: 'X-UA-Compatible', content: 'IE=edge' }),
            _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }),
            _react2.default.createElement('link', { rel: 'icon', href: basePath + '/assets/img/favicon.ico', type: 'image/png' }),
            _react2.default.createElement(
              'title',
              null,
              'Dashboard'
            ),
            _react2.default.createElement('link', { rel: 'stylesheet', type: 'text/css', href: basePath + '/assets/css/bootstrap.min.css' }),
            _react2.default.createElement('link', { rel: 'stylesheet', type: 'text/css', href: basePath + '/assets/css/font-awesome.min.css' }),
            _react2.default.createElement('link', { rel: 'stylesheet', type: 'text/css', href: basePath + '/assets/css/components/component.css', media: 'all' }),
            _react2.default.createElement('link', { rel: 'stylesheet', type: 'text/css', href: basePath + '/style.css', media: 'all' }),
            renderMeta.styleTags
          ),
          _react2.default.createElement(
            Body,
            null,
            children
          )
        );
      }
    }]);

    return CustomHtml;
  }(_react2.default.Component),

  getSiteData: function getSiteData() {
    return {
      title: 'React Static'
    };
  },

  getRoutes: function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var _ref2, posts;

      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _axios2.default.get('https://jsonplaceholder.typicode.com/posts');

            case 2:
              _ref2 = _context.sent;
              posts = _ref2.data;
              return _context.abrupt('return', [{
                path: '/',
                component: 'src/containers/Home'
              }, {
                path: '/dashboard',
                component: 'src/containers/Dashboard'
              }, {
                path: '/react-motion-drawer-demo',
                component: 'src/containers/ReactMotionDrawerDemo'
              }, {
                path: '/about',
                component: 'src/containers/About'
              }, {
                path: '/blog',
                component: 'src/containers/Blog',
                getData: function getData() {
                  return {
                    posts: posts
                  };
                },
                children: posts.map(function (post) {
                  return {
                    path: '/post/' + post.id,
                    component: 'src/containers/Post',
                    getData: function getData() {
                      return {
                        post: post
                      };
                    }
                  };
                })
              }, {
                path: '/bricks',
                component: 'src/containers/Bricks'
              }, {
                path: '/navigationIcons',
                component: 'src/containers/navigationIcons'
              }, {
                path: '/drop-zone-demo',
                component: 'src/containers/DropZoneDemo'
              }, {
                path: '/react-tube-embed-demo',
                component: 'src/containers/ReactTubeEmbedDemo'
              }, {
                path: '/nuzzel-api-demo',
                component: 'src/containers/Nuzzel'
              }, {
                path: '/login-demo',
                component: 'src/containers/LoginDemo'
              }, {
                path: '/news',
                component: 'src/containers/News'
              }, {
                path: '/login',
                component: 'src/containers/SignIn'
              }, {
                path: '/signup',
                component: 'src/containers/SignUp'
              }, {
                path: '/profile',
                component: 'src/containers/Profile'
              }, {
                is404: true,
                component: 'src/containers/404'
              }]);

            case 5:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function getRoutes() {
      return _ref.apply(this, arguments);
    };
  }(),
  webpack: function webpack(config, _ref3) {
    var defaultLoaders = _ref3.defaultLoaders;

    config.module.rules = [{
      oneOf: [{
        test: /\.json$/,
        use: [{ loader: 'json-loader' }]
      }, {
        test: /\.(?:png|jpg|svg)$/,
        use: [{ loader: 'file-loader' }]
      }, defaultLoaders.jsLoader, defaultLoaders.cssLoader, defaultLoaders.fileLoader]
    }];
    return config;
  }

};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("firebase");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadjs = loadjs;
exports.loadcss = loadcss;

// global list of loaded js and css
var _loaded_js = [];
var _loaded_css = [];

function loadjs(src) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { async: false };

  if (_loaded_js.includes(src)) {
    console.debug(src, 'already loaded');
    return Promise.resolve();
  }

  return new Promise(function (resolve, reject) {
    var script = document.createElement('script');
    script.src = src;
    if (params.async) script.async = 1;
    script.onload = function () {
      _loaded_js.push(src);resolve();
    };
    script.onerror = reject;
    document.body.appendChild(script);
  });
}

function loadcss(href) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (_loaded_css.includes(href)) {
    console.debug(href, 'already loaded');
    return Promise.resolve();
  }

  return new Promise(function (resolve, reject) {
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = href;
    link.onload = function () {
      _loaded_css.push(href);resolve();
    };
    link.onerror = reject;
    //? link.media = 'all'
    document.head.appendChild(link);
  });
}

// https://stackoverflow.com/a/32598826/1948511
var canUseDOM = exports.canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

/***/ }),
/* 9 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _static = __webpack_require__(1);

var _static2 = _interopRequireDefault(_static);

__webpack_require__(60);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dummyImageSrc = _static2.default.basePath + '/img/pro.png';
var barImageSrc = _static2.default.basePath + '/img/bar.png';
var profileUrl = _static2.default.basePath + '/profile';

//TODO: move to ../Components
var LoggedUser = function LoggedUser(_ref) {
  var user = _ref.user,
      isLoggedIn = _ref.isLoggedIn,
      logOut = _ref.logOut;

  if (isLoggedIn) {
    var photoURL = user.photoURL,
        displayName = user.displayName;

    var avatar = photoURL || dummyImageSrc;

    return _react2.default.createElement(
      'span',
      { className: 'h-profile' },
      _react2.default.createElement(
        'a',
        { href: profileUrl, className: 'h-pro-wrap' },
        _react2.default.createElement(
          'span',
          { className: 'pro-img' },
          _react2.default.createElement('img', { src: avatar, alt: displayName })
        ),
        _react2.default.createElement(
          'span',
          { className: 'pro-name carret-border' },
          displayName
        )
      ),
      _react2.default.createElement(
        'button',
        { onClick: logOut },
        'LogOut'
      )
    );
  }
  return _react2.default.createElement(
    'span',
    { className: 'h-profile' },
    _react2.default.createElement(
      'a',
      { href: _static2.default.basePath + '/login' },
      'Sign In'
    )
  );
};

exports.default = (0, _reactRedux.connect)(function (_ref2) {
  var _ref2$user = _ref2.user,
      user = _ref2$user.user,
      isLoggedIn = _ref2$user.isLoggedIn;
  return { user: user, isLoggedIn: isLoggedIn };
}, function (dispatch) {
  return { logOut: function logOut() {
      return dispatch({ type: 'LOG_OUT' });
    } };
})(LoggedUser);

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.providers = exports.auth = exports.firestore = exports.functions = undefined;

var _firebase = __webpack_require__(7);

var _firebase2 = _interopRequireDefault(_firebase);

var _static = __webpack_require__(1);

var _static2 = _interopRequireDefault(_static);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_firebase2.default.initializeApp(_static2.default.firebase);

var firebaseFirestore = _firebase2.default.firestore();
firebaseFirestore.settings({ timestampsInSnapshots: true });

var facebook = new _firebase2.default.auth.FacebookAuthProvider();
// facebook.setCustomParameters({ 'display': 'popup' })
var twitter = new _firebase2.default.auth.TwitterAuthProvider();

var functions = exports.functions = _firebase2.default.functions();
var firestore = exports.firestore = firebaseFirestore;
var auth = exports.auth = _firebase2.default.auth();
var providers = exports.providers = {
  facebook: facebook,
  twitter: twitter

  // export default {
  //   functions: firebase.functions(),
  //   firestore: firebaseFirestore,
  //   auth: firebase.auth(),
  // }

};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cacheProm = exports.loadFromPromiseCache = exports.cacheExport = exports.loadFromCache = exports.callForString = exports.createElement = exports.findExport = exports.resolveExport = exports.requireById = exports.tryRequire = exports.DefaultError = exports.DefaultLoading = exports.babelInterop = exports.isWebpack = exports.isServer = exports.isTest = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isTest = exports.isTest = "production" === 'test';
var isServer = exports.isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);

var isWebpack = exports.isWebpack = function isWebpack() {
  return typeof __webpack_require__ !== 'undefined';
};
var babelInterop = exports.babelInterop = function babelInterop(mod) {
  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && mod.__esModule ? mod.default : mod;
};

var DefaultLoading = exports.DefaultLoading = function DefaultLoading() {
  return _react2.default.createElement(
    'div',
    null,
    'Loading...'
  );
};
var DefaultError = exports.DefaultError = function DefaultError(_ref) {
  var error = _ref.error;
  return _react2.default.createElement(
    'div',
    null,
    'Error: ',
    error && error.message
  );
};

var tryRequire = exports.tryRequire = function tryRequire(id) {
  try {
    return requireById(id);
  } catch (err) {
    // warn if there was an error while requiring the chunk during development
    // this can sometimes lead the server to render the loading component.
    if (false) {
      console.warn('chunk not available for synchronous require yet: ' + id + ': ' + err.message, err.stack);
    }
  }

  return null;
};

var requireById = exports.requireById = function requireById(id) {
  if (!isWebpack() && typeof id === 'string') {
    return module.require(id);
  }

  return __webpack_require__(id);
};

var resolveExport = exports.resolveExport = function resolveExport(mod, key, onLoad, chunkName, props, context, modCache) {
  var isSync = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;

  var exp = findExport(mod, key);
  if (onLoad && mod) {
    var _isServer = typeof window === 'undefined';
    var info = { isServer: _isServer, isSync: isSync };
    onLoad(mod, info, props, context);
  }
  if (chunkName && exp) cacheExport(exp, chunkName, props, modCache);
  return exp;
};

var findExport = exports.findExport = function findExport(mod, key) {
  if (typeof key === 'function') {
    return key(mod);
  } else if (key === null) {
    return mod;
  }

  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && key ? mod[key] : babelInterop(mod);
};

var createElement = exports.createElement = function createElement(Component, props) {
  return _react2.default.isValidElement(Component) ? _react2.default.cloneElement(Component, props) : _react2.default.createElement(Component, props);
};

var callForString = exports.callForString = function callForString(strFun, props) {
  return typeof strFun === 'function' ? strFun(props) : strFun;
};

var loadFromCache = exports.loadFromCache = function loadFromCache(chunkName, props, modCache) {
  return !isServer && modCache[callForString(chunkName, props)];
};

var cacheExport = exports.cacheExport = function cacheExport(exp, chunkName, props, modCache) {
  return modCache[callForString(chunkName, props)] = exp;
};

var loadFromPromiseCache = exports.loadFromPromiseCache = function loadFromPromiseCache(chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)];
};

var cacheProm = exports.cacheProm = function cacheProm(pr, chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)] = pr;
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(3);

var _static = __webpack_require__(1);

var _static2 = _interopRequireDefault(_static);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import logoImg from '../logo.png'

exports.default = (0, _reactStatic.withSiteData)(function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h1',
      { style: { textAlign: 'center' } },
      'Jump TV demo page'
    ),
    _react2.default.createElement('hr', null),
    _react2.default.createElement(
      'ul',
      null,
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'a',
          { href: '/react-motion-drawer-demo' },
          'react-motion-drawer demo'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'a',
          { href: '/bricks' },
          'Brick.js demo.'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'a',
          { href: '/navigationIcons' },
          'Navigation icons & hover menus list'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'a',
          { href: '/drop-zone-demo' },
          'React-dropzone.js demo'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'a',
          { href: '/react-tube-embed-demo' },
          'ReactTubeEmbed demo'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'a',
          { href: '/nuzzel-api-demo' },
          'Nuzzel news demo'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'a',
          { href: '/login-demo' },
          'Login demo'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'a',
          { href: '/login' },
          'Email&Pass/Facebook/Twitter login'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'a',
          { href: '/profile' },
          'Profile'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'a',
          { href: '/signup' },
          'Sign up with Email&Pass'
        )
      )
    ),
    _react2.default.createElement('hr', null),
    _react2.default.createElement(
      'ul',
      null,
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'a',
          { href: _static2.default.basePath + '/news' },
          'News page'
        )
      )
    )
  );
});

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _firebase = __webpack_require__(7);

var _firebase2 = _interopRequireDefault(_firebase);

__webpack_require__(15);

var _domutil = __webpack_require__(8);

__webpack_require__(16);

__webpack_require__(17);

__webpack_require__(18);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//const firebase = require("firebase")
//!!const fbfsUnit = require("firebase/firebase-firestore")
//require("firebase/functions");

var Counter = function Counter(_ref) {
  var count = _ref.count,
      increment = _ref.increment,
      fetch = _ref.fetch,
      reset = _ref.reset;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'p',
      null,
      'Value: ',
      count
    ),
    _react2.default.createElement(
      'button',
      { onClick: increment },
      'Increment'
    ),
    _react2.default.createElement(
      'button',
      { onClick: fetch },
      'Fetch'
    ),
    _react2.default.createElement(
      'button',
      { onClick: reset },
      'Reset'
    )
  );
};

var CounterConnected = (0, _reactRedux.connect)(function (_ref2) {
  var count = _ref2.counter.count;
  return { count: count };
}, function (dispatch) {
  return {
    increment: function increment() {
      return dispatch({ type: 'INCREMENT' });
    },
    fetch: function fetch() {
      return dispatch({ type: 'FETCH', payload: '123' });
    },
    reset: function reset() {
      return dispatch({ type: 'RESET' });
    }
  };
})(Counter);

var InfoBlock = function (_React$Component) {
  _inherits(InfoBlock, _React$Component);

  function InfoBlock() {
    var _ref3;

    var _temp, _this, _ret;

    _classCallCheck(this, InfoBlock);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref3 = InfoBlock.__proto__ || Object.getPrototypeOf(InfoBlock)).call.apply(_ref3, [this].concat(args))), _this), _this.render = function () {
      return _react2.default.createElement('div', null);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return InfoBlock;
}(_react2.default.Component);

var Dashboard = function (_React$Component2) {
  _inherits(Dashboard, _React$Component2);

  function Dashboard(props) {
    _classCallCheck(this, Dashboard);

    /* this.state = {
     *   ...Cryptocalc._defaultState,
     *   lightColorScheme: LS.getItem('colorScheme') !== 'dark',
     *   savedDocs: LS.getObject('savedDocs') || {},
     * } */
    var _this2 = _possibleConstructorReturn(this, (Dashboard.__proto__ || Object.getPrototypeOf(Dashboard)).call(this, props));

    _this2.buttonClicked = function () {
      console.log('read test data vvvvvvvvvvvvvvvvvv');
      _this2.firebaseFirestore.collection("test").get().then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
        });
      });
    };

    _this2.writeDataClicked = function () {
      console.log('writing test data...');
      _this2.firebaseFirestore.collection("test").doc("LA").set({
        name: "Los Angeles",
        state: "CA",
        country: "USA",
        date: new Date()
        //wrongData: new Set([1,2,3]),
      }).then(function (r) {
        return console.log('R:', r);
      });
      //nw .catch( e => console.log('E:', e) )
    };

    _this2.callFunctionClicked = function () {
      console.log('calling test function...');
    };

    _this2.callFunctionClicked = function () {
      var helloWorldCORS = _this2.firebaseFunctions.httpsCallable('helloWorldCORS');

      helloWorldCORS().then(function (result) {
        console.log('R:', result);
      }).catch(function (e) {
        return console.log('E:', e);
      });
    };

    _this2.render = function () {
      return _react2.default.createElement(
        'div',
        { className: 'info-block' },
        'sdfsfa',
        _react2.default.createElement('hr', null),
        _react2.default.createElement(
          'span',
          { className: 'myclass' },
          '1'
        ),
        _react2.default.createElement(
          'span',
          null,
          '2'
        ),
        _react2.default.createElement(
          'button',
          { type: 'button', className: 'btn btn-primary', onClick: _this2.buttonClicked },
          'Test get data'
        ),
        _react2.default.createElement(
          'button',
          { type: 'button', className: 'btn btn-primary', onClick: _this2.writeDataClicked },
          'Test write data'
        ),
        _react2.default.createElement(
          'button',
          { type: 'button', className: 'btn btn-primary', onClick: _this2.callFunctionClicked },
          'Test call function'
        ),
        _react2.default.createElement('hr', null),
        _react2.default.createElement(CounterConnected, null)
      );
    };

    _this2.firebaseFirestore = null;
    _this2.firebaseFunctions = null;
    //this.parser = new nearley.Parser(grammar.ParserRules, grammar.ParserStart) //.feed(txt);
    return _this2;
  }

  _createClass(Dashboard, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (_domutil.canUseDOM) {
        this.initFirebase();
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      // to init firebase on development mode
      this.initFirebase();
    }
  }, {
    key: 'initFirebase',
    value: function initFirebase() {
      return;

      var config = {
        apiKey: "AIzaSyCfLjmvUPI2Y4-8YTnwAx6Jg9KCUUgW2D4",
        authDomain: "jump-tv.firebaseapp.com",
        databaseURL: "https://jump-tv.firebaseio.com",
        projectId: "jump-tv",
        storageBucket: "jump-tv.appspot.com",
        messagingSenderId: "616656212948"
      };

      _firebase2.default.initializeApp(config);

      this.firebaseFirestore = _firebase2.default.firestore();
      this.firebaseFirestore.settings({ timestampsInSnapshots: true });

      this.firebaseFunctions = _firebase2.default.functions();
    }
  }]);

  return Dashboard;
}(_react2.default.Component);

exports.default = Dashboard;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("firebase/functions");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 17 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 18 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactMotionDrawer = __webpack_require__(51);

var _reactMotionDrawer2 = _interopRequireDefault(_reactMotionDrawer);

var _static = __webpack_require__(1);

var _static2 = _interopRequireDefault(_static);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

console.log('CC', _static2.default, _static2.default.basePath);

var ReactMotionDrawerDemo = function (_React$Component) {
  _inherits(ReactMotionDrawerDemo, _React$Component);

  function ReactMotionDrawerDemo() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ReactMotionDrawerDemo);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ReactMotionDrawerDemo.__proto__ || Object.getPrototypeOf(ReactMotionDrawerDemo)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      sandwichOpened: false
    }, _this.sandwichClicked = function () {
      _this.setState({ sandwichOpened: true });
    }, _this.drawerChanged = function (isOpened) {
      _this.setState({ sandwichOpened: isOpened });
    }, _this.render = function () {
      console.log('BP', _static2.default.basePath);
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement('img', { src: _static2.default.basePath + '/img/sandwich.svg', alt: 'sandwich.svg', style: { width: "50px", height: "50px" }, onClick: _this.sandwichClicked }),
        _react2.default.createElement(
          'span',
          { style: { "marginLeft": "50px", display: "inline" } },
          'Jump TV. Demo of react-motion-drawer. Press sandwich or swipe left edge'
        ),
        _react2.default.createElement(
          _reactMotionDrawer2.default,
          { open: _this.state.sandwichOpened, onChange: _this.drawerChanged, drawerStyle: { background: "lightgray" } /*overlayColor="lightgray"*/ },
          _react2.default.createElement(
            'ul',
            null,
            _react2.default.createElement(
              'li',
              null,
              'Plum'
            ),
            _react2.default.createElement(
              'li',
              null,
              'Apple'
            ),
            _react2.default.createElement(
              'li',
              null,
              'Orange'
            )
          )
        )
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return ReactMotionDrawerDemo;
}(_react2.default.Component);

exports.default = ReactMotionDrawerDemo;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// From http://redux.js.org/docs/basics/UsageWithReact.html

var Counter = function Counter(_ref) {
  var count = _ref.count,
      increment = _ref.increment,
      increment2 = _ref.increment2,
      fetch = _ref.fetch,
      reset = _ref.reset;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'p',
      null,
      'Value: ',
      count
    ),
    _react2.default.createElement(
      'button',
      { onClick: increment },
      'Increment'
    ),
    _react2.default.createElement(
      'button',
      { onClick: increment2 },
      'Increment2'
    ),
    _react2.default.createElement(
      'button',
      { onClick: fetch },
      'fetch'
    ),
    _react2.default.createElement(
      'button',
      { onClick: reset },
      'Reset'
    )
  );
};

var CounterConnected = (0, _reactRedux.connect)(function (_ref2) {
  var count = _ref2.counter.count;
  return { count: count };
}, function (dispatch) {
  return {
    increment: function increment() {
      return dispatch({ type: 'INCREMENT' });
    },
    increment2: function increment2() {
      return dispatch({ type: 'INCREMENT_ASYNC' });
    },
    fetch: function fetch() {
      return dispatch({ type: 'FETCH', payload: { a: 10 } });
    },
    test: function test() {
      return dispatch({ type: 'TEST' });
    },
    reset: function reset() {
      return dispatch({ type: 'RESET' });
    }
  };
})(Counter);

var About = function About() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h1',
      null,
      'This is what we\'re all about!'
    ),
    _react2.default.createElement(
      'p',
      null,
      'React, static sites, performance, speed. It\'s the stuff that makes us tick.'
    ),
    _react2.default.createElement(
      'h2',
      null,
      'Here is a redux counter:'
    ),
    _react2.default.createElement(CounterConnected, null)
  );
};

exports.default = About;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

exports.default = (0, _reactStatic.withRouteData)(function (_ref) {
  var post = _ref.post;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _reactStatic.Link,
      { to: '/blog/' },
      '<',
      ' Back'
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'h3',
      null,
      post.title
    ),
    _react2.default.createElement(
      'p',
      null,
      post.body
    )
  );
});

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

exports.default = (0, _reactStatic.withRouteData)(function (_ref) {
  var posts = _ref.posts;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h1',
      null,
      'It\'s blog time.'
    ),
    _react2.default.createElement('br', null),
    'All Posts:',
    _react2.default.createElement(
      'ul',
      null,
      posts.map(function (post) {
        return _react2.default.createElement(
          'li',
          { key: post.id },
          _react2.default.createElement(
            _reactStatic.Link,
            { to: '/blog/post/' + post.id + '/' },
            post.title
          )
        );
      })
    )
  );
});

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _reactBricksInfinite = __webpack_require__(52);

var _reactBricksInfinite2 = _interopRequireDefault(_reactBricksInfinite);

__webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sizes = [{ mq: '100px', columns: 6, gutter: 20 }];

var Brick = function Brick(_ref) {
  var id = _ref.id,
      image = _ref.image,
      shared = _ref.shared,
      title = _ref.title,
      viewed = _ref.viewed,
      width = _ref.width,
      height = _ref.height;
  return _react2.default.createElement(
    'div',
    { key: id, className: 'briks-card card', style: { height: height * 30 + 270 + 'px' } },
    _react2.default.createElement(
      'div',
      { className: 'innerDetails' },
      _react2.default.createElement(
        'h6',
        null,
        title
      ),
      _react2.default.createElement('img', { src: image, alt: title }),
      _react2.default.createElement(
        'p',
        null,
        'shared: ',
        shared
      ),
      _react2.default.createElement(
        'p',
        null,
        'viewed: ',
        viewed
      )
    )
  );
};

var Bricks = function Bricks(_ref2) {
  var _ref2$blocks = _ref2.blocks,
      blocks = _ref2$blocks === undefined ? [] : _ref2$blocks,
      loadMoreBricks = _ref2.loadMoreBricks;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_reactBricksInfinite2.default, {
      containerId: 'blocks-container',
      loadMoreBricks: loadMoreBricks,
      reRender: false,
      bricks: blocks.map(Brick),
      hasMoreBricks: true,
      sizes: sizes
    })
  );
};

var BricksConnected = (0, _reactRedux.connect)(function (_ref3) {
  var blocks = _ref3.blocks.blocks;
  return { blocks: blocks };
}, function (dispatch) {
  return {
    loadMoreBricks: function loadMoreBricks() {
      return dispatch({ type: 'LOAD MORE BRICKS' });
    }
  };
})(Bricks);

exports.default = BricksConnected;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _static = __webpack_require__(1);

var _static2 = _interopRequireDefault(_static);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var icons = ['11.png', '12.png', '13.png', 'a1.png', 'a2.png', 'a3.png', 'a4.png', 'angle-left.png', 'b1.png', 'b2.png', 'b3.png', 'b4.png', 'b5.png', 'b6.png', 'bar.png', 'bar2.png', 'bar3.png', 'bars.png', 'barss.png', 'browse.png', 'c1.png', 'c10.png', 'c11.png', 'c12.png', 'c13.png', 'c14.png', 'c15.png', 'c16.png', 'c2.png', 'c3.png', 'c4.png', 'c5.png', 'c6.png', 'c7.png', 'c8.png', 'c9.png', 'clock.png', 'create course edit icon.png', 'create portadafill 4  1.png', 'create portadaoval 4 copy.png', 'create portadashape  19.png', 'create portadashape  25.png', 'create portadashape  26.png', 'create portadashape  30.png', 'dashboard 3 iconsicaccountcircle.png', 'dashboard 3 iconsicchatbubble.png', 'dashboard 3 iconsicdashboard.png', 'dashboard 3 iconsicextension.png', 'dashboard 3 iconsickeyboardarrowleft.png', 'dashboard 3 iconsickeyboardarrowright.png', 'dashboard 3 iconsiclock.png', 'dashboard 3 iconsicpowersettingsnew.png', 'dashboard 3 iconsicsettings.png', 'dashboard browse icon.png', 'dashboard browse shape  10.png', 'dashboard browse shape  11.png', 'dashboard browse shape  20.png', 'dashboard browse shape  34.png', 'dashboard browse shape  35.png', 'dashboard browse shape  8.png', 'dashboard browse shape  9.png', 'dashboard browse tab  2.png', 'dashboard browse tutorial.png', 'dashboard copybitmap  1.png', 'dashboard copybitmap  4.png', 'dashboard copycombined shape 214 copy 2.png', 'dashboard copycombined shape 214 copy.png', 'dashboard copyfill 1  1.png', 'dashboard copyshape  29.png', 'dashboard copyshape  30.png', 'dashboard copyshape  31.png', 'dashboard copyshape  32.png', 'dashboard icon  1.png', 'dashboard icon  2.png', 'dashboard icon  3.png', 'dashboard icon.png', 'dashboard menu filter 3 iconsicschedule.png', 'dashboard menu filter 3 iconsicshare2  6.png', 'dashboard menu filteroval  3.png', 'dashboard menu filteroval 3 copy 3.png', 'dashboard menu filteroval 3.png', 'dashboard menu filtershape  33.png', 'dashboard menu filtershape  34.png', 'dashboard menu filtershape  35.png', 'dashboard menu filtershape  36.png', 'dashboard menu filtersoundcloud.png', 'dashboard menu left group 3  1.png', 'dashboard menu leftrectangle 3  4.png', 'dashboard menu leftshape  21.png', 'dashboard menu leftshape  35.png', 'dashboard menu leftshape  36.png', 'dashboard modalbtn  1.png', 'dashboard modalbtn.png', 'dashboard modaldepth  1.png', 'dashboard modaldepth  2.png', 'dashboard modalicon  1.png', 'dashboard modalplay icon.png', 'dashboard modalstrock.png', 'dashboard new icons cards 1 buttons1 large6 rounded2 black 30.png', 'dashboard new icons cards 3 iconsicforum  1.png', 'dashboard new icons cards 3 iconsicmorehoriz.png', 'dashboard new icons cards 3 iconsicshare2  1.png', 'dashboard new icons cardsbitmap copy.png', 'dashboard new icons cardschat.png', 'dashboard new icons cardschecked.png', 'dashboard new icons cardsfill 1  4.png', 'dashboard new icons cardsfill 3  2.png', 'dashboard new icons cardsgaming.png', 'dashboard new icons cardsresize 1.png', 'dashboard new icons cardsshape  1.png', 'dashboard new icons cardsshape  13.png', 'dashboard new icons cardsshape  38.png', 'dashboard new icons cardsshare.png', 'dashboard new icons cardswarning.png', 'dashboard profile copyfill 5  1.png', 'dashboard profile copyfill 9  1.png', 'dashboard profilebitmap  3.png', 'dashboard profileoval  1.png', 'dashboard profileoval  2.png', 'dashboard profileshape  37.png', 'dashboard profileshape  38.png', 'dashboard profileshape  39.png', 'dashboard profileshape  40.png', 'dashboard profileshape  41.png', 'dashboard profileshape  42.png', 'dashboardchart  1.png', 'dashboardchart  2.png', 'dashboardchart.png', 'dashboardplaceholder  17.png', 'dashboardplaceholder  2.png', 'dashboardplaceholder  23.png', 'dashboardplaceholder  27.png', 'dashboardshape  20.png', 'dashboardshape  21.png', 'dashboardshape  52.png', 'dashboardshape  53.png', 'dashboardshape  54.png', 'dashboardshape  55.png', 'dashboardshape  56.png', 'detail course copy 3 iconsicremoveredeye  6.png', 'detail course copy 3 iconsicremoveredeye  7.png', 'detail course copybitmap  1.png', 'detail course copycombined shape 7996.png', 'detail course edit finalfill 1  2.png', 'detail course edit finalfill 1  3.png', 'detail course edit finalfill 4.png', 'detail course edit finalshape  1.png', 'detail course edit finalshape  16.png', 'detail course edit finalshape  17.png', 'detail course edit finalshape  2.png', 'detail course edit finalshape  29.png', 'detail course preview style1bitmap  1.png', 'detail course preview style1shape.png', 'detail course previewfill 6.png', 'detail course previewoval  4.png', 'detail course previewshape  12.png', 'detail course previewshape  13.png', 'detail coursefill 6  1.png', 'detail courseshape  20.png', 'detail courseshape  34.png', 'detail courseshape  35.png', 'favicon.png', 'flag.png', 'hamburger-menu-icon.svg', 'home.png', 'i2.png', 'i3.png', 'i4.png', 'i5.png', 'i6.png', 'i7.png', 'm1.png', 'm10.png', 'm11.png', 'm12.png', 'm13.png', 'm14.png', 'm2.png', 'm4.png', 'm5.png', 'm6.png', 'm7.png', 'm8.png', 'm9.png', 'message.png', 'message1.png', 'message2.png', 'modal campaing 3 iconsicadd.png', 'modal campaing 3 iconsicfastforward.png', 'modal campaing 3 iconsicfastrewind.png', 'modal campaing 3 iconsicfullscreen.png', 'modal campaing 3 iconsicschedule  4.png', 'modal campaing 3 iconsicsettings.png', 'modal campaing 3 iconsicshare2  15.png', 'modal campaing 3 iconsicvolumeup.png', 'modal campaingdashboard.png', 'modal campaingfill 1  1.png', 'modal campaingfill 11  1.png', 'modal campaingfill 11  2.png', 'modal campaingfill 3  4.png', 'modal campaingfill 8.png', 'modal campaingline  18.png', 'modal campaingoval 2  1.png', 'modal campaingplaceholder  54.png', 'modal campaingplaceholder  82.png', 'modal campaingplaceholder  83.png', 'modal campaingplaceolder.png', 'modal campaingshape  14.png', 'modal campaingshape  15.png', 'modal campaingshape  28.png', 'modal campaingshape  29.png', 'modal campaingstroke 3  1.png', 'modal check outbitmap  5.png', 'modal check outrectangle 3  1.png', 'modal check outrectangle 7 copy 2.png', 'modal check outrectangle 7 copy.png', 'modal check outrectangle 7.png', 'modal check outshape  38.png', 'modal check outshape  39.png', 'modal check outshape  40.png', 'modal check outshape  44.png', 'modal check outshape  45.png', 'modal check outshape  46.png', 'modal check outtriangle.png', 'modal course group 3.png', 'modal coursefill 12.png', 'modal coursefill 13.png', 'modal coursepage 1.png', 'modal courseplaceholder  12.png', 'modal courseshape  18.png', 'modal courseshape  24.png', 'modal courseshape  27.png', 'modal courseshape  30.png', 'modal courseshape  31.png', 'modal courseshape  33.png', 'music.png', 'n1.png', 'n2.png', 'n3.png', 'n4.png', 'n5.png', 'plus.png', 'portada preview bitmap.png', 'portada previewfill 7  2.png', 'portada previewinternet.png', 'portada previewoval.png', 'pro.png', 'profile 3 iconsicemail.png', 'profile 3 iconsicpersonadd.png', 'profile copy icon  1.png', 'profile copy icon  2.png', 'profile copy icon.png', 'profile copy342946  hand like thumbs up.png', 'profile copy342969  bubble chat speech type typing.png', 'profile copy345453  helmet space.png', 'profile copy345479  award sports trophy winner.png', 'profile copy345485  flag marker pin.png', 'profile copy345487  attachment clip paper.png', 'profile copy345677  play.png', 'profile copycombined shape 11929.png', 'profile copycombined shape 214 copy.png', 'profile copyplaceholder  40.png', 'profile copyrectangle 7 copy 2.png', 'profile copyrectangle 7 copy.png', 'profile copyshape  4.png', 'profile copyshape  7.png', 'profilecombined shape 214.png', 'profilefill 10  1.png', 'profilefill 7  1.png', 'profileoval 2.png', 'profilerectangle 7.png', 'sandwich.svg', 'search2.png', 'share.png', 'share1.png', 'sharefill 2.png', 'sharepath 2.png', 'sound.png', 'tic.png', 'twitch.png', 'view.png', 'view1.png', 'view2.png', 'w1.png', 'w2.png', 'w3.png', 'w4.png', 'y1.png', 'youtube.png'];

var drowIcon = function drowIcon(name) {
  return _react2.default.createElement('img', {
    key: name, onClick: function onClick() {
      return alert(name);
    },
    src: _static2.default.basePath + '/img/' + name,
    alt: name, style: { maxWidth: '50px', margin: '10px' }
  });
};

exports.default = function () {
  return _react2.default.createElement(
    'div',
    { style: { backgroundColor: 'gray' } },
    _react2.default.createElement(
      'h1',
      null,
      'Aplication icons asset:'
    ),
    _react2.default.createElement(
      'p',
      null,
      '(click on icon to show icon filename)'
    ),
    icons.map(drowIcon)
  );
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDropzone = __webpack_require__(53);

var _reactDropzone2 = _interopRequireDefault(_reactDropzone);

var _static = __webpack_require__(1);

var _static2 = _interopRequireDefault(_static);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DropZoneDemo = function (_React$Component) {
  _inherits(DropZoneDemo, _React$Component);

  function DropZoneDemo() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, DropZoneDemo);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DropZoneDemo.__proto__ || Object.getPrototypeOf(DropZoneDemo)).call.apply(_ref, [this].concat(args))), _this), _this.onDrop = function (acceptedFiles, rejectedFiles) {
      console.log('onDrop:', acceptedFiles, rejectedFiles);
      console.log(acceptedFiles[0]);
      // do stuff with files...

      var img = document.getElementById('droppedImage');

      var reader = new FileReader();
      reader.onload = function (image) {
        return function (e) {
          image.src = e.target.result;
        };
      }(img);

      reader.readAsDataURL(acceptedFiles[0]);
    }, _this.render = function () {

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h1',
          null,
          'Drop zone demo'
        ),
        _react2.default.createElement(
          _reactDropzone2.default,
          { onDrop: _this.onDrop },
          'Drop any picture file here'
        ),
        _react2.default.createElement(
          'div',
          null,
          'Last dropped picture:'
        ),
        _react2.default.createElement('img', { id: 'droppedImage', alt: '' })
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }
  /*
   *   state = {
   *     sandwichOpened: false
   *   }
   *
   *   sandwichClicked = () => {
   *     this.setState({sandwichOpened: true})
   *   }
   *
   *   drawerChanged = (isOpened) => {
   *     this.setState({sandwichOpened: isOpened})
   *   }
   *  */

  return DropZoneDemo;
}(_react2.default.Component);

exports.default = DropZoneDemo;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _static = __webpack_require__(1);

var _static2 = _interopRequireDefault(_static);

var _reactTubeEmbed = __webpack_require__(54);

var _reactTubeEmbed2 = _interopRequireDefault(_reactTubeEmbed);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactTubeEmbedDemo = function (_React$Component) {
  _inherits(ReactTubeEmbedDemo, _React$Component);

  function ReactTubeEmbedDemo() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ReactTubeEmbedDemo);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ReactTubeEmbedDemo.__proto__ || Object.getPrototypeOf(ReactTubeEmbedDemo)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h1',
          null,
          'React tube embed demo'
        ),
        _react2.default.createElement(_reactTubeEmbed2.default, { src: 'https://www.youtube.com/watch?v=lmc21V-zBq0' }),
        _react2.default.createElement(_reactTubeEmbed2.default, { src: 'https://youtu.be/lmc21V-zBq0' }),
        _react2.default.createElement(_reactTubeEmbed2.default, { src: 'Check this, https://youtu.be/lmc21V-zBq0 :D!' }),
        _react2.default.createElement(_reactTubeEmbed2.default, { src: 'https://vimeo.com/42615527' }),
        _react2.default.createElement(_reactTubeEmbed2.default, { src: 'Hello World, I will be ignored!' }),
        _react2.default.createElement(_reactTubeEmbed2.default, { src: 'http://www.dailymotion.com/video/x11jxof' }),
        _react2.default.createElement(_reactTubeEmbed2.default, { src: 'https://giphy.com/gifs/happy-smile-P8MxmGnjmytws/' }),
        _react2.default.createElement(_reactTubeEmbed2.default, { src: 'Some good jams https://open.spotify.com/user/spotify/playlist/37i9dQZF1DWWrJKwf0q9nn' })
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }
  /*
   *   state = {
   *     sandwichOpened: false
   *   }
   *
   *   sandwichClicked = () => {
   *     this.setState({sandwichOpened: true})
   *   }
   *
   *   drawerChanged = (isOpened) => {
   *     this.setState({sandwichOpened: isOpened})
   *   }
   *  */

  return ReactTubeEmbedDemo;
}(_react2.default.Component);

exports.default = ReactTubeEmbedDemo;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _ReactBricks = __webpack_require__(55);

var _ReactBricks2 = _interopRequireDefault(_ReactBricks);

__webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sizes = [{ mq: '100px', columns: 6, gutter: 20 }];

var NewsBrick = function NewsBrick(_ref) {
  var image = _ref.image_url,
      id = _ref.id,
      date = _ref.publication_date,
      url = _ref.url,
      title = _ref.title,
      source = _ref.source;
  return _react2.default.createElement(
    'div',
    { key: id, className: 'briks-card card', style: { height: '300px' } },
    _react2.default.createElement(
      'a',
      { href: url },
      _react2.default.createElement(
        'div',
        { className: 'innerDetails' },
        _react2.default.createElement(
          'h6',
          null,
          title
        ),
        _react2.default.createElement('img', { src: image, alt: title }),
        _react2.default.createElement(
          'p',
          null,
          'Published: ',
          new Date(date).toLocaleString()
        ),
        _react2.default.createElement(
          'p',
          null,
          'source: ',
          source
        )
      )
    )
  );
};

var NuzzelComponent = function NuzzelComponent(_ref2) {
  var news = _ref2.news,
      query = _ref2.query,
      offset = _ref2.offset,
      count = _ref2.count,
      searchNews = _ref2.searchNews,
      reRender = _ref2.reRender;

  news = news || [];
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h2',
      null,
      'Search:'
    ),
    _react2.default.createElement('input', { type: 'text', defaultValue: 'USA', onChange: function onChange(_ref3) {
        var value = _ref3.target.value;
        searchNews(value, 0, count);
      } }),
    _react2.default.createElement(_ReactBricks2.default, {
      containerId: 'news-container',
      loadMoreBricks: function loadMoreBricks() {
        return searchNews(query, offset + 20, count);
      },
      reRender: reRender,
      bricks: news.map(NewsBrick),
      hasMoreBricks: news.length < 80,
      useWindowForScroll: false,
      sizes: sizes
    })
  );
};

var Nuzzel = (0, _reactRedux.connect)(function (_ref4) {
  var _ref4$nuzzel = _ref4.nuzzel,
      news = _ref4$nuzzel.news,
      offset = _ref4$nuzzel.offset,
      count = _ref4$nuzzel.count,
      query = _ref4$nuzzel.query,
      reRender = _ref4$nuzzel.reRender;
  return { news: news, offset: offset, count: count, query: query, reRender: reRender };
}, function (dispatch) {
  return {
    searchNews: function searchNews(query, offset, count) {
      return dispatch({ type: 'SEARCH NEWS', payload: { query: query, offset: offset, count: count } });
    }
  };
})(NuzzelComponent);

exports.default = Nuzzel;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _domutil = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//import * as firebase from 'firebase'
//import firebaseui from 'firebaseui'

//let firebase = require('firebase');
//let firebaseui = require('firebaseui');

//import firebase from 'firebase'
//let firebaseui = require('firebase/auth')

//import config from '../../static.config'


//console.log('ZZ', firebase, firebaseui)

var LoginDemo = function (_React$Component) {
  _inherits(LoginDemo, _React$Component);

  function LoginDemo() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, LoginDemo);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = LoginDemo.__proto__ || Object.getPrototypeOf(LoginDemo)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      loggedUser: null
    }, _this.ui = null, _this.uiConfig = null, _this.onAuthStateChanged = function (user) {
      _this.setState({ loggedUser: user });
    }, _this.logOutClicked = function () {
      firebase.auth().signOut().then(function () {
        // Sign-out successful.
        this.setState({ loggedUser: null });
      }).catch(function (error) {
        // An error happened.
      });
    }, _this.render = function () {
      var loggedUser = _this.state.loggedUser;
      console.log('U:', loggedUser);
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h1',
          null,
          'Jump-TV login demo page'
        ),
        loggedUser ? [_react2.default.createElement(
          'p',
          null,
          'Logged in as ',
          loggedUser.displayName
        ), _react2.default.createElement(
          'button',
          { onClick: _this.logOutClicked },
          'Log out'
        )] : [_react2.default.createElement('div', { id: 'firebaseui-auth-container' }), _react2.default.createElement(
          'p',
          null,
          'Note: email login via dummy testemail@gmail.com/111111 account for demo purpoces'
        )]
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(LoginDemo, [{
    key: 'componentDidMount',

    /* sandwichClicked = () => {
     *   this.setState({sandwichOpened: true})
     * }
      * drawerChanged = (isOpened) => {
     *   this.setState({sandwichOpened: isOpened})
     * } */

    value: function componentDidMount() {
      if (_domutil.canUseDOM) {
        this.initFirebase();
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      // to init firebase on development mode
      //this.initFirebase()

      if (_domutil.canUseDOM && !this.state.loggedUser && prevState.loggedUser) {
        // bad place
        // Initialize the FirebaseUI Widget using Firebase.
        //var ui = new firebaseui.auth.AuthUI(firebase.auth());

        // The start method will wait until the DOM is loaded.

        this.ui.start('#firebaseui-auth-container', this.uiConfig);

        firebase.auth().onAuthStateChanged(this.onAuthStateChanged);

        console.log(123);
      }
    }
  }, {
    key: 'initFirebase',
    value: function initFirebase() {
      var _this2 = this;

      Promise.resolve().then(function () {
        return (0, _domutil.loadjs)('https://www.gstatic.com/firebasejs/5.0.3/firebase.js');
      }).then(function () {
        return (0, _domutil.loadjs)('https://cdn.firebase.com/libs/firebaseui/3.0.0/firebaseui.js');
      }).then(function () {
        return (0, _domutil.loadcss)('https://cdn.firebase.com/libs/firebaseui/3.0.0/firebaseui.css');
      }).then(function () {
        var config = {
          apiKey: "AIzaSyCfLjmvUPI2Y4-8YTnwAx6Jg9KCUUgW2D4",
          authDomain: "jump-tv.firebaseapp.com",
          databaseURL: "https://jump-tv.firebaseio.com",
          projectId: "jump-tv",
          storageBucket: "jump-tv.appspot.com",
          messagingSenderId: "616656212948"
        };
        firebase.initializeApp(config);

        _this2.uiConfig = {
          signInSuccessUrl: '#', //<url-to-redirect-to-on-success>

          signInOptions: [
          // Leave the lines as is for the providers you want to offer your users.
          firebase.auth.GoogleAuthProvider.PROVIDER_ID, firebase.auth.FacebookAuthProvider.PROVIDER_ID, firebase.auth.TwitterAuthProvider.PROVIDER_ID,
          //firebase.auth.GithubAuthProvider.PROVIDER_ID,
          firebase.auth.EmailAuthProvider.PROVIDER_ID]

          // Terms of service url.
          //! tosUrl: '<your-tos-url>',

          //signInFlow: 'popup',
        };

        // Initialize the FirebaseUI Widget using Firebase.
        _this2.ui = new firebaseui.auth.AuthUI(firebase.auth());

        // The start method will wait until the DOM is loaded.
        _this2.ui.start('#firebaseui-auth-container', _this2.uiConfig);

        firebase.auth().onAuthStateChanged(_this2.onAuthStateChanged);
      });
    }
  }]);

  return LoginDemo;
}(_react2.default.Component);

exports.default = LoginDemo;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
//import Helmet from'react-helmet'

//const firebase = require("firebase")
//!!const fbfsUnit = require("firebase/firebase-firestore")
//require("firebase/functions");

//import config from'../../static.config'
//import { loadjs, canUseDOM } from'../domutil'


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(2);

var _firebase = __webpack_require__(7);

var _firebase2 = _interopRequireDefault(_firebase);

__webpack_require__(15);

var _masonryLayout = __webpack_require__(59);

var _masonryLayout2 = _interopRequireDefault(_masonryLayout);

var _LoggedUser = __webpack_require__(10);

var _LoggedUser2 = _interopRequireDefault(_LoggedUser);

__webpack_require__(16);

__webpack_require__(61);

__webpack_require__(17);

__webpack_require__(18);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Image = function Image(_ref) {
  var name = _ref.name;
  return _react2.default.createElement('img', { src: '/img/' + name, alt: name });
};

var categoriesTypes = {
  All: { queryText: '', className: 'active' },
  Cryptocurrency: { queryText: 'cryptocurrency', className: '' },
  Comedy: { queryText: 'comedy', className: '' },
  Documentary: { queryText: 'documentary', className: '' },
  Food: { queryText: 'food', className: '' },
  Instructionals: { queryText: 'instructionals', className: '' },
  Sports: { queryText: 'sports', className: '' },
  Talks: { queryText: 'talks', className: '' },
  Travel: { queryText: 'travel', className: '' }
};
var unSelectedCategories = _extends({}, categoriesTypes, {
  All: _extends({}, categoriesTypes.All, { className: '' })
});
var categoriesNames = Object.keys(categoriesTypes);

var SearchFiltersDefault = new Map([['youtube', {
  title: 'Youtube',
  icon: '/assets/img/y1.png',
  active: false
}], ['music', {
  title: 'Music',
  icon: '/assets/img/music.png',
  active: false
}], ['soundcloud', {
  title: 'Soundcloud',
  icon: '/assets/img/sound.png',
  active: false
}], ['twitch', {
  title: 'Twitch',
  icon: '/assets/img/twitch.png',
  active: false
}]]);

var newsClasses = {
  article: 'grid-sizer grid-item grid-item--article grid-sizer',
  chart: 'grid-item grid-item--chart grid-item',
  lastNews: 'grid-sizer grid-item grid-item--last-news grid-item',
  video: 'grid-item grid-item--video grid-item',
  suggestedVideo: 'grid-sizer grid-item grid-item--suggested-video grid-item',
  site: 'grid-sizer grid-item grid-item--site grid-item',
  art: 'grid-sizer grid-item grid-item--art grid-item'
};
var classes = ['grid-sizer grid-item grid-item--article grid-sizer', 'grid-item grid-item--chart grid-item', 'grid-sizer grid-item grid-item--last-news grid-item', 'grid-item grid-item--video grid-item', 'grid-sizer grid-item grid-item--suggested-video grid-item', 'grid-sizer grid-item grid-item--site grid-item', 'grid-sizer grid-item grid-item--art grid-item'];
var masonryOptions = ['.grid', {
  itemSelector: '.grid-item',
  columnWidth: '.grid-sizer',
  percentPosition: true,
  gutter: 10
}];

var News = function (_React$Component) {
  _inherits(News, _React$Component);

  /*
   *   static defaultProps = {
   *     nuzzel: {news: []}
   *   }
   *  */
  function News(props) {
    _classCallCheck(this, News);

    var _this = _possibleConstructorReturn(this, (News.__proto__ || Object.getPrototypeOf(News)).call(this, props));

    _this.componentDidMount = function () {
      _this.searchNews(); // this.state.categories.All.queryText
    };

    _this.componentDidUpdate = function (prevProps, prevState) {
      // why here ??Q
      _this.masonry = new (Function.prototype.bind.apply(_masonryLayout2.default, [null].concat(masonryOptions)))();

      if (prevState.searchText !== _this.state.searchText || prevState.activeCategory !== _this.state.activeCategory || prevState.searchFilters !== _this.state.searchFilters) {
        _this.searchNews();
      }
    };

    _this.switchCategory = function (name) {
      var selectedCategory = _extends({}, unSelectedCategories[name], { className: 'active'
        //!! this.searchNews(this.state.categories[name].queryText)  // TODO: move to CDU
      });_this.setState({
        categories: _extends({}, unSelectedCategories, _defineProperty({}, name, selectedCategory)),
        activeCategory: name
      });
    };

    _this.renderCategory = function (name) {
      return _react2.default.createElement(
        'li',
        { key: name, className: _this.state.categories[name].className, onClick: function onClick() {
            return _this.switchCategory(name);
          } },
        _react2.default.createElement(
          'a',
          null,
          name
        )
      );
    };

    _this.toggleSearchFilterVisible = function () {
      _this.setState(function (prevState) {
        return { searchFilterVisible: !prevState.searchFilterVisible };
      });
    };

    _this.render = function () {
      var news = _this.props.news;
      var _this$state = _this.state,
          searchFilterVisible = _this$state.searchFilterVisible,
          searchFilters = _this$state.searchFilters;

      console.log('R', news);
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'marketing-main-section' },
          _react2.default.createElement(
            'div',
            { className: 'marketing-main' },
            _react2.default.createElement(
              'div',
              { className: 'marketing-left' },
              _react2.default.createElement(
                'div',
                { className: 'm-l-top-bar dd-wrap' },
                _react2.default.createElement(
                  'a',
                  { href: true, className: 'dd-trigger' },
                  _react2.default.createElement('img', { src: '/assets/img/bar2.png', alt: true })
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'browse-dropdown dd-content left-caret' },
                  _react2.default.createElement(
                    'ul',
                    null,
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        'a',
                        { href: true },
                        _react2.default.createElement(
                          'span',
                          { className: 'h-b-ancor' },
                          _react2.default.createElement('img', { src: '/assets/img/i1.png', alt: true })
                        ),
                        ' Home'
                      )
                    ),
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        'a',
                        { href: true },
                        _react2.default.createElement(
                          'span',
                          { className: 'h-b-ancor' },
                          _react2.default.createElement('img', { src: '/assets/img/i3.png', alt: true })
                        ),
                        ' Trending'
                      )
                    ),
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        'a',
                        { href: true },
                        _react2.default.createElement(
                          'span',
                          { className: 'h-b-ancor' },
                          _react2.default.createElement('img', { src: '/assets/img/m14.png', alt: true })
                        ),
                        ' Histroy'
                      )
                    ),
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        'a',
                        { href: true },
                        _react2.default.createElement(
                          'span',
                          { className: 'h-b-ancor' },
                          _react2.default.createElement('img', { src: '/assets/img/browse.png', alt: true })
                        ),
                        ' Browse'
                      )
                    )
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'm-l-bottom-menu' },
                _react2.default.createElement(
                  'ul',
                  null,
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: true },
                      _react2.default.createElement(
                        'span',
                        { className: 'alm-img' },
                        _react2.default.createElement('img', { src: '/assets/img/m1.png', alt: true })
                      ),
                      ' ',
                      _react2.default.createElement(
                        'span',
                        { className: 'alm-name' },
                        'Dashboard'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: true },
                      _react2.default.createElement(
                        'span',
                        { className: 'alm-img' },
                        _react2.default.createElement('img', { src: '/assets/img/home.png', alt: true })
                      ),
                      ' ',
                      _react2.default.createElement(
                        'span',
                        { className: 'alm-name' },
                        'Home'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: true },
                      _react2.default.createElement(
                        'span',
                        { className: 'alm-img' },
                        _react2.default.createElement('img', { src: '/assets/img/i3.png', alt: true })
                      ),
                      ' ',
                      _react2.default.createElement(
                        'span',
                        { className: 'alm-name' },
                        'Trending'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: true },
                      _react2.default.createElement(
                        'span',
                        { className: 'alm-img' },
                        _react2.default.createElement('img', { src: '/assets/img/m4.png', alt: true })
                      ),
                      ' ',
                      _react2.default.createElement(
                        'span',
                        { className: 'alm-name' },
                        'Categories'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: true },
                      _react2.default.createElement(
                        'span',
                        { className: 'alm-img' },
                        _react2.default.createElement('img', { src: '/assets/img/m5.png', alt: true })
                      ),
                      ' ',
                      _react2.default.createElement(
                        'span',
                        { className: 'alm-name' },
                        'Saved'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: true },
                      _react2.default.createElement(
                        'span',
                        { className: 'alm-img' },
                        _react2.default.createElement('img', { src: '/assets/img/m6.png', alt: true })
                      ),
                      ' ',
                      _react2.default.createElement(
                        'span',
                        { className: 'alm-name' },
                        'Home'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: true },
                      _react2.default.createElement(
                        'span',
                        { className: 'alm-img' },
                        _react2.default.createElement('img', { src: '/assets/img/m7.png', alt: true })
                      ),
                      ' ',
                      _react2.default.createElement(
                        'span',
                        { className: 'alm-name' },
                        'Page'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: true },
                      _react2.default.createElement(
                        'span',
                        { className: 'alm-img' },
                        _react2.default.createElement('img', { src: '/assets/img/m8.png', alt: true })
                      ),
                      ' ',
                      _react2.default.createElement(
                        'span',
                        { className: 'alm-name' },
                        'Shop'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: true },
                      _react2.default.createElement(
                        'span',
                        { className: 'alm-img' },
                        _react2.default.createElement('img', { src: '/assets/img/m9.png', alt: true })
                      ),
                      ' ',
                      _react2.default.createElement(
                        'span',
                        { className: 'alm-name' },
                        'Home'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: true },
                      _react2.default.createElement(
                        'span',
                        { className: 'alm-img' },
                        _react2.default.createElement('img', { src: '/assets/img/m10.png', alt: true })
                      ),
                      ' ',
                      _react2.default.createElement(
                        'span',
                        { className: 'alm-name' },
                        'Home'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: true },
                      _react2.default.createElement(
                        'span',
                        { className: 'alm-img' },
                        _react2.default.createElement('img', { src: '/assets/img/m11.png', alt: true })
                      ),
                      ' ',
                      _react2.default.createElement(
                        'span',
                        { className: 'alm-name' },
                        'Settings'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: true },
                      _react2.default.createElement(
                        'span',
                        { className: 'alm-img' },
                        _react2.default.createElement('img', { src: '/assets/img/m12.png', alt: true })
                      ),
                      ' ',
                      _react2.default.createElement(
                        'span',
                        { className: 'alm-name' },
                        'Home'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: true },
                      _react2.default.createElement(
                        'span',
                        { className: 'alm-img' },
                        _react2.default.createElement('img', { src: '/assets/img/m13.png', alt: true })
                      ),
                      ' ',
                      _react2.default.createElement(
                        'span',
                        { className: 'alm-name' },
                        'Message'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: true },
                      _react2.default.createElement(
                        'span',
                        { className: 'alm-img' },
                        _react2.default.createElement('img', { src: '/assets/img/m14.png', alt: true })
                      ),
                      ' ',
                      _react2.default.createElement(
                        'span',
                        { className: 'alm-name' },
                        'History'
                      )
                    )
                  )
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'marketing-right' },
              _react2.default.createElement(
                'div',
                { className: 'dahsboard-header-section' },
                _react2.default.createElement(
                  'div',
                  { className: 'dashboard-header' },
                  _react2.default.createElement(
                    'div',
                    { className: 'header-left' },
                    _react2.default.createElement(
                      'div',
                      { className: 'h-browse dd-wrap' },
                      _react2.default.createElement(
                        'a',
                        { href: true, className: 'carret-border dd-trigger' },
                        'Browse'
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'browse-dropdown dd-content' },
                        _react2.default.createElement(
                          'ul',
                          null,
                          _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(
                              'a',
                              { href: true },
                              _react2.default.createElement(
                                'span',
                                { className: 'h-b-ancor' },
                                _react2.default.createElement('img', { src: '/assets/img/i1.png', alt: true })
                              ),
                              ' Home'
                            )
                          ),
                          _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(
                              'a',
                              { href: true },
                              _react2.default.createElement(
                                'span',
                                { className: 'h-b-ancor' },
                                _react2.default.createElement('img', { src: '/assets/img/i2.png', alt: true })
                              ),
                              ' Featured'
                            )
                          ),
                          _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(
                              'a',
                              { href: true },
                              _react2.default.createElement(
                                'span',
                                { className: 'h-b-ancor' },
                                _react2.default.createElement('img', { src: '/assets/img/i3.png', alt: true })
                              ),
                              ' Trending'
                            )
                          ),
                          _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(
                              'a',
                              { href: true },
                              _react2.default.createElement(
                                'span',
                                { className: 'h-b-ancor' },
                                _react2.default.createElement('img', { src: '/assets/img/i4.png', alt: true })
                              ),
                              ' Classes'
                            )
                          ),
                          _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(
                              'a',
                              { href: true },
                              _react2.default.createElement(
                                'span',
                                { className: 'h-b-ancor' },
                                _react2.default.createElement('img', { src: '/assets/img/i5.png', alt: true })
                              ),
                              ' Tutorials'
                            )
                          ),
                          _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(
                              'a',
                              { href: true },
                              _react2.default.createElement(
                                'span',
                                { className: 'h-b-ancor' },
                                _react2.default.createElement('img', { src: '/assets/img/i6.png', alt: true })
                              ),
                              ' Oneup'
                            )
                          ),
                          _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(
                              'a',
                              { href: true },
                              _react2.default.createElement(
                                'span',
                                { className: 'h-b-ancor' },
                                _react2.default.createElement('img', { src: '/assets/img/i7.png', alt: true })
                              ),
                              ' Premium'
                            )
                          )
                        )
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'h-feature dd-wrap' },
                      _react2.default.createElement(
                        'a',
                        { href: true, className: 'carret-border dd-trigger' },
                        'Features'
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'browse-dropdown dd-content' },
                        _react2.default.createElement(
                          'ul',
                          null,
                          _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(
                              'a',
                              { href: true },
                              _react2.default.createElement(
                                'span',
                                { className: 'h-b-ancor' },
                                _react2.default.createElement('img', { src: '/assets/img/i1.png', alt: true })
                              ),
                              ' Home'
                            )
                          ),
                          _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(
                              'a',
                              { href: true },
                              _react2.default.createElement(
                                'span',
                                { className: 'h-b-ancor' },
                                _react2.default.createElement('img', { src: '/assets/img/i2.png', alt: true })
                              ),
                              ' Featured'
                            )
                          ),
                          _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(
                              'a',
                              { href: true },
                              _react2.default.createElement(
                                'span',
                                { className: 'h-b-ancor' },
                                _react2.default.createElement('img', { src: '/assets/img/i3.png', alt: true })
                              ),
                              ' Trending'
                            )
                          ),
                          _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(
                              'a',
                              { href: true },
                              _react2.default.createElement(
                                'span',
                                { className: 'h-b-ancor' },
                                _react2.default.createElement('img', { src: '/assets/img/i4.png', alt: true })
                              ),
                              ' Classes'
                            )
                          ),
                          _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(
                              'a',
                              { href: true },
                              _react2.default.createElement(
                                'span',
                                { className: 'h-b-ancor' },
                                _react2.default.createElement('img', { src: '/assets/img/i5.png', alt: true })
                              ),
                              ' Tutorials'
                            )
                          ),
                          _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(
                              'a',
                              { href: true },
                              _react2.default.createElement(
                                'span',
                                { className: 'h-b-ancor' },
                                _react2.default.createElement('img', { src: '/assets/img/i6.png', alt: true })
                              ),
                              ' Oneup'
                            )
                          ),
                          _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(
                              'a',
                              { href: true },
                              _react2.default.createElement(
                                'span',
                                { className: 'h-b-ancor' },
                                _react2.default.createElement('img', { src: '/assets/img/i7.png', alt: true })
                              ),
                              ' Premium'
                            )
                          )
                        )
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'h-search' },
                      _react2.default.createElement(
                        'div',
                        { className: 'h-search-wrap' },
                        _react2.default.createElement('a', { href: true, className: 'search-icon1' }),
                        _react2.default.createElement('input', { type: 'text', placeholder: 'Search for...', onChange: _this.newsInputChanged, value: _this.state.searchText }),
                        _react2.default.createElement(
                          'div',
                          { className: 'dd-wrap search-icon2-wrap' },
                          _react2.default.createElement(
                            'a',
                            { className: 'search-icon2 dd-trigger', onClick: _this.toggleSearchFilterVisible },
                            _react2.default.createElement('img', { src: '/assets/img/search2.png', alt: true })
                          ),
                          _react2.default.createElement(
                            'div',
                            { className: 'browse-dropdown dd-content search-filter', style: { display: searchFilterVisible ? 'block' : null } },
                            _react2.default.createElement(
                              'ul',
                              null,
                              Array.from(searchFilters).map(function (_ref2) {
                                var _ref3 = _slicedToArray(_ref2, 2),
                                    key = _ref3[0],
                                    filter = _ref3[1];

                                return _react2.default.createElement(
                                  'li',
                                  { key: filter.title },
                                  _react2.default.createElement(
                                    'label',
                                    null,
                                    _react2.default.createElement('input', { type: 'checkbox',
                                      checked: filter.active,
                                      'data-key': key,
                                      onChange: _this.searchFiltersChanged }),
                                    _react2.default.createElement(
                                      'span',
                                      { className: 'h-b-ancor' },
                                      _react2.default.createElement(
                                        'span',
                                        { className: 'img' },
                                        _react2.default.createElement('img', { src: filter.icon, alt: filter.title })
                                      ),
                                      _react2.default.createElement(
                                        'span',
                                        null,
                                        filter.title
                                      )
                                    )
                                  )
                                );
                              })
                            )
                          )
                        )
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'header-right' },
                    _react2.default.createElement(
                      'div',
                      { className: 'notification-icons' },
                      _react2.default.createElement(
                        'ul',
                        null,
                        _react2.default.createElement(
                          'li',
                          null,
                          _react2.default.createElement(
                            'a',
                            { href: true },
                            _react2.default.createElement('img', { src: '/assets/img/n1.png', alt: true })
                          )
                        ),
                        _react2.default.createElement(
                          'li',
                          null,
                          _react2.default.createElement(
                            'a',
                            { href: true },
                            _react2.default.createElement('img', { src: '/assets/img/n2.png', alt: true })
                          )
                        ),
                        _react2.default.createElement(
                          'li',
                          null,
                          _react2.default.createElement(
                            'a',
                            { href: true },
                            _react2.default.createElement('img', { src: '/assets/img/n3.png', alt: true })
                          )
                        ),
                        _react2.default.createElement(
                          'li',
                          null,
                          _react2.default.createElement(
                            'a',
                            { href: true },
                            _react2.default.createElement('img', { src: '/assets/img/n4.png', alt: true })
                          )
                        ),
                        _react2.default.createElement(
                          'li',
                          null,
                          _react2.default.createElement(
                            'a',
                            { href: true },
                            _react2.default.createElement('img', { src: '/assets/img/n5.png', alt: true })
                          )
                        )
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'h-profile' },
                      _react2.default.createElement(
                        'a',
                        { href: true, className: 'h-pro-wrap' },
                        _react2.default.createElement(_LoggedUser2.default, null)
                      )
                    )
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'dashboad-header-bottom-content-section' },
                _react2.default.createElement(
                  'div',
                  { className: 'dashboar-header-bottom-content' },
                  _react2.default.createElement(
                    'div',
                    { className: 'dashboard-content-tabs' },
                    _react2.default.createElement(
                      'span',
                      { className: 'all-caregory' },
                      'All Categories'
                    ),
                    _react2.default.createElement(
                      'ul',
                      null,
                      categoriesNames.map(_this.renderCategory)
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'grid' },
                    news.data && news.data.map(function (n) {
                      return _react2.default.createElement(
                        'div',
                        { key: n.id, className: classes[Math.floor(Math.random() * classes.length)] },
                        ' ',
                        _react2.default.createElement(
                          'div',
                          null,
                          _react2.default.createElement(
                            'a',
                            { href: n.url },
                            '  ',
                            _react2.default.createElement(
                              'div',
                              null,
                              _react2.default.createElement(
                                'h6',
                                null,
                                n.title
                              ),
                              _react2.default.createElement('img', { src: n.image, alt: n.title }),
                              n.createdAt && _react2.default.createElement(
                                'p',
                                null,
                                'Published: ',
                                new Date(n.createdAt).toLocaleDateString()
                              ),
                              n.source && _react2.default.createElement(
                                'p',
                                null,
                                'Source: ',
                                n.source
                              ),
                              n.tags && _react2.default.createElement(
                                'p',
                                null,
                                'Tags: ',
                                n.tags.join(' ')
                              ),
                              n.content && _react2.default.createElement(
                                'div',
                                null,
                                _react2.default.createElement(
                                  'span',
                                  null,
                                  'Content:'
                                ),
                                _react2.default.createElement('div', { dangerouslySetInnerHTML: { '__html': n.content.replace(/(<([^>]+)>)/g, '') || '' } })
                              )
                            )
                          )
                        )
                      );
                    })
                  )
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'modal fade', role: 'dialog', id: 'checkout' },
          _react2.default.createElement(
            'div',
            { className: 'modal-dialog' },
            _react2.default.createElement(
              'div',
              { className: 'modal-content' },
              _react2.default.createElement(
                'h1',
                null,
                'Hello world'
              )
            )
          )
        )
      );
    };

    _this.searchFiltersChanged = function (event) {
      var key = event.target.dataset.key;
      var checked = event.target.checked;

      _this.setState(function (prevState) {
        var searchFilters = new Map(prevState.searchFilters);
        searchFilters.set(key, _extends({}, searchFilters.get(key), {
          active: checked
        }));
        return { searchFilters: searchFilters };
      });
    };

    _this.searchNews = function () {
      // Example: ['youtube', 'twitch']
      var tags = Array.from(_this.state.searchFilters.entries()).filter(function (_ref4) {
        var _ref5 = _slicedToArray(_ref4, 2),
            key = _ref5[0],
            value = _ref5[1];

        return value.active;
      }).map(function (_ref6) {
        var _ref7 = _slicedToArray(_ref6, 2),
            key = _ref7[0],
            value = _ref7[1];

        return key;
      });

      var queryText = [_this.state.searchText, categoriesTypes[_this.state.activeCategory].queryText].filter(Boolean).join(' ');

      _this.props.dispatch({
        type: 'SEARCH_ALL_NEWS',
        payload: {
          query: queryText, //queryText.length > 2 ? queryText : 'news', // hack to show something
          count: 40,
          offset: 0,
          tags: tags // non-nuzzle field
        }
      });
    };

    _this.newsInputChanged = function (event) {
      _this.setState({ searchText: event.target.value });
      //this.searchNews(event.target.value)
    };

    _this.state = {
      categories: _extends({}, categoriesTypes),
      activeCategory: 'All',
      searchFilterVisible: false,
      searchFilters: new Map(SearchFiltersDefault),
      searchText: ''
    };
    return _this;
  }
  // componentWillUpdate = () => {
  //   this.masonry && this.masonry.reloadItems()
  // }

  return News;
}(_react2.default.Component);

News.propTypes = {
  //nuzzel: PropTypes.object,
  news: _propTypes2.default.object,
  dispatch: _propTypes2.default.func };


var NewsConnected = (0, _reactRedux.connect)(function (_ref8) {
  var news = _ref8.news;
  return { news: news };
})(News);

exports.default = NewsConnected;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _domutil = __webpack_require__(8);

__webpack_require__(62);

__webpack_require__(63);

var _static = __webpack_require__(1);

var _static2 = _interopRequireDefault(_static);

var _LoggedUser = __webpack_require__(10);

var _LoggedUser2 = _interopRequireDefault(_LoggedUser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var style = { background: '#000 url(' + _static2.default.basePath + '/img/login-background.png) no-repeat scroll center center / cover' };

var INITIAL_STATE = {
  email: '',
  password: ''
};

var logInArea = function (_Component) {
  _inherits(logInArea, _Component);

  function logInArea() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, logInArea);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = logInArea.__proto__ || Object.getPrototypeOf(logInArea)).call.apply(_ref, [this].concat(args))), _this), _this.state = _extends({}, INITIAL_STATE), _this.onSubmit = function (event) {
      event.preventDefault();
      var _this$state = _this.state,
          email = _this$state.email,
          password = _this$state.password;

      if (email && password) {
        _this.props.emailPassLogin(email, password);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(logInArea, [{
    key: 'redirectIfLoggedIn',
    value: function redirectIfLoggedIn() {
      if (_domutil.canUseDOM && this.props.user.isLoggedIn) {
        console.log('zzzzzzzzzzz', _static2.default.basePath + '/news');
        // window.location = `${config.basePath}/news`
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.redirectIfLoggedIn();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      this.redirectIfLoggedIn();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          user = _props.user,
          facebookLogin = _props.facebookLogin,
          twitterLogin = _props.twitterLogin;
      var _state = this.state,
          email = _state.email,
          password = _state.password;

      var isInvalid = !email || !password;

      var errorMessage = user.error ? user.error.message : null;

      console.log('u:', user);
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'login_area' },
          _react2.default.createElement(
            'div',
            { className: 'login_background', style: style },
            _react2.default.createElement(
              'h1',
              null,
              'Log In'
            ),
            _react2.default.createElement(
              'form',
              { onSubmit: this.onSubmit },
              _react2.default.createElement(
                'div',
                { className: 'single_login' },
                _react2.default.createElement(
                  'label',
                  { htmlFor: 'email' },
                  'Login',
                  _react2.default.createElement('input', { id: 'email', type: 'text', onChange: function onChange(_ref2) {
                      var value = _ref2.target.value;
                      return _this2.setState({ email: value });
                    } })
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'single_login' },
                _react2.default.createElement(
                  'label',
                  { htmlFor: 'password' },
                  'Password',
                  _react2.default.createElement('input', { id: 'password', type: 'password', onChange: function onChange(_ref3) {
                      var value = _ref3.target.value;
                      return _this2.setState({ password: value });
                    } })
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'forgotten_password clearfix' },
                _react2.default.createElement(
                  'ul',
                  null,
                  _react2.default.createElement(
                    'li',
                    null,
                    'Forgot Password?'
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    'Sign Up'
                  )
                ),
                _react2.default.createElement(
                  'button',
                  { disabled: isInvalid, type: 'submit' },
                  'Log in'
                ),
                errorMessage ? _react2.default.createElement(
                  'p',
                  { className: 'login_error' },
                  errorMessage
                ) : null,
                _react2.default.createElement(
                  'p',
                  { style: { color: 'white' } },
                  'Log in via testemail@gmail.com/111111 or buttons below'
                ),
                ','
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'social' },
              _react2.default.createElement(
                'ul',
                null,
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    'button',
                    { onClick: facebookLogin },
                    _react2.default.createElement('i', { className: 'fa fa-facebook-f' })
                  )
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    'button',
                    { onClick: twitterLogin },
                    _react2.default.createElement('i', { className: 'fa fa-twitter' })
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return logInArea;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(function (_ref4) {
  var user = _ref4.user;
  return { user: user };
}, function (dispatch) {
  return {
    emailPassLogin: function emailPassLogin(email, password) {
      return dispatch({ type: 'EMAIL_PASS_LOGIN', payload: { email: email, password: password } });
    },
    facebookLogin: function facebookLogin() {
      return dispatch({ type: 'FACEBOOK_LOGIN' });
    },
    twitterLogin: function twitterLogin() {
      return dispatch({ type: 'TWITTER_LOGIN' });
    }
  };
})(logInArea);

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

__webpack_require__(64);

var _LoggedUser = __webpack_require__(10);

var _LoggedUser2 = _interopRequireDefault(_LoggedUser);

var _static = __webpack_require__(1);

var _static2 = _interopRequireDefault(_static);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var INITIAL_STATE = {
  email: '',
  password: '',
  loading: false,
  passwordConfirm: '',
  first: '',
  last: '',
  phone: '',
  emailSubscription: true
};

var signUp = function (_Component) {
  _inherits(signUp, _Component);

  function signUp() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, signUp);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = signUp.__proto__ || Object.getPrototypeOf(signUp)).call.apply(_ref, [this].concat(args))), _this), _this.state = _extends({}, INITIAL_STATE), _this.isFormValid = function () {
      var _this$state = _this.state,
          email = _this$state.email,
          password = _this$state.password,
          passwordConfirm = _this$state.passwordConfirm,
          first = _this$state.first,
          last = _this$state.last,
          phone = _this$state.phone;


      return email && password && passwordConfirm === password && first && last && phone;
    }, _this.onSubmit = function (event) {
      event.preventDefault();
      _this.setState({
        loading: true
      });

      var _this$state2 = _this.state,
          email = _this$state2.email,
          password = _this$state2.password,
          first = _this$state2.first,
          last = _this$state2.last,
          phone = _this$state2.phone,
          emailSubscription = _this$state2.emailSubscription;

      if (_this.isFormValid()) {
        _this.props.emailPassSignUp(email, password, first, last, phone, emailSubscription);
      } else {
        _this.setState({
          loading: false
        });

        alert('Please fill in all fields');
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(signUp, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var error = this.props.error;

      var isInvalid = !this.isFormValid();
      var _state = this.state,
          emailSubscription = _state.emailSubscription,
          loading = _state.loading;


      return loading ? _react2.default.createElement(
        'div',
        null,
        'Loading ...'
      ) : _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'signup_area' },
          _react2.default.createElement(
            'form',
            { onSubmit: this.onSubmit },
            _react2.default.createElement(
              'div',
              { className: 'clearfix' },
              _react2.default.createElement(
                'h1',
                null,
                'Sign Up'
              ),
              _react2.default.createElement(
                'div',
                { className: 'single_signup' },
                _react2.default.createElement(
                  'label',
                  { htmlFor: '#' },
                  'First Name',
                  _react2.default.createElement('input', { type: 'text', onChange: function onChange(_ref2) {
                      var value = _ref2.target.value;
                      return _this2.setState({ first: value });
                    } })
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'single_signup' },
                _react2.default.createElement(
                  'label',
                  { htmlFor: '#' },
                  'Last Name',
                  _react2.default.createElement('input', { type: 'text', onChange: function onChange(_ref3) {
                      var value = _ref3.target.value;
                      return _this2.setState({ last: value });
                    } })
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'single_signup' },
                _react2.default.createElement(
                  'label',
                  { htmlFor: '#' },
                  'Email',
                  _react2.default.createElement('input', { type: 'email', onChange: function onChange(_ref4) {
                      var value = _ref4.target.value;
                      return _this2.setState({ email: value });
                    } })
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'single_signup' },
                _react2.default.createElement(
                  'label',
                  { htmlFor: '#' },
                  'Phone',
                  _react2.default.createElement('input', { type: 'text', onChange: function onChange(_ref5) {
                      var value = _ref5.target.value;
                      return _this2.setState({ phone: value });
                    } })
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'single_signup' },
                _react2.default.createElement(
                  'label',
                  { htmlFor: '#' },
                  'Password',
                  _react2.default.createElement('input', { type: 'password', onChange: function onChange(_ref6) {
                      var value = _ref6.target.value;
                      return _this2.setState({ password: value });
                    } })
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'single_signup' },
                _react2.default.createElement(
                  'label',
                  { htmlFor: '#' },
                  'Confirm Password',
                  _react2.default.createElement('input', { type: 'password', onChange: function onChange(_ref7) {
                      var value = _ref7.target.value;
                      return _this2.setState({ passwordConfirm: value });
                    } })
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'subscript' },
              error ? _react2.default.createElement(
                'p',
                { className: 'login_error' },
                error.message
              ) : null,
              _react2.default.createElement(
                'div',
                { className: 'subscript_left' },
                _react2.default.createElement(
                  'label',
                  { htmlFor: 'emailSubscription' },
                  _react2.default.createElement('input', { id: 'emailSubscription', type: 'checkbox', checked: emailSubscription, onChange: function onChange() {
                      return _this2.setState({ emailSubscription: !emailSubscription });
                    } }),
                  _react2.default.createElement(
                    'span',
                    null,
                    'Subscribe to newsletter'
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'subscript_right' },
                _react2.default.createElement(
                  'div',
                  { className: 'sign_tp_button' },
                  _react2.default.createElement(
                    'button',
                    { type: 'submit' },
                    'Sign Up'
                  )
                )
              )
            )
          )
        ),
        _react2.default.createElement(_LoggedUser2.default, null)
      );
    }
  }]);

  return signUp;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(function (_ref8) {
  var _ref8$user = _ref8.user;
  _ref8$user = _ref8$user === undefined ? {} : _ref8$user;
  var error = _ref8$user.error;
  return { error: error };
}, function (dispatch) {
  return {
    emailPassSignUp: function emailPassSignUp(email, password, first, last, phone, emailSubscription) {
      return dispatch({ type: 'EMAIL_PASS_SIGNUP', payload: { email: email, password: password, first: first, last: last, phone: phone, emailSubscription: emailSubscription } });
    }
  };
})(signUp);

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__(6);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

__webpack_require__(65);

var _db = __webpack_require__(33);

var _db2 = _interopRequireDefault(_db);

var _static = __webpack_require__(1);

var _static2 = _interopRequireDefault(_static);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var basePath = _static2.default.basePath;
var users = _db2.default.users;

var Profile = function (_Component) {
    _inherits(Profile, _Component);

    function Profile() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Profile);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Profile.__proto__ || Object.getPrototypeOf(Profile)).call.apply(_ref, [this].concat(args))), _this), _this.state = { user: {} }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Profile, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            console.log('Props', nextProps);
        }
        // // NOTE: temporary decision while we don't have any data from props in user

    }, {
        key: 'componentDidMount',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                var response, user;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return users.doc('2qVKFgS7na6wgarjZCTj').get().then(function (item) {
                                    return item;
                                });

                            case 2:
                                response = _context.sent;
                                user = response.data();

                                this.setState({ user: user });

                            case 5:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function componentDidMount() {
                return _ref2.apply(this, arguments);
            }

            return componentDidMount;
        }()
    }, {
        key: 'render',
        value: function render() {
            var user = this.props.user;

            var userData = {};
            if (user) {
                userData = user.profile;
            }

            return user ? _react2.default.createElement(
                'div',
                { className: 'marketing-main-section' },
                _react2.default.createElement(
                    'div',
                    { className: 'marketing-main' },
                    _react2.default.createElement(
                        'div',
                        { className: 'marketing-left' },
                        _react2.default.createElement(
                            'div',
                            { className: 'm-l-top-bar dd-wrap' },
                            _react2.default.createElement(
                                'a',
                                { href: true, className: 'dd-trigger' },
                                _react2.default.createElement('img', { src: _static2.default.basePath + '/img/bar2.png', alt: true })
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'browse-dropdown dd-content left-caret' },
                                _react2.default.createElement(
                                    'ul',
                                    null,
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        _react2.default.createElement(
                                            'a',
                                            { href: true },
                                            _react2.default.createElement(
                                                'span',
                                                { className: 'h-b-ancor' },
                                                _react2.default.createElement('img', { src: _static2.default.basePath + '/img/i1.png', alt: true })
                                            ),
                                            ' Home'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        _react2.default.createElement(
                                            'a',
                                            { href: true },
                                            _react2.default.createElement(
                                                'span',
                                                { className: 'h-b-ancor' },
                                                _react2.default.createElement('img', { src: _static2.default.basePath + '/img/i3.png', alt: true })
                                            ),
                                            ' Trending'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        _react2.default.createElement(
                                            'a',
                                            { href: true },
                                            _react2.default.createElement(
                                                'span',
                                                { className: 'h-b-ancor' },
                                                _react2.default.createElement('img', { src: _static2.default.basePath + '/img/m14.png', alt: true })
                                            ),
                                            ' Histroy'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        _react2.default.createElement(
                                            'a',
                                            { href: true },
                                            _react2.default.createElement(
                                                'span',
                                                { className: 'h-b-ancor' },
                                                _react2.default.createElement('img', { src: _static2.default.basePath + '/img/browse.png', alt: true })
                                            ),
                                            ' Browse'
                                        )
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'm-l-bottom-menu' },
                            _react2.default.createElement(
                                'ul',
                                null,
                                _react2.default.createElement(
                                    'li',
                                    null,
                                    _react2.default.createElement(
                                        'a',
                                        { href: true },
                                        _react2.default.createElement(
                                            'span',
                                            { className: 'alm-img' },
                                            _react2.default.createElement('img', { src: _static2.default.basePath + '/img/m1.png', alt: true })
                                        ),
                                        ' ',
                                        _react2.default.createElement(
                                            'span',
                                            { className: 'alm-name' },
                                            'Dashboard'
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    'li',
                                    null,
                                    _react2.default.createElement(
                                        'a',
                                        { href: true },
                                        _react2.default.createElement(
                                            'span',
                                            { className: 'alm-img' },
                                            _react2.default.createElement('img', { src: _static2.default.basePath + '/img/home.png', alt: true })
                                        ),
                                        ' ',
                                        _react2.default.createElement(
                                            'span',
                                            { className: 'alm-name' },
                                            'Home'
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    'li',
                                    null,
                                    _react2.default.createElement(
                                        'a',
                                        { href: true },
                                        _react2.default.createElement(
                                            'span',
                                            { className: 'alm-img' },
                                            _react2.default.createElement('img', { src: _static2.default.basePath + '/img/i3.png', alt: true })
                                        ),
                                        ' ',
                                        _react2.default.createElement(
                                            'span',
                                            { className: 'alm-name' },
                                            'Trending'
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    'li',
                                    null,
                                    _react2.default.createElement(
                                        'a',
                                        { href: true },
                                        _react2.default.createElement(
                                            'span',
                                            { className: 'alm-img' },
                                            _react2.default.createElement('img', { src: _static2.default.basePath + '/img/m4.png', alt: true })
                                        ),
                                        ' ',
                                        _react2.default.createElement(
                                            'span',
                                            { className: 'alm-name' },
                                            'Categories'
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    'li',
                                    null,
                                    _react2.default.createElement(
                                        'a',
                                        { href: true },
                                        _react2.default.createElement(
                                            'span',
                                            { className: 'alm-img' },
                                            _react2.default.createElement('img', { src: _static2.default.basePath + '/img/m5.png', alt: true })
                                        ),
                                        ' ',
                                        _react2.default.createElement(
                                            'span',
                                            { className: 'alm-name' },
                                            'Saved'
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    'li',
                                    null,
                                    _react2.default.createElement(
                                        'a',
                                        { href: true },
                                        _react2.default.createElement(
                                            'span',
                                            { className: 'alm-img' },
                                            _react2.default.createElement('img', { src: _static2.default.basePath + '/img/m6.png', alt: true })
                                        ),
                                        ' ',
                                        _react2.default.createElement(
                                            'span',
                                            { className: 'alm-name' },
                                            'Home'
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    'li',
                                    null,
                                    _react2.default.createElement(
                                        'a',
                                        { href: true },
                                        _react2.default.createElement(
                                            'span',
                                            { className: 'alm-img' },
                                            _react2.default.createElement('img', { src: _static2.default.basePath + '/img/m7.png', alt: true })
                                        ),
                                        ' ',
                                        _react2.default.createElement(
                                            'span',
                                            { className: 'alm-name' },
                                            'Page'
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    'li',
                                    null,
                                    _react2.default.createElement(
                                        'a',
                                        { href: true },
                                        _react2.default.createElement(
                                            'span',
                                            { className: 'alm-img' },
                                            _react2.default.createElement('img', { src: _static2.default.basePath + '/img/m8.png', alt: true })
                                        ),
                                        ' ',
                                        _react2.default.createElement(
                                            'span',
                                            { className: 'alm-name' },
                                            'Shop'
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    'li',
                                    null,
                                    _react2.default.createElement(
                                        'a',
                                        { href: true },
                                        _react2.default.createElement(
                                            'span',
                                            { className: 'alm-img' },
                                            _react2.default.createElement('img', { src: _static2.default.basePath + '/img/m9.png', alt: true })
                                        ),
                                        ' ',
                                        _react2.default.createElement(
                                            'span',
                                            { className: 'alm-name' },
                                            'Home'
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    'li',
                                    null,
                                    _react2.default.createElement(
                                        'a',
                                        { href: true },
                                        _react2.default.createElement(
                                            'span',
                                            { className: 'alm-img' },
                                            _react2.default.createElement('img', { src: _static2.default.basePath + '/img/m10.png', alt: true })
                                        ),
                                        ' ',
                                        _react2.default.createElement(
                                            'span',
                                            { className: 'alm-name' },
                                            'Home'
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    'li',
                                    null,
                                    _react2.default.createElement(
                                        'a',
                                        { href: true },
                                        _react2.default.createElement(
                                            'span',
                                            { className: 'alm-img' },
                                            _react2.default.createElement('img', { src: _static2.default.basePath + '/img/m11.png', alt: true })
                                        ),
                                        ' ',
                                        _react2.default.createElement(
                                            'span',
                                            { className: 'alm-name' },
                                            'Settings'
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    'li',
                                    null,
                                    _react2.default.createElement(
                                        'a',
                                        { href: true },
                                        _react2.default.createElement(
                                            'span',
                                            { className: 'alm-img' },
                                            _react2.default.createElement('img', { src: _static2.default.basePath + '/img/m12.png', alt: true })
                                        ),
                                        ' ',
                                        _react2.default.createElement(
                                            'span',
                                            { className: 'alm-name' },
                                            'Home'
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    'li',
                                    null,
                                    _react2.default.createElement(
                                        'a',
                                        { href: true },
                                        _react2.default.createElement(
                                            'span',
                                            { className: 'alm-img' },
                                            _react2.default.createElement('img', { src: _static2.default.basePath + '/img/m13.png', alt: true })
                                        ),
                                        ' ',
                                        _react2.default.createElement(
                                            'span',
                                            { className: 'alm-name' },
                                            'Message'
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    'li',
                                    null,
                                    _react2.default.createElement(
                                        'a',
                                        { href: true },
                                        _react2.default.createElement(
                                            'span',
                                            { className: 'alm-img' },
                                            _react2.default.createElement('img', { src: _static2.default.basePath + '/img/m14.png', alt: true })
                                        ),
                                        ' ',
                                        _react2.default.createElement(
                                            'span',
                                            { className: 'alm-name' },
                                            'History'
                                        )
                                    )
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'marketing-right' },
                        _react2.default.createElement(
                            'div',
                            { className: 'dahsboard-header-section' },
                            _react2.default.createElement(
                                'div',
                                { className: 'dashboard-header' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'header-left' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'h-browse dd-wrap' },
                                        _react2.default.createElement(
                                            'a',
                                            { href: true, className: 'carret-border dd-trigger' },
                                            'Browse'
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'browse-dropdown dd-content' },
                                            _react2.default.createElement(
                                                'ul',
                                                null,
                                                _react2.default.createElement(
                                                    'li',
                                                    null,
                                                    _react2.default.createElement(
                                                        'a',
                                                        { href: true },
                                                        _react2.default.createElement(
                                                            'span',
                                                            { className: 'h-b-ancor' },
                                                            _react2.default.createElement('img', { src: _static2.default.basePath + '/img/i1.png', alt: true })
                                                        ),
                                                        ' Home'
                                                    )
                                                ),
                                                _react2.default.createElement(
                                                    'li',
                                                    null,
                                                    _react2.default.createElement(
                                                        'a',
                                                        { href: true },
                                                        _react2.default.createElement(
                                                            'span',
                                                            { className: 'h-b-ancor' },
                                                            _react2.default.createElement('img', { src: _static2.default.basePath + '/img/i2.png', alt: true })
                                                        ),
                                                        ' Featured'
                                                    )
                                                ),
                                                _react2.default.createElement(
                                                    'li',
                                                    null,
                                                    _react2.default.createElement(
                                                        'a',
                                                        { href: true },
                                                        _react2.default.createElement(
                                                            'span',
                                                            { className: 'h-b-ancor' },
                                                            _react2.default.createElement('img', { src: _static2.default.basePath + '/img/i3.png', alt: true })
                                                        ),
                                                        ' Trending'
                                                    )
                                                ),
                                                _react2.default.createElement(
                                                    'li',
                                                    null,
                                                    _react2.default.createElement(
                                                        'a',
                                                        { href: true },
                                                        _react2.default.createElement(
                                                            'span',
                                                            { className: 'h-b-ancor' },
                                                            _react2.default.createElement('img', { src: _static2.default.basePath + '/img/i4.png', alt: true })
                                                        ),
                                                        ' Classes'
                                                    )
                                                ),
                                                _react2.default.createElement(
                                                    'li',
                                                    null,
                                                    _react2.default.createElement(
                                                        'a',
                                                        { href: true },
                                                        _react2.default.createElement(
                                                            'span',
                                                            { className: 'h-b-ancor' },
                                                            _react2.default.createElement('img', { src: _static2.default.basePath + '/img/i5.png', alt: true })
                                                        ),
                                                        ' Tutorials'
                                                    )
                                                ),
                                                _react2.default.createElement(
                                                    'li',
                                                    null,
                                                    _react2.default.createElement(
                                                        'a',
                                                        { href: true },
                                                        _react2.default.createElement(
                                                            'span',
                                                            { className: 'h-b-ancor' },
                                                            _react2.default.createElement('img', { src: _static2.default.basePath + '/img/i6.png', alt: true })
                                                        ),
                                                        ' Oneup'
                                                    )
                                                ),
                                                _react2.default.createElement(
                                                    'li',
                                                    null,
                                                    _react2.default.createElement(
                                                        'a',
                                                        { href: true },
                                                        _react2.default.createElement(
                                                            'span',
                                                            { className: 'h-b-ancor' },
                                                            _react2.default.createElement('img', { src: _static2.default.basePath + '/img/i7.png', alt: true })
                                                        ),
                                                        ' Premium'
                                                    )
                                                )
                                            )
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'h-feature dd-wrap' },
                                        _react2.default.createElement(
                                            'a',
                                            { href: true, className: 'carret-border dd-trigger' },
                                            'Features'
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'browse-dropdown dd-content' },
                                            _react2.default.createElement(
                                                'ul',
                                                null,
                                                _react2.default.createElement(
                                                    'li',
                                                    null,
                                                    _react2.default.createElement(
                                                        'a',
                                                        { href: true },
                                                        _react2.default.createElement(
                                                            'span',
                                                            { className: 'h-b-ancor' },
                                                            _react2.default.createElement('img', { src: _static2.default.basePath + '/img/i1.png', alt: true })
                                                        ),
                                                        ' Home'
                                                    )
                                                ),
                                                _react2.default.createElement(
                                                    'li',
                                                    null,
                                                    _react2.default.createElement(
                                                        'a',
                                                        { href: true },
                                                        _react2.default.createElement(
                                                            'span',
                                                            { className: 'h-b-ancor' },
                                                            _react2.default.createElement('img', { src: _static2.default.basePath + '/img/i2.png', alt: true })
                                                        ),
                                                        ' Featured'
                                                    )
                                                ),
                                                _react2.default.createElement(
                                                    'li',
                                                    null,
                                                    _react2.default.createElement(
                                                        'a',
                                                        { href: true },
                                                        _react2.default.createElement(
                                                            'span',
                                                            { className: 'h-b-ancor' },
                                                            _react2.default.createElement('img', { src: _static2.default.basePath + '/img/i3.png', alt: true })
                                                        ),
                                                        ' Trending'
                                                    )
                                                ),
                                                _react2.default.createElement(
                                                    'li',
                                                    null,
                                                    _react2.default.createElement(
                                                        'a',
                                                        { href: true },
                                                        _react2.default.createElement(
                                                            'span',
                                                            { className: 'h-b-ancor' },
                                                            _react2.default.createElement('img', { src: _static2.default.basePath + '/img/i4.png', alt: true })
                                                        ),
                                                        ' Classes'
                                                    )
                                                ),
                                                _react2.default.createElement(
                                                    'li',
                                                    null,
                                                    _react2.default.createElement(
                                                        'a',
                                                        { href: true },
                                                        _react2.default.createElement(
                                                            'span',
                                                            { className: 'h-b-ancor' },
                                                            _react2.default.createElement('img', { src: _static2.default.basePath + '/img/i5.png', alt: true })
                                                        ),
                                                        ' Tutorials'
                                                    )
                                                ),
                                                _react2.default.createElement(
                                                    'li',
                                                    null,
                                                    _react2.default.createElement(
                                                        'a',
                                                        { href: true },
                                                        _react2.default.createElement(
                                                            'span',
                                                            { className: 'h-b-ancor' },
                                                            _react2.default.createElement('img', { src: _static2.default.basePath + '/img/i6.png', alt: true })
                                                        ),
                                                        ' Oneup'
                                                    )
                                                ),
                                                _react2.default.createElement(
                                                    'li',
                                                    null,
                                                    _react2.default.createElement(
                                                        'a',
                                                        { href: true },
                                                        _react2.default.createElement(
                                                            'span',
                                                            { className: 'h-b-ancor' },
                                                            _react2.default.createElement('img', { src: _static2.default.basePath + '/img/i7.png', alt: true })
                                                        ),
                                                        ' Premium'
                                                    )
                                                )
                                            )
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'h-search' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'h-search-wrap' },
                                            _react2.default.createElement('a', { href: true, className: 'search-icon1' }),
                                            _react2.default.createElement('input', { type: 'text', placeholder: 'Search for...' }),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'dd-wrap search-icon2-wrap' },
                                                _react2.default.createElement(
                                                    'a',
                                                    { href: true, className: 'search-icon2 dd-trigger' },
                                                    _react2.default.createElement('img', { src: _static2.default.basePath + '/img/search2.png', alt: true })
                                                ),
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'browse-dropdown dd-content search-filter' },
                                                    _react2.default.createElement(
                                                        'ul',
                                                        null,
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'label',
                                                                null,
                                                                _react2.default.createElement('input', { type: 'checkbox' }),
                                                                _react2.default.createElement(
                                                                    'span',
                                                                    { className: 'h-b-ancor' },
                                                                    _react2.default.createElement(
                                                                        'span',
                                                                        { className: 'img' },
                                                                        _react2.default.createElement('img', { src: _static2.default.basePath + '/img/y1.png', alt: true })
                                                                    ),
                                                                    _react2.default.createElement(
                                                                        'span',
                                                                        null,
                                                                        'Youtube'
                                                                    )
                                                                )
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'label',
                                                                null,
                                                                _react2.default.createElement('input', { type: 'checkbox' }),
                                                                _react2.default.createElement(
                                                                    'span',
                                                                    { className: 'h-b-ancor' },
                                                                    _react2.default.createElement(
                                                                        'span',
                                                                        { className: 'img' },
                                                                        _react2.default.createElement('img', { src: _static2.default.basePath + '/img/music.png', alt: true })
                                                                    ),
                                                                    _react2.default.createElement(
                                                                        'span',
                                                                        null,
                                                                        'Music'
                                                                    )
                                                                )
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'label',
                                                                null,
                                                                _react2.default.createElement('input', { type: 'checkbox' }),
                                                                _react2.default.createElement(
                                                                    'span',
                                                                    { className: 'h-b-ancor' },
                                                                    _react2.default.createElement(
                                                                        'span',
                                                                        { className: 'img' },
                                                                        _react2.default.createElement('img', { src: _static2.default.basePath + '/img/sound.png', alt: true })
                                                                    ),
                                                                    _react2.default.createElement(
                                                                        'span',
                                                                        null,
                                                                        'Soundcloud'
                                                                    )
                                                                )
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'label',
                                                                null,
                                                                _react2.default.createElement('input', { type: 'checkbox' }),
                                                                _react2.default.createElement(
                                                                    'span',
                                                                    { className: 'h-b-ancor' },
                                                                    _react2.default.createElement(
                                                                        'span',
                                                                        { className: 'img' },
                                                                        _react2.default.createElement('img', { src: _static2.default.basePath + '/img/twitch.png', alt: true })
                                                                    ),
                                                                    _react2.default.createElement(
                                                                        'span',
                                                                        null,
                                                                        'Twitch'
                                                                    )
                                                                )
                                                            )
                                                        )
                                                    )
                                                )
                                            )
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'header-right' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'notification-icons' },
                                        _react2.default.createElement(
                                            'ul',
                                            null,
                                            _react2.default.createElement(
                                                'li',
                                                null,
                                                _react2.default.createElement(
                                                    'a',
                                                    { href: true },
                                                    _react2.default.createElement('img', { src: _static2.default.basePath + '/img/n1.png', alt: true })
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'li',
                                                null,
                                                _react2.default.createElement(
                                                    'a',
                                                    { href: true },
                                                    _react2.default.createElement('img', { src: _static2.default.basePath + '/img/n2.png', alt: true })
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'li',
                                                null,
                                                _react2.default.createElement(
                                                    'a',
                                                    { href: true },
                                                    _react2.default.createElement('img', { src: _static2.default.basePath + '/img/n3.png', alt: true })
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'li',
                                                null,
                                                _react2.default.createElement(
                                                    'a',
                                                    { href: true },
                                                    _react2.default.createElement('img', { src: _static2.default.basePath + '/img/n4.png', alt: true })
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'li',
                                                null,
                                                _react2.default.createElement(
                                                    'a',
                                                    { href: true },
                                                    _react2.default.createElement('img', { src: _static2.default.basePath + '/img/n5.png', alt: true })
                                                )
                                            )
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'h-profile' },
                                        _react2.default.createElement(
                                            'a',
                                            { href: true, className: 'h-pro-wrap' },
                                            _react2.default.createElement(
                                                'span',
                                                { className: 'pro-img' },
                                                _react2.default.createElement('img', { src: _static2.default.basePath + '/img/pro.png', alt: true })
                                            ),
                                            user.profile.name && _react2.default.createElement(
                                                'span',
                                                { className: 'pro-name carret-border' },
                                                user.profile.name.firstName + ' ' + user.profile.name.lastName
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'a',
                                            { href: true, className: 'pro-bar' },
                                            _react2.default.createElement('img', { src: _static2.default.basePath + '/img/bar.png', alt: true })
                                        )
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'dashboad-header-bottom-content-section' },
                            _react2.default.createElement(
                                'div',
                                { className: 'dashboar-header-bottom-content' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'dd-profile-section' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'dd-profile' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'dd-profile-left' },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'dd-profile2-block' },
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'profile2-block-head' },
                                                    _react2.default.createElement(
                                                        'div',
                                                        { className: 'profile2-block-left' },
                                                        _react2.default.createElement('div', { className: 'profile-img', style: { background: 'url("' + _static2.default.basePath + '/img/pro-img.png") no-repeat scroll center center / cover' } }),
                                                        _react2.default.createElement(
                                                            'div',
                                                            { className: 'profile-name' },
                                                            user.profile.name && _react2.default.createElement(
                                                                'h4',
                                                                null,
                                                                user.profile.name.firstName + ' ' + user.profile.name.lastName
                                                            ),
                                                            userData.profile.address && _react2.default.createElement(
                                                                'span',
                                                                null,
                                                                userData.profile.address.state,
                                                                ', ',
                                                                userData.profile.address.country
                                                            )
                                                        )
                                                    ),
                                                    _react2.default.createElement(
                                                        'div',
                                                        { className: 'profile-block-right' },
                                                        _react2.default.createElement(
                                                            'ul',
                                                            null,
                                                            _react2.default.createElement(
                                                                'li',
                                                                null,
                                                                _react2.default.createElement(
                                                                    'a',
                                                                    { href: true },
                                                                    _react2.default.createElement('i', { className: 'fa fa-user-plus' })
                                                                )
                                                            ),
                                                            _react2.default.createElement(
                                                                'li',
                                                                null,
                                                                _react2.default.createElement(
                                                                    'a',
                                                                    { href: true },
                                                                    _react2.default.createElement('i', { className: 'fa fa-envelope' })
                                                                )
                                                            )
                                                        )
                                                    )
                                                ),
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'profile2-block-body' },
                                                    _react2.default.createElement(
                                                        'h4',
                                                        null,
                                                        userData.profile.title
                                                    ),
                                                    _react2.default.createElement(
                                                        'p',
                                                        null,
                                                        userData.profile.description
                                                    )
                                                ),
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'profile2-block-footer' },
                                                    _react2.default.createElement(
                                                        'div',
                                                        { className: 'profile2-footer-top' },
                                                        _react2.default.createElement(
                                                            'div',
                                                            { className: 'single-block' },
                                                            _react2.default.createElement(
                                                                'h4',
                                                                null,
                                                                '$' + userData.profile.hourlyRate
                                                            ),
                                                            _react2.default.createElement(
                                                                'span',
                                                                null,
                                                                'Hourly Rate'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'div',
                                                            { className: 'single-block' },
                                                            _react2.default.createElement(
                                                                'h4',
                                                                null,
                                                                '$' + userData.profile.totalEarned
                                                            ),
                                                            _react2.default.createElement(
                                                                'span',
                                                                null,
                                                                'Total earned'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'div',
                                                            { className: 'single-block' },
                                                            _react2.default.createElement(
                                                                'h4',
                                                                null,
                                                                userData.profile.jobs
                                                            ),
                                                            _react2.default.createElement(
                                                                'span',
                                                                null,
                                                                'Jobs'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'div',
                                                            { className: 'single-block' },
                                                            _react2.default.createElement(
                                                                'h4',
                                                                null,
                                                                userData.profile.totalWorked
                                                            ),
                                                            _react2.default.createElement(
                                                                'span',
                                                                null,
                                                                'Hours worked'
                                                            )
                                                        )
                                                    ),
                                                    _react2.default.createElement(
                                                        'div',
                                                        { className: 'profile2-footer-bottom' },
                                                        _react2.default.createElement(
                                                            'ul',
                                                            null,
                                                            _react2.default.createElement(
                                                                'li',
                                                                null,
                                                                _react2.default.createElement(
                                                                    'a',
                                                                    { href: true },
                                                                    _react2.default.createElement('i', { className: 'fa fa-twitter' })
                                                                )
                                                            ),
                                                            _react2.default.createElement(
                                                                'li',
                                                                null,
                                                                _react2.default.createElement(
                                                                    'a',
                                                                    { href: true },
                                                                    _react2.default.createElement('i', { className: 'fa fa-instagram' })
                                                                )
                                                            ),
                                                            _react2.default.createElement(
                                                                'li',
                                                                null,
                                                                _react2.default.createElement(
                                                                    'a',
                                                                    { href: true },
                                                                    _react2.default.createElement('i', { className: 'fa fa-facebook' })
                                                                )
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'span',
                                                            { className: 'follower' },
                                                            _react2.default.createElement(
                                                                'strong',
                                                                null,
                                                                userData.profile.followers
                                                            ),
                                                            ' Followers'
                                                        ),
                                                        _react2.default.createElement(
                                                            'span',
                                                            { className: 'following' },
                                                            _react2.default.createElement(
                                                                'strong',
                                                                null,
                                                                userData.profile.following
                                                            ),
                                                            ' Following'
                                                        )
                                                    )
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'dd-profile-posts' },
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'dd-profile-filter-menu' },
                                                    _react2.default.createElement(
                                                        'ul',
                                                        null,
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'a',
                                                                { href: true, 'data-filter': '#boards' },
                                                                'Boards'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'a',
                                                                { href: true, 'data-filter': '#pins' },
                                                                'Pins'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'a',
                                                                { href: true, 'data-filter': '#tries' },
                                                                'Tries'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'li',
                                                            null,
                                                            _react2.default.createElement(
                                                                'a',
                                                                { href: true, 'data-filter': '#topics' },
                                                                'Topics'
                                                            )
                                                        )
                                                    )
                                                ),
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'dd-profile-filter-post-wrap' },
                                                    _react2.default.createElement(
                                                        'div',
                                                        { id: 'boards', className: 'dd-profile-single-post dd-profile-grid-item' },
                                                        _react2.default.createElement('div', { className: 'post-img', style: { backgroundImage: 'url()' } }),
                                                        _react2.default.createElement(
                                                            'div',
                                                            { className: 'post-content' },
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Create Board'
                                                            ),
                                                            _react2.default.createElement('div', { className: 'on' })
                                                        )
                                                    ),
                                                    _react2.default.createElement(
                                                        'div',
                                                        { id: 'boards', className: 'dd-profile-single-post dd-profile-grid-item' },
                                                        _react2.default.createElement(
                                                            'div',
                                                            { className: 'post-img', style: { backgroundImage: 'url("' + _static2.default.basePath + '/img/p1.png")' } },
                                                            _react2.default.createElement(
                                                                'span',
                                                                { className: 'duration' },
                                                                '06:56'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'div',
                                                            { className: 'post-content' },
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Create Board'
                                                            ),
                                                            _react2.default.createElement(
                                                                'div',
                                                                { className: 'on' },
                                                                _react2.default.createElement(
                                                                    'span',
                                                                    null,
                                                                    '2 days ago'
                                                                ),
                                                                _react2.default.createElement(
                                                                    'span',
                                                                    { className: 'views' },
                                                                    '35K views'
                                                                )
                                                            )
                                                        )
                                                    ),
                                                    _react2.default.createElement(
                                                        'div',
                                                        { id: 'topics', className: 'dd-profile-single-post dd-profile-grid-item' },
                                                        _react2.default.createElement(
                                                            'div',
                                                            { className: 'post-img', style: { backgroundImage: 'url("' + _static2.default.basePath + '/img/p2.png")' } },
                                                            _react2.default.createElement(
                                                                'span',
                                                                { className: 'duration' },
                                                                '06:56'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'div',
                                                            { className: 'post-content' },
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Aussie Chef Shares Culinary ...'
                                                            ),
                                                            _react2.default.createElement(
                                                                'div',
                                                                { className: 'on' },
                                                                _react2.default.createElement(
                                                                    'span',
                                                                    null,
                                                                    '2 days ago'
                                                                ),
                                                                _react2.default.createElement(
                                                                    'span',
                                                                    { className: 'views' },
                                                                    '35K views'
                                                                )
                                                            )
                                                        )
                                                    ),
                                                    _react2.default.createElement(
                                                        'div',
                                                        { id: 'boards', className: 'dd-profile-single-post dd-profile-grid-item' },
                                                        _react2.default.createElement(
                                                            'div',
                                                            { className: 'post-img', style: { backgroundImage: 'url("' + _static2.default.basePath + '/img/p3.png")' } },
                                                            _react2.default.createElement(
                                                                'span',
                                                                { className: 'duration' },
                                                                '06:56'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'div',
                                                            { className: 'post-content' },
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Get Around Easily With A New ...'
                                                            ),
                                                            _react2.default.createElement(
                                                                'div',
                                                                { className: 'on' },
                                                                _react2.default.createElement(
                                                                    'span',
                                                                    null,
                                                                    '2 days ago'
                                                                ),
                                                                _react2.default.createElement(
                                                                    'span',
                                                                    { className: 'views' },
                                                                    '35K views'
                                                                )
                                                            )
                                                        )
                                                    ),
                                                    _react2.default.createElement(
                                                        'div',
                                                        { id: 'pins', className: 'dd-profile-single-post dd-profile-grid-item' },
                                                        _react2.default.createElement(
                                                            'div',
                                                            { className: 'post-img', style: { backgroundImage: 'url("' + _static2.default.basePath + '/img/p4.png")' } },
                                                            _react2.default.createElement(
                                                                'span',
                                                                { className: 'duration' },
                                                                '06:56'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'div',
                                                            { className: 'post-content' },
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Travel Prudently Luggage And ...'
                                                            ),
                                                            _react2.default.createElement(
                                                                'div',
                                                                { className: 'on' },
                                                                _react2.default.createElement(
                                                                    'span',
                                                                    null,
                                                                    '2 days ago'
                                                                ),
                                                                _react2.default.createElement(
                                                                    'span',
                                                                    { className: 'views' },
                                                                    '35K views'
                                                                )
                                                            )
                                                        )
                                                    ),
                                                    _react2.default.createElement(
                                                        'div',
                                                        { id: 'tries', className: 'dd-profile-single-post dd-profile-grid-item' },
                                                        _react2.default.createElement(
                                                            'div',
                                                            { className: 'post-img', style: { backgroundImage: 'url("' + _static2.default.basePath + '/img/p5.png")' } },
                                                            _react2.default.createElement(
                                                                'span',
                                                                { className: 'duration' },
                                                                '06:56'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'div',
                                                            { className: 'post-content' },
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'This Is Cloaud Break'
                                                            ),
                                                            _react2.default.createElement(
                                                                'div',
                                                                { className: 'on' },
                                                                _react2.default.createElement(
                                                                    'span',
                                                                    null,
                                                                    '2 days ago'
                                                                ),
                                                                _react2.default.createElement(
                                                                    'span',
                                                                    { className: 'views' },
                                                                    '35K views'
                                                                )
                                                            )
                                                        )
                                                    ),
                                                    _react2.default.createElement(
                                                        'div',
                                                        { id: 'topics', className: 'dd-profile-single-post dd-profile-grid-item' },
                                                        _react2.default.createElement(
                                                            'div',
                                                            { className: 'post-img', style: { backgroundImage: 'url("' + _static2.default.basePath + '/img/p6.png")' } },
                                                            _react2.default.createElement(
                                                                'span',
                                                                { className: 'duration' },
                                                                '06:56'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'div',
                                                            { className: 'post-content' },
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Aussie Chef Shares Culinary ...'
                                                            ),
                                                            _react2.default.createElement(
                                                                'div',
                                                                { className: 'on' },
                                                                _react2.default.createElement(
                                                                    'span',
                                                                    null,
                                                                    '2 days ago'
                                                                ),
                                                                _react2.default.createElement(
                                                                    'span',
                                                                    { className: 'views' },
                                                                    '35K views'
                                                                )
                                                            )
                                                        )
                                                    ),
                                                    _react2.default.createElement(
                                                        'div',
                                                        { id: 'pins', className: 'dd-profile-single-post dd-profile-grid-item' },
                                                        _react2.default.createElement(
                                                            'div',
                                                            { className: 'post-img', style: { backgroundImage: 'url("' + _static2.default.basePath + '/img/p7.png")' } },
                                                            _react2.default.createElement(
                                                                'span',
                                                                { className: 'duration' },
                                                                '06:56'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'div',
                                                            { className: 'post-content' },
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Get Around Easily With A New ...'
                                                            ),
                                                            _react2.default.createElement(
                                                                'div',
                                                                { className: 'on' },
                                                                _react2.default.createElement(
                                                                    'span',
                                                                    null,
                                                                    '2 days ago'
                                                                ),
                                                                _react2.default.createElement(
                                                                    'span',
                                                                    { className: 'views' },
                                                                    '35K views'
                                                                )
                                                            )
                                                        )
                                                    ),
                                                    _react2.default.createElement(
                                                        'div',
                                                        { id: 'pins', className: 'dd-profile-single-post dd-profile-grid-item' },
                                                        _react2.default.createElement(
                                                            'div',
                                                            { className: 'post-img', style: { backgroundImage: 'url("' + _static2.default.basePath + '/img/p8.png")' } },
                                                            _react2.default.createElement(
                                                                'span',
                                                                { className: 'duration' },
                                                                '06:56'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'div',
                                                            { className: 'post-content' },
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Travel Prudently Luggage And ...'
                                                            ),
                                                            _react2.default.createElement(
                                                                'div',
                                                                { className: 'on' },
                                                                _react2.default.createElement(
                                                                    'span',
                                                                    null,
                                                                    '2 days ago'
                                                                ),
                                                                _react2.default.createElement(
                                                                    'span',
                                                                    { className: 'views' },
                                                                    '35K views'
                                                                )
                                                            )
                                                        )
                                                    ),
                                                    _react2.default.createElement(
                                                        'div',
                                                        { id: 'pins', className: 'dd-profile-single-post dd-profile-grid-item' },
                                                        _react2.default.createElement(
                                                            'div',
                                                            { className: 'post-img', style: { backgroundImage: 'url("' + _static2.default.basePath + '/img/p9.png")' } },
                                                            _react2.default.createElement(
                                                                'span',
                                                                { className: 'duration' },
                                                                '06:56'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'div',
                                                            { className: 'post-content' },
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'This Is Cloaud Break'
                                                            ),
                                                            _react2.default.createElement(
                                                                'div',
                                                                { className: 'on' },
                                                                _react2.default.createElement(
                                                                    'span',
                                                                    null,
                                                                    '2 days ago'
                                                                ),
                                                                _react2.default.createElement(
                                                                    'span',
                                                                    { className: 'views' },
                                                                    '35K views'
                                                                )
                                                            )
                                                        )
                                                    ),
                                                    _react2.default.createElement(
                                                        'div',
                                                        { id: 'pins', className: 'dd-profile-single-post dd-profile-grid-item' },
                                                        _react2.default.createElement(
                                                            'div',
                                                            { className: 'post-img', style: { backgroundImage: 'url("' + _static2.default.basePath + '/img/p10.png")' } },
                                                            _react2.default.createElement(
                                                                'span',
                                                                { className: 'duration' },
                                                                '06:56'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'div',
                                                            { className: 'post-content' },
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Aussie Chef Shares Culinary ...'
                                                            ),
                                                            _react2.default.createElement(
                                                                'div',
                                                                { className: 'on' },
                                                                _react2.default.createElement(
                                                                    'span',
                                                                    null,
                                                                    '2 days ago'
                                                                ),
                                                                _react2.default.createElement(
                                                                    'span',
                                                                    { className: 'views' },
                                                                    '35K views'
                                                                )
                                                            )
                                                        )
                                                    ),
                                                    _react2.default.createElement(
                                                        'div',
                                                        { id: 'pins', className: 'dd-profile-single-post dd-profile-grid-item' },
                                                        _react2.default.createElement(
                                                            'div',
                                                            { className: 'post-img', style: { backgroundImage: 'url("' + _static2.default.basePath + '/img/p11.png")' } },
                                                            _react2.default.createElement(
                                                                'span',
                                                                { className: 'duration' },
                                                                '06:56'
                                                            )
                                                        ),
                                                        _react2.default.createElement(
                                                            'div',
                                                            { className: 'post-content' },
                                                            _react2.default.createElement(
                                                                'p',
                                                                null,
                                                                'Travel Prudently Luggage And Ca...'
                                                            ),
                                                            _react2.default.createElement(
                                                                'div',
                                                                { className: 'on' },
                                                                _react2.default.createElement(
                                                                    'span',
                                                                    null,
                                                                    '2 days ago'
                                                                ),
                                                                _react2.default.createElement(
                                                                    'span',
                                                                    { className: 'views' },
                                                                    '35K views'
                                                                )
                                                            )
                                                        )
                                                    )
                                                )
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'dd-profile-right' },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'profile-right-widget' },
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'single-widget' },
                                                    _react2.default.createElement(
                                                        'h4',
                                                        null,
                                                        'Get a second opinion'
                                                    ),
                                                    _react2.default.createElement(
                                                        'div',
                                                        { className: 'invite' },
                                                        _react2.default.createElement(
                                                            'span',
                                                            { className: 'invite-logo pro-img' },
                                                            _react2.default.createElement('img', { src: _static2.default.basePath + '/img/pro.png', alt: true })
                                                        ),
                                                        _react2.default.createElement(
                                                            'p',
                                                            null,
                                                            'Get a second opinion'
                                                        )
                                                    )
                                                ),
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'single-widget' },
                                                    _react2.default.createElement(
                                                        'div',
                                                        { className: 'appropriate' },
                                                        _react2.default.createElement(
                                                            'span',
                                                            { className: 'flag' },
                                                            _react2.default.createElement('img', { src: _static2.default.basePath + '/img/flag.png', alt: true })
                                                        ),
                                                        _react2.default.createElement(
                                                            'p',
                                                            null,
                                                            'Flag as Inappropriate'
                                                        )
                                                    )
                                                ),
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'single-widget' },
                                                    _react2.default.createElement(
                                                        'p',
                                                        null,
                                                        'Profile Link'
                                                    ),
                                                    _react2.default.createElement('input', { id: 'code1', type: 'text', defaultValue: 'https://jump.tv/christopher' }),
                                                    _react2.default.createElement(
                                                        'a',
                                                        { href: '#', className: 'copy-code', 'data-clipboard-target': '#code1', 'data-original-title': true },
                                                        'Copy Link'
                                                    )
                                                ),
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'single-widget language' },
                                                    _react2.default.createElement(
                                                        'p',
                                                        null,
                                                        'Languages'
                                                    ),
                                                    _react2.default.createElement(
                                                        'p',
                                                        null,
                                                        'English: ',
                                                        _react2.default.createElement(
                                                            'span',
                                                            null,
                                                            'Fluent'
                                                        )
                                                    ),
                                                    _react2.default.createElement(
                                                        'p',
                                                        null,
                                                        'Russian: ',
                                                        _react2.default.createElement(
                                                            'span',
                                                            null,
                                                            'Native or Bilingual'
                                                        )
                                                    )
                                                )
                                            )
                                        )
                                    )
                                )
                            )
                        )
                    )
                )
            ) : _react2.default.createElement(
                'div',
                null,
                'User is loading ...'
            );
        }
    }]);

    return Profile;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(function (_ref3) {
    var userDetails = _ref3.user.user;
    return {
        user: userDetails
    };
})(Profile);

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _firebase = __webpack_require__(11);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var collectionsNames = ['users'];

exports.default = collectionsNames.reduce(function (collections, name) {
  return Object.assign(collections, _defineProperty({}, name, _firebase.firestore.collection(name)));
}, {});

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

exports.default = function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h1',
      null,
      '404 - Oh no\'s! We couldn\'t find that page :('
    )
  );
};

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(38);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = __webpack_require__(39);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Export your top level component as JSX (for static rendering)
exports.default = _App2.default;

// Render your app


// Your top level component

if (typeof document !== 'undefined') {
  var renderMethod =  false ? _reactDom2.default.render : _reactDom2.default.hydrate || _reactDom2.default.render;
  var render = function render(Comp) {
    renderMethod(_react2.default.createElement(Comp, null), document.getElementById('root'));
  };

  // Render!
  render(_App2.default);
}

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(3);

var _reactRedux = __webpack_require__(2);

var _reactHotLoader = __webpack_require__(40);

var _reactStaticRoutes = __webpack_require__(41);

var _reactStaticRoutes2 = _interopRequireDefault(_reactStaticRoutes);

var _redux = __webpack_require__(66);

var _redux2 = _interopRequireDefault(_redux);

__webpack_require__(79);

__webpack_require__(80);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App() {
  return _react2.default.createElement(
    _reactRedux.Provider,
    { store: _redux2.default },
    _react2.default.createElement(
      _reactStatic.Router,
      null,
      _react2.default.createElement(
        'div',
        { className: 'content' },
        _react2.default.createElement(_reactStaticRoutes2.default, null)
      )
    )
  );
};

exports.default = (0, _reactHotLoader.hot)(module)(App);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path2 = __webpack_require__(42);

var _path3 = _interopRequireDefault(_path2);

var _importCss2 = __webpack_require__(43);

var _importCss3 = _interopRequireDefault(_importCss2);

var _universalImport2 = __webpack_require__(44);

var _universalImport3 = _interopRequireDefault(_universalImport2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(45);

var _reactUniversalComponent = __webpack_require__(46);

var _reactUniversalComponent2 = _interopRequireDefault(_reactUniversalComponent);

var _reactStatic = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(0, _reactUniversalComponent.setHasBabelPlugin)();

var universalOptions = {
  loading: function loading() {
    return null;
  },
  error: function error(props) {
    console.error(props.error);
    return _react2.default.createElement(
      'div',
      null,
      'An error occurred loading this page\'s template. More information is available in the console.'
    );
  }
};

var t_0 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/Home',
  file: '/home/av/dev/jump-tv/site/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 13)), (0, _importCss3.default)('src/containers/Home', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Home');
  },
  resolve: function resolve() {
    return /*require.resolve*/(13);
  },
  chunkName: function chunkName() {
    return 'src/containers/Home';
  }
}), universalOptions);
var t_1 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/Dashboard',
  file: '/home/av/dev/jump-tv/site/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 14)), (0, _importCss3.default)('src/containers/Dashboard', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Dashboard');
  },
  resolve: function resolve() {
    return /*require.resolve*/(14);
  },
  chunkName: function chunkName() {
    return 'src/containers/Dashboard';
  }
}), universalOptions);
var t_2 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/ReactMotionDrawerDemo',
  file: '/home/av/dev/jump-tv/site/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 19)), (0, _importCss3.default)('src/containers/ReactMotionDrawerDemo', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/ReactMotionDrawerDemo');
  },
  resolve: function resolve() {
    return /*require.resolve*/(19);
  },
  chunkName: function chunkName() {
    return 'src/containers/ReactMotionDrawerDemo';
  }
}), universalOptions);
var t_3 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/About',
  file: '/home/av/dev/jump-tv/site/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 20)), (0, _importCss3.default)('src/containers/About', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/About');
  },
  resolve: function resolve() {
    return /*require.resolve*/(20);
  },
  chunkName: function chunkName() {
    return 'src/containers/About';
  }
}), universalOptions);
var t_4 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/Post',
  file: '/home/av/dev/jump-tv/site/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 21)), (0, _importCss3.default)('src/containers/Post', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Post');
  },
  resolve: function resolve() {
    return /*require.resolve*/(21);
  },
  chunkName: function chunkName() {
    return 'src/containers/Post';
  }
}), universalOptions);
var t_5 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/Blog',
  file: '/home/av/dev/jump-tv/site/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 22)), (0, _importCss3.default)('src/containers/Blog', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Blog');
  },
  resolve: function resolve() {
    return /*require.resolve*/(22);
  },
  chunkName: function chunkName() {
    return 'src/containers/Blog';
  }
}), universalOptions);
var t_6 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/Bricks',
  file: '/home/av/dev/jump-tv/site/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 23)), (0, _importCss3.default)('src/containers/Bricks', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Bricks');
  },
  resolve: function resolve() {
    return /*require.resolve*/(23);
  },
  chunkName: function chunkName() {
    return 'src/containers/Bricks';
  }
}), universalOptions);
var t_7 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/navigationIcons',
  file: '/home/av/dev/jump-tv/site/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 24)), (0, _importCss3.default)('src/containers/navigationIcons', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/navigationIcons');
  },
  resolve: function resolve() {
    return /*require.resolve*/(24);
  },
  chunkName: function chunkName() {
    return 'src/containers/navigationIcons';
  }
}), universalOptions);
var t_8 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/DropZoneDemo',
  file: '/home/av/dev/jump-tv/site/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 25)), (0, _importCss3.default)('src/containers/DropZoneDemo', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/DropZoneDemo');
  },
  resolve: function resolve() {
    return /*require.resolve*/(25);
  },
  chunkName: function chunkName() {
    return 'src/containers/DropZoneDemo';
  }
}), universalOptions);
var t_9 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/ReactTubeEmbedDemo',
  file: '/home/av/dev/jump-tv/site/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 26)), (0, _importCss3.default)('src/containers/ReactTubeEmbedDemo', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/ReactTubeEmbedDemo');
  },
  resolve: function resolve() {
    return /*require.resolve*/(26);
  },
  chunkName: function chunkName() {
    return 'src/containers/ReactTubeEmbedDemo';
  }
}), universalOptions);
var t_10 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/Nuzzel',
  file: '/home/av/dev/jump-tv/site/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 27)), (0, _importCss3.default)('src/containers/Nuzzel', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Nuzzel');
  },
  resolve: function resolve() {
    return /*require.resolve*/(27);
  },
  chunkName: function chunkName() {
    return 'src/containers/Nuzzel';
  }
}), universalOptions);
var t_11 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/LoginDemo',
  file: '/home/av/dev/jump-tv/site/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 28)), (0, _importCss3.default)('src/containers/LoginDemo', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/LoginDemo');
  },
  resolve: function resolve() {
    return /*require.resolve*/(28);
  },
  chunkName: function chunkName() {
    return 'src/containers/LoginDemo';
  }
}), universalOptions);
var t_12 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/News',
  file: '/home/av/dev/jump-tv/site/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 29)), (0, _importCss3.default)('src/containers/News', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/News');
  },
  resolve: function resolve() {
    return /*require.resolve*/(29);
  },
  chunkName: function chunkName() {
    return 'src/containers/News';
  }
}), universalOptions);
var t_13 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/SignIn',
  file: '/home/av/dev/jump-tv/site/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 30)), (0, _importCss3.default)('src/containers/SignIn', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/SignIn');
  },
  resolve: function resolve() {
    return /*require.resolve*/(30);
  },
  chunkName: function chunkName() {
    return 'src/containers/SignIn';
  }
}), universalOptions);
var t_14 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/SignUp',
  file: '/home/av/dev/jump-tv/site/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 31)), (0, _importCss3.default)('src/containers/SignUp', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/SignUp');
  },
  resolve: function resolve() {
    return /*require.resolve*/(31);
  },
  chunkName: function chunkName() {
    return 'src/containers/SignUp';
  }
}), universalOptions);
var t_15 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/Profile',
  file: '/home/av/dev/jump-tv/site/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 32)), (0, _importCss3.default)('src/containers/Profile', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Profile');
  },
  resolve: function resolve() {
    return /*require.resolve*/(32);
  },
  chunkName: function chunkName() {
    return 'src/containers/Profile';
  }
}), universalOptions);
var t_16 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/404',
  file: '/home/av/dev/jump-tv/site/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 34)), (0, _importCss3.default)('src/containers/404', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/404');
  },
  resolve: function resolve() {
    return /*require.resolve*/(34);
  },
  chunkName: function chunkName() {
    return 'src/containers/404';
  }
}), universalOptions);

// Template Map
global.componentsByTemplateID = global.componentsByTemplateID || [t_0, t_1, t_2, t_3, t_4, t_5, t_6, t_7, t_8, t_9, t_10, t_11, t_12, t_13, t_14, t_15, t_16];

// Template Tree
global.templateIDsByPath = global.templateIDsByPath || {
  '404': 16

  // Get template for given path
};var getComponentForPath = function getComponentForPath(path) {
  path = (0, _reactStatic.cleanPath)(path);
  return global.componentsByTemplateID[global.templateIDsByPath[path]];
};

global.reactStaticGetComponentForPath = getComponentForPath;
global.reactStaticRegisterTemplateIDForPath = function (path, id) {
  global.templateIDsByPath[path] = id;
};

var Routes = function (_Component) {
  _inherits(Routes, _Component);

  function Routes() {
    _classCallCheck(this, Routes);

    return _possibleConstructorReturn(this, (Routes.__proto__ || Object.getPrototypeOf(Routes)).apply(this, arguments));
  }

  _createClass(Routes, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          Comp = _props.component,
          render = _props.render,
          children = _props.children;


      var getFullComponentForPath = function getFullComponentForPath(path) {
        var Comp = getComponentForPath(path);
        var is404 = path === '404';
        if (!Comp) {
          is404 = true;
          Comp = getComponentForPath('404');
        }
        return function (newProps) {
          return Comp ? _react2.default.createElement(Comp, _extends({}, newProps, is404 ? { is404: true } : {})) : null;
        };
      };

      var renderProps = {
        componentsByTemplateID: global.componentsByTemplateID,
        templateIDsByPath: global.templateIDsByPath,
        getComponentForPath: getFullComponentForPath
      };

      if (Comp) {
        return _react2.default.createElement(Comp, renderProps);
      }

      if (render || children) {
        return (render || children)(renderProps);
      }

      // This is the default auto-routing renderer
      return _react2.default.createElement(_reactRouterDom.Route, { path: '*', render: function render(props) {
          var Comp = getFullComponentForPath(props.location.pathname);
          // If Comp is used as a component here, it triggers React to re-mount the entire
          // component tree underneath during reconciliation, losing all internal state.
          // By unwrapping it here we keep the real, static component exposed directly to React.
          return Comp && Comp(_extends({}, props, { key: props.location.pathname }));
        } });
    }
  }]);

  return Routes;
}(_react.Component);

exports.default = Routes;
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/importCss");

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _requireUniversalModule = __webpack_require__(47);

Object.defineProperty(exports, 'CHUNK_NAMES', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.CHUNK_NAMES;
  }
});
Object.defineProperty(exports, 'MODULE_IDS', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.MODULE_IDS;
  }
});

var _reportChunks = __webpack_require__(48);

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks).default;
  }
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(49);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);

var _utils = __webpack_require__(12);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var hasBabelPlugin = false;

var isHMR = function isHMR() {
  return (
    // $FlowIgnore
    module.hot && (module.hot.data || module.hot.status() === 'apply')
  );
};

var setHasBabelPlugin = exports.setHasBabelPlugin = function setHasBabelPlugin() {
  hasBabelPlugin = true;
};

function universal(component) {
  var _class, _temp;

  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var _opts$loading = opts.loading,
      Loading = _opts$loading === undefined ? _utils.DefaultLoading : _opts$loading,
      _opts$error = opts.error,
      Err = _opts$error === undefined ? _utils.DefaultError : _opts$error,
      _opts$minDelay = opts.minDelay,
      minDelay = _opts$minDelay === undefined ? 0 : _opts$minDelay,
      _opts$alwaysDelay = opts.alwaysDelay,
      alwaysDelay = _opts$alwaysDelay === undefined ? false : _opts$alwaysDelay,
      _opts$testBabelPlugin = opts.testBabelPlugin,
      testBabelPlugin = _opts$testBabelPlugin === undefined ? false : _opts$testBabelPlugin,
      _opts$loadingTransiti = opts.loadingTransition,
      loadingTransition = _opts$loadingTransiti === undefined ? true : _opts$loadingTransiti,
      options = _objectWithoutProperties(opts, ['loading', 'error', 'minDelay', 'alwaysDelay', 'testBabelPlugin', 'loadingTransition']);

  var isDynamic = hasBabelPlugin || testBabelPlugin;
  options.isDynamic = isDynamic;
  options.modCache = {};
  options.promCache = {};

  return _temp = _class = function (_React$Component) {
    _inherits(UniversalComponent, _React$Component);

    _createClass(UniversalComponent, null, [{
      key: 'preload',

      /* eslint-enable react/sort-comp */

      /* eslint-disable react/sort-comp */
      value: function preload(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        props = props || {};

        var _req = (0, _requireUniversalModule2.default)(component, options, props),
            requireAsync = _req.requireAsync,
            requireSync = _req.requireSync;

        var Component = void 0;

        try {
          Component = requireSync(props, context);
        } catch (error) {
          return Promise.reject(error);
        }

        if (Component) return Promise.resolve(Component);

        return requireAsync(props, context);
      }
    }]);

    function UniversalComponent(props, context) {
      _classCallCheck(this, UniversalComponent);

      var _this = _possibleConstructorReturn(this, (UniversalComponent.__proto__ || Object.getPrototypeOf(UniversalComponent)).call(this, props, context));

      _this.update = function (state) {
        var isMount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var isSync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var isServer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

        if (!_this._mounted) return;
        if (!state.error) state.error = null;

        _this.handleAfter(state, isMount, isSync, isServer);
      };

      _this.state = { error: null };
      return _this;
    }

    _createClass(UniversalComponent, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        this._mounted = true;

        var _req2 = (0, _requireUniversalModule2.default)(component, options, this.props),
            addModule = _req2.addModule,
            requireSync = _req2.requireSync,
            requireAsync = _req2.requireAsync,
            asyncOnly = _req2.asyncOnly;

        var Component = void 0;

        try {
          Component = requireSync(this.props, this.context);
        } catch (error) {
          return this.update({ error: error });
        }

        this._asyncOnly = asyncOnly;
        var chunkName = addModule(this.props); // record the module for SSR flushing :)

        if (this.context.report) {
          this.context.report(chunkName);
        }

        if (Component || _utils.isServer) {
          this.handleBefore(true, true, _utils.isServer);
          this.update({ Component: Component }, true, true, _utils.isServer);
          return;
        }

        this.handleBefore(true, false);
        this.requireAsync(requireAsync, this.props, true);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._mounted = false;
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        var _this2 = this;

        if (isDynamic || this._asyncOnly) {
          var _req3 = (0, _requireUniversalModule2.default)(component, options, nextProps, this.props),
              requireSync = _req3.requireSync,
              requireAsync = _req3.requireAsync,
              shouldUpdate = _req3.shouldUpdate;

          if (shouldUpdate(nextProps, this.props)) {
            var Component = void 0;

            try {
              Component = requireSync(nextProps, this.context);
            } catch (error) {
              return this.update({ error: error });
            }

            this.handleBefore(false, !!Component);

            if (!Component) {
              return this.requireAsync(requireAsync, nextProps);
            }

            var state = { Component: Component };

            if (alwaysDelay) {
              if (loadingTransition) this.update({ Component: null }); // display `loading` during componentWillReceiveProps
              setTimeout(function () {
                return _this2.update(state, false, true);
              }, minDelay);
              return;
            }

            this.update(state, false, true);
          } else if (isHMR()) {
            var _Component = requireSync(nextProps, this.context);
            this.setState({ Component: function Component() {
                return null;
              } }); // HMR /w Redux and HOCs can be finicky, so we
            setTimeout(function () {
              return _this2.setState({ Component: _Component });
            }); // toggle components to insure updates occur
          }
        }
      }
    }, {
      key: 'requireAsync',
      value: function requireAsync(_requireAsync, props, isMount) {
        var _this3 = this;

        if (this.state.Component && loadingTransition) {
          this.update({ Component: null }); // display `loading` during componentWillReceiveProps
        }

        var time = new Date();

        _requireAsync(props, this.context).then(function (Component) {
          var state = { Component: Component };

          var timeLapsed = new Date() - time;
          if (timeLapsed < minDelay) {
            var extraDelay = minDelay - timeLapsed;
            return setTimeout(function () {
              return _this3.update(state, isMount);
            }, extraDelay);
          }

          _this3.update(state, isMount);
        }).catch(function (error) {
          return _this3.update({ error: error });
        });
      }
    }, {
      key: 'handleBefore',
      value: function handleBefore(isMount, isSync) {
        var isServer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (this.props.onBefore) {
          var onBefore = this.props.onBefore;

          var info = { isMount: isMount, isSync: isSync, isServer: isServer };
          onBefore(info);
        }
      }
    }, {
      key: 'handleAfter',
      value: function handleAfter(state, isMount, isSync, isServer) {
        var Component = state.Component,
            error = state.error;


        if (Component && !error) {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, Component, { preload: true });

          if (this.props.onAfter) {
            var onAfter = this.props.onAfter;

            var info = { isMount: isMount, isSync: isSync, isServer: isServer };
            onAfter(info, Component);
          }
        } else if (error && this.props.onError) {
          this.props.onError(error);
        }

        this.setState(state);
      }
    }, {
      key: 'render',
      value: function render() {
        var _state = this.state,
            error = _state.error,
            Component = _state.Component;

        var _props = this.props,
            isLoading = _props.isLoading,
            userError = _props.error,
            props = _objectWithoutProperties(_props, ['isLoading', 'error']);

        // user-provided props (e.g. for data-fetching loading):


        if (isLoading) {
          return (0, _utils.createElement)(Loading, props);
        } else if (userError) {
          return (0, _utils.createElement)(Err, _extends({}, props, { error: userError }));
        } else if (error) {
          return (0, _utils.createElement)(Err, _extends({}, props, { error: error }));
        } else if (Component) {
          // primary usage (for async import loading + errors):
          return (0, _utils.createElement)(Component, props);
        }

        return (0, _utils.createElement)(Loading, props);
      }
    }]);

    return UniversalComponent;
  }(_react2.default.Component), _class.contextTypes = {
    store: _propTypes2.default.object,
    report: _propTypes2.default.func
  }, _temp;
}
exports.default = universal;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;
exports.default = requireUniversalModule;

var _utils = __webpack_require__(12);

var CHUNK_NAMES = exports.CHUNK_NAMES = new Set();
var MODULE_IDS = exports.MODULE_IDS = new Set();

function requireUniversalModule(universalConfig, options, props, prevProps) {
  var key = options.key,
      _options$timeout = options.timeout,
      timeout = _options$timeout === undefined ? 15000 : _options$timeout,
      onLoad = options.onLoad,
      onError = options.onError,
      isDynamic = options.isDynamic,
      modCache = options.modCache,
      promCache = options.promCache;


  var config = getConfig(isDynamic, universalConfig, options, props);
  var chunkName = config.chunkName,
      path = config.path,
      resolve = config.resolve,
      load = config.load;

  var asyncOnly = !path && !resolve || typeof chunkName === 'function';

  var requireSync = function requireSync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);

    if (!exp) {
      var mod = void 0;

      if (!(0, _utils.isWebpack)() && path) {
        var modulePath = (0, _utils.callForString)(path, props) || '';
        mod = (0, _utils.tryRequire)(modulePath);
      } else if ((0, _utils.isWebpack)() && resolve) {
        var weakId = (0, _utils.callForString)(resolve, props);

        if (__webpack_require__.m[weakId]) {
          mod = (0, _utils.tryRequire)(weakId);
        }
      }

      if (mod) {
        exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache, true);
      }
    }

    return exp;
  };

  var requireAsync = function requireAsync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);
    if (exp) return Promise.resolve(exp);

    var cachedPromise = (0, _utils.loadFromPromiseCache)(chunkName, props, promCache);
    if (cachedPromise) return cachedPromise;

    var prom = new Promise(function (res, rej) {
      var reject = function reject(error) {
        error = error || new Error('timeout exceeded');
        clearTimeout(timer);
        if (onError) {
          var _isServer = typeof window === 'undefined';
          var info = { isServer: _isServer };
          onError(error, info);
        }
        rej(error);
      };

      // const timer = timeout && setTimeout(reject, timeout)
      var timer = timeout && setTimeout(reject, timeout);

      var resolve = function resolve(mod) {
        clearTimeout(timer);

        var exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache);
        if (exp) return res(exp);

        reject(new Error('export not found'));
      };

      var request = load(props, { resolve: resolve, reject: reject });

      // if load doesn't return a promise, it must call resolveImport
      // itself. Most common is the promise implementation below.
      if (!request || typeof request.then !== 'function') return;
      request.then(resolve).catch(reject);
    });

    (0, _utils.cacheProm)(prom, chunkName, props, promCache);
    return prom;
  };

  var addModule = function addModule(props) {
    if (_utils.isServer || _utils.isTest) {
      if (chunkName) {
        var name = (0, _utils.callForString)(chunkName, props);
        if (name) CHUNK_NAMES.add(name);
        if (!_utils.isTest) return name; // makes tests way smaller to run both kinds
      }

      if ((0, _utils.isWebpack)()) {
        var weakId = (0, _utils.callForString)(resolve, props);
        if (weakId) MODULE_IDS.add(weakId);
        return weakId;
      }

      if (!(0, _utils.isWebpack)()) {
        var modulePath = (0, _utils.callForString)(path, props);
        if (modulePath) MODULE_IDS.add(modulePath);
        return modulePath;
      }
    }
  };

  var shouldUpdate = function shouldUpdate(next, prev) {
    var cacheKey = (0, _utils.callForString)(chunkName, next);

    var config = getConfig(isDynamic, universalConfig, options, prev);
    var prevCacheKey = (0, _utils.callForString)(config.chunkName, prev);

    return cacheKey !== prevCacheKey;
  };

  return {
    requireSync: requireSync,
    requireAsync: requireAsync,
    addModule: addModule,
    shouldUpdate: shouldUpdate,
    asyncOnly: asyncOnly
  };
}

var flushChunkNames = exports.flushChunkNames = function flushChunkNames() {
  var chunks = Array.from(CHUNK_NAMES);
  CHUNK_NAMES.clear();
  return chunks;
};

var flushModuleIds = exports.flushModuleIds = function flushModuleIds() {
  var ids = Array.from(MODULE_IDS);
  MODULE_IDS.clear();
  return ids;
};

var clearChunks = exports.clearChunks = function clearChunks() {
  CHUNK_NAMES.clear();
  MODULE_IDS.clear();
};

var getConfig = function getConfig(isDynamic, universalConfig, options, props) {
  if (isDynamic) {
    return typeof universalConfig === 'function' ? universalConfig(props) : universalConfig;
  }

  var load = typeof universalConfig === 'function' ? universalConfig : // $FlowIssue
  function () {
    return universalConfig;
  };

  return {
    file: 'default',
    id: options.id || 'default',
    chunkName: options.chunkName || 'default',
    resolve: options.resolve || '',
    path: options.path || '',
    load: load
  };
};

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReportChunks = function (_React$Component) {
  _inherits(ReportChunks, _React$Component);

  function ReportChunks() {
    _classCallCheck(this, ReportChunks);

    return _possibleConstructorReturn(this, (ReportChunks.__proto__ || Object.getPrototypeOf(ReportChunks)).apply(this, arguments));
  }

  _createClass(ReportChunks, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        report: this.props.report
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.Children.only(this.props.children);
    }
  }]);

  return ReportChunks;
}(_react2.default.Component);

ReportChunks.propTypes = {
  report: _propTypes2.default.func.isRequired
};
ReportChunks.childContextTypes = {
  report: _propTypes2.default.func.isRequired
};
exports.default = ReportChunks;

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = require("react-motion-drawer");

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = require("react-bricks-infinite");

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = require("react-dropzone");

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = require("react-tube-embed");

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _bricks = __webpack_require__(56);

var _bricks2 = _interopRequireDefault(_bricks);

var _reactInfiniteScroller = __webpack_require__(57);

var _reactInfiniteScroller2 = _interopRequireDefault(_reactInfiniteScroller);

var _reactMdSpinner = __webpack_require__(58);

var _reactMdSpinner2 = _interopRequireDefault(_reactMdSpinner);

__webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactBricks = function (_React$Component) {
  _inherits(ReactBricks, _React$Component);

  function ReactBricks(props) {
    _classCallCheck(this, ReactBricks);

    var _this = _possibleConstructorReturn(this, (ReactBricks.__proto__ || Object.getPrototypeOf(ReactBricks)).call(this, props));

    _this.initializeLoader = function () {
      var size = null,
          duration = null,
          color = null;
      if (_this.props.defaultLoaderStyle) {
        size = _this.props.defaultLoaderStyle.spinnerSize || 28;
        duration = _this.props.defaultLoaderStyle.spinnerDuration || 1333;
        color = _this.props.defaultLoaderStyle.spinnerColor || null;
        return _react2.default.createElement(
          'div',
          { className: 'bricks-spinner' },
          _react2.default.createElement(_reactMdSpinner2.default, {
            size: size,
            duration: duration,
            singleColor: color
          })
        );
      } else {
        return _react2.default.createElement(
          'div',
          { className: 'bricks-spinner' },
          _react2.default.createElement(_reactMdSpinner2.default, null)
        );
      }
    };

    _this.initializeBricks = function () {
      var instance = (0, _bricks2.default)({
        position: false,
        container: '#' + _this.state.containerId,
        packed: _this.state.packed,
        sizes: _this.state.sizes
      });
      return instance;
    };

    _this.resizeBricksLayout = function () {
      _this.bricksInstance.resize(true);
    };

    _this.packLayout = function () {
      _this.bricksInstance.pack();
    };

    _this.updateBricksLayout = function () {
      _this.bricksInstance.update();
    };

    _this.state = {
      containerId: _this.props.containerId || "bricks-container",
      sizes: _this.props.sizes || [{ columns: 2, gutter: 20 }, { mq: '768px', columns: 3, gutter: 25 }, { mq: '1024px', columns: 5, gutter: 40 }],
      packed: _this.props.packed || "data-packed",
      hasMoreBricks: _this.props.hasMoreBricks || false,
      useWindowForScroll: _this.props.useWindowForScroll || true,
      loaderComponent: _this.props.loaderComponent || _this.initializeLoader(),
      style: _this.props.style || {}
    };
    return _this;
  }

  _createClass(ReactBricks, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.reRender) {
        this.resizeBricksLayout();
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.bricks && this.props.bricks.length > 0) {
        this.bricksInstance = this.initializeBricks();
        this.bricksInstance.pack();
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (prevProps.bricks.length === 0 && this.props.bricks.length === 0) return;
      if (prevProps.bricks.length !== this.props.bricks.length) {
        return this.bricksInstance.update();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.bricksInstance.resize(false);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactInfiniteScroller2.default,
        { className: 'masonry-class',
          pageStart: 0,
          loadMore: this.props.loadMoreBricks,
          loader: this.state.loaderComponent,
          hasMore: this.state.hasMoreBricks,
          useWindow: this.state.useWindow },
        _react2.default.createElement(
          'section',
          { className: 'bricks-container',
            id: this.state.containerId,
            style: this.props.style },
          this.props.bricks
        )
      );
    }
  }]);

  return ReactBricks;
}(_react2.default.Component);

exports.default = ReactBricks;

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = require("bricks.js");

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = require("react-infinite-scroller");

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = require("react-md-spinner");

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = require("masonry-layout");

/***/ }),
/* 60 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 61 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 62 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 63 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 64 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 65 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(35);

var _reduxSaga = __webpack_require__(36);

var _reduxSaga2 = _interopRequireDefault(_reduxSaga);

var _reducers = __webpack_require__(67);

var _reducers2 = _interopRequireDefault(_reducers);

var _sagas = __webpack_require__(74);

var _sagas2 = _interopRequireDefault(_sagas);

var _lodash = __webpack_require__(77);

var _localStorageUtil = __webpack_require__(78);

var _localStorageUtil2 = _interopRequireDefault(_localStorageUtil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (typeof window === 'undefined') {
  global.window = {};
}

var sagaMiddleware = (0, _reduxSaga2.default)();

var localStorageKey = 'REDUX';

// https://stackoverflow.com/questions/35305661/where-to-write-to-localstorage-in-a-redux-app
var initialState = _localStorageUtil2.default.getObject(localStorageKey) || {}; //loadState() || {};

//console.log('IS', initialState)

/* eslint-disable no-underscore-dangle */
var store = (0, _redux.createStore)(_reducers2.default, initialState, (0, _redux.compose)((0, _redux.applyMiddleware)(sagaMiddleware)
//   // applyMiddleware(
//   //   thunk,
//   //   api,
//   //   refreshLoggedUserEmitter,
//   //   createLogger(),
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
//   //DevTools.instrument()
), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
/* eslint-enable */

store.subscribe((0, _lodash.throttle)(function () {
  _localStorageUtil2.default.setObject(localStorageKey, {
    user: store.getState().user
  });
}, 1000));

sagaMiddleware.run(_sagas2.default);

exports.default = store;

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(35);

var _counter = __webpack_require__(68);

var _counter2 = _interopRequireDefault(_counter);

var _blocks = __webpack_require__(69);

var _blocks2 = _interopRequireDefault(_blocks);

var _nuzzel = __webpack_require__(71);

var _nuzzel2 = _interopRequireDefault(_nuzzel);

var _news = __webpack_require__(72);

var _news2 = _interopRequireDefault(_news);

var _user = __webpack_require__(73);

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducer = (0, _redux.combineReducers)({
  counter: _counter2.default,
  blocks: _blocks2.default,
  nuzzel: _nuzzel2.default,
  news: _news2.default,
  user: _user2.default
});

exports.default = reducer;

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var initialState = {
  count: 0
};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case 'INCREMENT':
      return _extends({}, state, {
        count: state.count + 1
      });
    case 'INCREMENT2':
      return _extends({}, state, {
        count: state.count + 10
      });
    case 'FETCH2':
      //console.log('FETCH2', action)
      return _extends({}, state, {
        count: state.count + 5
      });
    case 'RESET':
      return _extends({}, state, {
        count: 0
      });
    default:
      return state;
  }
};

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _randomWords = __webpack_require__(70);

var _randomWords2 = _interopRequireDefault(_randomWords);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var images = ['http://joxi.ru/Y2L4WNBTnyvM62.jpg', 'http://joxi.ru/8AnWwgOIqYKNXr.jpg', 'http://joxi.ru/zAN4LqGTlQw1Lm.jpg', 'http://joxi.ru/Vrwnw5NcKpgo1A.jpg', 'http://joxi.ru/DmB4G3qTN966dA.jpg', 'http://joxi.ru/82343DET6owwXA.jpg', 'http://joxi.ru/KAxXw6NT4dwwLA.jpg', 'http://joxi.ru/p271xDvc0MZZYr.jpg', 'http://joxi.ru/KAxXw6NT4dwqLA.jpg', 'http://joxi.ru/brRjR0GiQ58VDr.jpg', 'http://joxi.ru/eAOMKgGc40GE8m.jpg'];

var width = [1, 2, 4];

var genBlock = function genBlock(el, i) {
  return {
    id: Date.now() + i,
    title: (0, _randomWords2.default)({ exactly: 4, join: ' ' }),
    viewed: i,
    shared: i + 1,
    image: images[Math.floor(Math.random() * images.length)],
    width: width[Math.floor(Math.random() * width.length)],
    createdAt: new Date(),
    height: width[Math.floor(Math.random() * width.length)]
  };
};

var genBlocks = function genBlocks(limit) {
  return [].concat(_toConsumableArray(Array(limit))).map(genBlock);
};

var initialState = {
  blocks: genBlocks(20)
};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case 'BLOCKS LOADED':
      return _extends({}, state, {
        blocks: action.payload.blocks
      });
    case 'LOAD MORE BRICKS':
      return _extends({}, state, {
        blocks: [].concat(_toConsumableArray(state.blocks), _toConsumableArray(genBlocks(20)))
      });
    default:
      return state;
  }
};

/***/ }),
/* 70 */
/***/ (function(module, exports) {

module.exports = require("random-words");

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var initialState = {};
// {
//   news: [{
//     "image_url": "https://media.coindesk.com/uploads/2014/07/shutterstock_165878753.jpg",
//     "publication_date": "2018-05-21T19:30:59.000-07:00",
//     "language": "en",
//     "id": 10938606408,
//     "source": "CoinDesk",
//     "excerpt": "Argentina's Banco Masventas has revealed that starting Monday it will enable customers to send cross-border payments using bitcoin. A partnership with Latin America-focused exchange startup Bitex, founded in 2014, the news finds the regional bank…",
//     "title": "A Bank In Argentina Just Added Bitcoin for Cross-Border Payments",
//     "url": "http://www.coindesk.com/bank-argentina-just-added-bitcoin-cross-border-payments/"
//   }],
//   query: 'bitcoin+blockchain',
//   offset: 0,
//   count: 20,
//   reRender: false,
// }


exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;

  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      type = _ref.type,
      news = _ref.news;

  switch (type) {
    case 'NEWS FETCHED':

      return _extends({}, state, {
        reRender: state.query !== news.query,
        offset: news.data.meta.stories.offset,
        query: news.query,
        news: news.data.meta.stories.offset ? [].concat(_toConsumableArray(state.news), _toConsumableArray(news.data.results.stories)) : news.data.results.stories
      });
    default:
      return state;
  }
};

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var initialState = {};
// {
//   news: [{
//     "image_url": "https://media.coindesk.com/uploads/2014/07/shutterstock_165878753.jpg",
//     "publication_date": "2018-05-21T19:30:59.000-07:00",
//     "language": "en",
//     "id": 10938606408,
//     "source": "CoinDesk",
//     "excerpt": "Argentina's Banco Masventas has revealed that starting Monday it will enable customers to send cross-border payments using bitcoin. A partnership with Latin America-focused exchange startup Bitex, founded in 2014, the news finds the regional bank…",
//     "title": "A Bank In Argentina Just Added Bitcoin for Cross-Border Payments",
//     "url": "http://www.coindesk.com/bank-argentina-just-added-bitcoin-cross-border-payments/"
//   }],
//   query: 'bitcoin+blockchain',
//   offset: 0,
//   count: 20,
//   reRender: false,
// }


exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  //console.log('News reducer', action, state)

  switch (action.type) {
    case 'ALL_NEWS_FETCH_OK':
      return _extends({}, state, {
        data: action.payload.data,
        error: null
      });
    case 'ALL_NEWS_FETCH_ERROR':
      return _extends({}, state, {
        data: null,
        error: action.payload.data
      });
    default:
      return state;
  }
};

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var initialState = {
  user: null,
  error: null,
  isLoggedIn: false
};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var _ref = arguments[1];
  var type = _ref.type,
      user = _ref.user,
      error = _ref.error;

  switch (type) {
    case 'USER_LOGIN_SUCCESS':
      return _extends({}, state, {
        user: user,
        error: null,
        isLoggedIn: true
      });
    case 'USER_LOGIN_FAIL':
      return _extends({}, state, {
        error: error
      });
    case 'USER_LOGGED_OUT':
      return _extends({}, initialState);
    default:
      return state;
  }
};

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(6);

var _regenerator2 = _interopRequireDefault(_regenerator);

exports.helloSaga = helloSaga;
exports.default = rootSaga;

var _reduxSaga = __webpack_require__(36);

var _effects = __webpack_require__(75);

var _nuzzel = __webpack_require__(76);

var nuzzel = _interopRequireWildcard(_nuzzel);

var _firebase = __webpack_require__(11);

var _db = __webpack_require__(33);

var _db2 = _interopRequireDefault(_db);

var _static = __webpack_require__(1);

var _static2 = _interopRequireDefault(_static);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/_regenerator2.default.mark(helloSaga),
    _marked2 = /*#__PURE__*/_regenerator2.default.mark(incrementAsync),
    _marked3 = /*#__PURE__*/_regenerator2.default.mark(watchIncrementAsync),
    _marked4 = /*#__PURE__*/_regenerator2.default.mark(fetchSomethingSaga),
    _marked5 = /*#__PURE__*/_regenerator2.default.mark(fetchSomething),
    _marked6 = /*#__PURE__*/_regenerator2.default.mark(fetchNews),
    _marked7 = /*#__PURE__*/_regenerator2.default.mark(searchNews),
    _marked8 = /*#__PURE__*/_regenerator2.default.mark(fetchAllNews),
    _marked9 = /*#__PURE__*/_regenerator2.default.mark(searchAllNews),
    _marked10 = /*#__PURE__*/_regenerator2.default.mark(logInUserWithEmailAndPass),
    _marked11 = /*#__PURE__*/_regenerator2.default.mark(emailPassLogin),
    _marked12 = /*#__PURE__*/_regenerator2.default.mark(logInUserWithFacebook),
    _marked13 = /*#__PURE__*/_regenerator2.default.mark(facebookLogin),
    _marked14 = /*#__PURE__*/_regenerator2.default.mark(logInUserWithTwitter),
    _marked15 = /*#__PURE__*/_regenerator2.default.mark(twitterLogin),
    _marked16 = /*#__PURE__*/_regenerator2.default.mark(signUpUserWithEmailAndPass),
    _marked17 = /*#__PURE__*/_regenerator2.default.mark(emailPassSignup),
    _marked18 = /*#__PURE__*/_regenerator2.default.mark(getLoggedUser),
    _marked19 = /*#__PURE__*/_regenerator2.default.mark(handleLogOut),
    _marked20 = /*#__PURE__*/_regenerator2.default.mark(logOut),
    _marked21 = /*#__PURE__*/_regenerator2.default.mark(rootSaga);

var users = _db2.default.users;
function helloSaga() {
  return _regenerator2.default.wrap(function helloSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log('Hello Sagas!');

        case 1:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked, this);
}

function incrementAsync() {
  return _regenerator2.default.wrap(function incrementAsync$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return (0, _reduxSaga.delay)(500);

        case 2:
          _context2.next = 4;
          return (0, _effects.put)({ type: 'INCREMENT2' });

        case 4:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked2, this);
}

function watchIncrementAsync() {
  return _regenerator2.default.wrap(function watchIncrementAsync$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return (0, _effects.takeEvery)('INCREMENT_ASYNC', incrementAsync);

        case 2:
        case 'end':
          return _context3.stop();
      }
    }
  }, _marked3, this);
}

function fetchSomethingSaga(action) {
  var apiCallToFetchPost, r;
  return _regenerator2.default.wrap(function fetchSomethingSaga$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          apiCallToFetchPost = function apiCallToFetchPost(id) {

            //throw new Error("my error");
            //return Promise.resolve({test: id})
            return fetch('http://demo0439078.mockable.io/').then(function (response) {
              return response.json();
            }).then(function (myJson) {
              //throw new Error('my error')
              return myJson;
            });
          };

          console.log('fetchSomethingSaga', action);

          //w yield put({ type: 'INCREMENT2' })

          // w
          // function* zzz() {
          //   yield put({ type: 'INCREMENT2' })
          // }
          // yield zzz()


          // fetch('http://demo0439078.mockable.io/').then(
          //         (response) => {
          //           return response.json()
          //         }
          //       ).then(
          //         (myJson) => {
          //
          //           console.log('JSON:', myJson)
          //           return myJson
          //         }
          //       )

          // async function apiGet() {
          //
          //   try {
          //     const pr = await Promise.resolve('a')
          //   } catch(error) {
          //     yield put({type: 'INCREMENT2', payload: 'ERROR!!!!'})
          //   }
          //
          // }

          _context4.prev = 2;
          _context4.next = 5;
          return (0, _effects.call)(apiCallToFetchPost, 34);

        case 5:
          r = _context4.sent;
          _context4.next = 8;
          return (0, _effects.put)({ type: 'INCREMENT2', payload: r });

        case 8:
          _context4.next = 15;
          break;

        case 10:
          _context4.prev = 10;
          _context4.t0 = _context4['catch'](2);

          console.log('catched::', _context4.t0);
          _context4.next = 15;
          return (0, _effects.put)({ type: 'INCREMENT2', payload: _context4.t0 });

        case 15:
        case 'end':
          return _context4.stop();
      }
    }
  }, _marked4, this, [[2, 10]]);
}

function fetchSomething() {
  return _regenerator2.default.wrap(function fetchSomething$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return (0, _effects.takeEvery)('FETCH', fetchSomethingSaga);

        case 2:
        case 'end':
          return _context5.stop();
      }
    }
  }, _marked5, this);
}

function fetchNews(action) {
  var news;
  return _regenerator2.default.wrap(function fetchNews$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return (0, _effects.call)(nuzzel.searchNuzzelNews, action.payload);

        case 2:
          news = _context6.sent;
          _context6.next = 5;
          return (0, _effects.put)({ type: 'NEWS FETCHED', news: news });

        case 5:
        case 'end':
          return _context6.stop();
      }
    }
  }, _marked6, this);
}

function searchNews() {
  return _regenerator2.default.wrap(function searchNews$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return (0, _effects.takeLatest)('SEARCH NEWS', fetchNews);

        case 2:
        case 'end':
          return _context7.stop();
      }
    }
  }, _marked7, this);
}

function fetchAllNews(action) {
  var r;
  return _regenerator2.default.wrap(function fetchAllNews$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.prev = 0;

          console.log('fetchAllNews', action.payload);
          _context8.next = 4;
          return (0, _effects.call)(_firebase.functions.httpsCallable('searchAllNews'), action.payload);

        case 4:
          r = _context8.sent;
          _context8.next = 7;
          return (0, _effects.put)({ type: 'ALL_NEWS_FETCH_OK', payload: r });

        case 7:
          _context8.next = 13;
          break;

        case 9:
          _context8.prev = 9;
          _context8.t0 = _context8['catch'](0);
          _context8.next = 13;
          return (0, _effects.put)({ type: 'ALL_NEWS_FETCH_ERROR', payload: _context8.t0 });

        case 13:
        case 'end':
          return _context8.stop();
      }
    }
  }, _marked8, this, [[0, 9]]);
}

function searchAllNews() {
  return _regenerator2.default.wrap(function searchAllNews$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          _context9.next = 2;
          return (0, _effects.takeLatest)('SEARCH_ALL_NEWS', fetchAllNews);

        case 2:
        case 'end':
          return _context9.stop();
      }
    }
  }, _marked9, this);
}

function logInUserWithEmailAndPass(_ref) {
  var _ref$payload = _ref.payload,
      email = _ref$payload.email,
      password = _ref$payload.password;
  var user;
  return _regenerator2.default.wrap(function logInUserWithEmailAndPass$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          _context10.prev = 0;

          console.log('USER LOGIN DATA  - ', email, password);
          _context10.next = 4;
          return (0, _effects.call)(_firebase.auth.signInWithEmailAndPassword.bind(_firebase.auth), email, password);

        case 4:
          user = _context10.sent;


          window.location = _static2.default.basePath + '/news';

          _context10.next = 8;
          return (0, _effects.put)({ type: 'USER_LOGIN_SUCCESS', user: user });

        case 8:
          _context10.next = 15;
          break;

        case 10:
          _context10.prev = 10;
          _context10.t0 = _context10['catch'](0);
          _context10.next = 14;
          return (0, _effects.put)({ type: 'USER_LOGIN_FAIL', error: _context10.t0 });

        case 14:
          alert('Ooops! User login failed');

        case 15:
        case 'end':
          return _context10.stop();
      }
    }
  }, _marked10, this, [[0, 10]]);
}

function emailPassLogin() {
  return _regenerator2.default.wrap(function emailPassLogin$(_context11) {
    while (1) {
      switch (_context11.prev = _context11.next) {
        case 0:
          _context11.next = 2;
          return (0, _effects.takeLatest)('EMAIL_PASS_LOGIN', logInUserWithEmailAndPass);

        case 2:
        case 'end':
          return _context11.stop();
      }
    }
  }, _marked11, this);
}

function logInUserWithFacebook() {
  var _ref2, user;

  return _regenerator2.default.wrap(function logInUserWithFacebook$(_context12) {
    while (1) {
      switch (_context12.prev = _context12.next) {
        case 0:
          _context12.prev = 0;
          _context12.next = 3;
          return (0, _effects.call)(_firebase.auth.signInWithPopup.bind(_firebase.auth), _firebase.providers.facebook);

        case 3:
          _ref2 = _context12.sent;
          user = _ref2.user;
          _context12.next = 7;
          return (0, _effects.put)({ type: 'USER_LOGIN_SUCCESS', user: user });

        case 7:
          _context12.next = 13;
          break;

        case 9:
          _context12.prev = 9;
          _context12.t0 = _context12['catch'](0);
          _context12.next = 13;
          return (0, _effects.put)({ type: 'USER_LOGIN_FAIL', error: _context12.t0 });

        case 13:
        case 'end':
          return _context12.stop();
      }
    }
  }, _marked12, this, [[0, 9]]);
}

function facebookLogin() {
  return _regenerator2.default.wrap(function facebookLogin$(_context13) {
    while (1) {
      switch (_context13.prev = _context13.next) {
        case 0:
          _context13.next = 2;
          return (0, _effects.takeLatest)('FACEBOOK_LOGIN', logInUserWithFacebook);

        case 2:
        case 'end':
          return _context13.stop();
      }
    }
  }, _marked13, this);
}

function logInUserWithTwitter() {
  var _ref3, user;

  return _regenerator2.default.wrap(function logInUserWithTwitter$(_context14) {
    while (1) {
      switch (_context14.prev = _context14.next) {
        case 0:
          _context14.prev = 0;
          _context14.next = 3;
          return (0, _effects.call)(_firebase.auth.signInWithPopup.bind(_firebase.auth), _firebase.providers.twitter);

        case 3:
          _ref3 = _context14.sent;
          user = _ref3.user;
          _context14.next = 7;
          return (0, _effects.put)({ type: 'USER_LOGIN_SUCCESS', user: user });

        case 7:
          _context14.next = 13;
          break;

        case 9:
          _context14.prev = 9;
          _context14.t0 = _context14['catch'](0);
          _context14.next = 13;
          return (0, _effects.put)({ type: 'USER_LOGIN_FAIL', error: _context14.t0 });

        case 13:
        case 'end':
          return _context14.stop();
      }
    }
  }, _marked14, this, [[0, 9]]);
}

function twitterLogin() {
  return _regenerator2.default.wrap(function twitterLogin$(_context15) {
    while (1) {
      switch (_context15.prev = _context15.next) {
        case 0:
          _context15.next = 2;
          return (0, _effects.takeLatest)('TWITTER_LOGIN', logInUserWithTwitter);

        case 2:
        case 'end':
          return _context15.stop();
      }
    }
  }, _marked15, this);
}

function signUpUserWithEmailAndPass(_ref4) {
  var _ref4$payload = _ref4.payload,
      email = _ref4$payload.email,
      password = _ref4$payload.password,
      first = _ref4$payload.first,
      last = _ref4$payload.last,
      phone = _ref4$payload.phone,
      emailSubscription = _ref4$payload.emailSubscription;

  var _ref5, user, refUser, dummyUserData, profile;

  return _regenerator2.default.wrap(function signUpUserWithEmailAndPass$(_context16) {
    while (1) {
      switch (_context16.prev = _context16.next) {
        case 0:
          _context16.prev = 0;
          _context16.next = 3;
          return (0, _effects.call)(_firebase.auth.createUserWithEmailAndPassword.bind(_firebase.auth), email, password);

        case 3:
          _ref5 = _context16.sent;
          user = _ref5.user;
          refUser = users.doc(user.uid);

          // NOTE: dummy data for creating user with some information

          dummyUserData = {
            profile: {
              description: 'I am Iron Man. The suit and I are one. To turn over the Iron Man suit would be to turn over myself, which is tantamount to indentured servitude or prostitution, depending on what state you\'re in. You can\'t have it.',
              title: 'Genius, Billionaire, Playboy, Philanthropist',
              address: {
                state: 'New York',
                country: 'USA'
              },
              hourlyRate: 10000,
              jobs: 2,
              totalEarned: 1234567890,
              totalWorked: 9999,
              followers: 123456,
              following: 7
            }
          };

          // FIXME: remove object assign, if there is no need in dummy data

          profile = Object.assign({
            name: { firstName: first, lastName: last },
            phone: phone, email: email, emailSubscription: emailSubscription
          }, dummyUserData);
          _context16.next = 10;
          return (0, _effects.call)(user.updateProfile.bind(user), { displayName: first + ' ' + last });

        case 10:
          _context16.next = 12;
          return (0, _effects.call)(refUser.set.bind(refUser), profile, { merge: true });

        case 12:
          _context16.next = 14;
          return (0, _effects.put)({ type: 'USER_SIGNUP_SUCCESS', user: Object.assign(user, { profile: profile }) });

        case 14:
          _context16.next = 16;
          return (0, _effects.call)(logInUserWithEmailAndPass, { payload: { email: email, password: password } });

        case 16:
          _context16.next = 22;
          break;

        case 18:
          _context16.prev = 18;
          _context16.t0 = _context16['catch'](0);
          _context16.next = 22;
          return (0, _effects.put)({ type: 'USER_SIGNUP_FAIL', error: _context16.t0 });

        case 22:
        case 'end':
          return _context16.stop();
      }
    }
  }, _marked16, this, [[0, 18]]);
}

function emailPassSignup() {
  return _regenerator2.default.wrap(function emailPassSignup$(_context17) {
    while (1) {
      switch (_context17.prev = _context17.next) {
        case 0:
          _context17.next = 2;
          return (0, _effects.takeLatest)('EMAIL_PASS_SIGNUP', signUpUserWithEmailAndPass);

        case 2:
        case 'end':
          return _context17.stop();
      }
    }
  }, _marked17, this);
}

var onAuthStateChanged = function onAuthStateChanged() {
  return console.log(1) || new Promise(function (resolve) {
    return _firebase.auth.onAuthStateChanged(resolve);
  });
};

function getLoggedUser() {
  var _ref6, isLoggedIn, user, refUser, profile;

  return _regenerator2.default.wrap(function getLoggedUser$(_context18) {
    while (1) {
      switch (_context18.prev = _context18.next) {
        case 0:
          _context18.next = 2;
          return (0, _effects.select)();

        case 2:
          _ref6 = _context18.sent;
          isLoggedIn = _ref6.user.isLoggedIn;

          if (!isLoggedIn) {
            _context18.next = 6;
            break;
          }

          return _context18.abrupt('return');

        case 6:
          _context18.next = 8;
          return (0, _effects.call)(onAuthStateChanged);

        case 8:
          user = _context18.sent;

          if (!user) {
            _context18.next = 17;
            break;
          }

          refUser = users.doc(user.uid);
          _context18.next = 13;
          return (0, _effects.call)(refUser.get.bind(refUser));

        case 13:
          profile = _context18.sent;
          _context18.next = 16;
          return (0, _effects.put)({ type: 'USER_LOGIN_SUCCESS', user: Object.assign(user, { profile: profile.data() }) });

        case 16:
          return _context18.abrupt('return', _context18.sent);

        case 17:
          _context18.next = 19;
          return (0, _effects.put)({ type: 'USER_LOGGED_OUT' });

        case 19:
          return _context18.abrupt('return', _context18.sent);

        case 20:
        case 'end':
          return _context18.stop();
      }
    }
  }, _marked18, this);
}

function handleLogOut() {
  return _regenerator2.default.wrap(function handleLogOut$(_context19) {
    while (1) {
      switch (_context19.prev = _context19.next) {
        case 0:
          _context19.next = 2;
          return (0, _effects.call)(_firebase.auth.signOut.bind(_firebase.auth));

        case 2:
          _context19.next = 4;
          return (0, _effects.put)({ type: 'USER_LOGGED_OUT' });

        case 4:
        case 'end':
          return _context19.stop();
      }
    }
  }, _marked19, this);
}

function logOut() {
  return _regenerator2.default.wrap(function logOut$(_context20) {
    while (1) {
      switch (_context20.prev = _context20.next) {
        case 0:
          _context20.next = 2;
          return (0, _effects.takeLatest)('LOG_OUT', handleLogOut);

        case 2:
        case 'end':
          return _context20.stop();
      }
    }
  }, _marked20, this);
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
function rootSaga() {
  return _regenerator2.default.wrap(function rootSaga$(_context21) {
    while (1) {
      switch (_context21.prev = _context21.next) {
        case 0:
          _context21.next = 2;
          return (0, _effects.all)([helloSaga(), watchIncrementAsync(), fetchSomething(), searchNews(), searchAllNews(), emailPassLogin(), facebookLogin(), twitterLogin(), emailPassSignup(), getLoggedUser(), logOut()]);

        case 2:
        case 'end':
          return _context21.stop();
      }
    }
  }, _marked21, this);
}

/***/ }),
/* 75 */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.searchNuzzelNews = undefined;

var _firebase = __webpack_require__(11);

var newsApi = _firebase.functions.httpsCallable('searchNuzzelNews');

var searchNuzzelNews = exports.searchNuzzelNews = function searchNuzzelNews(args) {
  return newsApi(args).then(function (response) {
    return Object.assign(response, args);
  });
};

/***/ }),
/* 77 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function localStoragePresent() {
  return typeof localStorage !== 'undefined';
}

function getItem(name) {
  if (!localStoragePresent()) {
    return;
  }

  return localStorage.getItem(name);
}

function setItem(name, value) {
  if (!localStoragePresent()) {
    return;
  }

  localStorage.setItem(name, value);
}

function setObject(name, obj) {
  setItem(name, JSON.stringify(obj));
}

function getObject(name) {
  try {
    return JSON.parse(getItem(name));
  } catch (e) {
    //console.log(e)
    return null;
  }
}

exports.default = { getItem: getItem, setItem: setItem, setObject: setObject, getObject: getObject

  //
  // const isBrowserIsCool = window.localStorage && window.JSON
  // const stringify = JSON.stringify.bind(JSON)
  // const parse = JSON.parse.bind(JSON)
  //
  // const setObject = (key, data) => isBrowserIsCool && key &&
  //   localStorage.setItem(key, stringify(data))
  //
  // const getObject = key => isBrowserIsCool && key &&
  //   parse(localStorage.getItem(key))
  //
  // const removeObject = key => isBrowserIsCool && key &&
  //   localStorage.removeItem(key)
  //
  // export default { setObject, getObject, removeObject }

};

/***/ }),
/* 79 */
/***/ (function(module, exports) {

module.exports = require("bootstrap/dist/css/bootstrap.min.css");

/***/ }),
/* 80 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
});
//# sourceMappingURL=static.1e8046a8.js.map