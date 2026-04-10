import axios from 'axios';

const API_URL = 'http://localhost:5000/api/posts';

export const createPost = async (postData) => {
    try {
        const response = await axios.post(API_URL, postData);
        return response.data;
    } catch (error) {
        throw new Error('Error creating post: ' + error.message);
    }
};

export const getPosts = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching posts: ' + error.message);
    }
};

export const getUserPosts = async (userId) => {
    try {
        const response = await axios.get(`${API_URL}/user/${userId}`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching user posts: ' + error.message);
    }
};