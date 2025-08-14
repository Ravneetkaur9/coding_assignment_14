import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Card from './Card';

const meta: Meta<typeof Card> = {
  title: 'ReactComponentLibrary/Card',
  component: Card,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const DefaultCard: Story = {
  args: {
    title: 'Card Title',
    content: 'This is the content of the card.',
    footer: 'Footer text here',
  },
};

export const CardWithoutFooter: Story = {
  args: {
    title: 'Card Title',
    content: 'This card has no footer section.',
  },
};
