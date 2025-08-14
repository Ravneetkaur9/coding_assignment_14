import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Text from './Text';

const meta: Meta<typeof Text> = {
  title: 'ReactComponentLibrary/Text',
  component: Text,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Intro: Story = {
  args: {
    content: 'Welcome to the component library!',
  },
};

export const Tip: Story = {
  args: {
    content: 'Use props to pass dynamic text.',
  },
};
