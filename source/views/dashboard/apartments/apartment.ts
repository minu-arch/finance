import axios from 'axios'; // Primul pas: instalează axios cu: pnpm add axios
import type { Apartment } from './data';

// Definește tipurile pentru răspunsurile API
export interface ApiResponse<T> {
  data: T;
  status: number;
  message?: string;
}

// Serviciu pentru apartamente
export const apartmentsApi = {
  // Obține toate apartamentele
  getAll: async (): Promise<ApiResponse<Apartment[]>> => {
    try {
      const response = await axios.get('/api/apartments');
      return {
        data: response.data,
        status: response.status
      };
    } catch (error) {
      throw new Error('Failed to fetch apartments');
    }
  },

  // Adaugă un apartament nou
  create: async (apartment: Omit<Apartment, 'id'>): Promise<ApiResponse<Apartment>> => {
    try {
      const response = await axios.post('/api/apartments', apartment);
      return {
        data: response.data,
        status: response.status
      };
    } catch (error) {
      throw new Error('Failed to create apartment');
    }
  },

  // Actualizează un apartament
  update: async (id: string, apartment: Partial<Apartment>): Promise<ApiResponse<Apartment>> => {
    try {
      const response = await axios.put(`/api/apartments/${id}`, apartment);
      return {
        data: response.data,
        status: response.status
      };
    } catch (error) {
      throw new Error('Failed to update apartment');
    }
  },

  // Șterge un apartament
  delete: async (id: string): Promise<ApiResponse<void>> => {
    try {
      const response = await axios.delete(`/api/apartments/${id}`);
      return {
        data: response.data,
        status: response.status
      };
    } catch (error) {
      throw new Error('Failed to delete apartment');
    }
  }
};