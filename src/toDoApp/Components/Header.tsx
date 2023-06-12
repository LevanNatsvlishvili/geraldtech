import useStore from '@/context/Context';
import { generateTask } from '@/utils/generateIdTask';
import { Task } from '@/utils/interfaces/interfaces';
import { FormEvent, FunctionComponent, useCallback, useState } from 'react';

const Header: FunctionComponent = () => {
  const { tasks, setTasks, edit, setEdit } = useStore();
  const [newTask, setNewTask] = useState<string>('');

  // ...

  const handleAddTask = useCallback(
    (e: FormEvent<HTMLFormElement>): void => {
      e.preventDefault();
      setTasks((p) => [...p, { ...generateTask(newTask) }]);
      setNewTask('');
    },
    [newTask, setTasks]
  );

  const handleEditTask = useCallback((): void => {
    const newArr = tasks.map((task) => {
      if (edit.id === task.id) return { ...task, ...edit };
      return task;
    });
    setTasks(newArr);
    setEdit({});
  }, [tasks, edit, setTasks, setEdit]);

  const handleSubmitTask = useCallback(
    (e: FormEvent<HTMLFormElement>): void => {
      e.preventDefault();
      edit.id ? handleEditTask() : handleAddTask(e);
    },
    [edit.id, handleEditTask, handleAddTask]
  );

  const handleCompleteAllTask = useCallback(
    (e: React.MouseEvent<HTMLDivElement>): void => {
      const arr: Task[] = tasks.map((task) => ({ ...task, status: 'completed' }));
      setTasks(arr);
    },
    [tasks, setTasks]
  );

  return (
    <div className="h-5-0 border-b  border-grey flex items-center px-1-0">
      <div onClick={handleCompleteAllTask} className="w-1-8 h-1-8 stroke-grey mr-1-0 cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="inherit">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M19 9l-7 7-7-7"></path>
        </svg>
      </div>

      <form onSubmit={handleSubmitTask}>
        {edit.title ? (
          <input
            value={edit.title}
            onChange={(e) => setEdit((p) => ({ ...p, title: e.target.value }))}
            className="outline-none text-1-6"
            placeholder="What needs to be done"
            autoFocus
          />
        ) : (
          <input
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="outline-none text-1-6"
            placeholder="What needs to be done"
          />
        )}
      </form>
    </div>
  );
};

export default Header;
