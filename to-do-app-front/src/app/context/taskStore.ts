import { create } from 'zustand'
import { Task } from '../model/task'
import { TaskState } from '../enums/useTaskStore'

/**
 * Store de tareas
 */
const useTaskStore = create<TaskState>((set) => ({
  // estado inicial, se actualiza con las tareas
  tasks: [],
  /**
   * metodo para añadir una tarea
   * @param task tarea a añadir al estado
   */
  addTask: (task) => set((state) => ({ tasks: [...state.tasks, task] })),
  /**
   * metodo para eliminar una tarea
   * @param taskId id de la tarea a eliminar
   */
  removeTask: (taskId) =>
    set((state) => ({
      tasks: state.tasks.filter((task: Task) => task.id !== taskId),
  })),

  /**
   * metodo para actualizar una tarea
   * @param updatedTask tarea ya creada a actualizar
  */
  updateTask: (updatedTask) =>
    set((state) => ({
      tasks: state.tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task)),
    })),
}))

export default useTaskStore;