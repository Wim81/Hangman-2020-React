import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://hangman-react-a7336.firebaseio.com/'
});

export default instance;