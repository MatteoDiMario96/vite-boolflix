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
    <input type="text" id="filtered-film" name="filter-film" minlength="1" maxlength="15" v-model="store.filterFilmsList">
</template>

<style scoped>

</style>