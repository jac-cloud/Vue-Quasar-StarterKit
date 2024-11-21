<template>
  <q-header reveal bordered class="bg-primary text-white" height-hint="98">
    <q-toolbar>
      <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

      <q-toolbar-title>
        <q-avatar>
          <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
        </q-avatar>
        Title
      </q-toolbar-title>
    </q-toolbar>

    <q-tabs align="center">
      <q-route-tab to="/" label="Home Page" />
      <q-route-tab to="/login" label="Login Page" />
      <q-route-tab v-if="isLogged" to="/me" label="User info Page" />
      <q-route-tab v-if="isLogged" @click="logout" label="Logout" />
    </q-tabs>
  </q-header>

  <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
    <!-- drawer content -->
  </q-drawer>
</template>

<script>
import { useUserStore } from '../utils/store/userStore';

export default {
  data() {
    return {
      leftDrawerOpen: false
    };
  },
  methods: {
    toggleLeftDrawer() {
      this.leftDrawerOpen = !this.leftDrawerOpen;
    },
    logout() {
      const userStore = useUserStore();  // Access store inside a method
      userStore.clearUser();  // Call the store action
    }
  },
  computed: {
    isLogged() {
      const userStore = useUserStore();  // Access store inside computed
      console.log(userStore.isAuthenticated);
      return userStore.isAuthenticated;
    }
  }
};
</script>
