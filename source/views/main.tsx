import { useEffect } from "react";
import { useNavigate } from "react-router";
import { GridIcon } from "@/components/welcome/svg-icons";

export function meta() {
  return [
    { title: "Finance App" },
    { name: "description", content: "Welcome to Finance App!" },
  ];
}

export default function Main() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/auth");
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background">
      <GridIcon />
      <div className="relative flex flex-col items-center justify-center">
        {/* Loading spinner */}
        <div className="h-16 w-16 animate-spin rounded-full border-b-2 border-primary"/>
        <p className="mt-4 text-sm text-muted-foreground">Loading...</p>
      </div>
    </div>
  );
}
