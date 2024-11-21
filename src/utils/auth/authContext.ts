import { reactive } from 'vue';
import { User } from '../types';

const authContext = reactive({
  isAuthenticated: true,
  user: null as User | null,
  login(user: User) {
    this.isAuthenticated = true; // Simulate login (you can replace with real authentication)
    this.user = user; // Set user data
  },
  logout() {
    this.isAuthenticated = false;
    this.user = null;
  },
});

export default authContext;
