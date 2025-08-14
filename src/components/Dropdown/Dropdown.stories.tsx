import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Dropdown from './Dropdown';

const meta: Meta<typeof Dropdown> = {
  title: 'ReactComponentLibrary/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const FruitSelector: Story = {
  args: {
    label: 'Select a fruit:',
    options: ['Apple', 'Banana', 'Mango', 'Orange'],
  },
};

export const CountrySelector: Story = {
  args: {
    label: 'Select a country:',
    options: ['Canada', 'USA', 'India', 'Germany'],
  },
};
