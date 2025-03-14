import { Button } from "@ui/button"

export default function FormButtons({ onCancel }: { onCancel: () => void }) {
	return (
		<div className="flex justify-end gap-4 mt-4">
			<Button type="button" variant="outline" onClick={onCancel}>
				Anulează
			</Button>
			<Button type="submit">Creează Factura</Button>
		</div>
	)
}
