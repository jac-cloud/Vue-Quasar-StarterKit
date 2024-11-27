<template>
  <q-layout view="lhh lpR fFf">
    <Drawer />

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  name: 'AppLayout',
  components: {
  },
};
</script>
