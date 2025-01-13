/** @type { import('@storybook/react').Preview } */
import "../src/index.css";

const preview = {
  decorators: [],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  loaders: [],
};

export default preview;
