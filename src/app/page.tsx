import styles from "@/app/ui/home.module.css";
import Link from "next/link";

export default function Page() {
  return (
    <main className="min-h-screen aspect-auto bg-slate-300">
      <section className="flex flex-col transition-all duration-150 ease-in-out">
        <h1 className="text-4xl mx-3">Home page</h1>
        <div className="flex flex-col">
          <h1 className={styles.warning}>This is just a testing for NEXT JS</h1>
          <div className="flex flex-row px-8 bg-red-300 ">
            <h1>To see the Dashboard, click on </h1>
            <Link
              className="ring-1 ml-2 hover:p-2 transition-all duration-150 ease-in-out hover:rounded-lg w-fit bg-white  rounded-sm px-2 "
              href="/dashboard"
            >
              Dashboard
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
