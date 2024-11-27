import { defineStore } from 'pinia';
import { Settings } from '../types';

export const useSettingsStore = defineStore('settings', {
  state: () => ({
    settings: {
       isDarkTheme: false,
    } as Settings,
  }),
  persist: true,
  actions: {
    setTheme(theme: boolean) {
        this.settings.isDarkTheme = theme;
    },
    getTheme() {
        return this.settings.isDarkTheme;
    },
  },
});
