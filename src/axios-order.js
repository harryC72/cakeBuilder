import axios from "axios";

const instance = axios.create({
    baseURL: 'https://cakebuilder-68c1f.firebaseio.com/'
});

export default instance; 
