import { create } from 'zustand';

const useTeamStore = create((set) => ({
    item: 0,
    setItem: (index, length) =>
        set(() => ({
            item: (index + length) % length, 
        })),
}));

export default useTeamStore;