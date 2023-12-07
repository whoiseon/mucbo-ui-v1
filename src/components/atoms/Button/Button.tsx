import React from 'react';
import Link from 'next/link';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Button content */
  children: React.ReactNode;
  /** Set button variant */
  variant?: 'default' | 'outline' | 'flat';
  /** Set button color */
  color?: 'primary' | 'secondary' | 'danger' | 'transparent';
  /** Set button size */
  size?: 'large' | 'normal' | 'small';
  /** Button loading state*/
  loading?: boolean;
  /** Button block */
  block?: boolean;
  /** Button disabled */
  disabled?: boolean;
  /** Button left icon */
  leftIcon?: React.ReactNode;
  /** Button right icon */
  rightIcon?: React.ReactNode;
  /** Button link */
  href?: string;
}

function Button({
  children,
  variant = 'default',
  color = 'primary',
  size = 'normal',
  loading = false,
  block = false,
  disabled = false,
  leftIcon = undefined,
  rightIcon = undefined,
  href,
  ...rest
}: Props) {
  if (href) {
    return (
      <Link
        className={`${buttonDefaultStyle} ${isBlock(block)} ${
          styleMap[color][variant]
        }`}
        href={href}
      >
        <span className="flex w-full items-center">
          <span
            className={`flex w-full flex-1 items-center justify-center ${sizeMap[size]}`}
          >
            {loading && (
              <span className="mr-2">
                <div role="status">
                  <svg
                    aria-hidden="true"
                    className="h-8 w-8 animate-spin fill-primary-500 text-gray-200 dark:text-gray-400 mx-auto !h-4 !w-4 fill-white dark:fill-white"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    width={loadingSizeMap[size]}
                    height={loadingSizeMap[size]}
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    ></path>
                  </svg>
                </div>
              </span>
            )}
            {leftIcon && (
              <span className={`mr-2 ${iconSizeMap[size]}`}>{leftIcon}</span>
            )}
            {children}
            {rightIcon && (
              <span className={`ml-2 ${iconSizeMap[size]}`}>{rightIcon}</span>
            )}
          </span>
        </span>
      </Link>
    );
  }

  return (
    <button
      className={`${buttonDefaultStyle} ${isBlock(block)} ${
        styleMap[color][variant]
      }`}
      disabled={disabled || loading}
      {...rest}
    >
      <span className="flex w-full items-center">
        <span
          className={`flex w-full flex-1 items-center justify-center ${sizeMap[size]}`}
        >
          {loading && (
            <span className="mr-2">
              <div role="status">
                <svg
                  aria-hidden="true"
                  className="animate-spin fill-primary-500 text-gray-200 dark:text-gray-400 mx-auto dark:fill-white"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  width={loadingSizeMap[size]}
                  height={loadingSizeMap[size]}
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  ></path>
                </svg>
              </div>
            </span>
          )}
          {leftIcon && (
            <span className={`mr-2 ${iconSizeMap[size]}`}>{leftIcon}</span>
          )}
          {children}
          {rightIcon && (
            <span className={`ml-2 ${iconSizeMap[size]}`}>{rightIcon}</span>
          )}
        </span>
      </span>
    </button>
  );
}

type Color = 'primary' | 'secondary' | 'danger' | 'transparent';
type Variant = 'default' | 'outline' | 'flat';

const buttonDefaultStyle = `
  flex items-center justify-center font-medium transition-all rounded-md disabled:cursor-not-allowed disabled:opacity-50 outline-none
`;

type StyleMap = Record<
  Color,
  {
    [key in Variant]: string;
  }
>;
const styleMap: StyleMap = {
  primary: {
    default:
      'text-white bg-primary-500 hover:bg-primary-600 active:bg-primary-700',
    outline:
      'border-primary-500 border-2 text-primary-300 bg-transparent hover:bg-primary-500 hover:text-white active:bg-primary-600 active:border-primary-600',
    flat: 'text-primary-500 bg-primary-500/10 hover:bg-primary-500/20 active:bg-primary-500/30',
  },
  secondary: {
    default:
      'bg-gray-100 hover:bg-gray-200 active:bg-gray-300 dark:bg-black-300 dark:hover:bg-black-200 dark:active:bg-black-300',
    outline:
      'border-gray-100 border-2 bg-transparent hover:bg-gray-100 active:bg-gray-200 active:border-gray-200, dark:border-black-200 dark:bg-transparent dark:text-gray-300 dark:hover:bg-black-200 dark:active:bg-black-300 dark:active:border-black-300',
    flat: 'bg-gray-100 hover:bg-gray-200 active:bg-gray-300 dark:bg-black-300 dark:hover:bg-black-200 dark:active:bg-black-300',
  },
  danger: {
    default: 'text-white bg-red-400 hover:bg-red-500 active:bg-red-600',
    outline:
      'border-red-400 border-2 text-red-400 bg-transparent hover:bg-red-400 hover:text-white active:bg-red-500 active:border-red-500',
    flat: 'text-red-500 bg-red-500/10 hover:bg-red-500/20 active:bg-red-500/30',
  },
  transparent: {
    default:
      'text-gray-800 bg-transparent hover:bg-gray-50 active:bg-gray-100 dark:text-gray-300 dark:hover:bg-black-400 dark:hover:text-white dark:active:bg-black-300',
    outline:
      'text-gray-800 bg-transparent hover:bg-gray-50 active:bg-gray-100 dark:text-gray-300 dark:hover:bg-black-400 dark:hover:text-white dark:active:bg-black-300',
    flat: 'text-gray-800 bg-transparent hover:bg-gray-50 active:bg-gray-100 dark:text-gray-300 dark:hover:bg-black-400 dark:hover:text-white dark:active:bg-black-300',
  },
};

const sizeMap = {
  large: 'text-lg py-2.5 px-6 h-12',
  normal: 'text-sm py-2 px-4 h-10',
  small: 'text-xs py-2 px-3',
};

const loadingSizeMap = {
  large: '24px',
  normal: '20px',
  small: '16px',
};

const iconSizeMap = {
  large: 'h-6 w-6',
  normal: 'h-5 w-5',
  small: 'h-4 w-4',
};

const isBlock = (block: boolean) => (block ? 'w-full' : '');

export default Button;
