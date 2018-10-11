import { configure } from '@storybook/react';

function loadStories() {
    require('../src/App');
}

configure(loadStories, module);