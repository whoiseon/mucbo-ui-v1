function Button() {
  return (
    <button className="flex items-center justify-center font-medium outline-none transition-all focus:ring-2 ring-offset-1 dark:focus:ring-offset-transparent disabled:cursor-not-allowed disabled:opacity-50 ring-primary-200 bg-primary-500 dark:focus:ring-primary-500/70 text-primary-contrast hover:bg-primary-600 active:bg-primary-700 dark:text-primary-contrast rounded-md">
      <span className="flex w-full items-center"><span className="flex w-full flex-1 items-center justify-center text-sm py-2 px-4 h-10">Default Button</span></span>
    </button>
  )
}

export default Button;
