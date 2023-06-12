import useStore from '@/context/Context';
import { Task } from '@/utils/interfaces/interfaces';
import clsx from 'clsx';
import { FunctionComponent, useCallback } from 'react';

const TaskList: FunctionComponent = () => {
  const { tasks, setTasks, active, setEdit } = useStore();

  const handleTasksFilter = useCallback(
    (task: Task): boolean => {
      const activeStatus = active.toLowerCase();
      if (activeStatus === 'all') return true;
      return task.status === activeStatus;
    },
    [active]
  );

  const handleChangeTaskStatus = (curr: Task): void => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task === curr ? { ...task, status: task.status === 'completed' ? 'active' : 'completed' } : task
      )
    );
  };

  const handleDeleteTask = useCallback(
    (curr: Task) => {
      const filteredArr = tasks.filter((task) => task !== curr);
      setTasks(filteredArr);
    },
    [tasks, setTasks]
  );

  return (
    <div>
      {tasks
        .filter((task) => handleTasksFilter(task))
        .map((task, i) => (
          <div
            onDoubleClick={() => setEdit(task)}
            key={task.title + i}
            className="h-5-0 border-b border-grey flex items-center px-1-0 group"
          >
            <div
              onClick={() => handleChangeTaskStatus(task)}
              className="rounded-50-percent w-2-5 h-2-5 border border-grey mr-1-0 relative cursor-pointer"
            >
              {task.status === 'completed' && (
                <div className="w-1-2 h-0-6 -mt-0-2 border-t border-r border-grey-darker transform rotate-[135deg] absolute top-50-percent left-50-percent -translate-x-50-percent -translate-y-50-percent"></div>
              )}
            </div>
            <p className={clsx('text-1-6 text-black', task.status === 'completed' && '!text-grey line-through')}>
              {task.title}
            </p>
            <div
              onClick={() => handleDeleteTask(task)}
              className="cursor-pointer h-2-8 w-2-8 relative ml-auto rotate-[135deg] hidden group-hover:block"
            >
              <div className="absolute w-1-2 h-0-1 bg-black rounded-0-4 -translate-y-50-percent -translate-x-50-percent top-50-percent left-50-percent"></div>
              <div className="absolute w-0-1 h-1-2 bg-black rounded-0-4 -translate-x-50-percent -translate-y-50-percent top-50-percent left-50-percent"></div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default TaskList;
