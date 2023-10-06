import type { StorybookConfig } from '@storybook/web-components-vite';
import { Plugin } from 'vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: {
    name: '@storybook/web-components-vite',
    options: {}
  },
  core: {
    disableTelemetry: true
  },
  viteFinal: async (config) => {
    const plugins = config.plugins?.filter(
      (el) => !(el?.hasOwnProperty('name') && (el as Plugin).name == 'vite:dts')
    );

    return {
      ...config,
      plugins
    };
  },
  docs: {
    autodocs: 'tag'
  }
};
export default config;
