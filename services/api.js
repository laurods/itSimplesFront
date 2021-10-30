import axios from 'axios';

const api = axios.create({    
    baseURL: 'https://it-simples-front.vercel.app/api/',    
});

export default api;