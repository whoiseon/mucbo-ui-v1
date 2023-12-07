import React from 'react';
import Link from 'next/link';

interface Props {
  /** Badge content */
  children: React.ReactNode;
  /** Badge size */
  size?: 'small' | 'normal';
  /** Badge color */
  color?: 'primary' | 'success' | 'gray' | 'danger' | 'orange';
  /** Badge variant */
  variant?: 'solid' | 'soft' | 'surface' | 'outline';
  /** Badge radius */
  radius?: 'none' | 'small' | 'normal' | 'large';
  /** Badge custom className */
  custom?: string;
  /** Badge Link */
  href?: string;
}

function Badge({
  children,
  size = 'normal',
  radius = 'small',
  color = 'gray',
  variant = 'soft',
  custom,
  href,
}: Props) {
  if (custom) {
    if (href) {
      return (
        <Link
          href={href}
          className={`flex space-x-2 items-center font-medium ${custom}`}
        >
          {children}
        </Link>
      );
    }

    return (
      <div className={`flex space-x-2 items-center font-medium ${custom}`}>
        {children}
      </div>
    );
  }

  if (href) {
    return (
      <Link
        href={href}
        className={`flex space-x-2 items-center font-medium ${styleMap[color][variant]} ${radiusMap[radius]} ${sizeMap[size]}`}
      >
        {children}
      </Link>
    );
  }

  return (
    <div
      className={`flex space-x-2 items-center font-medium ${styleMap[color][variant]} ${radiusMap[radius]} ${sizeMap[size]}`}
    >
      {children}
    </div>
  );
}
type Color = 'primary' | 'success' | 'gray' | 'danger' | 'orange';
type Variant = 'solid' | 'soft' | 'surface' | 'outline';

type StyleMap = Record<
  Color,
  {
    [key in Variant]: string;
  }
>;

const styleMap: StyleMap = {
  primary: {
    solid: 'bg-primary-500 text-white',
    soft: 'bg-primary-500/10 text-primary-500',
    surface:
      'bg-primary-300/10 border-[1px] border-primary-200 text-primary-500 dark:bg-primary-500/10 dark:border-primary-500 dark:text-primary-500',
    outline:
      'bg-transparent border-[1px] border-primary-400 text-primary-500 dark:border-primary-500 dark:text-primary-500',
  },
  success: {
    solid: 'bg-green-500 text-white',
    soft: 'bg-green-500/10 text-green-500',
    surface:
      'bg-green-300/10 border-[1px] border-green-400 text-green-500 dark:bg-green-500/10 dark:border-green-500 dark:text-green-500',
    outline:
      'bg-transparent border-[1px] border-green-400 text-green-500 dark:bg-transparent dark:border-green-500 dark:text-green-500',
  },
  gray: {
    solid: 'bg-gray-500 text-white dark:bg-black-100',
    soft: 'text-gray-500 bg-gray-100 dark:text-gray-300 dark:bg-black-300',
    surface:
      'bg-gray-300/30 border-[1px] border-gray-400 text-gray-600 dark:bg-black-300 dark:border-gray-600 dark:text-gray-300',
    outline:
      'bg-transparent border-[1px] border-gray-400 text-gray-600 dark:border-gray-600 dark:text-gray-300',
  },
  danger: {
    solid: 'bg-red-500 text-white',
    soft: 'bg-red-500/10 text-red-500',
    surface:
      'bg-red-500/10 border-[1px] border-red-500 text-red-500 dark:bg-red-500/10 dark:border-danger-500 dark:text-red-500',
    outline:
      'bg-transparent border-[1px] border-red-400 text-red-500 dark:bg-transparent dark:border-red-500 dark:text-red-500',
  },
  orange: {
    solid: 'bg-orange-500 text-white',
    soft: 'bg-orange-500/10 text-orange-500',
    surface:
      'bg-orange-500/10 border-[1px] border-orange-500 text-orange-500 dark:bg-orange-500/10 dark:border-orange-500 dark:text-orange-500',
    outline:
      'bg-transparent border-[1px] border-orange-400 text-orange-500 dark:bg-transparent dark:border-orange-500 dark:text-orange-500',
  },
};

const sizeMap = {
  small: 'text-xs py-[2px] px-2',
  normal: 'text-sm py-1 px-3',
};

const radiusMap = {
  none: 'rounded-none',
  small: 'rounded',
  normal: 'rounded-md',
  large: 'rounded-lg',
};

export default Badge;
