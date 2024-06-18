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
                <h4 class="text-center">
                    Inizia a cercare un film o una serie TV
                </h4>
            </div>
            <div v-else-if="(store.arrayFilmFilteredList.length === 0 && store.filterFilmsList.length > 0 )">
                <h4 class="text-center">
                    Premi enter o clicka invia per iniziare la ricerca.
                </h4>
                <h4 class="text-center">
                    Per il  momento non ci sono risultati.
                </h4>
            </div>
        </ul>
        
    </section>
</template>

<style lang="scss" scoped>
    ul{
        padding: 2rem;
    }
    div{
        margin: 0 auto;
        h4.text-center{
            text-align: center;
            margin-bottom: .5rem;
        }
    }
</style>