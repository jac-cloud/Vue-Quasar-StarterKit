<template>
  <q-page class="q-pa-md flex flex-center">
      <img src="https://em-content.zobj.net/source/apple/391/clown-face_1f921.png" alt="Popipopi" class="q-mb-md anim" width="400px"/>
  </q-page>
</template>

<script>
export default {
	name: "Home",
};
</script>

<style scoped>
.q-page {
  background-color: #f5f5f5;
}

.anim {
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
