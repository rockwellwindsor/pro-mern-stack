webpackJsonp([0],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(1);
	
	var _react = __webpack_require__(327);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(363);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _reactRouter = __webpack_require__(510);
	
	var _IssueList = __webpack_require__(573);
	
	var _IssueList2 = _interopRequireDefault(_IssueList);
	
	var _IssueEdit = __webpack_require__(577);
	
	var _IssueEdit2 = _interopRequireDefault(_IssueEdit);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var contentNode = document.getElementById('contents');
	var NoMatch = function NoMatch() {
	  return _react2.default.createElement(
	    'p',
	    null,
	    'Page Not Found'
	  );
	};
	
	var App = function App(props) {
	  return _react2.default.createElement(
	    'div',
	    null,
	    _react2.default.createElement(
	      'div',
	      { className: 'header' },
	      _react2.default.createElement(
	        'h1',
	        null,
	        'Issue Tracker'
	      )
	    ),
	    _react2.default.createElement(
	      'div',
	      { className: 'contents' },
	      props.children
	    ),
	    _react2.default.createElement(
	      'div',
	      { className: 'footer' },
	      'Full source code available at this ',
	      _react2.default.createElement(
	        'a',
	        { href: 'https://github.com/vasansr/pro-mern-stack' },
	        'Github Repository'
	      )
	    )
	  );
	};
	
	App.propTypes = {
	  children: _react2.default.PropTypes.object.isRequired
	};
	
	var RoutedApp = function RoutedApp() {
	  return _react2.default.createElement(
	    _reactRouter.Router,
	    { history: _reactRouter.browserHistory },
	    _react2.default.createElement(_reactRouter.Redirect, { from: '/', to: '/issues/' }),
	    _react2.default.createElement(
	      _reactRouter.Route,
	      { path: '/', component: App },
	      _react2.default.createElement(_reactRouter.Route, { path: '/issues', component: (0, _reactRouter.withRouter)(_IssueList2.default) }),
	      _react2.default.createElement(_reactRouter.Route, { path: '/issues/:id', component: _IssueEdit2.default }),
	      _react2.default.createElement(_reactRouter.Route, { path: '*', component: NoMatch })
	    )
	  );
	};
	
	_reactDom2.default.render(_react2.default.createElement(RoutedApp, null), contentNode);
	
	if (false) {
	  module.hot.accept();
	}

/***/ }),

