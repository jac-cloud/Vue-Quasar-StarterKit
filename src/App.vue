<template>
  <q-layout>
    <q-header>
      <q-toolbar>
        <q-btn flat dense round icon="menu" @click="$refs.leftDrawer.open()" />
        <q-toolbar-title>
          <router-link to="/" class="text-white">Quasar App</router-link>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'App',
};
</script>
