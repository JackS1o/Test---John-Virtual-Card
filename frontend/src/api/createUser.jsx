import axios from 'axios';

const createUser = async (user) => {
  const URL = 'http://localhost:4001/user';
  const response = await axios.post(URL, {
    name: user.name,
    linkedin: user.linkedin,
    github: user.github,
  }).then((response) => response.data).catch((error) => error);
  
  return response;
}

export default createUser;
