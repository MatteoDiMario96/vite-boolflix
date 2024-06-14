<script>
import { store } from '../store';
import axios from 'axios';
export default {
    data() {
        return {
            store,
        }
    },
    methods:{
    },
    created(){

    },
    updated(){
        
    }
}
</script>

<template>
    <input type="text" id="filtered-film" name="filter-film" minlength="1" maxlength="50" v-model="store.filterFilmsList" @keyup.enter="store.GetApiSeriesAndFilmsList()">
</template>

<style scoped>

</style>