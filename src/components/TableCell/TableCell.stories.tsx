import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import TableCell from './TableCell';

const meta: Meta<typeof TableCell> = {
  title: 'ReactComponentLibrary/TableCell',
  component: TableCell,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TableCell>;

export const SimpleCell: Story = {
  args: {
    text: 'Cell Data', // ✅ use 'text' instead of 'content'
  },
};
