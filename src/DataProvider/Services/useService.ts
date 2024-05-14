import axios, { AxiosInstance, AxiosResponse } from 'axios';

interface DocumentData {
    [key: string]: any;
}

/**
 * Custom hook to manage API operations for collections and documents
 * @param {string} collectionName - Name of the API collection
 * @returns {Object} - Object containing API operations for the specified collection or document
 */
function useService(collectionName: string) {
    const apiUrl = `${import.meta.env.VITE_API_BASE_URL}/${collectionName}`;
    const axiosInstance: AxiosInstance = axios.create({
        baseURL: apiUrl
    });

    return {
        addDocument: async (data: DocumentData): Promise<DocumentData> => {
            try {
                const response: AxiosResponse<DocumentData> = await axiosInstance.post('', data);
                return response.data;
            } catch (error) {
                console.error(`Error adding document to ${collectionName}:`, error);
                throw error;
            }
        },
        updateDocument: async (documentID: string, data: DocumentData): Promise<boolean> => {
            try {
                const response: AxiosResponse = await axiosInstance.put(`/${documentID}`, data);
                return response.status === 200;
            } catch (error) {
                console.error(`Error updating document in ${collectionName}:`, error);
                return false;
            }
        },
        deleteDocument: async (documentID: string): Promise<boolean> => {
            try {
                const response: AxiosResponse = await axiosInstance.delete(`/${documentID}`);
                return response.status === 200;
            } catch (error) {
                console.error(`Error deleting document from ${collectionName}:`, error);
                return false;
            }
        },
        getDocuments: async (): Promise<DocumentData[] | null> => {
            try {
                const response: AxiosResponse<DocumentData[]> = await axiosInstance.get('');
                return response.data;
            } catch (error) {
                console.error(`Error getting documents from ${collectionName}:`, error);
                return null;
            }
        },
        getDocument: async (documentID: string): Promise<DocumentData | null> => {
            try {
                const response: AxiosResponse<DocumentData> = await axiosInstance.get(`/${documentID}`);
                return response.data;
            } catch (error) {
                console.error(`Error getting document from ${collectionName}:`, error);
                return null;
            }
        }
    };
}

export default useService;
