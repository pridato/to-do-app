"use client";
import { Popover, PopoverTrigger } from "@chakra-ui/react";
import Navbar from "../components/navbar/navbar"
import { useEffect, useState } from "react";
import ViewPopOver from "../components/popovers/view/viewPopOver";

export default function LayoutApp({ children }: { children: React.ReactNode }) {

  const [open, setOpen] = useState(true)
  const [isPopoverOpen, setIsPopoverOpen] = useState(false)

  /**
   * metodo para abrir y cerrar el navbar
   */
  const handleOpen = () => {
    setOpen(!open)
  }

  /**
   * metodo para abrir y cerrar el popover
   */
  const handlePopover = () => {
    setIsPopoverOpen(!isPopoverOpen)
  }


  useEffect(() => {
    // se crea dentro del useEffect para que no se ejecute en cada render
    const handleGlobalClick = (event:any) => {
      if (!event.target.closest('.popover-content')) {
        setIsPopoverOpen(false);
      }
    };
  
    if (isPopoverOpen) {
      document.addEventListener('click', handleGlobalClick);
    } else {
      document.removeEventListener('click', handleGlobalClick);
    }
  
    return () => {
      document.removeEventListener('click', handleGlobalClick);
    };
  }, [isPopoverOpen])

  return (
    <div className="grid grid-rows-layout grid-cols-5  h-screen">
      {
        /** navbar (oculto) */
        open ? (
          <Navbar toggleNavbar={handleOpen} />
        )
          : (
            <button onClick={handleOpen} className="slide-out-left slide-left hover:bg-gray-200 rounded-3xl px-2 py-2 w-fit absolute left-0 top-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="cursor-pointer icon icon-tabler icon-tabler-layout-sidebar" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#504F4F" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                <path d="M9 4l0 16" />
              </svg>
            </button>
          )
      }

      {/** mostrar vista de configuracion */}
      <Popover placement="bottom-start" onClose={handlePopover} isOpen={isPopoverOpen}>
        <PopoverTrigger>
          <button onClick={handlePopover} className="text-gray-500 text-sm px-3 py-2 absolute right-2 top-4 hover:bg-gray-200 rounded-lg flex justify-center items-center gap-2">
            {/** svg ajustes */}
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-adjustments-horizontal" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#504F4F" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M14 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
              <path d="M4 6l8 0" />
              <path d="M16 6l4 0" />
              <path d="M8 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
              <path d="M4 12l2 0" />
              <path d="M10 12l10 0" />
              <path d="M17 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
              <path d="M4 18l11 0" />
              <path d="M19 18l1 0" />
            </svg>
            <span>Vista</span>
          </button>
        </PopoverTrigger>
        <ViewPopOver />
      </Popover>

      <div className="col-span-4 p-4">
        {children}
      </div>
    </div>
  );
}



