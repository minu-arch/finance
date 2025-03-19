import type { Invoice } from "@/views/apartment/invoices/invoice.data"

interface InvoiceModalHeaderProps {
	invoice: Partial<Invoice> & { client: string }
}

export default function InvoiceModalHeader({ invoice }: InvoiceModalHeaderProps) {
	return (
		<div className="flex justify-between mb-6">
			<div>
				<h2 className="font-semibold">De la:</h2>
				<p>Compania Dvs. SRL</p>
				<p>Adresa companiei</p>
				<p>Cod fiscal: RO12345678</p>
			</div>
			<div className="text-right">
				<h2 className="font-semibold">Către:</h2>
				<p>{invoice.client}</p>
				<p>Apartament d.101</p>
			</div>
		</div>
	)
}
