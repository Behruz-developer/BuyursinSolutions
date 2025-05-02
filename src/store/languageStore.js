import { create } from 'zustand';

const useLanguageStore = create((set) => ({
  activeLanguage: 'RU',
  active: false,
  activeTab: 0,
  setLanguage: (language) => set({ activeLanguage: language }),
  setActive: (item) => set({ active: item }),
  setActiveTab: (index) => set({ activeTab: index }),
}));

export default useLanguageStore;