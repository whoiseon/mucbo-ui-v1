import React from 'react';

interface Props {
  /** 버튼 안의 내용 */
  children: React.ReactNode;
  /** 버튼의 색상을 설정합니다. */
  color?: 'primary' | 'secondary' | 'danger' | 'transparent';
  /** 버튼 사이즈를 설정합니다. */
  size?: 'large' | 'normal' | 'small';
  /** 버튼의 가로 길이를 최대 사이즈로 설정합니다. */
  block?: boolean;
  /** 버튼을 비활성화 시킵니다. */
  disabled?: boolean;
}

function Button({
  children,
  color = 'primary',
  size = 'normal',
  block = false,
  disabled = false,
}: Props) {
  return (
    <button
      className={`${buttonDefaultStyle} ${isBlock(block)} ${colorMap[color]}`}
      disabled={disabled}
    >
      <span className="flex w-full items-center">
        <span
          className={`flex w-full flex-1 items-center justify-center ${sizeMap[size]}`}
        >
          {children}
        </span>
      </span>
    </button>
  );
}

const buttonDefaultStyle = `
  flex items-center justify-center font-medium outline-none transition-all rounded-md disabled:cursor-not-allowed disabled:opacity-50
`;

const colorMap = {
  primary:
    'text-white bg-primary-500 hover:bg-primary-600 active:bg-primary-700',
  secondary:
    'bg-gray-100 hover:bg-gray-200 active:bg-gray-300 dark:bg-black-300 dark:hover:bg-black-200 dark:active:bg-black-400',
  danger: 'text-white bg-red-400 hover:bg-red-500 active:bg-red-600',
  transparent:
    'text-gray-800 bg-transparent hover:bg-gray-50 active:bg-gray-100 dark:text-gray-300 dark:hover:bg-black-400 dark:hover:text-white dark:active:bg-black-300',
};

const sizeMap = {
  large: 'text-lg py-2.5 px-6 h-12',
  normal: 'text-sm py-2 px-4 h-10',
  small: 'text-xs py-2 px-3',
};

const isBlock = (block: boolean) => (block ? 'w-full' : '');

export default Button;
