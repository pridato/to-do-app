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
