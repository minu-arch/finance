export type Apartment = {
	id: string
	name: string
	location: string
	status: "Liber" | "Ocupat"
	price: number
	rooms: number
	checkIn: string | null
	checkOut: string | null
	source: "Booking" | "Manual" | null
}

export const mockData: Apartment[] = [
	{
		id: "1",
		name: "Ap.101",
		location: "str. rozelor",
		status: "Liber",
		price: 400,
		rooms: 2,
		checkIn: "2024-03-01",
		checkOut: "2024-04-01",
		source: "Manual",
	},
	{
		id: "2",
		name: "Ap.102",
		location: "str. rasaritului",
		status: "Ocupat",
		price: 500,
		rooms: 2,
		checkIn: "2024-03-01",
		checkOut: "2024-04-01",
		source: "Booking",
	},
	{
		id: "3",
		name: "Ap.103",
		location: "str. lalelelor",
		status: "Liber",
		price: 300,
		rooms: 2,
		checkIn: "2024-03-01",
		checkOut: "2024-04-01",
		source: "Manual",
	},
	{
		id: "4",
		name: "Ap.104",
		location: "str. apusului",
		status: "Liber",
		price: 250,
		rooms: 2,
		checkIn: "2024-03-01",
		checkOut: "2024-04-01",
		source: null,
	},
]
