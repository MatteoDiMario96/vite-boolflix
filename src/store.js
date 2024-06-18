import { reactive } from 'vue';
import axios from 'axios';

export const store = reactive({
    filterFilmsList: '',
    arrayFilmFilteredList: [],
    arraySerieFilteredList: [],
    arrayLanguages: [],
    languageChoosen: "",
    GetApiFilmsList(){
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=e99307154c6dfb0b4750f6603256716d&language=${this.languageChoosen}&query=${this.filterFilmsList}`)
        .then((response) => {
            // handle success
            console.log(12212 ,response.data.results);
            this.arrayFilmFilteredList = response.data.results
            // this.filterFilmsList = '';
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
        });
        axios.get(`https://api.themoviedb.org/3/search/tv?api_key=e99307154c6dfb0b4750f6603256716d&language=${this.languageChoosen}&query=${this.filterFilmsList}`)
        .then((response) => {
            // handle success
            console.log(2323 ,response.data.results);
            this.arraySerieFilteredList = response.data.results
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
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