<template>
    <q-page class="flex flex-center">
        <q-card class="q-pa-md" style="max-width: 400px; width: 100%;">
            <q-card-section>
                <div class="text-h6 q-mb-md text-center">Register</div>
            </q-card-section>

            <q-card-section>
                <q-form @submit="onSubmit">
                    <q-input v-model="name" label="Name" outlined class="q-mb-md" />
                    <div v-for="error in v$.$errors.filter(item => item.$property === 'name')" :key="error"
                        class="text-negative q-mt-xs">{{ error.$message }}</div>
                    <q-space />
                    <q-input v-model="surname" label="Surname" outlined class="q-mb-md" />
                    <div v-for="error in v$.$errors.filter(item => item.$property === 'surname')" :key="error"
                        class="text-negative q-mt-xs">{{ error.$message }}</div>
                    <q-space />
                    <q-select v-model="sex" :options="sexOptions" label="Sex" outlined class="q-mb-md" />
                    <div v-for="error in v$.$errors.filter(item => item.$property === 'sex')" :key="error"
                        class="text-negative q-mt-xs">{{ error.$message }}</div>
                    <q-space />
                    <q-input v-model="email" label="Email" outlined class="q-mb-md" />
                    <div v-for="error in v$.$errors.filter(item => item.$property === 'email')" :key="error"
                        class="text-negative q-mt-xs">{{ error.$message }}</div>
                    <q-space />
                    <q-input v-model="password" label="Password" type="password" outlined class="q-mb-md" />
                    <div v-for="error in v$.$errors.filter(item => item.$property === 'password')" :key="error"
                        class="text-negative q-mt-xs">{{ error.$message }}</div>
                    <q-space />
                    <q-input v-model="confirmPassword" label="Confirm Password" type="password" outlined
                        class="q-mb-md" />
                    <div v-for="error in v$.$errors.filter(item => item.$property === 'confirmPassword')" :key="error"
                        class="text-negative q-mt-xs">{{ error.$message }}</div>
                    <q-space />
                    <q-select v-model="role" :options="roleOptions" label="User Role" outlined class="q-mb-md" />
                    <div v-for="error in v$.$errors.filter(item => item.$property === 'role')" :key="error"
                        class="text-negative q-mt-xs">{{ error.$message }}</div>
                    <q-space />
                    <q-checkbox v-model="privacyAccepted" label="I accept the privacy policy" class="q-mb-md" />
                    <div v-for="error in v$.$errors.filter(item => item.$property === 'privacyAccepted')" :key="error"
                        class="text-negative q-mt-xs">{{ error.$message }}</div>
                    <q-space />
                    <q-btn type="submit" label="Register" color="primary" class="full-width q-mt-md" />
                </q-form>
            </q-card-section>
        </q-card>
    </q-page>
</template>

<script>
import { useQuasar } from 'quasar';
import { useSettingsStore } from '../utils/store/settingsStore';
import { useVuelidate } from '@vuelidate/core'
import { required, email, minLength, sameAs } from '@vuelidate/validators'

const userSetting = useSettingsStore();

const $q = useQuasar();

export default {
    setup() {
        const v$ = useVuelidate();
        return { v$ };
    },
    data() {
        return {
            name: '',
            surname: '',
            sex: '',
            email: '',
            password: '',
            confirmPassword: '',
            role: 'Client',
            privacyAccepted: false,
            sexOptions: ['Male', 'Female', 'Other'],
            roleOptions: ['Client', 'Admin']
        };
    },
    methods: {
        async onSubmit() {
            const result = await this.v$.$validate()
            if (result) {
                const result = userSetting.addAccount({
                    name: this.name,
                    surname: this.surname,
                    email: this.email,
                    sex: this.sex,
                    role: this.role,
                    password: this.password,
                    privacyAccepted: this.privacyAccepted
                });
                if (!result) {
                    this.$q.notify({
                        color: 'negative',
                        position: 'top',
                        message: 'Account already exists',
                        icon: 'warning'
                    });
                    return;
                }
                this.$router.push('/');
                this.$q.notify({
                    color: 'primary',
                    position: 'top',
                    message: 'Registering...',
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
            name: { required },
            surname: { required },
            sex: { required },
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
            },
            confirmPassword: {
                required,
                sameAsPassword: sameAs(this.password)
            },
            role: { required },
            privacyAccepted: { required }
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

.text-negative {
    margin-top: 4px;
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
