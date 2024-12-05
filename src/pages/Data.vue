<script setup>
import { useQuasar } from "quasar";
import { ref } from "vue";

const $q = useQuasar();
const rows = ref([
	{ id: 1, name: "John Doe", age: 25 },
	{ id: 2, name: "Jane Doe", age: 24 },
	{ id: 2, name: "Jane Doe", age: 24 },
	{ id: 2, name: "Jane Doe", age: 24 },
	{ id: 2, name: "Jane Doe", age: 24 },
	{ id: 2, name: "Jane Doe", age: 24 },
	{ id: 2, name: "Jane Doe", age: 24 },
	{ id: 2, name: "Jane Doe", age: 24 },
	{ id: 2, name: "Jane Doe", age: 24 },
	{ id: 2, name: "Jane Doe", age: 24 },
	{ id: 2, name: "Jane Doe", age: 24 },
	{ id: 3, name: "Jim Doe", age: 26 },
]);

const columns = ref([
	{
		name: "name",
		required: true,
		label: "Name",
		align: "left",
		field: "name",
		sortable: true,
	},
	{
		name: "age",
		required: true,
		label: "Age",
		align: "center",
		field: "age",
		sortable: true,
	},
]);
</script>

<template>
            <q-table
                :rows="rows"
                :columns="columns"
                row-key="id"
            >
                <template v-slot:body-cell-name="props">
                    <q-td :props="props">
                        {{ props.row.name }}
                    </q-td>
                </template>
                <template v-slot:body-cell-age="props">
                    <q-td :props="props">
                        {{ props.row.age }}
                    </q-td>
                </template>
            </q-table>
</template>

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
