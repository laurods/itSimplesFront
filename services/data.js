import axios from 'axios';
const API_BASE = '/api/';
/*Função auxiliar para requisições do getHomelist*/
const basicFetch = async (endpoint) =>{ // endpoint -> url da requisição
    const req = await fetch(`${API_BASE}${endpoint}`); // url da api base + url da requisição
    const json = await req.json(); // pega o Json da requisição
    return json; // retorna o Json

}


export default{
    getHomeList: async () =>{
        return [
            {
                slug:'originals',
                title: 'Originais da Netflix',
                items: await basicFetch(`/discover/tv/?with_network=213&language=pt-BR&api_key=${API_KEY}`) // array com os filmes originais
            },
            {
                slug:'trending',
                title: 'Recomendados para você',
                items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`) // array com os filmes 
            },
            {
                slug:'toprated',
                title: 'Em alta',
                items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`) // array com os filmes 
            },
            {
                slug:'action',
                title: 'Ação',
                items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`) // array com os filmes 
            },
            {
                slug:'comedy',
                title: 'comédia',
                items: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`) // array com os filmes 
            },
            {
                slug:'horror',
                title: 'Terror',
                items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`) // array com os filmes 
            },
            {
                slug:'romance',
                title: 'Romance',
                items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`) // array com os filmes 
            },
            {
                slug:'documentary',
                title: 'Documentários',
                items: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`) // array com os filmes 
            },
        ];
    },
    getMovieInfo: async(movieId, type)=>{

        let info = {};

        if(movieId){
            switch(type){
                case 'movie':
                    info = await basicFetch(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`);

                break;
                case 'tv':
                    info = await basicFetch(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`);
                break;
                default:
                    info = null;
                break;
                
            }
        }
        return info;

    }
}