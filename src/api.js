import axios from 'axios';

const searchImages = async () => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID v5S1xB4vPVTYOzfYPkfahL0jA7DsZ0LbTDYNuzcrcgU',
    },
    params: {
      query: 'cars',
    },
  });
  console.log(response);
  return response;
};

export default searchImages;
