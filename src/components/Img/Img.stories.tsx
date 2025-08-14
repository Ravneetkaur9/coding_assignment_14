import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Img from './Img';

const meta: Meta<typeof Img> = {
  title: 'ReactComponentLibrary/Img',
  component: Img,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Img>;

export const LandscapeImage: Story = {
  args: {
    src: 'https://picsum.photos/400/200',
    alt: 'A random landscape',
    width: '400px',
    height: '200px',
  },
};

export const SquareImage: Story = {
  args: {
    src: 'https://picsum.photos/300',
    alt: 'Square thumbnail',
    width: '300px',
    height: '300px',
  },
};
