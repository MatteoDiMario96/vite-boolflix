<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
export default {
    components:{
        AppHeader,
        AppMain,
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
}
</style>
