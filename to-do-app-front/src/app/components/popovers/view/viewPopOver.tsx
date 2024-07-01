import { PopoverContent, PopoverArrow, PopoverHeader, PopoverBody, PopoverFooter, Tooltip, Popover, PopoverTrigger } from "@chakra-ui/react";
import { IconChevronDown, IconFlag, IconUser } from '@tabler/icons-react';
import ViewOptions from "./viewOptions";
import { ViewOptionType } from "@/app/enums/ViewOptionType";
import { useEffect, useState } from "react";
import i18next from '../../../../../i18n';

const ViewPopOver = () => {

  const [openPopover, setOpenPopover] = useState<ViewOptionType | null>(null);
  const [isSpanishLanguage, setIsSpanishLanguage] = useState<boolean>(true);

  // igual que en el padre hacemos un useEffect para si se presiona en el popovercontent propio se cierre cualquiera
  // que este abierto
  useEffect(() => { 
    const handleGlobalClick = (event:any) => {
      if (!event.target.closest('.popover-content-child')) {
        setOpenPopover(null);
      }
    };

    if (openPopover) {
      document.addEventListener('click', handleGlobalClick);
    } else {
      document.removeEventListener('click', handleGlobalClick);
    }

    return () => {
      document.removeEventListener('click', handleGlobalClick);
    };
  })

  /**
   * metodo para gestionar los popover que se mantienen abiertos y cerrarlos al abrir otro 
   * @param popoverName 
   */
  const handleToggle = (popoverName:ViewOptionType | null) => {
    setOpenPopover((prev) => (prev === popoverName ? null : popoverName));
  };

  /**
   * metodo para gestionar el idioma de la página entre español e inglés
   */
  const handleLanguage = () => { 
    const newLanguage = isSpanishLanguage ? 'en' : 'es';
    i18next.changeLanguage(newLanguage)
    setIsSpanishLanguage((prev) => !prev); 
  }

  return (
    <PopoverContent boxShadow='xl' className="popover-content">
      {/** establecemos un classname para desde el padre poder cerrarlo a través de un document.event... */}
      <PopoverArrow />
      
      <PopoverHeader >
        <div className="flex flex-col">
          <div className="flex items-center justify-between">
            <h5 className="font-semibold">{i18next.t('Idioma')}</h5>
            {/** interrogante sobre vista */}
            <Tooltip label={i18next.t('Seleccionar el idioma de la página')} placement='top-start'>
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
            {/** elemento español */}
            <button onClick={handleLanguage} className={`rounded-md py-1 flex flex-col items-center justify-center w-1/2 ${isSpanishLanguage ? 'bg-white' : 'hover:bg-gray-200'}`}>
              <span>{i18next.t('Español')}</span>
            </button>

            {/** elemento ingles */}
            <button onClick={handleLanguage} className={`rounded-md py-1 flex flex-col items-center justify-center w-1/2 ${!isSpanishLanguage ? 'bg-white' : 'hover:bg-gray-200'}`}>
              <span>{i18next.t('Inglés')}</span>
            </button>
          </div>
        </div>
      </PopoverHeader>

      {/** container de ordenar */}
      <PopoverBody>
        <div>
          {/** header del body */}
          <div className="flex flex-col">
            <div className="flex items-center justify-between">
              <h5 className="font-semibold">{i18next.t('Ordenar por')}</h5>
              {/** interrogante sobre vista */}
              <Tooltip label={i18next.t('Las opciones para ordenar se te aplican solo a ti.')} placement='top-start'>
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

          {/** GROUP BY Y ORDER BY */}
          <div className="mt-2 text-sm">
            {/** GROUP BY */}
            {/** si el popover es igual a groupby que es el manejado en este trigger, se abre... */}
            <Popover placement="left" isOpen={openPopover === ViewOptionType.GroupBy} onClose={() => handleToggle(null)}>
              {/** trigger del popover de los groupby */}
              <PopoverTrigger>
                {/** lo que hacemos aquí es un estado de popovers donde controlamos el abierto a partir de su propio nombre, accion */}
                {/** boton para agrupar  */}
                <button onClick={() => handleToggle(ViewOptionType.GroupBy)} className="flex items-center justify-between px-1 py-1 w-full rounded-md hover:bg-gray-100">
                  <div className="flex items-center justify-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" fillRule="evenodd" d="M18 3a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h12Zm0 1H6a2 2 0 0 0-1.995 1.85L4 6v12a2 2 0 0 0 1.85 1.994L6 20h12a2 2 0 0 0 1.994-1.85L20 18V6a2 2 0 0 0-1.85-1.995L18 4Zm-3 4.5A1.5 1.5 0 0 0 13.5 7h-5A1.5 1.5 0 0 0 7 8.5v5A1.5 1.5 0 0 0 8.5 15h5a1.5 1.5 0 0 0 1.5-1.5v-5ZM8.5 8h5l.09.008A.5.5 0 0 1 14 8.5v5l-.008.09a.5.5 0 0 1-.492.41h-5l-.09-.008A.5.5 0 0 1 8 13.5v-5l.008-.09A.5.5 0 0 1 8.5 8Zm.585 8a1.5 1.5 0 0 0 1.415 1h5a1.5 1.5 0 0 0 1.5-1.5v-5a1.5 1.5 0 0 0-1-1.415V15.5a.5.5 0 0 1-.5.5H9.085Z" clipRule="evenodd"></path></svg>
                    <span>{i18next.t('Agrupar por')}</span>
                  </div>
                  <div className="text-gray-500 flex items-center justify-center gap-1 hover:text-black">
                    <span>{i18next.t('Ninguno')}</span>
                    {/** svg flecha hacia abajo */}
                    <IconChevronDown stroke={1.5} />
                  </div>
                </button>
              </PopoverTrigger>
              <ViewOptions option={ViewOptionType.GroupBy} />
            </Popover>

            {/** ORDER BY */}
            <Popover placement="left" isOpen={openPopover === ViewOptionType.OrderBy} onClose={() => handleToggle(null)}>
              {/** trigger del popover de los ORDER BY */}
              <PopoverTrigger>
                <button onClick={() => handleToggle(ViewOptionType.OrderBy)} className="flex items-center justify-between px-1 py-1 w-full rounded-md hover:bg-gray-100">
                  <div className="flex items-center justify-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="m16.854 5.146 3 3a.502.502 0 0 1-.708.708L17 6.707V18.5a.5.5 0 0 1-1 0V6.707l-2.146 2.147a.502.502 0 0 1-.708-.708l3-3a.502.502 0 0 1 .708 0zM7.5 5a.5.5 0 0 1 .5.5v11.791l2.146-2.145a.502.502 0 0 1 .708.708l-3 3a.502.502 0 0 1-.708 0l-3-3a.502.502 0 0 1 .708-.708L7 17.293V5.5a.5.5 0 0 1 .5-.5z"></path></svg>
                    <span>{i18next.t('Ordenar por')}</span>
                  </div>
                  <div className="text-gray-500 flex items-center justify-center gap-1 hover:text-black">
                    <span className="w-[80%] truncate">{i18next.t('Inteligente')}</span>
                    {/** svg flecha hacia abajo */}
                    <IconChevronDown stroke={1.5} />
                  </div>
                </button>
              </PopoverTrigger>
              <ViewOptions option={ViewOptionType.OrderBy} />
            </Popover>

          </div>
        </div>
      </PopoverBody>

      <PopoverFooter>
        <div>
          {/** header del body */}
          <div className="flex flex-col">
            <div className="flex items-center justify-between">
              <h5 className="font-semibold">{i18next.t('Filtrar por')}</h5>
              {/** interrogante sobre vista */}
              <Tooltip label={i18next.t('Las opciones para filtrar se te aplican solo a ti.')} placement='top-start'>
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
            {/** ASIGN TO */}
            <Popover placement="left" isOpen={openPopover === ViewOptionType.AsignTo} onClose={() => handleToggle(null)}>
              <PopoverTrigger>
                <button onClick={() => handleToggle(ViewOptionType.AsignTo)} className="flex items-center justify-between px-1 py-1 w-full rounded-md hover:bg-gray-100">
                  <div className="flex items-center justify-center gap-2">
                    <IconUser stroke={1} />
                    <span>{i18next.t('Asignar a')}</span>
                  </div>
                  <div className="text-gray-500 flex items-center justify-center gap-1 hover:text-black">
                    <span>{i18next.t('Defecto')}</span>
                    {/** svg flecha hacia abajo */}
                    <IconChevronDown stroke={1.5} />
                  </div>
                </button>
              </PopoverTrigger>
              <ViewOptions option={ViewOptionType.AsignTo} />
            </Popover>

            {/** PRIORITY */}
            <Popover placement="left" isOpen={openPopover === ViewOptionType.Priority} onClose={() => handleToggle(null)}>
              <PopoverTrigger>
                <button  onClick={() => handleToggle(ViewOptionType.Priority)} className="flex items-center justify-between px-1 py-1 w-full rounded-md hover:bg-gray-100">
                  <div className="flex items-center justify-center gap-2">
                    <IconFlag stroke={1} />
                    <span>{i18next.t('Prioridad')}</span>
                  </div>
                  <div className="text-gray-500 flex items-center justify-center gap-1 hover:text-black">
                    <span className="w-[80%] truncate">{i18next.t('Todos')}</span>
                    {/** svg flecha hacia abajo */}
                    <IconChevronDown stroke={1.5} />
                  </div>
                </button>
              </PopoverTrigger>
              <ViewOptions option={ViewOptionType.Priority} />
            </Popover>

          </div>
        </div>

      </PopoverFooter>
    </PopoverContent>
  );
}

export default ViewPopOver;