/***/ 573:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(327);
	
	var _react2 = _interopRequireDefault(_react);
	
	__webpack_require__(574);
	
	var _reactRouter = __webpack_require__(510);
	
	var _IssueAdd = __webpack_require__(575);
	
	var _IssueAdd2 = _interopRequireDefault(_IssueAdd);
	
	var _IssueFilter = __webpack_require__(576);
	
	var _IssueFilter2 = _interopRequireDefault(_IssueFilter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var IssueRow = function IssueRow(props) {
	  return _react2.default.createElement(
	    'tr',
	    null,
	    _react2.default.createElement(
	      'td',
	      null,
	      _react2.default.createElement(
	        _reactRouter.Link,
	        { to: '/api/issues/' + props.issue._id + '/edit' },
	        props.issue._id.substr(-4)
	      )
	    ),
	    _react2.default.createElement(
	      'td',
	      null,
	      props.issue.status
	    ),
	    _react2.default.createElement(
	      'td',
	      null,
	      props.issue.owner
	    ),
	    _react2.default.createElement(
	      'td',
	      null,
	      props.issue.created.toDateString()
	    ),
	    _react2.default.createElement(
	      'td',
	      null,
	      props.issue.effort
	    ),
	    _react2.default.createElement(
	      'td',
	      null,
	      props.issue.completionDate ? props.issue.completionDate.toDateString() : ''
	    ),
	    _react2.default.createElement(
	      'td',
	      null,
	      props.issue.title
	    )
	  );
	};
	
	IssueRow.propTypes = {
	  issue: _react2.default.PropTypes.object.isRequired
	};
	
	function IssueTable(props) {
	  var issueRows = props.issues.map(function (issue) {
	    return _react2.default.createElement(IssueRow, { key: issue._id, issue: issue });
	  });
	  return _react2.default.createElement(
	    'table',
	    { className: 'bordered-table table' },
	    _react2.default.createElement(
	      'thead',
	      null,
	      _react2.default.createElement(
	        'tr',
	        null,
	        _react2.default.createElement(
	          'th',
	          null,
	          'Id'
	        ),
	        _react2.default.createElement(
	          'th',
	          null,
	          'Status'
	        ),
	        _react2.default.createElement(
	          'th',
	          null,
	          'Owner'
	        ),
	        _react2.default.createElement(
	          'th',
	          null,
	          'Created'
	        ),
	        _react2.default.createElement(
	          'th',
	          null,
	          'Effort'
	        ),
	        _react2.default.createElement(
	          'th',
	          null,
	          'Completion Date'
	        ),
	        _react2.default.createElement(
	          'th',
	          null,
	          'Title'
	        )
	      )
	    ),
	    _react2.default.createElement(
	      'tbody',
	      null,
	      issueRows
	    )
	  );
	}
	
	IssueTable.propTypes = {
	  issues: _react2.default.PropTypes.array.isRequired
	};
	
	var IssueList = function (_React$Component) {
	  _inherits(IssueList, _React$Component);
	
	  function IssueList() {
	    _classCallCheck(this, IssueList);
	
	    var _this = _possibleConstructorReturn(this, (IssueList.__proto__ || Object.getPrototypeOf(IssueList)).call(this));
	
	    _this.state = { issues: [] };
	
	    _this.createIssue = _this.createIssue.bind(_this);
	    _this.setFilter = _this.setFilter.bind(_this);
	    return _this;
	  }
	
	  _createClass(IssueList, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.loadData();
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(prevProps) {
	      var oldQuery = prevProps.location.query;
	      var newQuery = this.props.location.query;
	      if (oldQuery.status === newQuery.status && oldQuery.effort_gte === newQuery.effort_gte && oldQuery.effort_lte === newQuery.effort_lte) {
	        return;
	      }
	      this.loadData();
	    }
	  }, {
	    key: 'setFilter',
	    value: function setFilter(query) {
	      this.props.router.push({ pathname: this.props.location.pathname, query: query });
	    }
	  }, {
	    key: 'loadData',
	    value: function loadData() {
	      var _this2 = this;
	
	      fetch('/api/issues' + this.props.location.search).then(function (response) {
	        if (response.ok) {
	          response.json().then(function (data) {
	            data.records.forEach(function (issue) {
	              issue.created = new Date(issue.created);
	              if (issue.completionDate) {
	                issue.completionDate = new Date(issue.completionDate);
	              }
	            });
	            _this2.setState({ issues: data.records });
	          });
	        } else {
	          response.json().then(function (error) {
	            alert('Failed to fetch issues ' + error.message);
	          });
	        }
	      }).catch(function (err) {
	        alert('Error in fetching data from server: ' + err);
	      });
	    }
	  }, {
	    key: 'createIssue',
	    value: function createIssue(newIssue) {
	      var _this3 = this;
	
	      fetch('/api/issues', {
	        method: 'POST',
	        headers: { 'Content-Type': 'application/json' },
	        body: JSON.stringify(newIssue)
	      }).then(function (response) {
	        if (response.ok) {
	          response.json().then(function (updatedIssue) {
	            updatedIssue.created = new Date(updatedIssue.created);
	            if (updatedIssue.completionDate) {
	              updatedIssue.completionDate = new Date(updatedIssue.completionDate);
	            }
	            var newIssues = _this3.state.issues.concat(updatedIssue);
	            _this3.setState({ issues: newIssues });
	          });
	        } else {
	          response.json().then(function (error) {
	            alert('Failed to add issue: ' + error.message);
	          });
	        }
	      }).catch(function (err) {
	        alert('Error in sending data to server: ' + err.message);
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(_IssueFilter2.default, { setFilter: this.setFilter, initFilter: this.props.location.query }),
	        _react2.default.createElement('hr', null),
	        _react2.default.createElement(IssueTable, { issues: this.state.issues }),
	        _react2.default.createElement('hr', null),
	        _react2.default.createElement(_IssueAdd2.default, { createIssue: this.createIssue })
	      );
	    }
	  }]);
	
	  return IssueList;
	}(_react2.default.Component);
	
	exports.default = IssueList;
	
	
	IssueList.propTypes = {
	  location: _react2.default.PropTypes.object.isRequired,
	  router: _react2.default.PropTypes.object
	};

