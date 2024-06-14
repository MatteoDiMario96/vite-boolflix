<script>
export default {
    props:{
        singleArticle:{
            type: Object,
        }
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
            <h2>
                {{ singleArticle.original_language }}
            </h2>
            </div>
            <div>
            <h3>
                Voto:
            </h3>
            <h2>
                {{ singleArticle.vote_average }}
            </h2>
            </div>
        </div>
    </li>
</template>

<style lang="scss" scoped>
    div#card{
        display: flex;
        flex-direction: column;
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