import React from 'react';
import { configure, addDecorator, setAddon } from '@storybook/react';
import infoAddon from '@storybook/addon-info';
import { setOptions } from '@storybook/addon-options';

import './storybook.scss';

setOptions({
  name: 'react-flickity',
  url: 'https://github.com/JamesBliss/react-flickity'
})

function loadStories() {
  require('../stories/Flickity');
}

setAddon(infoAddon);

configure(loadStories, module);
