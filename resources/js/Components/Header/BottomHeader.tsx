import { useState } from 'react';
import { Link, usePage } from '@inertiajs/react';
import { PageProps } from '@/types';
import { ChevronDown } from 'lucide-react';

export default () => {
  const { auth } = usePage<PageProps>().props;
  const [menuOpened, setMenuOpened] = useState(false);


  return (
    <div className="flex items-end justify-between w-full p-4 text-md bg-white border-b md:py-0 md:px-12 d:text-lg">
     <div id="topnav-tabs" className="text-md font-medium text-end text-black border-gray-200 dark:text-gray-400 dark:border-gray-700">
        <ul className="flex flex-wrap">
          <li className="me-1">
              <a href="/" id="dashboard"className="inline-block rounded-t-lg p-4 border-2 border-gray-300 rounded-t-lg hover:text-gray-600 hover:bg-slate-200 dark:text-blue-500 dark:border-blue-500 active:border-b-blue-500 active:text-blue-500" aria-current="page">Current User</a>
          </li>
          <li className="me-1">
              <a href="tasks" className="inline-block p-4 border-2 border-gray-300 rounded-t-lg hover:text-gray-600 hover:bg-slate-200 dark:hover:text-gray-300 active:border-b-blue-500 active:text-blue-500">Shawn</a>
          </li>
          <li className="me-1">
              <a href="timeline" className="inline-block p-4 border-2 border-gray-300 rounded-t-lg hover:text-gray-600 hover:bg-slate-200 hover:border-gray-300 dark:hover:text-gray-300 active:border-b-blue-500 active:text-blue-500" aria-current="page">James</a>
          </li>
          <li className="me-1">
              <a href="#" className="inline-block p-4 border-2 border-gray-300 rounded-t-lg hover:text-gray-600 hover:bg-slate-200 dark:hover:text-gray-300 active:border-b-blue-500 active:text-blue-500" aria-current="page">Sales</a>
          </li>
          <li>
              <a className="inline-block p-4 text-gray-400 rounded-t-lg cursor-not-allowed dark:text-gray-500 cursor">Disabled</a>
          </li>
        </ul>
      </div>
      <div className="mt-1 mr-2">{auth.user.account.name}</div>
      <div className="">
        <div
          className="flex items-center cursor-pointer select-none group"
          onClick={() => setMenuOpened(true)}
        >
          <div className="mr-1 text-gray-800 whitespace-nowrap group-hover:text-indigo-600 focus:text-indigo-600">
            <span>{auth.user.first_name}</span>
            <span className="hidden ml-1 md:inline">{auth.user.last_name}</span>
          </div>
          <ChevronDown
            size={20}
            className="text-gray-800 group-hover:text-indigo-600"
          />
        </div>
        <div className={menuOpened ? '' : 'hidden'}>
          <div className="absolute top-0 right-0 left-auto z-20 py-2 mt-8 text-sm whitespace-nowrap bg-white rounded shadow-xl">
            <Link
              href={route('users.edit', auth.user.id)}
              className="block px-6 py-2 hover:bg-indigo-600 hover:text-white"
              onClick={() => setMenuOpened(false)}
            >
              My Profile
            </Link>
            <Link
              href={route('users')}
              className="block px-6 py-2 hover:bg-indigo-600 hover:text-white"
              onClick={() => setMenuOpened(false)}
            >
              Manage Users
            </Link>
            <Link
              as="button"
              href={route('logout')}
              method="delete"
              className="block w-full px-6 py-2 text-left focus:outline-none hover:bg-indigo-600 hover:text-white"
            >
              Logout
            </Link>
          </div>
          <div
            onClick={() => {
              setMenuOpened(false);
            }}
            className="fixed inset-0 z-10 bg-black opacity-25"
          ></div>
        </div>
      </div>
    </div>
  );
};
