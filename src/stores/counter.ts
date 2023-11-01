import { defineStore } from 'pinia'

export const useCounter = defineStore('count', {
    state: () => ({
        count: 0,
    }),
    actions: {
        increase() {
            this.count++;
        },
        decrease() {
            this.count--;
        }
    }
});