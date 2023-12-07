import Button from './Button';
import { Meta, StoryObj } from '@storybook/react';
import AddIcon from '../../../assets/icons/add-icon.svg';

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
    size: 'normal',
  },
} satisfies Story;

export const Primary = {
  args: {
    children: 'Primary Button',
    color: 'primary',
    size: 'normal',
  },
};

export const PrimaryOutline = {
  args: {
    children: 'Primary Outline Button',
    color: 'primary',
    size: 'normal',
    variant: 'outline',
  },
};

export const PrimaryFlat = {
  args: {
    children: 'Primary Flat Button',
    color: 'primary',
    size: 'normal',
    variant: 'flat',
  },
};

export const Secondary = {
  args: {
    children: 'Secondary Button',
    color: 'secondary',
    size: 'normal',
  },
};

export const SecondaryOutline = {
  args: {
    children: 'Secondary Outline Button',
    color: 'secondary',
    size: 'normal',
    variant: 'outline',
  },
};

export const Danger = {
  args: {
    children: 'Danger Button',
    color: 'danger',
    size: 'normal',
  },
};

export const DangerOutline = {
  args: {
    children: 'Danger Outline Button',
    color: 'danger',
    size: 'normal',
    variant: 'outline',
  },
};

export const DangerFlat = {
  args: {
    children: 'Danger Flat Button',
    color: 'danger',
    size: 'normal',
    variant: 'flat',
  },
};

export const Transparent = {
  args: {
    children: 'Transparent Button',
    color: 'transparent',
    size: 'normal',
  },
};

export const Loading = {
  args: {
    children: 'Please wait...',
    color: 'primary',
    size: 'normal',
    loading: true,
  },
};

export const LeftIcon = {
  args: {
    children: 'Left Icon Button',
    color: 'primary',
    size: 'normal',
    leftIcon: <AddIcon />,
  },
};

export const RightIcon = {
  args: {
    children: 'Left Icon Button',
    color: 'primary',
    size: 'normal',
    rightIcon: <AddIcon />,
  },
};

export default meta;
