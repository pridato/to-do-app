import axios from 'axios';
import { LoginData } from '../model/loginData';
import { userServiceUrl } from '../consts';
import { RestMessage } from '../model/restMessage';

/**
 * metodo para accionar el login del usuario
 * @param data email, password del usuario
 * @returns promesa con el mensaje de respuesta, o trae error directamente de la api o el propio usuario entero
 */
export const login = async (data: LoginData): Promise<RestMessage> => {
  const response = await axios.get(`${userServiceUrl}/login?email=${data.email}&password=${data.password}`)
  return response.data
};

/**
 * metodo para accionar el registro del usuario
 * @param data email, password, username del usuario
 * @returns promesa con el mensaje de respuesta, o trae error directamente de la api o el propio usuario entero
 */
export const signUp = async ({username:user, data: LoginData}:any): Promise<RestMessage> => {
  const data = { user, ...LoginData}
  const response = await axios.post(`${userServiceUrl}/signup`, data)
  return response.data
}