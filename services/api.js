import axios from 'axios';

const api = axios.create({    
    baseURL: 'https://itsimplesbk.vercel.app/',    
});

export default api;