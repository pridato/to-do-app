import { PopoverContent, PopoverArrow, PopoverHeader, PopoverBody, PopoverFooter, Tooltip, Popover, PopoverTrigger } from "@chakra-ui/react";
import { IconChevronDown, IconFlag, IconUser } from '@tabler/icons-react';
import { useState } from "react";
import GroupBy from "./groups";

const ViewPopOver = () => {

  return (
    <PopoverContent boxShadow='xl' className="popover-content">
      {/** establecemos un classname para desde el padre poder cerrarlo a través de un document.event... */}
      <PopoverArrow />

      <PopoverHeader >
        <div className="flex flex-col">
          <div className="flex items-center justify-between">
            <h5 className="font-semibold">Vista</h5>
            {/** interrogante sobre vista */}
            <Tooltip label="La vista se sincroniza entre compañeros de equipo en proyectos compartidos." placement='top-start'>
              <button>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-question stroke-[#6f6a6a] hover:stroke-[#422a2a]" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <circle cx="12" cy="12" r="9" />
                  <line x1="12" y1="17" x2="12" y2="17.01" />
                  <path d="M12 12v5" />
                  <path d="M12 7v.01" />
                </svg>
              </button>
            </Tooltip>
          </div>
          {/** configuración de como ver la vista actual */}
          <div className="flex items-center justify-center gap-1 py-1 px-2 mt-2 rounded-md bg-gray-100">
            {/** elemento lista */}
            <button className="bg-white rounded-md py-1 flex flex-col items-center justify-center w-1/2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" fill="none" viewBox="0 0 24 25" aria-hidden="true"><path fill="currentColor" fillRule="evenodd" d="M17.333 4.001A2.667 2.667 0 0 1 20 6.668v10.667A2.667 2.667 0 0 1 17.333 20H6.667A2.667 2.667 0 0 1 4 17.335V6.668A2.667 2.667 0 0 1 6.667 4h10.666Zm-.083 1H6.75a1.75 1.75 0 0 0-1.745 1.62L5 6.75v10.5a1.75 1.75 0 0 0 1.62 1.745l.13.005h10.5a1.75 1.75 0 0 0 1.745-1.62l.005-.13v-10.5a1.75 1.75 0 0 0-1.62-1.745l-.13-.005Zm-.75 7c0-.276-.183-.5-.41-.5H7.91l-.074.008c-.191.043-.336.247-.336.492 0 .276.183.5.41.5h8.18l.074-.008c.191-.042.336-.246.336-.492Zm-.41 3.5c.227 0 .41.224.41.5 0 .246-.145.45-.336.492l-.073.008H7.909c-.226 0-.409-.224-.409-.5 0-.245.145-.45.336-.492l.073-.008h8.182Zm.41-7.5c0-.276-.183-.5-.41-.5H7.91l-.074.008c-.191.043-.336.247-.336.492 0 .276.183.5.41.5h8.18l.074-.008c.191-.042.336-.246.336-.492Z" clipRule="evenodd"></path></svg>
              <span>Lista</span>
            </button>

            {/** elemento panel */}
            <button className="hover:bg-gray-200 rounded-md py-1 flex flex-col items-center justify-center w-1/2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" fillRule="evenodd" d="M17.333 4.001A2.667 2.667 0 0 1 20 6.668v10.667A2.667 2.667 0 0 1 17.333 20H6.667A2.667 2.667 0 0 1 4 17.335V6.668A2.667 2.667 0 0 1 6.667 4h10.666Zm-.083 1H6.75a1.75 1.75 0 0 0-1.745 1.62L5 6.75v10.5a1.75 1.75 0 0 0 1.62 1.745l.13.005h10.5a1.75 1.75 0 0 0 1.745-1.62l.005-.13v-10.5a1.75 1.75 0 0 0-1.62-1.745l-.13-.005Zm-4.758 2.836C12.45 7.646 12.245 7.5 12 7.5c-.276 0-.5.183-.5.41v8.181l.008.074c.042.19.247.335.492.335.276 0 .5-.183.5-.409V7.91l-.008-.073ZM8 7.5c.245 0 .45.145.492.336l.008.073v8.182c0 .226-.224.41-.5.41-.245 0-.45-.145-.492-.336l-.008-.074V7.91c0-.226.224-.409.5-.409Zm8.492.336C16.45 7.646 16.245 7.5 16 7.5c-.276 0-.5.183-.5.41v8.181l.008.074c.042.19.247.335.492.335.276 0 .5-.183.5-.409V7.91l-.008-.073Z" clipRule="evenodd"></path></svg>
              <span>Panel</span>
            </button>
          </div>
        </div>
      </PopoverHeader>

      <PopoverBody>
        <div>
          {/** header del body */}
          <div className="flex flex-col">
            <div className="flex items-center justify-between">
              <h5 className="font-semibold">Ordenar por</h5>
              {/** interrogante sobre vista */}
              <Tooltip label="Las opciones para ordenar se te aplican solo a ti." placement='top-start'>
                <button>
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-question stroke-[#6f6a6a] hover:stroke-[#422a2a]" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <circle cx="12" cy="12" r="9" />
                    <line x1="12" y1="17" x2="12" y2="17.01" />
                    <path d="M12 12v5" />
                    <path d="M12 7v.01" />
                  </svg>
                </button>
              </Tooltip>
            </div>

          </div>

          {/** propio cuerpo */}
          <div className="mt-2 text-sm">
            {/** opcion agrupacion */}
            <Popover>
              {/** trigger del popover de los groupby */}
              <PopoverTrigger>
                <button className="flex items-center justify-between px-1 py-1 w-full rounded-md hover:bg-gray-100">
                  <div className="flex items-center justify-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" fillRule="evenodd" d="M18 3a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h12Zm0 1H6a2 2 0 0 0-1.995 1.85L4 6v12a2 2 0 0 0 1.85 1.994L6 20h12a2 2 0 0 0 1.994-1.85L20 18V6a2 2 0 0 0-1.85-1.995L18 4Zm-3 4.5A1.5 1.5 0 0 0 13.5 7h-5A1.5 1.5 0 0 0 7 8.5v5A1.5 1.5 0 0 0 8.5 15h5a1.5 1.5 0 0 0 1.5-1.5v-5ZM8.5 8h5l.09.008A.5.5 0 0 1 14 8.5v5l-.008.09a.5.5 0 0 1-.492.41h-5l-.09-.008A.5.5 0 0 1 8 13.5v-5l.008-.09A.5.5 0 0 1 8.5 8Zm.585 8a1.5 1.5 0 0 0 1.415 1h5a1.5 1.5 0 0 0 1.5-1.5v-5a1.5 1.5 0 0 0-1-1.415V15.5a.5.5 0 0 1-.5.5H9.085Z" clipRule="evenodd"></path></svg>
                    <span>Agrupar por</span>
                  </div>
                  <div className="text-gray-500 flex items-center justify-center gap-1 hover:text-black">
                    <span >Ninguno</span>
                    {/** svg flecha hacia abajo */}
                    <IconChevronDown stroke={1.5} />
                  </div>
                </button>
              </PopoverTrigger>
              <GroupBy />
            </Popover>

            {/** opcion ordenado */}
            <button className="flex items-center justify-between px-1 py-1 w-full rounded-md hover:bg-gray-100">
              <div className="flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="m16.854 5.146 3 3a.502.502 0 0 1-.708.708L17 6.707V18.5a.5.5 0 0 1-1 0V6.707l-2.146 2.147a.502.502 0 0 1-.708-.708l3-3a.502.502 0 0 1 .708 0zM7.5 5a.5.5 0 0 1 .5.5v11.791l2.146-2.145a.502.502 0 0 1 .708.708l-3 3a.502.502 0 0 1-.708 0l-3-3a.502.502 0 0 1 .708-.708L7 17.293V5.5a.5.5 0 0 1 .5-.5z"></path></svg>
                <span>Ordenar por</span>
              </div>
              <div className="text-gray-500 flex items-center justify-center gap-1 hover:text-black">
                <span className="w-[80%] truncate">Inteligente </span>
                {/** svg flecha hacia abajo */}
                <IconChevronDown stroke={1.5} />
              </div>
            </button>
          </div>
        </div>

      </PopoverBody>

      <PopoverFooter>
        <div>
          {/** header del body */}
          <div className="flex flex-col">
            <div className="flex items-center justify-between">
              <h5 className="font-semibold">Filtrar por</h5>
              {/** interrogante sobre vista */}
              <Tooltip label="Las opciones para filtrar se te aplican solo a ti." placement='top-start'>
                <button>
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-question stroke-[#6f6a6a] hover:stroke-[#422a2a]" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <circle cx="12" cy="12" r="9" />
                    <line x1="12" y1="17" x2="12" y2="17.01" />
                    <path d="M12 12v5" />
                    <path d="M12 7v.01" />
                  </svg>
                </button>
              </Tooltip>
            </div>

          </div>

          {/** propio cuerpo */}
          <div className="mt-2 text-sm">
            {/** opcion agrupacion */}
            <Popover placement="left">
              {/** trigger del popover de los groupby */}
              <PopoverTrigger>
                <button className="flex items-center justify-between px-1 py-1 w-full rounded-md hover:bg-gray-100">
                  <div className="flex items-center justify-center gap-2">
                    <IconUser stroke={1} />
                    <span>Asignar a</span>
                  </div>
                  <div className="text-gray-500 flex items-center justify-center gap-1 hover:text-black">
                    <span >Defecto</span>
                    {/** svg flecha hacia abajo */}
                    <IconChevronDown stroke={1.5} />
                  </div>
                </button>
              </PopoverTrigger>
            </Popover>


            {/** opcion prioridad */}
            <button className="flex items-center justify-between px-1 py-1 w-full rounded-md hover:bg-gray-100">
              <div className="flex items-center justify-center gap-2">
                <IconFlag stroke={1} />
                <span>Prioridad</span>
              </div>
              <div className="text-gray-500 flex items-center justify-center gap-1 hover:text-black">
                <span className="w-[80%] truncate">Todos </span>
                {/** svg flecha hacia abajo */}
                <IconChevronDown stroke={1.5} />
              </div>
            </button>
          </div>
        </div>

      </PopoverFooter>
    </PopoverContent>
  );
}

export default ViewPopOver;