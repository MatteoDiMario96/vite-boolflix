<script>
import MainList from './MainList.vue';
import { store } from '../store';
export default {
    components:{
        MainList,
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
    <main>
        <MainList/>
    </main>

</template>

<style lang="scss" scoped>
@use '../styles/variables' as *;
    main{
        height: calc(100% - 90px);
        overflow-x: scroll;
        background-color: #434343;
        color: $text_color_hover;
        // overflow-x: scroll;
        width: 100vw;
    }
</style>