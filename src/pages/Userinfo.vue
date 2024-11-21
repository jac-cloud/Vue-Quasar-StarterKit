<template>
    <q-page class="q-pa-md">
        <q-card>
            <q-card-section>
                <div class="text-h6">User Information</div>
            </q-card-section>

            <q-card-section>
                <div class="q-mb-md">
                    <q-item>
                        <q-item-section>
                            <q-item-label>Name</q-item-label>
                            <q-item-label caption>{{ user.name }}</q-item-label>
                        </q-item-section>
                    </q-item>
                </div>
                <div class="q-mb-md">
                    <q-item>
                        <q-item-section>
                            <q-item-label>Id</q-item-label>
                            <q-item-label caption>{{ user.id }}</q-item-label>
                        </q-item-section>
                    </q-item>
                </div>
                <div class="q-mb-md">
                    <q-item>
                        <q-item-section>
                            <q-item-label>Token</q-item-label>
                            <q-item-label caption>{{ user.token }}</q-item-label>
                        </q-item-section>
                    </q-item>
                </div>
            </q-card-section>
        </q-card>
    </q-page>
</template>

<script>
import { useUserStore } from '../utils/store/userStore';
const userStore = useUserStore();
export default {
    data() {
        return {
            user: {
                id: '',
                name: '',
                roles: [],
                token: '',
            }
        };
    },
    mounted() {
        this.user = userStore.getUser();
    },
};
</script>

<style scoped>
.q-pa-md {
    padding: 16px;
}
</style>