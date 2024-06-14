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
            <ListSingleArticle v-for="film in store.arrayFilteredList.results" :key="film.id"
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