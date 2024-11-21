import { defineStore } from 'pinia';
import { User } from '../types';

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null as User | null,
    isAuthenticated: false,
  }),
  persist: true,
  actions: {
    login(userData : User) {
      this.user = userData;
      this.isAuthenticated = true;
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
    }
  },
});
