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
            logoNetflix: {
                url: 'https://t3.ftcdn.net/jpg/04/81/76/22/360_F_481762281_Xcvl3QsGh1pBMvQuyKIoIqq8aYksXEwX.jpg',
            },
            netflixData: [
                {
                    liData: 'Home',
                    active: true,
                    href: '#',
                },{
                    liData: 'Serie TV',
                    active: false,
                    href: '#',
                },{
                    liData: 'Film',
                    active: false,
                    href: '#',
                },{
                    liData: 'Originali',
                    active: false,
                    href: '#',
                },{
                    liData: 'Aggiunti di recente',
                    active: false,
                    href: '#',
                },{
                    liData: 'La mia lista',
                    active: false,
                    href: '#',
                },
            ]
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
        <div id="lista">
            <img :src="logoNetflix.url" alt="">
            <ul>
                <li v-for="(li,index) in netflixData" :key="index">
                    <a :href="li.href" :class="(li.active) ? 'active' : 'not-active'">
                        {{ li.liData }}
                    </a>
                </li>
            </ul>
        </div>
        <div>
            <SearchBar/>
            <AppButton/>
            <LanguageSelect/>
        </div>
    </header>
</template>

<style lang="scss" scoped>
@use '../styles/variables' as *;
    header{
        height: 90px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: $background_color;
        div#lista{
            height: 100%;
            display: flex;
            align-items: center;

            ul{
                display: flex;
                li{
                    margin-right: .5rem;
                    .active{
                        font-weight: 800;
                        }
                    .not-active{
                        color: $text_color_not_hover;
                    }
                    a{
                        color: $text_color_hover;
                        font-weight: 100;
                        font-size: .8rem;
                    }
                }
            }
            img{
                height: 100%;
                margin-right: .5rem;
            }
        }
    }
</style>