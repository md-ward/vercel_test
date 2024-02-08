"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SideNav() {
  const path = usePathname();
  const navItems = [
    {
      to: "/dashboard",
      label: "Home",
    },
    {
      to: "/dashboard/invoices",
      label: "Invoices",
    },
    {
      to: "/dashboard/customers",
      label: "Customers",
    },
  ];

  return (
    <nav className="h-full flex flex-col px-2 bg-slate-50 border border-black rounded-md">
      <span className="h-1/4 mt-2 flex items-end pb-2 px-2 text-3xl text-white select-none rounded-md shadow-md w-full bg-blue-500">
        <p>Acme </p>
      </span>
      <div className=" flex flex-col  bg-gray-50 h-2/4 pt-4 px-2 gap-8">
        {navItems.map((navItem) => (
          <Link
            className={clsx(
              "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
              {
                "bg-sky-100 text-blue-600": path === navItem.to,
              }
            )}
            key={navItem.to}
            href={navItem.to}
          >
            {navItem.label}
          </Link>
        ))}
      </div>
      <span className="h-1/4 ">
        <Link
          href={"/dashboard/settings"}
          className={clsx(
            "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
            {
              "bg-sky-100 text-blue-600": path === "/dashboard/settings",
            }
          )}
        >
          Settings
        </Link>
      </span>
    </nav>
  );
}
