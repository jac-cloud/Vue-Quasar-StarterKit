<template>
    <q-page class="flex flex-center">
        <q-card class="q-pa-md" style="max-width: 400px; width: 100%;">
            <q-card-section>
                <div class="text-h6 q-mb-md text-center">Login</div>
            </q-card-section>

            <q-card-section>
                <q-form @submit="onSubmit">
                    <q-input v-model="email" label="Email" outlined />
                    <div v-for="error in v$.$errors.filter(item => item.$property === 'email')" :key="error" class="text-negative">{{ error }}</div>
                    <q-space />
                    <q-input v-model="password" label="Password" type="password" outlined />
                    <div v-for="error in v$.$errors.filter(item => item.$property === 'password')" :key="error" class="text-negative">{{ error }}</div>
                    <q-space />
                    <q-btn type="submit" label="Login" color="primary" class="full-width q-mt-md" />
                </q-form>
            </q-card-section>
        </q-card>
    </q-page>
</template>

<script>
import { useQuasar } from 'quasar';
import { useUserStore } from '../utils/store/userStore';
import { useVuelidate } from '@vuelidate/core'
import { required, email, minLength } from '@vuelidate/validators'

const userStore = useUserStore();

const $q = useQuasar();

export default {
    setup() {
        const v$ = useVuelidate();
        return { v$ };
    },
    data() {
        return {
            email: 'f@f.com',
            password: '123Aa!4'
        };
    },
    methods: {
        async onSubmit() {
            const result = await this.v$.$validate()
            if (result) {
                userStore.login({
                    email: this.email,
                    password: this.password
                });
                if (!userStore.isAuthenticated){
                    this.$q.notify({
                        color: 'negative',
                        position: 'top',
                        message: 'Invalid credentials',
                        icon: 'warning'
                    });
                    return;
                }
                this.$router.push('/');
                this.$q.notify({
                    color: 'primary',
                    position: 'top',
                    message: 'Logging in...',
                    icon: 'cloud_done'
                });
            } else {
                this.$q.notify({
                    color: 'negative',
                    position: 'top',
                    message: 'Please fill in the form correctly',
                    icon: 'warning'
                });
            }
        }
    },
    validations() {
        return {
            email: {
                required,
                email
            },
            password: {
                required,
                minLength: minLength(6),
                uppercase: (value) => /[A-Z]/.test(value),
                lowercase: (value) => /[a-z]/.test(value),
                number: (value) => /[0-9]/.test(value),
                special: (value) => /[!@#$%^&*]/.test(value)
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