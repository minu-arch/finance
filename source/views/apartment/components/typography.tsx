import { cn } from "@/theme/lib/utils"

export function TypographyH1({
	children,
	className,
}: {
	children: React.ReactNode
	className?: string
}) {
	return (
		<h1
			className={cn(
				"scroll-m-20 text-[clamp(2rem,0.8rem+5.3333vw,4rem)] font-extrabold tracking-tight ",
				className,
			)}
		>
			{children}
		</h1>
	)
}

export function TypographyH2({
	children,
	className,
}: {
	children: React.ReactNode
	className?: string
}) {
	return (
		<h2
			className={cn(
				"scroll-m-20 border-b pb-2 text-[clamp(1.8rem,-0.2rem+5.3333vw,2rem)] font-semibold tracking-tight transition-colors first:mt-0",
				className,
			)}
		>
			{children}
		</h2>
	)
}

export function TypographyH3({
	children,
	className,
}: {
	children: React.ReactNode
	className?: string
}) {
	return (
		<h3
			className={cn(
				"scroll-m-20 text-[clamp(1.5rem,0.08rem+3.2vw,1.8rem)] font-semibold tracking-tight",
				className,
			)}
		>
			{children}
		</h3>
	)
}

export function TypographyH4({
	children,
	className,
}: {
	children: React.ReactNode
	className?: string
}) {
	return (
		<h4 className={cn("scroll-m-20 text-xl font-semibold tracking-tight", className)}>
			{children}
		</h4>
	)
}

export function TypographyP({
	children,
	className,
}: {
	children: React.ReactNode
	className?: string
}) {
	return (
		<p className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}>{children}</p>
	)
}

export function TypographyBlockquote({
	children,
	className,
}: {
	children: React.ReactNode
	className?: string
}) {
	return (
		<blockquote className={cn("mt-6 border-l-2 pl-6 italic", className)}>
			{children}
		</blockquote>
	)
}

export function TypographyList({
	children,
	className,
}: {
	children: React.ReactNode
	className?: string
}) {
	return (
		<ul className={cn("my-6 ml-6 list-disc [&>li]:mt-2", className)}>{children}</ul>
	)
}

export function TypographyInlineCode({
	children,
	className,
}: {
	children: React.ReactNode
	className?: string
}) {
	return (
		<code
			className={cn(
				"relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
				className,
			)}
		>
			{children}
		</code>
	)
}

export function TypographyLead({
	children,
	className,
}: {
	children: React.ReactNode
	className?: string
}) {
	return <p className={cn("text-xl text-muted-foreground", className)}>{children}</p>
}

export function TypographyLarge({
	children,
	className,
}: {
	children: React.ReactNode
	className?: string
}) {
	return <div className={cn("text-lg font-semibold", className)}>{children}</div>
}
export function TypographySmall({
	children,
	className,
}: {
	children: React.ReactNode
	className?: string
}) {
	return (
		<small className={cn("text-sm font-medium leading-none", className)}>
			{children}
		</small>
	)
}

export function TypographyMuted({
	children,
	className,
}: {
	children: React.ReactNode
	className?: string
}) {
	return <p className={cn("text-sm text-muted-foreground", className)}>{children}</p>
}
