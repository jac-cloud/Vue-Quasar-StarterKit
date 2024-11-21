import { defineStore } from 'pinia'

interface CounterState {
    count: number;
}

export const useCounterStore = defineStore<'counter', CounterState>({
    id: 'counter',
    state: (): CounterState => {
        return { count: 0 }
    },
    actions: {
        increment() {
            this.count++
        },
    },
})