/***/ }),

/***/ 575:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(327);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var IssueAdd = function (_React$Component) {
	  _inherits(IssueAdd, _React$Component);
	
	  function IssueAdd() {
	    _classCallCheck(this, IssueAdd);
	
	    var _this = _possibleConstructorReturn(this, (IssueAdd.__proto__ || Object.getPrototypeOf(IssueAdd)).call(this));
	
	    _this.handleSubmit = _this.handleSubmit.bind(_this);
	    return _this;
	  }
	
	  _createClass(IssueAdd, [{
	    key: 'handleSubmit',
	    value: function handleSubmit(e) {
	      e.preventDefault();
	      var form = document.forms.issueAdd;
	      this.props.createIssue({
	        owner: form.owner.value,
	        title: form.title.value,
	        status: 'New',
	        created: new Date()
	      });
	      // clear the form for the next input
	      form.owner.value = '';form.title.value = '';
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'form',
	          { name: 'issueAdd', onSubmit: this.handleSubmit },
	          _react2.default.createElement('input', { type: 'text', name: 'owner', placeholder: 'Owner' }),
	          _react2.default.createElement('input', { type: 'text', name: 'title', placeholder: 'Title' }),
	          _react2.default.createElement(
	            'button',
	            null,
	            'Add'
	          )
	        )
	      );
	    }
	  }]);
	
	  return IssueAdd;
	}(_react2.default.Component);
	
	exports.default = IssueAdd;

/***/ }),

