import { Card, CardContent, CardHeader, CardTitle } from "@ui/card"
import { GridLayout } from "@/views/apartment/components/grid-layout"

// Definim tipul pentru datele statistice
interface ApartmentStat {
	id: string
	title: string
	value: number | string
	format?: (value: number) => string
}

// Definim datele statistice (acestea vor fi înlocuite cu date din backend)
const apartmentStats: ApartmentStat[] = [
	{
		id: "total",
		title: "Total Apartamente",
		value: 4,
	},
	{
		id: "occupied",
		title: "Apartamente Ocupate",
		value: 1,
	},
	{
		id: "available",
		title: "Apartamente Libere",
		value: 3,
	},
	{
		id: "revenue",
		title: "Venituri Totale",
		value: 1000,
		format: (value) => `${value} RON`,
	},
]

function StatCard({ stat }: { stat: ApartmentStat }) {
	const displayValue = stat.format ? stat.format(stat.value as number) : stat.value

	return (
		<Card className="hover:bg-accent/50 hover:cursor-default border-accent">
			<CardHeader>
				<CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
			</CardHeader>
			<CardContent className="mb-2">
				<div className="text-2xl font-bold">{displayValue}</div>
			</CardContent>
		</Card>
	)
}

// Principal component
export default function ApartmentDescription() {
	// backend data
	// const [stats, setStats] = useState<ApartmentStat[]>(apartmentStats)

	// useEffect(() => {
	//   async function fetchStats() {
	//     try {
	//       const response = await fetch('/api/apartment-stats')
	//       const data = await response.json()
	//       setStats(data)
	//     } catch (error) {
	//       console.error('Error fetching apartment stats:', error)
	//     }
	//   }
	//
	//   fetchStats()
	// }, [])

	return (
		<GridLayout columns={4} className="my-2 gap-2">
			{apartmentStats.map((stat) => (
				<StatCard key={stat.id} stat={stat} />
			))}
		</GridLayout>
	)
}
