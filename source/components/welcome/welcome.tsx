import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";
import { Button } from "@ui/button";
import { Link } from "react-router";
import { DiscordIcon, ReactIcon } from "./svg-icons";


export function Welcome() {
  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <header className="flex flex-col items-center gap-9">
          <div className="w-[500px] max-w-[100vw] p-4">
            <img
              src={logoLight}
              alt="React Router"
              className="block w-full dark:hidden"
            />
            <img
              src={logoDark}
              alt="React Router"
              className="hidden w-full dark:block"
            />
          </div>
          <Button>Click me</Button>
        </header>
        <div className="max-w-[300px] w-full space-y-6 px-4">
         
          <nav className="rounded-3xl border border-gray-200 p-6 dark:border-gray-700 space-y-4">
            <p className="leading-6 text-gray-700 dark:text-gray-200 text-center">
              What&apos;s next?
            </p>
            <ul>
              {resources.map(({ href, text, icon }) => (
                <li key={href}>
                  <a
                    className="group flex items-center gap-3 self-stretch p-3 leading-normal text-blue-700 hover:underline dark:text-blue-500"
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {icon}
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </main>
  );
}

const resources = [
  {
    href: "https://reactrouter.com/docs",
    text: "React Router Docs",
    icon: (
      <ReactIcon
        aria-label="React Router Documentation"
      />
    ),
  },
  {
    href: "/dashboard/card-main",
    text: "Card",
    icon: (
      <Link
        to={'/dashboard/card-main'}>
        <DiscordIcon
          aria-label="Discord"
        />
      </Link>
    ),
  },
  {
    href: "https://rmx.as/discord",
    text: "Join Discord",
    icon: (
      <DiscordIcon
        aria-label="Discord"
      />  
    ),
      
  },
];
