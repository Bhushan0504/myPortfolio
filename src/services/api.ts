// Placeholder for future Spring Boot backend integration
const API_BASE_URL = 'http://localhost:8080/api';

export const api = {
    get: async (endpoint: string) => {
        try {
            const response = await fetch(`${API_BASE_URL}${endpoint}`);
            return await response.json();
        } catch (error) {
            console.error('API Error:', error);
            throw error;
        }
    },
    post: async (endpoint: string, data: any) => {
        try {
            const response = await fetch(`${API_BASE_URL}${endpoint}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            return await response.json();
        } catch (error) {
            console.error('API Error:', error);
            throw error;
        }
    }
};
