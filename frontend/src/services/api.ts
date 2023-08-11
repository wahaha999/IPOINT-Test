import axios from 'axios';
import { API_URL } from '../utils/constants';

export const submitContactFormData = async (data: any): Promise<any> => {
    try {
        const response = await axios.post(`${API_URL}/contact-us`, data);
        return response.data;
    } catch (error) {
        throw new Error('Failed to submit form');
    }
}