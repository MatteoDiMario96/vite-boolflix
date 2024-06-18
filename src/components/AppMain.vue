<script>
import MainList from './MainList.vue';
export default {
    components:{
        MainList,
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
    <main>
        <MainList/>
    </main>

</template>

<style lang="scss" scoped>
@use '../styles/variables' as *;
    main{
        height: calc(100% - 90px);
        background-color: #434343;
        color: $text_color_hover;
        overflow-x: scroll;
    }
</style>