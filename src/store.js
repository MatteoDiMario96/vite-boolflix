import { reactive } from 'vue';
import axios from 'axios';

export const store = reactive({
    filterFilmsList: '',
    arrayFilmFilteredList: [],
    arraySerieFilteredList: [],
    arrayLanguages: [],
    languageChoosen: "",
    GetApiFilmsList(){
        let movieUrl = '';
        let tvUrl = '';

        if(this.filterFilmsList === '') {
            // Se non c'è filtro, recupera i film più popolari
            movieUrl = `https://api.themoviedb.org/3/movie/popular?api_key=e99307154c6dfb0b4750f6603256716d&language=${this.languageChoosen}`;
            tvUrl = `https://api.themoviedb.org/3/tv/popular?api_key=e99307154c6dfb0b4750f6603256716d&language=${this.languageChoosen}`;
        } else {
            // Se c'è un filtro, cerca i film e le serie
            movieUrl = `https://api.themoviedb.org/3/search/movie?api_key=e99307154c6dfb0b4750f6603256716d&language=${this.languageChoosen}&query=${this.filterFilmsList}`;
            tvUrl = `https://api.themoviedb.org/3/search/tv?api_key=e99307154c6dfb0b4750f6603256716d&language=${this.languageChoosen}&query=${this.filterFilmsList}`;
        }

        axios.get(movieUrl)
        .then((response) => {
            console.log("Films:", response.data.results);
            this.arrayFilmFilteredList = response.data.results;
        })
        .catch(function (error) {
            console.log(error);
        });

        axios.get(tvUrl)
        .then((response) => {
            console.log("TV Shows:", response.data.results);
            this.arraySerieFilteredList = response.data.results;
        })
        .catch(function (error) {
            console.log(error);
        });
    },
    getLanguagesApi(){
        axios.get('https://api.themoviedb.org/3/configuration/languages?api_key=e99307154c6dfb0b4750f6603256716d')
        .then((response) => {
            // handle success
            // console.log(response.data);
            this.arrayLanguages = response.data
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
        });
    },
})