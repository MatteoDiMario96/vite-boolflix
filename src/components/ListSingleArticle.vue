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
            <div class="relative">
                <ImgArticle
                :ImgArticle="singleArticle"
                />
                <div class="no-display">
                    <div class="absolute titolo">
                        <h3>
                            Titolo:
                        </h3>
                        <h2>
                            {{ singleArticle.title || singleArticle.name  }}
                        </h2>
                    </div>
                    <div class="absolute titolo-originale">
                        <h3>
                            Titolo Originale:
                        </h3>
                        <h2>
                            {{ singleArticle.original_title || singleArticle.original_name }}
                        </h2>
                    </div>
                    <div class="absolute lingua">
                        <h3>
                            Lingua:
                        </h3>
                        <FlagIcon
                        :linguaArticle="singleArticle.original_language"
                        />
                    </div>
                    <div class="absolute voto">
                        <VotoArticle
                        :votoArticle="singleArticle"
                        />
                    </div>
                </div>
            </div>
        </div>
    </li>
</template>

<style lang="scss" scoped>
@use '../styles/variables' as *;
    div#card{
        display: flex;
        flex-direction: column;
        margin: 1rem;
        padding: 1rem;
        div{
            margin-bottom: .3rem;
            h2{
                font-size: 1.2rem;
                text-decoration: underline;
                color: $color_text_img;
            }
            h3{
                font-size: 1rem;
                margin-right: .7rem;
                margin-bottom: .4rem;
                color: $color_text_img;
            }
        }
        div.absolute{
            position: absolute;
            display: flex;
        }
        div.relative{
            position: relative;
        }
        div.titolo{
            bottom: 30px;
            left: 20px;
        }
        div.titolo-originale{
            bottom: 90px;
            left: 20px;
        }
        div.lingua{
            bottom: 150px;
            left: 20px;
        }
        div.voto{
            bottom: 210px;
            left: 20px;
        }
        div.no-display{
            display: none;
        }
        div.relative:hover div.no-display{
            display: inline-block;
        }
    }
</style>