import { create } from 'zustand'
import i18n from '../../../i18n';

interface LangStoreState {
  i18next: typeof i18n;
  setI18next: (i18next: typeof i18n) => void;
}

const useLangStore = create<LangStoreState>((set) => ({
  i18next: i18n,
  setI18next: (newI18next) => set({ i18next: newI18next }),
}));

export default useLangStore;