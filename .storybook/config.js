import React from 'react';
import { configure, addDecorator, setAddon } from '@storybook/react';
import infoAddon from '@storybook/addon-info';
import { setOptions } from '@storybook/addon-options';

import './storybook.scss';

setOptions({
  name: 'react-flickity',
  url: 'https://gitlab.frontendserviceaccount.com/manager-component/ui-kit'
})

function loadStories() {
  require('../stories/Flickity');
}

setAddon(infoAddon);

configure(loadStories, module);
