import { FunctionComponent } from 'react';
import Footer from './Components/Footer';
import Header from './Components/Header';
import TaskList from './Components/TaskList';

const ToDoApp: FunctionComponent = () => {
  return (
    <div className="text-center w-40-0 m-auto">
      <p className="text-grey text-2-8">todos</p>
      <div className="mt-2-0  border border-grey rounded-0-2 bg-white">
        {/* You can insert new task from Header,mark all tasks completed and edit a tasks name */}
        <Header />

        {/* You can see your tasks in TaskList section, complete, delete and add to edit mode */}
        <TaskList />

        {/* You can see hom many task u have left in footer, 
        filter it by active and completed tasks, and clear completed tasks */}
        <Footer />
      </div>
    </div>
  );
};

export default ToDoApp;
