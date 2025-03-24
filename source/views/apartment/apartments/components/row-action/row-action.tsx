import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuShortcut,
	DropdownMenuTrigger,
} from "@ui/dropdown-menu"
import type { Row } from "@tanstack/react-table"
import type { Apartment } from "@/views/apartment/apartments/data"
import { Button } from "@ui/button"
import { EllipsisIcon } from "lucide-react"
import {
	DropdownMenuSeparator,
	DropdownMenuSub,
	DropdownMenuSubContent,
	DropdownMenuSubTrigger,
	DropdownMenuPortal,
} from "@ui/dropdown-menu"
import { useState } from "react"
import EditModal from "./edit-modal"

export default function RowActions({ row }: { row: Row<Apartment> }) {
	const [isEditModalOpen, setIsEditModalOpen] = useState(false)

	const handleSave = async (updatedApartment: Apartment) => {
		// Aici va fi logica pentru actualizarea în backend
		console.log("Saving updates:", updatedApartment)
	}

	return (
		<>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<div className="flex justify-end">
						<Button
							size="icon"
							variant="ghost"
							className="shadow-none"
							aria-label="Edit item"
						>
							<EllipsisIcon size={16} aria-hidden="true" />
						</Button>
					</div>
				</DropdownMenuTrigger>
				<DropdownMenuContent align="end">
					<DropdownMenuGroup>
						<DropdownMenuLabel>Actions</DropdownMenuLabel>
						<DropdownMenuSeparator />
						<DropdownMenuItem onClick={() => setIsEditModalOpen(true)}>
							<span>Edit</span>
							<DropdownMenuShortcut>⌘E</DropdownMenuShortcut>
						</DropdownMenuItem>
					</DropdownMenuGroup>
					<DropdownMenuSeparator />
					<DropdownMenuGroup>
						<DropdownMenuSub>
							<DropdownMenuSubTrigger>More</DropdownMenuSubTrigger>
							<DropdownMenuPortal>
								<DropdownMenuSubContent>
									<DropdownMenuItem>Move to project</DropdownMenuItem>
									<DropdownMenuItem>Move to folder</DropdownMenuItem>
									<DropdownMenuSeparator />
									<DropdownMenuItem>Advanced options</DropdownMenuItem>
								</DropdownMenuSubContent>
							</DropdownMenuPortal>
						</DropdownMenuSub>
					</DropdownMenuGroup>
					<DropdownMenuSeparator />
					<DropdownMenuGroup>
						<DropdownMenuItem>
							<span>Share</span>
							<DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
						</DropdownMenuItem>
					</DropdownMenuGroup>
					<DropdownMenuSeparator />
					<DropdownMenuItem className="text-destructive focus:text-destructive">
						<span>Delete</span>
						<DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>

			{isEditModalOpen && (
				<EditModal
					apartment={row.original}
					isOpen={isEditModalOpen}
					onClose={() => setIsEditModalOpen(false)}
					onSave={handleSave}
				/>
			)}
		</>
	)
}
