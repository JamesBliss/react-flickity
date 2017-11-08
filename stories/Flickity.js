import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

// FEATURED COMPONENT //
import Flickity from '../src';

// Reusable functions and objects for stories
function onStaticClick(object) {
  console.log('onStaticClick => ', object);
}
function onDragStart(object) {
  console.log('onDragStart => ', object);
}
function onDragMove(object) {
  console.log('onDragMove => ', object);
}
function onDragEnd(object) {
  console.log('onDragEnd => ', object);
}
function onScroll(object) {
  console.log('onScroll => ', object);
}
function onSettle(object) {
  console.log('onSettle => ', object);
}
function onSelect(object) {
  console.log('onSelect => ', object);
}
function onCellSelected(object) {
  console.log('onCellSelected => ', object);
}
function onBuild(object) {
  console.log('onBuild => ', object);
}

let flickityInstance = null;

function flickityPrevious() {
  if (flickityInstance) {
    flickityInstance.previous();
  }
}

function flickityNext() {
  if (flickityInstance) {
    flickityInstance.next();
  }
}

function flickitySelect2() {
  if (flickityInstance) {
    flickityInstance.select(1);
  }
}

// Start of story logic
const stories = storiesOf('Flickity', module);

stories.add('Flickity - basic',
  withInfo({ text: 'Basic carousel component' })(() => {
    return (
      <Flickity
        onStaticClick={ onStaticClick }
        onDragStart={ onDragStart }
        onDragMove={ onDragMove }
        onDragEnd={ onDragEnd }
        onScroll={ onScroll }
        onSettle={ onSettle }
        onSelect={ onSelect }
        onCellSelected={ onCellSelected }
        onBuild={ onBuild }
        className={ 'ui-carousel__container' }
        options={ {} }
      >
        <div style={ { overflow: 'hidden', padding: 0, margin: 0, width: '100%' } }><img src='https://source.unsplash.com/1400x420/?city' /></div>
        <div style={ { overflow: 'hidden', padding: 0, margin: 0, width: '100%' } }><img src='https://source.unsplash.com/1400x420/?nature' /></div>
        <div style={ { overflow: 'hidden', padding: 0, margin: 0, width: '100%' } }><img src='https://source.unsplash.com/1400x420/?people' /></div>
        <div style={ { overflow: 'hidden', padding: 0, margin: 0, width: '100%' } }><img src='https://source.unsplash.com/1400x420/?london' /></div>
        <div style={ { overflow: 'hidden', padding: 0, margin: 0, width: '100%' } }><img src='https://source.unsplash.com/1400x420/?forest' /></div>
      </Flickity>
    );
  })
);

stories.add('Flickity - looping',
  withInfo({ text: 'Basic carousel component' })(() => {
    return (
      <Flickity options={ { wrapAround: true } }>
        <div style={ { overflow: 'hidden', padding: 0, margin: 0, width: '100%' } }><img src='https://source.unsplash.com/1400x420/?city' /></div>
        <div style={ { overflow: 'hidden', padding: 0, margin: 0, width: '100%' } }><img src='https://source.unsplash.com/1400x420/?nature' /></div>
        <div style={ { overflow: 'hidden', padding: 0, margin: 0, width: '100%' } }><img src='https://source.unsplash.com/1400x420/?people' /></div>
        <div style={ { overflow: 'hidden', padding: 0, margin: 0, width: '100%' } }><img src='https://source.unsplash.com/1400x420/?london' /></div>
        <div style={ { overflow: 'hidden', padding: 0, margin: 0, width: '100%' } }><img src='https://source.unsplash.com/1400x420/?forest' /></div>
      </Flickity>
    );
  })
);

stories.add('Flickity - multiple in view',
  withInfo({ text: 'Basic carousel component' })(() => {
    return (
      <Flickity options={ { wrapAround: true, initialIndex: 2 } }>
        <div style={ { overflow: 'hidden', padding: 0, margin: 0, width: '50%' } }><img src='https://source.unsplash.com/1400x420/?city' /></div>
        <div style={ { overflow: 'hidden', padding: 0, margin: 0, width: '50%' } }><img src='https://source.unsplash.com/1400x420/?nature' /></div>
        <div style={ { overflow: 'hidden', padding: 0, margin: 0, width: '50%' } }><img src='https://source.unsplash.com/1400x420/?people' /></div>
        <div style={ { overflow: 'hidden', padding: 0, margin: 0, width: '50%' } }><img src='https://source.unsplash.com/1400x420/?london' /></div>
        <div style={ { overflow: 'hidden', padding: 0, margin: 0, width: '50%' } }><img src='https://source.unsplash.com/1400x420/?forest' /></div>
      </Flickity>
    );
  })
);

stories.add('Flickity - Grouping',
  withInfo({ text: 'Basic carousel component' })(() => {
    return (
      <Flickity options={ { groupCells: 2 } }>
        <div style={ { overflow: 'hidden', padding: 0, margin: 0, width: '50%' } }><img src='https://source.unsplash.com/1400x420/?city' /></div>
        <div style={ { overflow: 'hidden', padding: 0, margin: 0, width: '50%' } }><img src='https://source.unsplash.com/1400x420/?nature' /></div>
        <div style={ { overflow: 'hidden', padding: 0, margin: 0, width: '50%' } }><img src='https://source.unsplash.com/1400x420/?people' /></div>
        <div style={ { overflow: 'hidden', padding: 0, margin: 0, width: '50%' } }><img src='https://source.unsplash.com/1400x420/?london' /></div>
        <div style={ { overflow: 'hidden', padding: 0, margin: 0, width: '50%' } }><img src='https://source.unsplash.com/1400x420/?forest' /></div>
        <div style={ { overflow: 'hidden', padding: 0, margin: 0, width: '50%' } }><img src='https://source.unsplash.com/1400x420/?town' /></div>
      </Flickity>
    );
  })
);

stories.add('Flickity - Flickity Expose and manual control',
  withInfo({ text: 'Basic carousel component' })(() => {
    return (
      <div>

        <div>
          <Flickity flickityRef={(ref) => flickityInstance = ref}>
            <div style={ { overflow: 'hidden', padding: 0, margin: 0, width: '50%' } }><img src='https://source.unsplash.com/1400x420/?city' /></div>
            <div style={ { overflow: 'hidden', padding: 0, margin: 0, width: '50%' } }><img src='https://source.unsplash.com/1400x420/?nature' /></div>
            <div style={ { overflow: 'hidden', padding: 0, margin: 0, width: '50%' } }><img src='https://source.unsplash.com/1400x420/?people' /></div>
            <div style={ { overflow: 'hidden', padding: 0, margin: 0, width: '50%' } }><img src='https://source.unsplash.com/1400x420/?london' /></div>
            <div style={ { overflow: 'hidden', padding: 0, margin: 0, width: '50%' } }><img src='https://source.unsplash.com/1400x420/?forest' /></div>
            <div style={ { overflow: 'hidden', padding: 0, margin: 0, width: '50%' } }><img src='https://source.unsplash.com/1400x420/?town' /></div>
          </Flickity>
        </div>

        <div style={{clear: 'both', marginTop: '25px'}}>
          <button onClick={flickityPrevious}>Previous</button>
          <button onClick={flickityNext}>Next</button>
          <button onClick={flickitySelect2}>Select 2nd item</button>
        </div>
      </div>
    );
  })
);