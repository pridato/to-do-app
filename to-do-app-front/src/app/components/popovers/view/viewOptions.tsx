import { ViewOptionType } from "@/app/enums/ViewOptionType";
import { AsignToOptions } from "@/app/enums/optionsView/asignToOptions";
import { GroupByOptions } from "@/app/enums/optionsView/groupByOptions";
import { OrderByOptions } from "@/app/enums/optionsView/orderByOptions";
import { PriorityOptions } from "@/app/enums/optionsView/priorityOptions";
import { PopoverArrow, PopoverContent } from "@chakra-ui/react";
import { useEffect, useState } from "react";

interface ViewOptionsProps {
  option: ViewOptionType; // opciones de cada opcion
}

/**
 * componente para mostrar las diferentes opciones en el popover de "vista"
 * @param props cada vista tiene diferentes opciones de eleccion como "agrupar por" se elige cual usar x los atribs. k mostrar
 * @returns tiene que devolver al padre la opcion elegida de estos props para cambiar el valor preseleccionado
 */
export default function ViewOptions(props: ViewOptionsProps) {

  const [selectedoption, setSelectedOption] = useState<GroupByOptions[] | OrderByOptions[] | AsignToOptions[] | PriorityOptions[]>(Object.values(GroupByOptions))

  useEffect(() => {

    // usamos un switch y depende de la opcion elegida creamos una variable con todos los tipos de opciones
    switch (props.option) {
      case ViewOptionType.GroupBy:
        return setSelectedOption(Object.values(GroupByOptions))
      case ViewOptionType.OrderBy:
        return setSelectedOption(Object.values(OrderByOptions))
      case ViewOptionType.AsignTo:
        return setSelectedOption(Object.values(AsignToOptions))
      case ViewOptionType.Priority:
        return setSelectedOption(Object.values(PriorityOptions))
    }
    
  }, [props.option])

  return (
    <PopoverContent className="popover-content-child" boxShadow='xl' padding={2} maxWidth={60}  >
      <PopoverArrow></PopoverArrow>
      <div className="flex flex-col ">
        {selectedoption.map(option => (
          <button key={option + '1'} className="px-2 py-1 rounded-md hover:bg-gray-100 flex items-start justify-start">
            {option}
          </button>
        ))}
      </div>
    </PopoverContent>
  )
}