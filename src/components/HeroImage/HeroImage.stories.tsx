import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import HeroImage from './HeroImage';

const meta: Meta<typeof HeroImage> = {
  title: 'ReactComponentLibrary/HeroImage',
  component: HeroImage,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof HeroImage>;

export const DefaultBanner: Story = {
  args: {
    src: 'https://picsum.photos/800/300',
    alt: 'Banner',
    title: 'Welcome to Our Site',
    subtitle: 'Explore our awesome features.',
  },
};

export const NoText: Story = {
  args: {
    src: 'https://picsum.photos/800/300',
    alt: 'Simple Hero Image',
  },
};
