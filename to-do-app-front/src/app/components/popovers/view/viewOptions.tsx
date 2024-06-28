import { ViewOptionType } from "@/app/enums/ViewOptionType";
import { GroupByOptions } from "@/app/enums/groupByOptions";
import { PopoverArrow, PopoverContent } from "@chakra-ui/react";
import { useEffect } from "react";

interface ViewOptionsProps {
  option: ViewOptionType; // opciones de cada opcion
}

/**
 * componente para mostrar las diferentes opciones en el popover de "vista"
 * @param props cada vista tiene diferentes opciones de eleccion como "agrupar por" se elige cual usar x los atribs. k mostrar
 * @returns tiene que devolver al padre la opcion elegida de estos props para cambiar el valor preseleccionado
 */
export default function ViewOptions(props: ViewOptionsProps) {

  useEffect(() => {
    console.log(props.option)
  })
  return (
    <PopoverContent  boxShadow='xl' padding={2} maxWidth={60}  >
      <PopoverArrow></PopoverArrow>
      <div className="flex flex-col ">
      {Object.values(GroupByOptions).map(option => (
          <button key={option} className="px-2 py-1 rounded-md hover:bg-gray-100 flex items-start justify-start">
            {option}
          </button>
        ))}
      </div>
    </PopoverContent>
  )
}