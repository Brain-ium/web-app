import axiosInstance from "./axiosInstance";

export const fetchData = async (data) => {
    try {
        const response = await axiosInstance.get('/a', data);

        return response.data
    } catch (error) {
        console.error(`Error in FETCH request from //`, error.response || error.message);
        
        throw error;
    }
};

export const postData = async (data) => {
    try {
        const response = await axiosInstance.post('/', data);
        
        return response.data;
    } catch (error) {
        console.error(`Error in POST request to //`, error.response || error.message);

        throw error;
    }
};