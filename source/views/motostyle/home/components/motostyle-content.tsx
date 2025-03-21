import { Card, CardContent, CardHeader, CardTitle } from "@ui/card"
import { Bike, Package, Wrench } from "lucide-react"

export default function MotostyleContent() {
	return (
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
	)
}
