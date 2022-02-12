import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = { api_key: 'aa799e6d0297de166f5b00a47e312b46' };

export const Trending = async () => {
  try {
    const { data } = await axios.get('/trending/movie/day');
    return data.results;
  } catch (e) {
    console.error(e);
  }
};
export const Search = async query => {
  try {
    const { data } = await axios.get(`/search/movie?&query=${query}&page=1`);
    return data.results;
  } catch (e) {
    console.error(e);
  }
};
export const MovieById = async movieId => {
  try {
    const { data } = await axios.get(`/movie/${movieId}`);
    return data;
  } catch (e) {
    console.error(e);
  }
};
export const Credits = async movieId => {
  try {
    const { data } = await axios.get(`/movie/${movieId}/credits`);
    return data.cast;
  } catch (e) {
    console.error(e);
  }
};
export const Reviews = async movieId => {
  try {
    const { data } = await axios.get(`/movie/${movieId}/reviews`);
    return data.results;
  } catch (e) {
    console.error(e);
  }
};
