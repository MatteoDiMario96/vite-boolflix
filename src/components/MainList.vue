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
            <div v-if="(store.arrayFilmFilteredList.length > 0 || store.arraySerieFilteredList.length > 0)">
            <h4>
                Film
            </h4>
            <ListSingleArticle v-for="film in store.arrayFilmFilteredList" :key="film.id"
            :singleArticle="film"
            />
            <h4>
                Serie Tv
            </h4>
            <ListSingleArticle v-for="film in store.arraySerieFilteredList" :key="film.id"
            :singleArticle="film"
            />
            </div>
            <div v-else-if="(store.arrayFilmFilteredList.length === 0 && store.filterFilmsList === '' )">
                Inizia a cercare un film o una serie TV
            </div>
            <div v-else>
                <h4>
                La ricerca non ha prodotto risultati.
                </h4>
            </div>
        </ul>
        
    </section>
</template>

<style lang="scss" scoped>
    ul{
        padding: 2rem;
    }
</style>