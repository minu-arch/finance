import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@ui/alert-dialog"

interface DeleteAlertProps {
	onDelete: () => void
	title?: string
	description?: string
	children: React.ReactNode
}

export default function DeleteAlert({
	onDelete,
	title = "Ești sigur?",
	description = "Această acțiune nu poate fi anulată. Aceasta va șterge permanent factura.",
	children,
}: DeleteAlertProps) {
	return (
		<AlertDialog>
			<AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>{title}</AlertDialogTitle>
					<AlertDialogDescription>{description}</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel>Anulează</AlertDialogCancel>
					<AlertDialogAction onClick={onDelete} className="bg-red-600 hover:bg-red-700">
						Șterge
					</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	)
}
