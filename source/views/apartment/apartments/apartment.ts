import axios from "axios"
import type { Apartment } from "./data"
// Define the types for the API responses
export interface ApiResponse<T> {
	data: T
	status: number
	message?: string
}
// apartment service
export const apartmentsApi = {
	// get all apartments
	getAll: async (): Promise<ApiResponse<Apartment[]>> => {
		try {
			const response = await axios.get("/api/apartments")
			return {
				data: response.data,
				status: response.status,
			}
		} catch (error) {
			throw new Error("Failed to fetch apartments")
		}
	},
	// add a new apartment
	create: async (apartment: Omit<Apartment, "id">): Promise<ApiResponse<Apartment>> => {
		try {
			const response = await axios.post("/api/apartments", apartment)
			return {
				data: response.data,
				status: response.status,
			}
		} catch (error) {
			throw new Error("Failed to create apartment")
		}
	},
	// update an apartment
	update: async (
		id: string,
		apartment: Partial<Apartment>,
	): Promise<ApiResponse<Apartment>> => {
		try {
			const response = await axios.put(`/api/apartments/${id}`, apartment)
			return {
				data: response.data,
				status: response.status,
			}
		} catch (error) {
			throw new Error("Failed to update apartment")
		}
	},
	// clear an apartment
	delete: async (id: string): Promise<ApiResponse<void>> => {
		try {
			const response = await axios.delete(`/api/apartments/${id}`)
			return {
				data: response.data,
				status: response.status,
			}
		} catch (error) {
			throw new Error("Failed to delete apartment")
		}
	},
}
