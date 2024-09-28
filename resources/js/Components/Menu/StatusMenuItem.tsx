import { Link } from '@inertiajs/react';
import classNames from 'classnames';

interface StatusMenuItemProps {
  icon?: React.ReactNode;
  link: string;
  text: string;
  color: string;
}

export default function StatusMenuItem({ link, text, color }: StatusMenuItemProps) {
  const isActive = route().current(link + '*');

  const iconClasses = classNames({
    'text-white': isActive,
    'text-indigo-400 group-hover:text-white': !isActive
  });

  const textClasses = classNames({
    'text-white': isActive,
    'text-indigo-200 group-hover:text-white': !isActive
  });

  return (
    <div className={`mb-3 border-solid ${color} border-white`}>
      <Link
        href={route(link)}
        className='inline-block w-full p-2 text-white border border-gray-200 dark:border-gray-700 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:bg-gray-700 dark:text-white' aria-current="page"
      >
        <div className={textClasses}>{text}</div>
      </Link>
    </div>
  );
}
