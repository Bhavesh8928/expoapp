import axios from "axios";

const API_URL = 'https://jsonplaceholder.typicode.com';

export async function getPosts() {
  const res = await axios.get(`${API_URL}/posts`);
  return res.data;
}

