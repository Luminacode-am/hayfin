import { Sun } from 'lucide-react';

export default function ThemeToggle() {
  function toggleTheme() {
    document.documentElement.classList.toggle('dark');
  }

  return (
    <button
      onClick={toggleTheme}
      className=" fixed pr-8 pt-6 flex justify-end w-full text-light-text dark:text-dark-text"
    >
      <Sun />
    </button>
  );
}
