<script>
export default {
    props:{
        votoArticle:{
            type: Object,
        },
    },
    data() {
        return {
            
        }
    },
    methods:{

    },
    created(){

    }
}
</script>

<template>
    <h3>
        Voto:
    </h3>
    <h2>
        {{ votoArticle.vote_average }}
    </h2>
</template>

<style scoped>

</style>