/***/ 576:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(327);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var IssueFilter = function (_React$Component) {
	  _inherits(IssueFilter, _React$Component);
	
	  function IssueFilter(props) {
	    _classCallCheck(this, IssueFilter);
	
	    var _this = _possibleConstructorReturn(this, (IssueFilter.__proto__ || Object.getPrototypeOf(IssueFilter)).call(this, props));
	
	    _this.state = {
	      status: props.initFilter.status || '',
	      effort_gte: props.initFilter.effort_gte || '',
	      effort_lte: props.initFilter.effort_lte || '',
	      changed: false
	    };
	    _this.onChangeStatus = _this.onChangeStatus.bind(_this);
	    _this.onChangeEffortGte = _this.onChangeEffortGte.bind(_this);
	    _this.onChangeEffortLte = _this.onChangeEffortLte.bind(_this);
	    _this.applyFilter = _this.applyFilter.bind(_this);
	    _this.resetFilter = _this.resetFilter.bind(_this);
	    _this.clearFilter = _this.clearFilter.bind(_this);
	    return _this;
	  }
	
	  _createClass(IssueFilter, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(newProps) {
	      this.setState({
	        status: newProps.initFilter.status || '',
	        effort_gte: newProps.initFilter.effort_gte || '',
	        effort_lte: newProps.initFilter.effort_lte || '',
	        changed: false
	      });
	    }
	  }, {
	    key: 'onChangeStatus',
	    value: function onChangeStatus(e) {
	      this.setState({ status: e.target.value, changed: true });
	    }
	  }, {
	    key: 'onChangeEffortGte',
	    value: function onChangeEffortGte(e) {
	      var effortString = e.target.value;
	      if (effortString.match(/^\d*$/)) {
	        this.setState({ effort_gte: e.target.value, changed: true });
	      }
	    }
	  }, {
	    key: 'onChangeEffortLte',
	    value: function onChangeEffortLte(e) {
	      var effortString = e.target.value;
	      if (effortString.match(/^\d*$/)) {
	        this.setState({ effort_lte: e.target.value, changed: true });
	      }
	    }
	  }, {
	    key: 'applyFilter',
	    value: function applyFilter() {
	      var newFilter = {};
	      if (this.state.status) newFilter.status = this.state.status;
	      if (this.state.effort_gte) newFilter.effort_gte = this.state.effort_gte;
	      if (this.state.effort_lte) newFilter.effort_lte = this.state.effort_lte;
	      this.props.setFilter(newFilter);
	    }
	  }, {
	    key: 'clearFilter',
	    value: function clearFilter() {
	      this.props.setFilter({});
	    }
	  }, {
	    key: 'resetFilter',
	    value: function resetFilter() {
	      this.setState({
	        status: this.props.initFilter.status || '',
	        effort_gte: this.props.initFilter.effort_gte || '',
	        effort_lte: this.props.initFilter.effort_lte || '',
	        changed: false
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        'Status:',
	        _react2.default.createElement(
	          'select',
	          { className: 'custom-select', value: this.state.status, onChange: this.onChangeStatus },
	          _react2.default.createElement(
	            'option',
	            { value: '', disabled: true },
	            'Select a status'
	          ),
	          _react2.default.createElement(
	            'option',
	            { value: 'New' },
	            'New'
	          ),
	          _react2.default.createElement(
	            'option',
	            { value: 'Open' },
	            'Open'
	          ),
	          _react2.default.createElement(
	            'option',
	            { value: 'Assigned' },
	            'Assigned'
	          ),
	          _react2.default.createElement(
	            'option',
	            { value: 'Fixed' },
	            'Fixed'
	          ),
	          _react2.default.createElement(
	            'option',
	            { value: 'Verified' },
	            'Verified'
	          ),
	          _react2.default.createElement(
	            'option',
	            { value: 'Closed' },
	            'Closed'
	          )
	        ),
	        '\xA0Effort between:',
	        _react2.default.createElement('input', { size: 5, value: this.state.effort_gte, onChange: this.onChangeEffortGte }),
	        '\xA0-\xA0',
	        _react2.default.createElement('input', { size: 5, value: this.state.effort_lte, onChange: this.onChangeEffortLte }),
	        _react2.default.createElement(
	          'button',
	          { className: 'btn btn-success', onClick: this.applyFilter },
	          'Apply'
	        ),
	        _react2.default.createElement(
	          'button',
	          { className: 'btn btn-warning', onClick: this.resetFilter, disabled: !this.state.changed },
	          'Reset'
	        ),
	        _react2.default.createElement(
	          'button',
	          { className: 'btn btn-primary', onClick: this.clearFilter },
	          'Clear filter'
	        )
	      );
	    }
	  }]);
	
	  return IssueFilter;
	}(_react2.default.Component);
	
	exports.default = IssueFilter;
	
	
	IssueFilter.propTypes = {
	  setFilter: _react2.default.PropTypes.func.isRequired,
	  initFilter: _react2.default.PropTypes.object.isRequired
	};

/***/ }),

/***/ 577:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(327);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(510);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var IssueEdit = function (_React$Component) {
	  _inherits(IssueEdit, _React$Component);
	
	  function IssueEdit() {
	    _classCallCheck(this, IssueEdit);
	
	    return _possibleConstructorReturn(this, (IssueEdit.__proto__ || Object.getPrototypeOf(IssueEdit)).apply(this, arguments));
	  }
	
	  _createClass(IssueEdit, [{
	    key: 'render',
	    // eslint-disable-line
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'p',
	          null,
	          'This is a placeholder for editing ',
	          this.props.params.id,
	          '.'
	        ),
	        _react2.default.createElement(
	          _reactRouter.Link,
	          { to: '/issues' },
	          'Back to issue list'
	        )
	      );
	    }
	  }]);
	
	  return IssueEdit;
	}(_react2.default.Component);
	
	exports.default = IssueEdit;
	
	
	IssueEdit.propTypes = {
	  params: _react2.default.PropTypes.object.isRequired
	};

/***/ })

});
//# sourceMappingURL=app.bundle.js.map