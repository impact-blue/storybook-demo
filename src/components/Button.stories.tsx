import { Button as Component } from './Button';
import { Story } from '@storybook/react';
import { ComponentProps } from 'react';

const Button: Story<ComponentProps<typeof Component>> = props => <Component {...props} />;

Button.args = {
  children: 'ボタン',
  variant: 'primary',
};

export { Button };

export default {
  component: Component,
  title: 'コンポーネント',
};
