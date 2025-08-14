import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import TableHeader from './TableHeader';

const meta: Meta<typeof TableHeader> = {
  title: 'ReactComponentLibrary/TableHeader',
  component: TableHeader,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TableHeader>;

export const BasicHeader: Story = {
  args: {
    text: 'Name', // ✅ use one header per instance
  },
};
