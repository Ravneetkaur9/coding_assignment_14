import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Label from './Label';

const meta: Meta<typeof Label> = {
  title: 'ReactComponentLibrary/Label',
  component: Label,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Label>;

export const NameLabel: Story = {
  args: {
    text: 'Name:',
  },
};

export const EmailLabel: Story = {
  args: {
    text: 'Email:',
  },
};


