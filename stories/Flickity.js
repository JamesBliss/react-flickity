import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import withReadme from 'storybook-readme/with-readme';

// FEATURED COMPONENT //
import Flickity from '../src';

// Reusable functions and objects for stories
function updateFlkty(flkty) {
  console.log(flkty);
}

// Start of story logic
const stories = storiesOf('Flickity', module);

stories.add('Flickity - basic',
  withInfo({ text: 'Basic carousel component' })(() => {
    return (
      <Flickity updateFlkty={ updateFlkty } className={ 'ui-carousel__container' } options={ {} }>
        <h1 style={ { background: 'red', width: '100%' } }>Slide one</h1>
        <h1 style={ { background: 'lime', width: '100%' } }>Slide two</h1>
        <h1 style={ { background: 'pink', width: '100%' } }>Slide three</h1>
        <h1 style={ { background: 'blue', width: '100%' } }>Slide four</h1>
        <h1 style={ { background: 'orange', width: '100%' } }>Slide five</h1>
      </Flickity>
    );
  })
);