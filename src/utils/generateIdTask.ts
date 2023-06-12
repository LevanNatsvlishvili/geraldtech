import { generateId } from './generateId';

export interface Task {
  title: string;
  status: string;
  id: string;
}

export function generateTask(title: string): Task {
  return {
    title: title,
    status: 'active',
    id: generateId(),
  };
}
