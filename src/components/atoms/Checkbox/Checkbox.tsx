import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { useState } from 'react';

interface Props {
  label?: string;
  size?: 'large' | 'normal' | 'small';
  color?: 'primary' | 'success' | 'gray' | 'danger' | 'orange';
  disabled?: boolean;
}

function Checkbox({
  label = 'Check me',
  size = 'normal',
  disabled = false,
  color = 'primary',
}: Props) {
  const [checked, setChecked] = useState(false);
  const onChecked = () => setChecked(!checked);

  return (
    <div className="flex items-center gap-2">
      <CheckboxPrimitive.Root
        className={`${checkboxDefaultStyle} ${
          checkboxSizeMap[size]
        } ${checkboxStyleMap(checked, color)} text-white`}
        id="c1"
        disabled={disabled}
        onClick={onChecked}
      >
        <CheckboxPrimitive.Indicator>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={checkIconSizeMap[size]}
            height={checkIconSizeMap[size]}
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M9 21.035l-9-8.638 2.791-2.87 6.156 5.874 12.21-12.436 2.843 2.817z"></path>
          </svg>
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
      <label
        className={`cursor-pointer ${labelSizeMap[size]} ${labelDisabledStyle(
          disabled,
        )}`}
        htmlFor="c1"
      >
        {label}
      </label>
    </div>
  );
}

const checkboxDefaultStyle = `
  flex items-center justify-center border-[1.4px] rounded disabled:cursor-not-allowed disabled:bg-gray-100 dark:disabled:bg-black-200 dark:disabled:border-black-100
`;

type Color = 'primary' | 'success' | 'gray' | 'danger' | 'orange';

const colorMap = {
  primary: 'bg-primary-500',
  success: 'bg-green-500',
  gray: 'bg-gray-500',
  danger: 'bg-red-500',
  orange: 'bg-orange-500',
};

const checkboxStyleMap = (checked: boolean, color: Color) => {
  if (checked) {
    return `${colorMap[color]} border-transparent`;
  }

  return 'border-gray-300 dark:border-gray-50';
};

const checkboxSizeMap = {
  large: 'w-6 h-6',
  normal: 'w-5 h-5',
  small: 'w-4 h-4',
};

const checkIconSizeMap = {
  large: '16',
  normal: '12',
  small: '10',
};

const labelSizeMap = {
  large: 'text-lg',
  normal: 'text-sm',
  small: 'text-xs',
};

const labelDisabledStyle = (disabled: boolean) => {
  if (disabled) {
    return 'text-gray-400 dark:text-black-50 cursor-not-allowed';
  }
};

export default Checkbox;
