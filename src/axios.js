import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:5001/clone-c712a/us-central1/api' // the API ( cloud funcional )
});

export default instance;