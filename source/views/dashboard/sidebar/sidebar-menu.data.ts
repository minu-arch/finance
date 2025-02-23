import {
  SquareTerminal,
  Users2,
  Users,
  DollarSign,
  ListTodo,
} from "lucide-react";
import { Receipt, ChartNetwork, House } from "lucide-react";

export type MenuItem = {
  title: string;
  url: string;
  icon: React.ReactNode;
  hasAlert?: boolean;
  alertCount?: number;
};

export const menu = {
  title: "Playground",
  url: "#",
  icon: SquareTerminal,
  isActive: true,
  hasAlert: true,
  alertCount: 2,
  items: [
    {
      title: "Statistici",
      url: "/dashboard/statistics",
      icon: ChartNetwork,
    },
    {
      title: "Apartamente",
      url: "/dashboard/apartaments",
      icon: House,
    },
    {
      title: "Facturi",
      url: "/dashboard/invoices",
      icon: Receipt,
      hasAlert: true,
      alertCount: 3,
    },
    {
      title: "Propietari",
      icon: Users2,
      url: "/dashboard/owners",
    },
    {
      title: "Parteneri",
      icon: Users,
      url: "/dashboard/partners",
    },
    {
      title: "Contabilitate",
      icon: DollarSign,
      url: "/dashboard/accounting",
      hasAlert: true,
      alertCount: 1,
    },
    {
      title: "Lista de sarcini",
      icon: ListTodo,
      url: "/dashboard/todolist",
    },
  ],
};
