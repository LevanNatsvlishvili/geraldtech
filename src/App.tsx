import { StoreContextProvider } from '@/context/Context';
import { FunctionComponent } from 'react';
import ToDoApp from './toDoApp';

const App: FunctionComponent = () => {
  return (
    <StoreContextProvider>
      <ToDoApp />
    </StoreContextProvider>
  );
};

export default App;
