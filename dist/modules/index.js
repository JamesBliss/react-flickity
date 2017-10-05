import React, { Component } from 'react';
import Flickity from 'flickity';
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
  }

  componentDidMount() {
    const { options } = this.props;
    const carousel = this.carousel;

    if (canUseDOM) {
      this.flkty = new Flickity(carousel, options);
      this.flkty.on('cellSelect', () => this.updateSelected());
      this.flkty.on('dragStart', (event, pointer) => this.updateDragStart(event, pointer));
      this.flkty.on('dragMove', (event, pointer, moveVector) => this.updateDragMove(event, pointer, moveVector));
      this.flkty.on('dragEnd', (event, pointer) => this.updateDragEnd(event, pointer));
      this.flkty.on('scroll', progress => this.updateScroll(progress));
      this.flkty.on('settle', () => this.updateSettle());
      this.flkty.on('select', () => this.updateSelect());
      this.flkty.on('staticClick', (event, pointer, cellElement, cellIndex) => this.updateStaticClick(event, pointer, cellElement, cellIndex));
      this.build();
    }
  }

  componentDidUpdate() {
    const { reloadOnUpdate } = this.props;

    if (reloadOnUpdate) {
      this.flkty.reloadCells();
    }
  }

  componentWillUnmount() {
    if (this.flkty) {
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

  build() {
    const { onBuild } = this.props;

    if (onBuild) {
      onBuild(this.flkty);
    }
  }

  updateSelected() {
    const { onSwipe, onCellSelected } = this.props;
    const index = this.flkty.selectedIndex;

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

  updateStaticClick(event, pointer, cellElement, cellIndex) {
    const { onStaticClick } = this.props;

    if (onStaticClick) {
      onStaticClick({ flkty: this.flkty, event, pointer, cellElement, cellIndex });
    }
  }

  updateDragStart(event, pointer) {
    const { onDragStart } = this.props;

    if (onDragStart) {
      onDragStart({ flkty: this.flkty, event, pointer });
    }
  }

  updateDragMove(event, pointer, moveVector) {
    const { onDragMove } = this.props;

    if (onDragMove) {
      onDragMove({ flkty: this.flkty, event, pointer, moveVector });
    }
  }

  updateDragEnd(event, pointer) {
    const { onDragEnd } = this.props;

    if (onDragEnd) {
      onDragEnd({ flkty: this.flkty, event, pointer });
    }
  }

  updateScroll(progress) {
    const { onScroll } = this.props;

    if (onScroll) {
      onScroll({ flkty: this.flkty, progress });
    }
  }

  updateSettle() {
    const { onSettle } = this.props;

    if (onSettle) {
      onSettle({ flkty: this.flkty, index: this.flkty.selectedIndex });
    }
  }

  updateSelect() {
    const { onSelect } = this.props;

    if (onSelect) {
      onSelect({ flkty: this.flkty, index: this.flkty.selectedIndex });
    }
  }

  render() {
    const { elementType, className, children } = this.props;

    return React.createElement(elementType, {
      className,
      ref: c => {
        this.carousel = c;
      }
    }, children);
  }
}

FlickityComponent.propTypes = {
  reloadOnUpdate: PropTypes.bool,
  options: PropTypes.object,
  className: PropTypes.string,
  elementType: PropTypes.string,
  children: PropTypes.array,
  onSwipe: PropTypes.func,
  onStaticClick: PropTypes.func,
  onDragStart: PropTypes.func,
  onDragMove: PropTypes.func,
  onDragEnd: PropTypes.func,
  onScroll: PropTypes.func,
  onSettle: PropTypes.func,
  onSelect: PropTypes.func,
  onCellSelected: PropTypes.func,
  onBuild: PropTypes.func
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
  onCellSelected: null
};

export default FlickityComponent;