import type { SVGProps } from "react";


export function DiscordIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="20"
    viewBox="0 0 24 20"
    fill="none"
    className="stroke-gray-600 group-hover:stroke-current dark:stroke-gray-300"
    aria-label="Discord"

  >
    <title>Discord</title>
    <path
      d="M15.0686 1.25995L14.5477 1.17423L14.2913 1.63578C14.1754 1.84439 14.0545 2.08275 13.9422 2.31963C12.6461 2.16488 11.3406 2.16505 10.0445 2.32014C9.92822 2.08178 9.80478 1.84975 9.67412 1.62413L9.41449 1.17584L8.90333 1.25995C7.33547 1.51794 5.80717 1.99419 4.37748 2.66939L4.19 2.75793L4.07461 2.93019C1.23864 7.16437 0.46302 11.3053 0.838165 15.3924L0.868838 15.7266L1.13844 15.9264C2.81818 17.1714 4.68053 18.1233 6.68582 18.719L7.18892 18.8684L7.50166 18.4469C7.96179 17.8268 8.36504 17.1824 8.709 16.4944L8.71099 16.4904C10.8645 17.0471 13.128 17.0485 15.2821 16.4947C15.6261 17.1826 16.0293 17.8269 16.4892 18.4469L16.805 18.8725L17.3116 18.717C19.3056 18.105 21.1876 17.1751 22.8559 15.9238L23.1224 15.724L23.1528 15.3923C23.5873 10.6524 22.3579 6.53306 19.8947 2.90714L19.7759 2.73227L19.5833 2.64518C18.1437 1.99439 16.6386 1.51826 15.0686 1.25995ZM16.6074 10.7755L16.6074 10.7756C16.5934 11.6409 16.0212 12.1444 15.4783 12.1444C14.9297 12.1444 14.3493 11.6173 14.3493 10.7877C14.3493 9.94885 14.9378 9.41192 15.4783 9.41192C16.0471 9.41192 16.6209 9.93851 16.6074 10.7755ZM8.49373 12.1444C7.94513 12.1444 7.36471 11.6173 7.36471 10.7877C7.36471 9.94885 7.95323 9.41192 8.49373 9.41192C9.06038 9.41192 9.63892 9.93712 9.6417 10.7815C9.62517 11.6239 9.05462 12.1444 8.49373 12.1444Z"
      strokeWidth="1.5"
    />
  </svg>
  );
}
export function ReactIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    className="stroke-gray-600 group-hover:stroke-current dark:stroke-gray-300"
    aria-label="React Router Documentation"
  >
    <title>React Router Documentation</title>
    <path
      d="M9.99981 10.0751V9.99992M17.4688 17.4688C15.889 19.0485 11.2645 16.9853 7.13958 12.8604C3.01467 8.73546 0.951405 4.11091 2.53116 2.53116C4.11091 0.951405 8.73546 3.01467 12.8604 7.13958C16.9853 11.2645 19.0485 15.889 17.4688 17.4688ZM2.53132 17.4688C0.951566 15.8891 3.01483 11.2645 7.13974 7.13963C11.2647 3.01471 15.8892 0.951453 17.469 2.53121C19.0487 4.11096 16.9854 8.73551 12.8605 12.8604C8.73562 16.9853 4.11107 19.0486 2.53132 17.4688Z"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
  );
}
export function GridIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 200 200"
    className="absolute top-10 -z-10 h-full w-[1250px] [mask-image:radial-gradient(circle,red,transparent,transparent,transparent)]"
  >
    <title>Grid</title>
    <defs>
      <pattern
        id="innerGrid"
        width="40"
        height="40"
        patternUnits="userSpaceOnUse"
      >
        <path
          d="M 40 0 L 0 0 0 40"
          fill="none"
          className="stroke-muted-foreground/70"
          strokeWidth="0.5"
        />
      </pattern>
      <pattern
        id="grid"
        width="160"
        height="160"
        patternUnits="userSpaceOnUse"
      >
        <rect width="160" height="160" fill="url(#innerGrid)" />
      </pattern>
    </defs>
    <rect width="200" height="200" fill="url(#grid)" />
  </svg>
  );
}
export function LogoIcon(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <img
    {...props}
      src="https://shadcnblocks.com/images/block/block-1.svg"
      alt="logo" 
      className="mb-7 h-10 w-auto"
      aria-label="logo"
    />
  );
}
export function MainImg(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <img
    {...props}
    src="https://shadcnblocks.com/images/block/placeholder-1.svg"
    alt="placeholder"
    className="hidden h-full max-h-screen object-cover lg:block"
    />
  );
}

export function CloudIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg 
      {...props}
    width="41" 
    height="33" 
    viewBox="0 0 31 23" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Cloud"
    >
      <title>Cloud</title>
<path d="M26.2052 10.131C25.5315 4.82463 20.9882 0.708374 15.4999 0.708374C11.2511 0.708374 7.56032 3.192 5.87528 7.10629C2.56378 8.09604 0.0832367 11.2225 0.0832367 14.5834C0.0832367 18.8338 3.5412 22.2917 7.79157 22.2917H24.7499C28.1508 22.2917 30.9166 19.526 30.9166 16.125C30.9142 14.7431 30.4489 13.4018 29.5949 12.3153C28.7409 11.2288 27.5475 10.4598 26.2052 10.131ZM24.7499 19.2084H7.79157C5.24165 19.2084 3.16657 17.1333 3.16657 14.5834C3.16657 12.4189 5.01503 10.3345 7.28745 9.93525L8.18315 9.778L8.47915 8.91775C9.56295 5.75579 12.2547 3.79171 15.4999 3.79171C19.7503 3.79171 23.2082 7.24967 23.2082 11.5V13.0417H24.7499C26.4504 13.0417 27.8332 14.4246 27.8332 16.125C27.8332 17.8255 26.4504 19.2084 24.7499 19.2084Z" fill="black"/>
</svg>

  );
}