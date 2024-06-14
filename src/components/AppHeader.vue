<script>
import SearchBar from './SearchBar.vue';
import AppButton from './AppButton.vue';
import LanguageSelect from './LanguageSelect.vue';

export default {
    components:{
        SearchBar,
        AppButton,
        LanguageSelect,
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
    <header>
        <SearchBar/>
        <AppButton/>
        <LanguageSelect/>
    </header>
</template>

<style scoped>

</style>