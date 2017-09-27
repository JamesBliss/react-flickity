'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _flickity = require('flickity');

var _flickity2 = _interopRequireDefault(_flickity);

var _imagesloaded = require('imagesloaded');

var _imagesloaded2 = _interopRequireDefault(_imagesloaded);

var _fbjsLibExecutionEnvironment = require('fbjs/lib/ExecutionEnvironment');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var FlickityComponent = (function (_Component) {
  _inherits(FlickityComponent, _Component);

  function FlickityComponent(props) {
    _classCallCheck(this, FlickityComponent);

    _Component.call(this, props);

    this.state = {
      selectedIndex: 0
    };

    this.flkty = null;
    this.carousel = null;
    this.updateSelected = this.updateSelected.bind(this);
    this.imagesLoaded = this.imagesLoaded.bind(this);
  }

  FlickityComponent.prototype.updateSelected = function updateSelected() {
    var onSwipe = this.props.onSwipe;

    var index = this.flkty.selectedIndex;

    this.setState({
      selectedIndex: index
    });
    if (onSwipe) {
      onSwipe(index);
    }
  };

  FlickityComponent.prototype.componentDidUpdate = function componentDidUpdate() {
    var _props = this.props;
    var updateFlkty = _props.updateFlkty;
    var reloadOnUpdate = _props.reloadOnUpdate;

    if (reloadOnUpdate) {
      this.flkty.reloadCells();
    }

    if (updateFlkty) {
      updateFlkty(this.flkty);
    }
  };

  FlickityComponent.prototype.componentWillUnmount = function componentWillUnmount() {
    if (this.flkty) {
      this.flkty.off('cellSelect', this.updateSelected);
      this.flkty.destroy();
    }
  };

  FlickityComponent.prototype.imagesLoaded = function imagesLoaded() {
    var _this = this;

    var disableImagesLoaded = this.props.disableImagesLoaded;

    if (!disableImagesLoaded && _fbjsLibExecutionEnvironment.canUseDOM) {
      _imagesloaded2['default'](this.carousel, function (instance) {
        _this.flkty.reloadCells();
      });
    }
  };

  FlickityComponent.prototype.componentDidMount = function componentDidMount() {
    var options = this.props.options;

    var carousel = this.carousel;

    if (_fbjsLibExecutionEnvironment.canUseDOM) {
      this.flkty = new _flickity2['default'](carousel, options);
      this.flkty.on('cellSelect', this.updateSelected);
      this.imagesLoaded();
    }
  };

  FlickityComponent.prototype.render = function render() {
    var _this2 = this;

    var _props2 = this.props;
    var elementType = _props2.elementType;
    var className = _props2.className;
    var children = _props2.children;

    return _react2['default'].createElement(elementType, {
      className: className,
      ref: function ref(c) {
        _this2.carousel = c;
      }
    }, children);
  };

  return FlickityComponent;
})(_react.Component);

FlickityComponent.propTypes = {
  disableImagesLoaded: _propTypes2['default'].bool,
  reloadOnUpdate: _propTypes2['default'].bool,
  options: _propTypes2['default'].object,
  className: _propTypes2['default'].string,
  elementType: _propTypes2['default'].string,
  children: _propTypes2['default'].array,
  onSwipe: _propTypes2['default'].func,
  updateFlkty: _propTypes2['default'].func
};

FlickityComponent.defaultProps = {
  disableImagesLoaded: false,
  reloadOnUpdate: false,
  options: {},
  className: '',
  elementType: 'div',
  onSwipe: null,
  children: null,
  updateFlkty: null
};

exports['default'] = FlickityComponent;
module.exports = exports['default'];