import { defineStore } from 'pinia';
import { User } from '../types';
import { useSettingsStore } from './settingsStore';

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null as User | null,
    isAuthenticated: false,
  }),
  persist: true,
  actions: {
    login(userData: { email: string; password: string }) {
      const settingsStore = useSettingsStore();
      const registered = settingsStore.settings.accountRegistered;
      const user = registered.find(u => u.email === userData.email && u.password === userData.password);
      if (user) {
        this.user = user;
        this.isAuthenticated = true
      }
    },
    logout() {
      this.user = null;
      this.isAuthenticated = false;
    },
    getUser() {
      return this.user;
    },
    getIsAuthenticated() {
      return this.isAuthenticated;
    },
  },
});
