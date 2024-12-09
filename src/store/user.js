import { create } from 'zustand';

const userStore = create((set, get) => ({
  data: { user: {} },
  loadData: async (id) => {
    try {
      set({ loadingData: true });
      const response = await getData(id);
      set({ data: response });
    } catch {
      // Todo show error
    } finally {
      set({ loadingData: false });
    }
  },
  loadingData: false,
  updateUser: (user) => {
    set({ data: { ...get().data, user: { ...get().data?.user, ...user } } });
  },
}));

export default userStore;
