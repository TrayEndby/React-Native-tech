import axios from 'axios';

export const fetchPosts = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('https://api.example.com/posts');
      dispatch({ type: 'FETCH_POSTS', payload: response.data });
    } catch (error) {
      console.error(error);
    }
  };
};