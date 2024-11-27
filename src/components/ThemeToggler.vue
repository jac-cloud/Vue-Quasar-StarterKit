<template>
    <q-toggle
    v-model="themeIsDark"
    @update:model-value="toggleTheme"
    label="Dark Mode"
    checked-icon="check"
    unchecked-icon="close"
  />
</template>

<script>
import { useQuasar } from 'quasar';
import { useSettingsStore } from '../utils/store/settingsStore';

export default {
  data() {
    const $q = useQuasar()
    return {
      themeIsDark: this.$q.dark.isActive,
      settingsStore: useSettingsStore(),
    };
  },
  methods: {
    toggleTheme() {
      this.themeIsDark = !!this.themeIsDark;
    },
  },

  watch: {
    themeIsDark(val) {
      this.settingsStore.setTheme(val);
      this.$q.dark.set(val);
    },
  },

  created() {
    console.log(this.settingsStore.getTheme());
    this.themeIsDark = this.settingsStore.getTheme();
  },
};
</script>