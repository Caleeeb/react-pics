import axios from 'axios';

const searchImages = () => {
  axios.get('http://api.unsplash.com/search/photos')
};
