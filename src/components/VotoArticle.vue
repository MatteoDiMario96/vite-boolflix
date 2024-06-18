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
    <div v-if="(Math.ceil(votoArticle.vote_average / 2) === 0)">
        <font-awesome-icon :icon="['fas', 'star-of-life']" />
    </div>
    <div v-else-if="(Math.ceil(votoArticle.vote_average / 2) === 1)">
        <font-awesome-icon :icon="['fas', 'star']" />
    </div>
    <div v-else-if="(Math.ceil(votoArticle.vote_average / 2) === 2)">
        <font-awesome-icon :icon="['fas', 'star']" />
        <font-awesome-icon :icon="['fas', 'star']" />
    </div>
    <div v-else-if="(Math.ceil(votoArticle.vote_average / 2) === 3)">
        <font-awesome-icon :icon="['fas', 'star']" />
        <font-awesome-icon :icon="['fas', 'star']" />
        <font-awesome-icon :icon="['fas', 'star']" />
    </div>
    <div v-else-if="(Math.ceil(votoArticle.vote_average / 2) === 4)">
        <font-awesome-icon :icon="['fas', 'star']" />
        <font-awesome-icon :icon="['fas', 'star']" />
        <font-awesome-icon :icon="['fas', 'star']" />
        <font-awesome-icon :icon="['fas', 'star']" />
    </div>
    <div v-else-if="(Math.ceil(votoArticle.vote_average / 2) === 5)">
        <font-awesome-icon :icon="['fas', 'star']" />
        <font-awesome-icon :icon="['fas', 'star']" />
        <font-awesome-icon :icon="['fas', 'star']" />
        <font-awesome-icon :icon="['fas', 'star']" />
        <font-awesome-icon :icon="['fas', 'star']" />
    </div>
    <div v-else>
        Non ci sono valutazioni.
    </div>
    
</template>

<style lang="scss" scoped>
@use '../styles/variables' as *;
    h3{
        margin-bottom: .4rem;
        margin-right: .7rem;
        color: $color_text_img;
    }
    .fa-star{
        color: $color_text_img;
    }
    .fa-star-of-life{
        color: $color_text_img;
    }

</style>