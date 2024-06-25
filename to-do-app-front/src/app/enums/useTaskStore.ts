import { Task } from "../model/task";

export interface TaskState {
  tasks: Task[];
  addTask: (task: Task) => void;
  removeTask: (id: number) => void;
  updateTask: (task: Task) => void;
}