import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import RadioButton from './RadioButton';

const meta: Meta<typeof RadioButton> = {
  title: 'ReactComponentLibrary/RadioButton',
  component: RadioButton,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof RadioButton>;

export const GenderOptions: Story = {
  render: () => {
    const [selected, setSelected] = useState('Male');
    return (
      <RadioButton
        name="gender"
        label="Select Size"
        options={['Male', 'Female', 'Other']}
        selected={selected}
     onChange={(val: string) => setSelected(val)}
      />
    );
  },
};

export const SizeOptions: Story = {
  render: () => {
    const [selected, setSelected] = useState('Medium');
    return (
      <RadioButton
        name="size"
        label="Select Size"
        options={['Small', 'Medium', 'Large']}
        selected={selected}
      onChange={(val: string) => setSelected(val)}
      />
    );
  },
};
