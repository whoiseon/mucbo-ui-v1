import React from 'react';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Set input size */
  inputSize?: 'small' | 'normal' | 'large';
  /** Input disabled */
  disabled?: boolean;
  /** Input full width */
  fullWidth?: boolean;
  /** Input label */
  label?: string;
  /** Input hint */
  hint?: string;
  /** Input error */
  error?: string;
  /** Input inner icon */
  withIcon?: React.ReactNode;
}

function Input({
  inputSize = 'normal',
  disabled = false,
  fullWidth = true,
  label,
  hint,
  error,
  withIcon,
  ...rest
}: Props) {
  return (
    <div className="flex flex-col">
      {label && (
        <label
          className="w-full text-gray-500 text-sm dark:text-gray-400"
          htmlFor={rest.id}
        >
          {label}
        </label>
      )}
      <div className="relative mt-[0.35rem]">
        {withIcon && (
          <div
            className={`absolute top-0 left-0 flex items-center justify-center ${iconBoxSizeMap[inputSize]}`}
          >
            <div
              className={`${iconSizeMap[inputSize]} text-gray-400 dark:text-gray-400`}
            >
              {withIcon}
            </div>
          </div>
        )}
        <input
          className={`${inputIconPadding(
            !!withIcon,
            inputSize,
          )} ${inputDefaultStyle} ${inputSizeMap[inputSize]} ${inputFullWidth(
            fullWidth,
          )}`}
          disabled={disabled}
          {...rest}
        />
      </div>
      {error && (
        <span className="mt-[0.35rem] text-red-500 pl-1 text-xs dark:text-red-400">
          {error}
        </span>
      )}
      {hint && !error && (
        <span className="mt-[0.35rem] text-gray-500 pl-1 text-xs dark:text-gray-400">
          {hint}
        </span>
      )}
    </div>
  );
}

const inputDefaultStyle = `
  bg-white border-gray-200 hover:border-gray-300 hover:bg-gray-50
  rounded-md text-gray-800 shadow-sm border-[1px] transition-all outline-none focus:border-primary-500
  placeholder:text-gray-500
  dark:border-black-200 dark:bg-black-400 dark:text-gray-200
  dark:hover:border-black-100 dark:focus:border-primary-500 lg:text-sm
  disabled:cursor-not-allowed disabled:opacity-50
`;

const inputSizeMap = {
  small: 'h-8 text-sm py-2 px-3',
  normal: 'h-10 text-sm py-2 px-3',
  large: 'h-12 text-base py-2 px-3',
};

const iconBoxSizeMap = {
  small: 'w-8 h-8',
  normal: 'w-10 h-10',
  large: 'w-12 h-12',
};

const iconSizeMap = {
  small: 'w-4 h-4',
  normal: 'w-5 h-5',
  large: 'w-6 h-6',
};

const inputIconPadding = (
  isIcon: boolean,
  size: 'small' | 'normal' | 'large',
) => {
  if (!isIcon) return '';
  const paddingSizeMap = {
    small: '!pl-8',
    normal: '!pl-10',
    large: '!pl-12',
  };

  return paddingSizeMap[size];
};

const inputFullWidth = (block: boolean) => (block ? 'w-full' : 'w-64');

export default Input;
