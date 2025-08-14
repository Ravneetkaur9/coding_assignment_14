import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import TableRow from './TableRow';

const meta: Meta<typeof TableRow> = {
  title: 'ReactComponentLibrary/TableRow',
  component: TableRow,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TableRow>;

export const Default: Story = {
  render: () => (
    <TableRow>
      <td>John Doe</td>
      <td>john@example.com</td>
      <td>30</td>
    </TableRow>
  ),
};
