import Button from './Button';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Atoms/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    children: 'Default Button',
    color: 'primary',
  },
} satisfies Story;

export default meta;
