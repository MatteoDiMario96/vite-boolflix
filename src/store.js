import { reactive } from 'vue';
import axios from 'axios';

export const store = reactive({
    filterFilmsList: '',
    arrayFilteredList: [],
    GetApiFilmsList(){
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=e99307154c6dfb0b4750f6603256716d&language=it-IT&query=${this.filterFilmsList}`)
        .then((response) => {
            // handle success
            console.log(response.data);
            this.arrayFilteredList = response.data
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
        });
    },
    GetApiSeriesAndFilmsList(){
        axios.get(`https://api.themoviedb.org/3/search/multi?api_key=e99307154c6dfb0b4750f6603256716d&language=it-IT&query=${this.filterFilmsList}`)
        .then((response) => {
            // handle success
            console.log(response.data);
            this.arrayFilteredList = response.data
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