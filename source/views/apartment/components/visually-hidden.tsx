import { type HTMLAttributes, forwardRef } from "react"

export const VisuallyHidden = forwardRef<
	HTMLSpanElement,
	HTMLAttributes<HTMLSpanElement>
>(({ children, ...props }, ref) => {
	return (
		<span
			ref={ref}
			className="absolute h-px w-px p-0 overflow-hidden whitespace-nowrap border-0"
			style={{
				clip: "rect(0 0 0 0)",
				clipPath: "inset(50%)",
				margin: "-1px",
			}}
			{...props}
		>
			{children}
		</span>
	)
})
VisuallyHidden.displayName = "VisuallyHidden"
