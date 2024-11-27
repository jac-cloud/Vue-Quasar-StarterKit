<template>
  <q-header reveal bordered class="bg-primary text-white" height-hint="98">
    <q-toolbar>
      <q-toolbar-title>
        <q-avatar>
          <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
        </q-avatar>
        Title
      </q-toolbar-title>

      <ThemeToggler />
    </q-toolbar>

    <q-tabs align="center">
      <q-route-tab to="/" label="Home Page" />
      <q-route-tab v-if="!isLogged" to="/login" label="Login Page" />
      <q-route-tab v-if="isLogged" to="/me" label="User info Page" />
      <q-route-tab v-if="isLogged" @click="logout" label="Logout" />
    </q-tabs>

  </q-header>
</template>

<script>
import { useUserStore } from '../utils/store/userStore';
import ThemeToggler from './ThemeToggler.vue';

export default {
  data() {
    return {
      leftDrawerOpen: false,
    };
  },
  components: {
    ThemeToggler
  },
  methods: {
    logout() {
      const userStore = useUserStore();  // Access store inside a method
      userStore.logout();  // Call the store action
    },
  },
  computed: {
    isLogged() {
      const userStore = useUserStore();  // Access store inside computed
      return userStore.isAuthenticated;
    },
  }
};
</script>
