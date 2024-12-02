import { defineStore } from 'pinia';
import { Settings } from '../types';
import { User } from '../types';

export const useSettingsStore = defineStore('settings', {
  state: () => ({
    settings: {
      isDarkTheme: false,
      languageSelected: 'en-EN',
      accountRegistered: [] as User[],
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
    setLanguage(language: string) {
      this.settings.languageSelected = language;
    },
    getLanguage() {
      return this.settings.languageSelected;
    },
    addAccount(user: User) {
      if (this.settings.accountRegistered && !this.settings.accountRegistered.some(u => u.email === user.email)) {
        this.settings.accountRegistered.push(user);
        return true;
      }
      return false;
    },
  },
});
