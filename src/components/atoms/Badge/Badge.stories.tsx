import { Meta, StoryObj } from '@storybook/react';
import Badge from './Badge';

const meta = {
  title: 'Atoms/Badge',
  component: Badge,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Badge>;

type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    children: 'Default Badge',
    color: 'gray',
    variant: 'soft',
    size: 'normal',
    radius: 'normal',
  },
} satisfies Story;

export const Primary = {
  args: {
    children: 'Primary Badge',
    color: 'primary',
    variant: 'soft',
    size: 'normal',
    radius: 'normal',
  },
} satisfies Story;

export const Success = {
  args: {
    children: 'Success Badge',
    color: 'success',
    variant: 'soft',
    size: 'normal',
    radius: 'normal',
  },
} satisfies Story;

export const Gray = {
  args: {
    children: 'Gray Badge',
    color: 'gray',
    variant: 'soft',
    size: 'normal',
    radius: 'normal',
  },
} satisfies Story;

export const Danger = {
  args: {
    children: 'Danger Badge',
    color: 'danger',
    variant: 'soft',
    size: 'normal',
    radius: 'normal',
  },
};

export const Orange = {
  args: {
    children: 'Orange Badge',
    color: 'orange',
    variant: 'soft',
    size: 'normal',
    radius: 'normal',
  },
};

export const Custom = {
  args: {
    children: 'Custom Badge',
    custom:
      'bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded',
  },
};

export default meta;
