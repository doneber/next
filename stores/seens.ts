import { defineStore } from 'pinia'

export const useSeens = defineStore('seens', {
    state: () => ({
        history: new Map(),
    }),
    actions: {
        setSeen(key: string, value: boolean) {
            this.history.set(key, value)
            console.log({ key, value })
        },
    },
})