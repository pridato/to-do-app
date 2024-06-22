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
  try {
    const response = await axios.post(`${userServiceUrl}/login`, data);
    return response.data;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message || "Login failed");
  }
};