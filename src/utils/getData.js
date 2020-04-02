const API_URL = 'https://rickandmortyapi.com/api/character/';

const getData = async (id) => {
  const apiURL = id ? `${API_URL}${id}` : API_URL;
  try{
    const response = await fetch(apiURL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Fetch Error', error);
  }
}

export default getData;