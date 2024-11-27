<template>
    <q-select v-model="selectedLanguage" :options="languages" @update:model-value="changeLanguage" class="q-mb-md" flat
        dense />
</template>

<script>
import { languages } from '../main';
import { useSettingsStore } from '../utils/store/settingsStore';

export default {
    data() {
        return {
            languages: Object.entries(languages).map(([key, value]) => ({
                value: key,
                label: value.label
            })),
            useSettingsStore: useSettingsStore(),
            selectedLanguage: {
                label: languages[this.$i18n.locale].label,
                value: this.$i18n.locale,
            },
        };
    },
    methods: {
        changeLanguage() {
            console.log(this.selectedLanguage);
            this.useSettingsStore.setLanguage(this.selectedLanguage.value);
            this.$i18n.locale = this.selectedLanguage.value;
        },
    },
};
</script>

<style scoped>
/* Add your styles here */
</style>