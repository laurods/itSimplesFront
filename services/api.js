import axios from 'axios';

const api = axios.create({    
    baseURL: 'https://itsimplesbk.vercel.app/',
    headers: {'Access-Control-Allow-Origin': '*'}

});

export default api;