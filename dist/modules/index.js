'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ExecutionEnvironment = require('fbjs/lib/ExecutionEnvironment');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Flickity = void 0;

if (_ExecutionEnvironment.canUseDOM) {
  Flickity = require('flickity');

  Flickity.prototype._createResizeClass = function () {
    this.element.classList.add('flickity-resize');
  };

  Flickity.createMethods.push('_createResizeClass');

  var resize = Flickity.prototype.resize;
  Flickity.prototype.resize = function () {
    this.element.classList.remove('flickity-resize');
    resize.call(this);
    this.element.classList.add('flickity-resize');
  };
}

var FlickityComponent = function (_Component) {
  _inherits(FlickityComponent, _Component);

  function FlickityComponent(props) {
    _classCallCheck(this, FlickityComponent);

    var _this = _possibleConstructorReturn(this, (FlickityComponent.__proto__ || Object.getPrototypeOf(FlickityComponent)).call(this, props));

    _this.state = {
      selectedIndex: 0
    };

    _this.flkty = null;
    _this.carousel = null;
    _this.updateSelected = _this.updateSelected.bind(_this);
    return _this;
  }

  _createClass(FlickityComponent, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var _props = this.props,
          options = _props.options,
          flickityRef = _props.flickityRef;

      var carousel = this.carousel;

      if (_ExecutionEnvironment.canUseDOM) {
        this.flkty = new Flickity(carousel, options);
        this.flkty.on('cellSelect', function () {
          return _this2.updateSelected();
        });
        this.flkty.on('dragStart', function (event, pointer) {
          return _this2.updateDragStart(event, pointer);
        });
        this.flkty.on('dragMove', function (event, pointer, moveVector) {
          return _this2.updateDragMove(event, pointer, moveVector);
        });
        this.flkty.on('dragEnd', function (event, pointer) {
          return _this2.updateDragEnd(event, pointer);
        });
        this.flkty.on('scroll', function (progress) {
          return _this2.updateScroll(progress);
        });
        this.flkty.on('settle', function () {
          return _this2.updateSettle();
        });
        this.flkty.on('select', function () {
          return _this2.updateSelect();
        });
        this.flkty.on('staticClick', function (event, pointer, cellElement, cellIndex) {
          return _this2.updateStaticClick(event, pointer, cellElement, cellIndex);
        });
        this.build();

        if (flickityRef) {
          flickityRef(this.flkty);
        }
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var reloadOnUpdate = this.props.reloadOnUpdate;


      if (reloadOnUpdate) {
        this.flkty.reloadCells();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (_ExecutionEnvironment.canUseDOM && this.flkty) {
        this.flkty.off('cellSelect', this.updateSelected);
        this.flkty.off('cellSelect', this.updateSelected);
        this.flkty.off('dragStart', this.updateDragStart);
        this.flkty.off('dragMove', this.updateDragMove);
        this.flkty.off('dragEnd', this.updateDragEnd);
        this.flkty.off('scroll', this.updateScroll);
        this.flkty.off('settle', this.updateSettle);
        this.flkty.off('select', this.updateSelect);
        this.flkty.off('staticClick', this.updateStaticClick);
        this.flkty.destroy();
      }
    }
  }, {
    key: 'build',
    value: function build() {
      var onBuild = this.props.onBuild;


      if (onBuild) {
        onBuild(this.flkty);
      }
    }
  }, {
    key: 'updateSelected',
    value: function updateSelected() {
      var _props2 = this.props,
          onSwipe = _props2.onSwipe,
          onCellSelected = _props2.onCellSelected;

      var index = this.flkty.selectedIndex;

      this.setState({
        selectedIndex: index
      });

      if (onSwipe) {
        onSwipe(index);
      }

      if (onCellSelected) {
        onCellSelected({ flkty: this.flkty, index: this.flkty.selectedIndex });
      }
    }
  }, {
    key: 'updateStaticClick',
    value: function updateStaticClick(event, pointer, cellElement, cellIndex) {
      var onStaticClick = this.props.onStaticClick;


      if (onStaticClick) {
        onStaticClick({ flkty: this.flkty, event: event, pointer: pointer, cellElement: cellElement, cellIndex: cellIndex });
      }
    }
  }, {
    key: 'updateDragStart',
    value: function updateDragStart(event, pointer) {
      var onDragStart = this.props.onDragStart;


      if (onDragStart) {
        onDragStart({ flkty: this.flkty, event: event, pointer: pointer });
      }
    }
  }, {
    key: 'updateDragMove',
    value: function updateDragMove(event, pointer, moveVector) {
      var onDragMove = this.props.onDragMove;


      if (onDragMove) {
        onDragMove({ flkty: this.flkty, event: event, pointer: pointer, moveVector: moveVector });
      }
    }
  }, {
    key: 'updateDragEnd',
    value: function updateDragEnd(event, pointer) {
      var onDragEnd = this.props.onDragEnd;


      if (onDragEnd) {
        onDragEnd({ flkty: this.flkty, event: event, pointer: pointer });
      }
    }
  }, {
    key: 'updateScroll',
    value: function updateScroll(progress) {
      var onScroll = this.props.onScroll;


      if (onScroll) {
        onScroll({ flkty: this.flkty, progress: progress });
      }
    }
  }, {
    key: 'updateSettle',
    value: function updateSettle() {
      var onSettle = this.props.onSettle;


      if (onSettle) {
        onSettle({ flkty: this.flkty, index: this.flkty.selectedIndex });
      }
    }
  }, {
    key: 'updateSelect',
    value: function updateSelect() {
      var onSelect = this.props.onSelect;


      if (onSelect) {
        onSelect({ flkty: this.flkty, index: this.flkty.selectedIndex });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props3 = this.props,
          elementType = _props3.elementType,
          className = _props3.className,
          children = _props3.children;


      return _react2.default.createElement(elementType, {
        className: className,
        ref: function ref(c) {
          _this3.carousel = c;
        }
      }, children);
    }
  }]);

  return FlickityComponent;
}(_react.Component);

FlickityComponent.propTypes = {
  reloadOnUpdate: _propTypes2.default.bool,
  options: _propTypes2.default.object,
  className: _propTypes2.default.string,
  elementType: _propTypes2.default.string,
  children: _propTypes2.default.array,
  onSwipe: _propTypes2.default.func,
  onStaticClick: _propTypes2.default.func,
  onDragStart: _propTypes2.default.func,
  onDragMove: _propTypes2.default.func,
  onDragEnd: _propTypes2.default.func,
  onScroll: _propTypes2.default.func,
  onSettle: _propTypes2.default.func,
  onSelect: _propTypes2.default.func,
  onCellSelected: _propTypes2.default.func,
  onBuild: _propTypes2.default.func,
  flickityRef: _propTypes2.default.func
};

FlickityComponent.defaultProps = {
  reloadOnUpdate: false,
  options: {},
  className: '',
  elementType: 'div',
  children: null,
  onSwipe: null,
  onStaticClick: null,
  onDragStart: null,
  onDragMove: null,
  onDragEnd: null,
  onScroll: null,
  onSettle: null,
  onSelect: null,
  onBuild: null,
  onCellSelected: null,
  flickityRef: null
};

exports.default = FlickityComponent;