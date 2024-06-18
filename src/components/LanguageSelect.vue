<script>
import { store } from '../store';
export default {
    data() {
        return {
            store,
        }
    },
    methods:{
        chooseLanguage(lingua){
            store.languageChoosen = lingua;
        },
    },
    created(){
        store.getLanguagesApi();
    },
    updated(){
        
    },
}
</script>

<template>
    <select name="language" id="language">
        <option v-for="(language,index) in store.arrayLanguages" :key="index" :value="language.english_name" @click="chooseLanguage(language.iso_639_1)" @change="chooseLanguage(language.iso_639_1)">
            {{ language.english_name }}
        </option>
    </select>
</template>

<style lang="scss" scoped>
    select{
        padding: .3rem .6rem;
    }
</style>