"use client";
import Navbar from "../components/navbar/navbar"
import { useState } from "react";

export default function LayoutApp({ children }: { children: React.ReactNode }) {

  const [open, setOpen] = useState(true)

  /**
   * metodo para abrir y cerrar el navbar
   */
  const handleOpen = () => {
    setOpen(!open)
  }

  return (
    <div className="grid grid-rows-layout grid-cols-5  h-screen">
      {
        open ?
          <Navbar toggleNavbar={handleOpen} isOpened={open} />
          :
          <button onClick={handleOpen} className="hover:bg-gray-200 rounded-3xl px-2 py-2 w-fit absolute left-0 top-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="cursor-pointer icon icon-tabler icon-tabler-layout-sidebar" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#252424" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
              <path d="M9 4l0 16" />
            </svg>
          </button>
      }
      <div className="col-span-4  p-4">
        {children}
      </div>
    </div>
  );
}



