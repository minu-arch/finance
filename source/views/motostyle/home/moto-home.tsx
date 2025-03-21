import StatsHeaderCard from "./components/stats-header-card"
import MotostyleContent from "./components/motostyle-content"

export default function MotoHome() {
	return (
		<div className="space-y-4 p-4 size-full mx-auto flex flex-col gap-4">
			<StatsHeaderCard />
			<MotostyleContent />
		</div>
	)
}
