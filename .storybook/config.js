import { configure } from '@storybook/react';

function loadStories() {
  require('../stories/index.js'); // 好きな場所のstoryをrequireできます。
}

configure(loadStories, module);
