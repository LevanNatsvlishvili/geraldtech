import useStore from '@/context/Context';
import clsx from 'clsx';
import { FunctionComponent, useCallback } from 'react';

const statuses = ['All', 'Active', 'Completed'];

const Footer: FunctionComponent = () => {
  const { tasks, setTasks, active, setActive } = useStore();

  const handleClearCompleted = useCallback(() => {
    const completedTasks = tasks.filter((task) => task.status !== 'completed');
    setTasks(completedTasks);
  }, [tasks, setTasks]);

  return (
    <div className="h-2-5  flex items-center px-1-0 justify-between">
      <div className="flex justify-center">
        <p className="text-1-2 text-[#A5AAAC]">{tasks.filter((task) => task.status === 'active').length} items left</p>
      </div>
      <div className="flex justify-center space-x-0-4">
        {statuses.map((status) => (
          <div
            key={status}
            onClick={() => setActive(status)}
            className={clsx(
              'px-0-4 text-grey border border-0-2 rounded-0-4 border-transparent cursor-pointer',
              active === status && '!border-grey  '
            )}
          >
            {status}
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <p onClick={handleClearCompleted} className="text-1-2 text-[#A5AAAC] cursor-pointer">
          Clear completed
        </p>
      </div>
    </div>
  );
};

export default Footer;
