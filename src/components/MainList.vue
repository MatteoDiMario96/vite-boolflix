<script>
import { store } from '../store';
import ListSingleArticle from './ListSingleArticle.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faChevronLeft, faChevronRight);
export default {
    components:{
        ListSingleArticle,
        FontAwesomeIcon,
    },
    data() {
        return {
            store,
            currentFilmScroll: 0, 
            currentTvScroll: 0,
            filmScrollInterval: null,
            tvScrollInterval: null,
            isManual: false,
        }
    },
    methods: {
    moveToEnd(arr) {
        if (arr.length > 0) {
            const [element] = arr.splice(0, 1);
            arr.push(element);
        }
    },
    scrollRight(section) {
        console.log('click destra');
        const slider = this.$refs[`${section}Slider`];
        let scrollWidth = 600;

        slider.scrollBy({ left: scrollWidth, behavior: 'smooth' });

        if (!this.isManual) {
            // Delay per lo scorrimento automatico
            setTimeout(() => {
                this.moveToEndSection(section, scrollWidth);
            }, 3000); // Attendi 3 secondi solo per lo scorrimento automatico
        } else {
            // Scorri immediatamente se è uno scroll manuale
            this.moveToEndSection(section, scrollWidth);
        }
    },
    scrollLeft(section) {
        console.log('click sinistra');
        const slider = this.$refs[`${section}Slider`];
        let scrollWidth = 600;

        slider.scrollBy({ left: -scrollWidth, behavior: 'smooth' });

        if (!this.isManual) {
            // Delay per lo scorrimento automatico
            setTimeout(() => {
                this.moveToEndSection(section, -scrollWidth);
            }, 3000);
        } else {
            // Scorri immediatamente se è uno scroll manuale
            this.moveToEndSection(section, -scrollWidth);
        }
    },
    moveToEndSection(section, scrollWidth) {
        const slider = this.$refs[`${section}Slider`];

        if (slider.scrollLeft + slider.clientWidth <= slider.scrollWidth - Math.abs(scrollWidth)) {
            if (section === 'film') {
                this.moveToEnd(this.store.arrayFilmFilteredList);
            } else {
                this.moveToEnd(this.store.arraySerieFilteredList);
            }

            this.$nextTick(() => {
                slider.scrollBy({ left: -scrollWidth, behavior: 'smooth' });
            });
        }
    },
    startScrolling(section) {
        console.log(`Starting scrolling for ${section}`);
        if (section === 'film') {
            this.filmScrollInterval = setInterval(() => {
                this.scrollRight(section); // Scroll con delay
            }, 5000);
        } else if (section === 'tv') {
            this.tvScrollInterval = setInterval(() => {
                this.scrollRight(section); // Scroll con delay
            }, 5000);
        }
    },
    stopScrolling(section) {
        this.isManual = true;
        if (section === 'film') {
            clearInterval(this.filmScrollInterval);
        } else if (section === 'tv') {
            clearInterval(this.tvScrollInterval);
        }
        console.log(`STOP scrolling for ${section}`);
    },
    resumeScrolling(section) {
        this.startScrolling(section);
        console.log(`RESUME scrolling for ${section}`);
    }
},
    mounted() {
        this.startScrolling('tv');
        this.startScrolling('film');
    },
    beforeDestroy() {
        clearInterval(this.filmScrollInterval);
        clearInterval(this.tvScrollInterval);
    },
    created() {
        store.GetApiFilmsList();
    },
};
</script>

<template>
    <section>
        <ul>
            <div v-if="(store.arrayFilmFilteredList.length > 0 || store.arraySerieFilteredList.length > 0)" class="container">
                <div>
                    <div class="list">
                        <h4>
                            Film
                        </h4>
                    </div>
                    <div class="flex-list" @mouseenter="stopScrolling('film')" @mouseleave="resumeScrolling('film')">
                        <div class="arrow-slider left-arrow "  @click="scrollLeft('film')" >
                            <font-awesome-icon :icon="['fas', 'chevron-left']" :class="'fa-4x '" />
                        </div>
                        <div class="slider">
                            <div class="slider-track" ref="filmSlider">
                                <ListSingleArticle v-for="film in store.arrayFilmFilteredList" :key="film.id"
                                :singleArticle="film" />
                            </div>
                        </div>
                        <div class="arrow-slider right-arrow" @click="scrollRight('film')">
                            <font-awesome-icon :icon="['fas', 'chevron-right']" :class="'fa-4x '" />
                        </div>
                    </div>
                </div>
                <div>
                    <div class="list">
                        <h4>
                            Serie Tv
                        </h4>
                    </div>
                    <div class="flex-list" @mouseenter="stopScrolling('tv')" @mouseleave="resumeScrolling('tv')">
                        <div class="arrow-slider left-arrow" @click="scrollLeft('tv')">
                            <font-awesome-icon :icon="['fas', 'chevron-left']" :class="'fa-4x absolute'" />
                        </div>
                        <div class="slider">
                            <div class="slider-track" ref="tvSlider">
                                <ListSingleArticle v-for="film in store.arraySerieFilteredList " :key="film.id"
                                :singleArticle="film" />
                            </div>
                        </div>
                        <div class="arrow-slider right-arrow" @click="scrollRight('tv')">
                            <font-awesome-icon :icon="['fas', 'chevron-right']" :class="'fa-4x'" />
                        </div>
                    </div>
                </div>
            </div>
            <div v-else-if="(store.arrayFilmFilteredList.length === 0 && store.filterFilmsList === '' )">
                <h4 class="text-center">
                    Inizia a cercare un film o una serie TV
                </h4>
            </div>
            <div v-else-if="(store.arrayFilmFilteredList.length === 0 && store.filterFilmsList.length > 0 )" id="no-result">
                <h4 class="text-center">
                    Premi enter o clicka invia per iniziare la ricerca.
                </h4>
                <h4 class="text-center">
                    Per il  momento non ci sono risultati.
                </h4>
            </div>
        </ul>
        
    </section>
</template>

<style lang="scss" scoped>
    ul{
        padding: 2rem;
        display: flex;
    }
    div.container{
        width: 100vw;
        margin: 0 auto;
        #no-result{
            flex-direction: column;
        }
        div.flex-list{
            display: flex;
            align-items: center;
            position: relative;
            div.slider{
                overflow: hidden; 
                width: 94%;
            }
            div.slider-track{
                display: flex;
                transition: transform 0.3s ease;
            }
        }
        div.list{
            padding-left: 2rem;
            h4{
                font-size: 1.5rem;
            }
        }
        div.arrow-slider{
            height: 511px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            margin: 0 10px;
            position: absolute; 
            top: 49%; 
            transform: translateY(-50%);
            color: gray;
            padding: 0 .5rem;
            &.left-arrow {
                left: 22px; 
                z-index: 1;
            }
            &.right-arrow {
                right: 135px; 
                z-index: 1;
            }
            &:hover{
                background-color: rgba(0, 0, 0, 0.6);
                color: white;
            }
        }
        margin: 0 auto;
        h4.text-center{
            text-align: center;
            margin-bottom: .5rem;
        }
        h4{
            align-content: center;
        }
    }
</style>