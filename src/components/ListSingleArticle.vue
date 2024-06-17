<script>
import { store } from '../store';
import FlagIcon from './FlagIcon.vue';
import ImgArticle from './ImgArticle.vue';
import VotoArticle from './VotoArticle.vue';
export default {
    components:{
        FlagIcon,
        ImgArticle,
        VotoArticle,
    },
    props:{
        singleArticle:{
            type: Object,
        }
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
    <li>
        <div id="card">
            <div>
                <h3>
                Titolo:
            </h3>
            <h2>
                {{ singleArticle.title || singleArticle.name  }}
            </h2>
            </div>
            <div>
                <h3>
                Titolo Originale:
            </h3>
            <h2>
                {{ singleArticle.original_title || singleArticle.original_name }}
            </h2>
            </div>
            <div>
                <h3>
                    Lingua:
                </h3>
                <FlagIcon
                :linguaArticle="singleArticle.original_language"
                />
            </div>
            <div>
                <VotoArticle
                :votoArticle="singleArticle"
                />
            </div>
            <div>
                <ImgArticle
                :ImgArticle="singleArticle"
                />
            </div>
        </div>
    </li>
</template>

<style lang="scss" scoped>
    div#card{
        display: flex;
        flex-direction: column;
        border: 2px solid black;
        border-radius: 1rem;
        margin: 1rem;
        padding: 1rem;
        div{
        display: flex;
        align-items: center;
        margin-bottom: .3rem;
        h2{
            font-size: 1.2rem;
            text-decoration: underline;
        }
        h3{
        font-size: 1rem;
        margin-right: 1rem;
        }
    }
    }
</style>