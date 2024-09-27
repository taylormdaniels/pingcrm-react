import MainLayout from '@/Layouts/MainLayout';

function TimelinePage() {
  return (
    <div>
      <h1 className="mb-8 text-3xl font-bold">Timeline</h1>
      <p className="mb-12 leading-normal">Not implemented</p>
    </div>
  );
}

/**
 * Persistent Layout (Inertia.js)
 *
 * [Learn more](https://inertiajs.com/pages#persistent-layouts)
 */
TimelinePage.layout = (page: React.ReactNode) => (
  <MainLayout title="Timeline" children={page} />
);

export default TimelinePage;
