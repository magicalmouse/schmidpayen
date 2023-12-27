import { themes } from '@storybook/theming';
import { addons } from '@storybook/addons';

addons.setConfig({
  theme: {
    ...themes.dark,
    brandImage: 'https://magehire.com/icon.svg',
    brandTitle: 'Nadir Abasov Components',
    brandUrl: 'https://magehire.com',
  },
});
