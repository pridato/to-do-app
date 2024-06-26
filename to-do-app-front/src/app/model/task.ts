
export interface Task {
  id?: string | number,
  name: string,
  userId: number,
  description: string,
  dueDate?: Date,
  priority?: number, // 1, 2, 3
  completed: boolean,
  projectId?: number
}