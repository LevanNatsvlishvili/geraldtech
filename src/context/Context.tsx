import React, { createContext, useContext, useState, FunctionComponent, ReactNode } from 'react';
import { generateId } from '@/utils/generateId';
import { Edit, Task } from '@/utils/interfaces/interfaces';

interface ContextValue {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  active: string;
  setActive: React.Dispatch<React.SetStateAction<string>>;
  edit: Edit; // Add this line
  setEdit: React.Dispatch<React.SetStateAction<Edit>>;
}

export const StoreContext = createContext<ContextValue | undefined>(undefined);

interface StoreContextProviderProps {
  children: ReactNode;
}

export const StoreContextProvider: FunctionComponent<StoreContextProviderProps> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: generateId(), title: 'First task', status: 'completed' },
    { id: generateId(), title: 'Second task', status: 'active' },
    { id: generateId(), title: 'Third task', status: 'completed' },
  ]);
  const [active, setActive] = useState('All');
  const [edit, setEdit] = useState<Edit>({});

  return (
    <StoreContext.Provider value={{ tasks, setTasks, active, setActive, edit, setEdit }}>
      {children}
    </StoreContext.Provider>
  );
};

const useStore = (): ContextValue => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStore must be used within a StoreContextProvider');
  }
  return context;
};

export default useStore;
