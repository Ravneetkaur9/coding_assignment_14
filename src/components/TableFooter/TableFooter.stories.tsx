import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import TableFooter from './TableFooter';

const meta: Meta<typeof TableFooter> = {
  title: 'ReactComponentLibrary/TableFooter',
  component: TableFooter,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TableFooter>;

export const SummaryRow: Story = {
  args: {
    summary: 'Showing 1–10 of 100 results',
  },
};
