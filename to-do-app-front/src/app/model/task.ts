import { Project } from "./project";

export interface Task {
  name: string,
  description: string,
  dueDate: Date,
  priority: number, // 1, 2, 3
  reminders: Date[],
  tags: string[],
  completed: boolean,
  project: Project
}