<script>
import { store } from '../store';
export default {
    props:{
        ImgArticle:{
            type: Object,
        },
    },
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
    <img :src="`https://image.tmdb.org/t/p/w185/${ImgArticle.poster_path}`" alt="">
</template>

<style lang="scss" scoped>

</style>