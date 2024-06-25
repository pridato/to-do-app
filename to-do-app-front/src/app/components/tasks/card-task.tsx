import { TaskKeys } from "@/app/enums/taskKeys";
import { Tooltip } from '@chakra-ui/react'
import { useState } from "react";

interface CardTaskProps {
  task: TaskKeys;
}

const CardTask: React.FC<CardTaskProps> = ({ task }) => {

  const [dueDate, setDueDate] = useState<Date>();
  const [priority, setPriority] = useState<number>();
  const [reminders, setReminders] = useState<Date[]>([]);
  const [tags, setTags] = useState<string[]>([]);

  const renderCard = (taskKey: TaskKeys) => {
    switch (taskKey) {
      case TaskKeys.DueDate:
        return (
          <Tooltip label="Establecer fecha de vencimiento" placement='top-start' aria-label="A tooltip">
            <button className="border rounded-md w-[5vw] text-sm px-3 py-1 hover:bg-gray-200 border-gray-300 flex items-center justify-center gap-2">
              <span className="text-gray-400">Hoy</span>
              <button className="text-xs text-gray-500 hover:text-black">X</button>
            </button>
          </Tooltip>

        )
      case TaskKeys.Priority:
        return (
          <Tooltip label="Establecer prioridad p1, p2, p3, p4" placement='top-start' >
            <button className="border rounded-md px-3 py-1 hover:bg-gray-200 border-gray-300 flex items-center justify-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-flag" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#9e9e9e" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 5a5 5 0 0 1 7 0a5 5 0 0 0 7 0v9a5 5 0 0 1 -7 0a5 5 0 0 0 -7 0v-9z" />
                <path d="M5 21v-7" />
              </svg>
            </button>
          </Tooltip>

        )
      case TaskKeys.Reminders:
        return (
          <Tooltip label="Añadir redcordatorios" placement='bottom-start' >
            <button className="border rounded-md text-sm px-3 py-1 hover:bg-gray-200 border-gray-300 flex items-center justify-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-alarm" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#9e9e9e" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 13m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
              <path d="M12 10l0 3l2 0" />
              <path d="M7 4l-2.75 2" />
              <path d="M17 4l2.75 2" />
            </svg>
            <div className="bg-[#FAEAD1] rounded-md px-2">
              <span className="text-red-700 text-xs font-semibold">ACTUALIZAR</span>
            </div>
          </button>
          </Tooltip>
          
        )
      case TaskKeys.Tags:
        return (
          <Tooltip label="Añadir etiquetado" placement='bottom-start' >
            <button className="border rounded-md text-sm px-3 py-1 hover:bg-gray-200 border-gray-300 flex items-center justify-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-tag" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#9e9e9e" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M7.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
              <path d="M3 6v5.172a2 2 0 0 0 .586 1.414l7.71 7.71a2.41 2.41 0 0 0 3.408 0l5.592 -5.592a2.41 2.41 0 0 0 0 -3.408l-7.71 -7.71a2 2 0 0 0 -1.414 -.586h-5.172a3 3 0 0 0 -3 3z" />
            </svg>
            <span className="text-gray-400 text-xs">Etiquetas</span>
          </button>
          </Tooltip>
          
        )
    }
  }

  return (
    <div >
      {renderCard(task)}
    </div>
  )
}

export default CardTask;