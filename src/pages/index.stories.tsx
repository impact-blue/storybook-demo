import Page from './index.page';
import { Story } from '@storybook/react';
import { fireEvent, within } from '@storybook/testing-library';

const Index: Story = props => <Page {...props} />;

Index.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await canvas.findByText('0');

  const button = await canvas.findByText('+1');

  fireEvent.click(button);

  await canvas.findByText('1');

  fireEvent.click(button);

  await canvas.findByText('2');
};

Index.storyName = 'index';

export { Index };

export default {
  component: Page,
  title: 'ページ',
};
