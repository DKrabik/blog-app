import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL|| 'http://localhost:3000/api/posts';

interface Post{
    _id: string;
    title: string;
    content: string;
}

export const getPosts = async (): Promise<Post[]> => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching posts:', error);
        throw error;
    }
};

export const getPostById = async (id: string) => {
    try{
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching post with id ${id}:`, error)
        throw error;
    }  
};

export const createPost = async (title: string, content: string): Promise<Post> => {
    try {
        const response = await axios.post(API_URL, { "title" : title, "content": content });
        return response.data;
    } catch (error) {
        console.error(`Error creating post:`, error);
        throw error;
    }
};

export const updatePost = async (id: string, title: string, content: string): Promise<Post> => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, { title, content });
        return response.data;
    } catch (error) {
        console.error(`Error updating post with id ${id}:`, error);
        throw error;
    }
};

export const deletePost = async (id: string) => {
    try{
        const response = await axios.delete(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error deleting post with id ${id}`, error);
        throw error;
    }
}