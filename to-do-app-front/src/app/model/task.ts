import { Project } from "./project";

export interface Task {
  id?: string | number,
  name: string,
  userId: number,
  description: string,
  dueDate?: Date,
  priority?: number, // 1, 2, 3
  reminders?: Date[],
  tags?: string[],
  completed: boolean,
  project?: Project
}