import MainLayout from '@/Layouts/MainLayout';

function TasksPage() {
  return (
    <div>
      <h1 className="mb-8 text-3xl font-bold">Tasks</h1>
      <p className="mb-12 leading-normal">Not implemented</p>
    </div>
  );
}

/**
 * Persistent Layout (Inertia.js)
 *
 * [Learn more](https://inertiajs.com/pages#persistent-layouts)
 */
TasksPage.layout = (page: React.ReactNode) => (
  <MainLayout title="Tasks" children={page} />
);

export default TasksPage;
