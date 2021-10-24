import axios from 'axios';

const api = axios.create({    
    baseURL: 'https://itsimplesbk.vercel.app/',
    headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
              }

});

export default api;