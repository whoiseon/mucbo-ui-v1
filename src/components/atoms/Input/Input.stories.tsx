import Input from './Input';
import { Meta, StoryObj } from '@storybook/react';
import SearchIcon from '../../../assets/icons/search-icon.svg';

const meta = {
  title: 'Atoms/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Input>;

type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    placeholder: 'Enter your email',
    inputSize: 'normal',
    disabled: false,
    fullWidth: true,
    id: 'email',
  },
} satisfies Story;

export const Disabled = {
  args: {
    placeholder: 'Enter your email',
    inputSize: 'normal',
    disabled: true,
    fullWidth: true,
    id: 'email',
  },
} satisfies Story;

export const InputWithLabel = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    inputSize: 'normal',
    fullWidth: true,
    id: 'email',
  },
} satisfies Story;

export const InputWithHint = {
  args: {
    label: 'Password',
    placeholder: 'Enter your password',
    hint: 'Please use at least 8 characters.',
    inputSize: 'normal',
    fullWidth: true,
    type: 'password',
    id: 'password',
  },
} satisfies Story;

export const InputWithError = {
  args: {
    label: 'Password',
    placeholder: 'Enter your password',
    error: 'The password used is not correct.',
    inputSize: 'normal',
    fullWidth: true,
    type: 'password',
    id: 'password',
  },
} satisfies Story;

export const InputWithIcon = {
  args: {
    placeholder: 'how can I help you?',
    inputSize: 'normal',
    fullWidth: true,
    id: 'search',
    withIcon: <SearchIcon />,
  },
} satisfies Story;

export default meta;
