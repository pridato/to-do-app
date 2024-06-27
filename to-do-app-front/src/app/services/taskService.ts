import axios from 'axios';
import { Task } from '../model/task';
import { taskServiceUrl } from '../consts';
import { RestMessage } from '../model/restMessage';

/**
 * metodo para añadir una tarea
 * @param task tarea a añadir
 * @returns promesa con el mensaje de respuesta
 */
export async function addTask(task: Task): Promise<RestMessage> {
  const response = await axios.post(`${taskServiceUrl}/add`, task)
  return response.data
}

/**
 * metodo para obtener todas las tareas del usuario logueado
 * @param userId id del usuario en number
 * @returns lista de todas las tareas del usuario
 */
export async function getTasksUser(userId:number): Promise<Task[]> {
  const response = await axios.get(`${taskServiceUrl}/get-tasks-by-user?userId=${userId}`)
  return response.data
}

/**
 * metodo para actualizar una tarea concreta
 * @param task nueva task a actualizar
 * @returns 
 */
export async function updateTask(task: Task): Promise<RestMessage> {
  const response = await axios.post(`${taskServiceUrl}/update-task`, task)
  return response.data
}