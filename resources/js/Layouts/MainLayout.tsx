import { Head } from '@inertiajs/react';
import MainMenu from '@/Components/Menu/MainMenu';
import FlashMessages from '@/Components/Messages/FlashMessages';
import TopHeader from '@/Components/Header/TopHeader';
import BottomHeader from '@/Components/Header/BottomHeader';
import StatusMenu from '@/Components/Menu/StatusMenu';

interface MainLayoutProps {
  title?: string;
  children: React.ReactNode;
}

export default function MainLayout({ title, children }: MainLayoutProps) {
  return (
    <>
      <Head title={title} />
      <div className="flex flex-col">
        <div className="flex flex-col h-screen">
          <div className="md:flex">
            <TopHeader />
            <BottomHeader />
          </div>
          <div className="flex flex-row flex-grow overflow-hidden">
            <div className="flex flex-col">
              <MainMenu className="flex-shrink-0 hidden w-56 p-12 overflow-y-auto bg-indigo-800 md:block" />
              {/**
               * We need to scroll the content of the page, not the whole page.
               * So we need to add `scroll-region="true"` to the div below.
               *
               * [Read more](https://inertiajs.com/pages#scroll-regions)
               */}
              <StatusMenu className="flex-shrink-0 hidden w-56 p-6 h-full bg-indigo-800 md:block" />
            </div>          
            <div
              className="w-full px-4 py-8 overflow-hidden overflow-y-auto md:p-12"
              scroll-region="true"
              >
              <FlashMessages />
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
