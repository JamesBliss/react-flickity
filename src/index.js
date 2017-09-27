import React, { Component } from 'react';
import Flickity from 'flickity';
import imagesloaded from 'imagesloaded';
import { canUseDOM } from 'fbjs/lib/ExecutionEnvironment';
import PropTypes from 'prop-types';

class FlickityComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedIndex: 0
    };

    this.flkty = null;
    this.carousel = null;
    this.updateSelected = this.updateSelected.bind(this);
    this.imagesLoaded = this.imagesLoaded.bind(this);
  }

  updateSelected() {
    const { onSwipe } = this.props;
    const index = this.flkty.selectedIndex;

    this.setState({
      selectedIndex: index
    });
    if (onSwipe) {
      onSwipe(index);
    }
  }

  componentDidUpdate() {
    const { updateFlkty, reloadOnUpdate } = this.props;

    if (reloadOnUpdate) {
      this.flkty.reloadCells();
    }

    if (updateFlkty) {
      updateFlkty(this.flkty);
    }
  }

  componentWillUnmount() {
    if (this.flkty) {
      this.flkty.off('cellSelect', this.updateSelected);
      this.flkty.destroy();
    }
  }

  imagesLoaded() {
    const { disableImagesLoaded } = this.props;

    if (!disableImagesLoaded && canUseDOM) {
      imagesloaded(
        this.carousel,
        (instance) => {
          this.flkty.reloadCells();
        }
      );
    }
  }

  componentDidMount() {
    const { options } = this.props;
    const carousel = this.carousel;

    if (canUseDOM) {
      this.flkty = new Flickity(carousel, options);
      this.flkty.on('cellSelect', this.updateSelected);
      this.imagesLoaded();
    }
  }

  render() {
    const { elementType, className, children } = this.props;

    return React.createElement(
      elementType,
      {
        className,
        ref: c => {
          this.carousel = c;
        }
      },
      children
    );
  }
}

FlickityComponent.propTypes = {
  disableImagesLoaded: PropTypes.bool,
  reloadOnUpdate: PropTypes.bool,
  options: PropTypes.object,
  className: PropTypes.string,
  elementType: PropTypes.string,
  children: PropTypes.array,
  onSwipe: PropTypes.func,
  updateFlkty: PropTypes.func
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

export default FlickityComponent;