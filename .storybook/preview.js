/** @type { import('@storybook/react').Preview } */
import "../src/index.css";
import { initialize, mswDecorator } from "msw-storybook-addon";

initialize();

const preview = {
  decorators: [mswDecorator],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  loaders: [mswLoader],
};

export default preview;
