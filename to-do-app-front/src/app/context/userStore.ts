import { create } from 'zustand'
import { User } from '../model/user'
import { UserState } from '../enums/UserState';
/**
 * Store de usuario
 */
const useUserStore = create<UserState>((set) => ({
  // estado inicial, se actualiza con el usuario
  user: null,
  /**
   * metodo para añadir un usuario
   * @param user usuario a añadir al estado
   */
  addUser: (user: User) => set({ user }),
  /**
   * metodo para eliminar un usuario
   */
  removeUser: () => set({ user: null }),
}))

export default useUserStore;