import { cn } from "@/theme/lib/utils"
import { Button } from "@ui/button"
import { Input } from "@ui/input"
import { Label } from "@ui/label"
import { Textarea } from "@ui/textarea"
import { Facebook, Linkedin, Twitter } from "lucide-react"

const Contact10 = () => {
	return (
		<section className="relative rounded-t-2xl rounded-b-[36px] bg-gradient-to-b from-amber-50 via-background to-background h-[calc(100vh-2rem)] py-16 dark:from-amber-950 ">
			<div className="container max-w-2xl mx-auto">
				<h1 className="text-center text-4xl font-semibold tracking-tight lg:text-5xl">
					Contact us
				</h1>
				<p className="mt-4 text-center leading-snug font-medium text-muted-foreground lg:mx-auto">
					Hopefully this form gets through our spam filters.
				</p>

				<div className="mt-10 flex justify-between gap-8 max-sm:flex-col md:mt-14 lg:mt-20 lg:gap-12">
					<div>
						<h2 className="font-semibold">Corporate office</h2>
						<p className="mt-3 text-muted-foreground">
							1 Carlsberg Close
							<br />
							1260 Hillview, Australia
						</p>
					</div>

					<div>
						<h2 className="font-semibold">Email us</h2>
						<div className="mt-3">
							<div>
								<p className="text-primary">Careers</p>
								<a
									href="mailto:support@example.com"
									className="text-muted-foreground hover:text-foreground"
								>
									support@example.com
								</a>
							</div>
						</div>
					</div>

					<div>
						<h2 className="font-semibold">Follow us</h2>
						<div className="mt-3 flex gap-6 lg:gap-10">
							<a
								href="https://www.facebook.com"
								className="text-muted-foreground hover:text-foreground"
							>
								<Facebook className="size-5" />
							</a>
							<a
								href="https://www.twitter.com"
								className="text-muted-foreground hover:text-foreground"
							>
								<Twitter className="size-5" />
							</a>
							<a
								href="https://www.linkedin.com"
								className="text-muted-foreground hover:text-foreground"
							>
								<Linkedin className="size-5" />
							</a>
						</div>
					</div>
				</div>

				<DashedLine className="my-12" />

				{/* Inquiry Form */}
				<div className="mx-auto">
					<h2 className="text-lg font-semibold">Inquiries</h2>
					<form className="mt-8 space-y-5">
						<div className="space-y-2">
							<Label>Full name</Label>
							<Input placeholder="First and last name" />
						</div>
						<div className="space-y-2">
							<Label>Work email address</Label>
							<Input placeholder="me@company.com" type="email" />
						</div>
						<div className="space-y-2">
							<Label>
								Company name <span className="text-muted-foreground">(optional)</span>
							</Label>
							<Input placeholder="Company name" />
						</div>
						<div className="space-y-2">
							<Label>
								Number of employees{" "}
								<span className="text-muted-foreground">(optional)</span>
							</Label>
							<Input placeholder="e.g. 10-50" />
						</div>
						<div className="space-y-2">
							<Label>Your message</Label>
							<Textarea
								placeholder="Write your message"
								className="min-h-[120px] resize-none"
							/>
						</div>

						<div className="flex justify-end">
							<Button size="lg" type="submit" className="">
								Submit
							</Button>
						</div>
					</form>
				</div>
			</div>
		</section>
	)
}

interface DashedLineProps {
	orientation?: "horizontal" | "vertical"
	className?: string
}

const DashedLine = ({ orientation = "horizontal", className }: DashedLineProps) => {
	const isHorizontal = orientation === "horizontal"

	return (
		<div
			className={cn(
				"relative text-muted-foreground",
				isHorizontal ? "h-px w-full" : "h-full w-px",
				className,
			)}
		>
			<div
				className={cn(
					isHorizontal
						? [
								"h-px w-full",
								"bg-[repeating-linear-gradient(90deg,transparent,transparent_4px,currentColor_4px,currentColor_10px)]",
								"[mask-image:linear-gradient(90deg,transparent,black_25%,black_75%,transparent)]",
							]
						: [
								"h-full w-px",
								"bg-[repeating-linear-gradient(180deg,transparent,transparent_4px,currentColor_4px,currentColor_8px)]",
								"[mask-image:linear-gradient(180deg,transparent,black_25%,black_75%,transparent)]",
							],
				)}
			/>
		</div>
	)
}

export { Contact10 }
