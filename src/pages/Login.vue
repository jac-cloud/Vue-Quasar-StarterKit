<template>
    <q-page class="flex flex-center">
        <q-card class="q-pa-md" style="max-width: 400px; width: 100%;">
            <q-card-section>
                <div class="text-h6 q-mb-md text-center">Login</div>
            </q-card-section>

            <q-card-section>
                <q-form @submit="onSubmit">
                    <q-input v-model="email" label="Email" type="email" :rules="[val => !!val || 'Email is required']"
                        outlined class="q-mb-md" autofocus />
                    <q-input v-model="password" label="Password" type="password" :rules="[
                        val => !!val || 'Password is required',
                        val => val.length >= 4 || 'Password must be at least 8 characters',
                        val => /[A-Z]/.test(val) || 'Password must contain at least one uppercase letter',
                        val => /[a-z]/.test(val) || 'Password must contain at least one lowercase letter',
                        val => /[0-9]/.test(val) || 'Password must contain at least one number',
                        val => /[!@#$%^&*]/.test(val) || 'Password must contain at least one special character'
                    ]" outlined class="q-mb-md" />
                    <q-btn type="submit" label="Login" color="primary" class="full-width q-mt-md" />
                </q-form>
            </q-card-section>
        </q-card>
    </q-page>
</template>

<script>
import { useQuasar } from 'quasar';
import { useUserStore } from '../utils/store/userStore';

const userStore = useUserStore();

const $q = useQuasar();

export default {
    data() {
        return {
            email: '',
            password: ''
        };
    },
    methods: {
        onSubmit() {
            this.$q.notify({
                color: 'primary',
                position: 'top',
                message: 'Logging in...',
                icon: 'cloud_done'
            });
            if (this.email && this.password) {
                // Handle login logic here
                userStore.login({
                    id: '1',
                    name: 'John Doe',
                    roles: ['admin'],
                    token: 'token'
                });
                this.$router.push('/');

            }
        }
    }
};
</script>

<style scoped>
.full-width {
    width: 100%;
}

.q-page {
    padding: 0;
}

.q-card {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
}

.q-card-section {
    padding: 1rem;
}

/* Responsive design for small screens */
@media (max-width: 600px) {
    .q-card {
        max-width: 90%;
        margin: 0 auto;
    }

    .q-input {
        width: 100%;
    }

    .q-btn {
        width: 100%;
    }
}
</style>