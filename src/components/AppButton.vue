<script>
import { store } from '../store';
export default {
    data() {
        return {
            store,
        }
    },
    methods:{

    },
    created(){

    }
}
</script>

<template>
    <button @click="store.GetApiSeriesAndFilmsList()">
        Invia
    </button>
</template>

<style scoped>

</style>