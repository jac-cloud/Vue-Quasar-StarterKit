<template>
  <q-layout view="lhh lpR fFf">
    <Drawer />

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import Drawer from './components/Drawer.vue';

export default {
  name: 'AppLayout',
  components: {
    Drawer,
  },
};
</script>