import { GridLayout } from "@/views/apartment/components/grid-layout"
import { Card, CardHeader, CardTitle, CardContent } from "@ui/card"
import { Bike, BarChart3, Wrench, Package } from "lucide-react"

interface StatCardProps {
	title: string
	value: string
	description: string
	icon: React.ReactNode
}

function StatCard({ title, value, description, icon }: StatCardProps) {
	return (
		<Card>
			<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
				<CardTitle className="text-sm font-medium">{title}</CardTitle>
				{icon}
			</CardHeader>
			<CardContent>
				<div className="text-2xl font-bold">{value}</div>
				<p className="text-xs text-muted-foreground mb-2">{description}</p>
			</CardContent>
		</Card>
	)
}

export default function MotoHome() {
	return (
		<div className="space-y-4 p-4 size-full mx-auto flex flex-col gap-4">
			<GridLayout columns={4}>
				<StatCard
					title="Total Motociclete"
					value="128"
					description="12 adăugate luna aceasta"
					icon={<Bike className="size-4 text-muted-foreground" />}
				/>
				<StatCard
					title="Vânzări"
					value="€9,254"
					description="+15.1% față de luna trecută"
					icon={<BarChart3 className="size-4 text-muted-foreground" />}
				/>
				<StatCard
					title="Service Active"
					value="24"
					description="4 finalizate azi"
					icon={<Wrench className="size-4 text-muted-foreground" />}
				/>
				<StatCard
					title="Inventar"
					value="782"
					description="128 produse sub stoc minim"
					icon={<Package className="size-4 text-muted-foreground" />}
				/>
			</GridLayout>

			<Card>
				<CardHeader>
					<CardTitle>Motostyle</CardTitle>
				</CardHeader>
				<CardContent>
					<p>
						Bine ai venit în interfața de administrare Motostyle. De aici poți gestiona
						inventarul, serviciile și motocicletele din portofoliu.
					</p>
					<div className="my-4 grid grid-cols-1 md:grid-cols-3 gap-4">
						<Card className="p-4 cursor-pointer hover:bg-accent/50 transition-colors">
							<Bike className="size-8 mb-2" />
							<h3 className="font-medium">Motociclete</h3>
							<p className="text-sm text-muted-foreground">
								Gestionează baza de date cu motociclete
							</p>
						</Card>
						<Card className="p-4 cursor-pointer hover:bg-accent/50 transition-colors">
							<Package className="size-8 mb-2" />
							<h3 className="font-medium">Inventar</h3>
							<p className="text-sm text-muted-foreground">
								Administrează stocurile de piese și accesorii
							</p>
						</Card>
						<Card className="p-4 cursor-pointer hover:bg-accent/50 transition-colors">
							<Wrench className="size-8 mb-2" />
							<h3 className="font-medium">Service</h3>
							<p className="text-sm text-muted-foreground">
								Planifică și urmărește intervențiile service
							</p>
						</Card>
					</div>
				</CardContent>
			</Card>
		</div>
	)
}
