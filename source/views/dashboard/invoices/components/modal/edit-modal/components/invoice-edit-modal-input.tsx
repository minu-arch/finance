import { Input } from "@ui/input"
import { Label } from "@ui/label"

interface EditInvoiceFormData {
	serieNumar: string
	client: string
	apartament: string
	dataEmiterii: string
	dataScadentei: string
	total: number | string
}

interface InvoiceEditInputProps {
	formData: EditInvoiceFormData
	handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function InvoiceEditModalInput({
	formData,
	handleInputChange,
}: InvoiceEditInputProps) {
	return (
		<div className="flex flex-col gap-4">
			<div className="grid grid-cols-1 sm:grid-cols-4 items-center gap-2 sm:gap-4">
				<Label htmlFor="serieNumar" className="sm:text-right">
					Serie/Număr
				</Label>
				<Input
					id="serieNumar"
					name="serieNumar"
					value={formData.serieNumar}
					onChange={handleInputChange}
					className="col-span-3"
				/>
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-4 items-center gap-2 sm:gap-4">
				<Label htmlFor="client" className="sm:text-right">
					Client
				</Label>
				<Input
					id="client"
					name="client"
					value={formData.client}
					onChange={handleInputChange}
					className="col-span-3"
				/>
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-4 items-center gap-2 sm:gap-4">
				<Label htmlFor="apartament" className="sm:text-right">
					Apartament
				</Label>
				<Input
					id="apartament"
					name="apartament"
					value={formData.apartament}
					onChange={handleInputChange}
					className="col-span-3"
				/>
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-4 items-center gap-2 sm:gap-4">
				<Label htmlFor="dataEmiterii" className="sm:text-right">
					Data Emiterii
				</Label>
				<Input
					id="dataEmiterii"
					name="dataEmiterii"
					type="date"
					value={formData.dataEmiterii}
					onChange={handleInputChange}
					className="col-span-3"
				/>
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-4 items-center gap-2 sm:gap-4">
				<Label htmlFor="dataScadentei" className="sm:text-right">
					Data Scadenței
				</Label>
				<Input
					id="dataScadentei"
					name="dataScadentei"
					type="date"
					value={formData.dataScadentei}
					onChange={handleInputChange}
					className="col-span-3"
				/>
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-4 items-center gap-2 sm:gap-4">
				<Label htmlFor="total" className="sm:text-right">
					Total
				</Label>
				<Input
					id="total"
					name="total"
					type="number"
					step="0.01"
					value={formData.total}
					onChange={handleInputChange}
					className="col-span-3"
				/>
			</div>
		</div>
	)
}
