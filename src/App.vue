<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import { store } from './store';

export default {
    components:{
        AppHeader,
        AppMain,
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
    <AppHeader/>

    <AppMain/>

</template>

<style lang="scss">
@use './styles/general.scss';
@use './styles/variables' as *;
@use './styles/mixins' as *;

div#app{
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
}
</style>
