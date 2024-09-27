import { Link } from '@inertiajs/react';
import classNames from 'classnames';

interface TabMenuProps {
  link: string;
  text: string;
}

export default function TabMenu(link, text)
{
    return (
    <div id="topnav-tabs" className="text-md font-medium text-end text-black border-gray-200 dark:text-gray-400 dark:border-gray-700">
        <ul className="flex flex-wrap">
          <Link href={route(link)} className="me-1">{text}</Link>
          <li className="me-1">
              <a href="/" id="dashboard"className="inline-block rounded-t-lg p-4 border-2 border-gray-300 rounded-t-lg hover:text-gray-600 hover:bg-slate-200 dark:text-blue-500 dark:border-blue-500 active:border-b-blue-500 active:text-blue-500" aria-current="page">Dashboard</a>
          </li>
          <li className="me-1">
              <a href={route('users.edit', auth.user.id)} className="inline-block p-4 border-2 border-gray-300 rounded-t-lg hover:text-gray-600 hover:bg-slate-200 hover:border-gray-300 dark:hover:text-gray-300 active:border-b-blue-500 active:text-blue-500" aria-current="page">Settings</a>
          </li>
          <li className="me-1">
              <a href="#" className="inline-block p-4 border-2 border-gray-300 rounded-t-lg hover:text-gray-600 hover:bg-slate-200 dark:hover:text-gray-300 active:border-b-blue-500 active:text-blue-500" aria-current="page">Contacts</a>
          </li>
          <li>
              <a className="inline-block p-4 text-gray-400 rounded-t-lg cursor-not-allowed dark:text-gray-500 cursor">Disabled</a>
          </li>
        </ul>
    </div>
    )
}    