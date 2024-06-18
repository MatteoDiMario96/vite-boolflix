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
    <button @click="store.GetApiFilmsList()">
        Invia
    </button>
</template>

<style lang="scss" scoped>
    button{
        padding: .3rem .6rem;
    }
</style>