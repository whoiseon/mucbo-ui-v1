import { Meta, StoryObj } from '@storybook/react';
import Checkbox from './Checkbox';

const meta = {
  title: 'Atoms/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Checkbox>;

type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    label: 'Default checkbox',
    size: 'normal',
  },
} satisfies Story;

export const Primary = {
  args: {
    label: 'Primary checkbox',
    color: 'primary',
    size: 'normal',
  },
} satisfies Story;

export const Success = {
  args: {
    label: 'Success checkbox',
    color: 'success',
    size: 'normal',
  },
} satisfies Story;

export const Gray = {
  args: {
    label: 'Gray checkbox',
    color: 'gray',
    size: 'normal',
  },
} satisfies Story;

export const Danger = {
  args: {
    label: 'Danger checkbox',
    color: 'danger',
    size: 'normal',
  },
} satisfies Story;

export const Orange = {
  args: {
    label: 'Orange checkbox',
    color: 'orange',
    size: 'normal',
  },
} satisfies Story;

export default meta;
