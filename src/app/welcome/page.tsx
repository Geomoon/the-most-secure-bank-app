import { Header } from "@/components/home/Header";
import { Navbar } from "@/components/home/Navbar";
import { Divider } from "@/components/shared/Divider";
import { HDivider } from "@/components/shared/HDivider";
import {
  Building05Icon,
  Mouse13Icon,
  UserMultiple02Icon,
} from "hugeicons-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="flex min-h-[70svh] items-center">
        <div className="flex-1 flex flex-row-reverse min-w-full">
          <div className="min-h-[70svh]">
            <section className="flex flex-col h-full space-y-4 justify-center bg-card min-w-80 rounded-md pb-4 pt-6 px-6 mr-[10%]">
              <div className="flex space-x-2 items-center hover:text-lg hover:font-bold cursor-pointer text-primary hover:space-x-2 duration-200">
                <Mouse13Icon size={48} />
                <p className="font-bold">BANCA ELECTRÓNICA</p>
              </div>
              <HDivider />
              <Link href={"/auth"}>
                <div className="flex space-x-2 items-center hover:text-lg hover:font-bold cursor-pointer text-primary hover:space-x-2 duration-200 ">
                  <UserMultiple02Icon size={36} />
                  <Divider size={10} />
                  <p>PERSONAS</p>
                </div>
              </Link>
              <HDivider />
              <div className="flex space-x-2 items-center hover:text-lg hover:font-bold cursor-pointer text-primary hover:space-x-2 duration-200">
                <Building05Icon size={36} />
                <Divider size={10} />
                <p>EMPRESAS</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Navbar />
    </div>
  );
}
