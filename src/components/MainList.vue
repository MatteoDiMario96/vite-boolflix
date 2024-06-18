<script>
import { store } from '../store';
import ListSingleArticle from './ListSingleArticle.vue';
export default {
    components:{
        ListSingleArticle,
    },
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
    <section>
        <ul>
            <div v-if="(store.arrayFilmFilteredList.results.length > 1)">
            <h4>
                Film
            </h4>
            <ListSingleArticle v-for="film in store.arrayFilmFilteredList.results" :key="film.id"
            :singleArticle="film"
            />
            </div>
            <h4>
                Serie Tv
            </h4>
            <ListSingleArticle v-for="film in store.arraySerieFilteredList.results" :key="film.id"
            :singleArticle="film"
            />
        </ul>
    </section>
</template>

<style lang="scss" scoped>
    ul{
        padding: 2rem;
    }
</style>