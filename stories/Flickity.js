import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import withReadme from 'storybook-readme/with-readme';

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
        <h1 style={ { background: 'red', width: '100%' } }>Slide one</h1>
        <h1 style={ { background: 'lime', width: '100%' } }>Slide two</h1>
        <h1 style={ { background: 'pink', width: '100%' } }>Slide three</h1>
        <h1 style={ { background: 'blue', width: '100%' } }>Slide four</h1>
        <h1 style={ { background: 'orange', width: '100%' } }>Slide five</h1>
      </Flickity>
    );
  })
);