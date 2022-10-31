import axios from 'axios';

const getUser = async (name) => {
  const URL = 'http://localhost:4001/user';
  const response = await axios.get(URL);
  return response.data;
}

export default getUser;
