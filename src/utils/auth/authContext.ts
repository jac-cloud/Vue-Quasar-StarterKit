import { reactive } from 'vue';

const authContext = reactive({
  isAuthenticated: true, // Track authentication status
  login() {
    this.isAuthenticated = true; // Simulate login (you can replace with real authentication)
  },
  logout() {
    this.isAuthenticated = false; // Simulate logout
  },
});

export default authContext;
