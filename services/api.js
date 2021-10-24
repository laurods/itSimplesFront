import axios from 'axios';

const api = axios.create({    
    baseURL: 'https://itsimplesbk.vercel.app/',
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Access-Control-Allow-Origin' : '*'
    },
});

export default api;