import { RestMessage } from "@/app/model/restMessage";
import { Task } from "@/app/model/task";
import { updateTask } from "@/app/services/taskService";
import useToastService from "@/app/services/toastService";
import { Tooltip } from '@chakra-ui/react'

interface CardTaskProps {
  task: Task;
  onTaskComplete: (task: Task) => void;
}

const CardTask: React.FC<CardTaskProps> = ({ task, onTaskComplete }) => {

  const toastService = useToastService();

  /**
   * Función para manejar el evento de completar una tarea
   * se marca la tarea, x el momento se borra y se pasa a spring para actualizar este mismo
   */
  const handleCompleteTask = () => {
    // completar tarea
    updateTask({ ...task, completed: true })
      .then((resp:RestMessage) => {
        onTaskComplete(task);
      })
      .catch((error) => {
        toastService.showError('Error al completar la tarea');
      })
  }

  return (
    <div className="group bg-white rounded-lg border p-4 w-[17vw] mt-2 hover:cursor-pointer hover:shadow-md relative">
      {/** opciones 3 puntos sobre la tarea */}
      <div className="absolute top-5 right-3 flex items-end justify-end opacity-0 group-hover:opacity-100 transition-opacity">
        {/** svg de más acciones */}
        <Tooltip label="Más acciones" placement='top-start'>
          <button className="hover:bg-gray-100 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-dots" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#9e9e9e" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
              <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
              <path d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
            </svg>
          </button>
        </Tooltip>
      </div>
      <div className="flex items-center justify-start gap-2">
        {/** titulo de cada tarea */}
        <div className="flex items-center justify-center gap-2">
          <button onClick={handleCompleteTask} className="w-4 h-4 border-[#ABABAB] border rounded-full flex items-center justify-center ">
          {/** svg check task */}
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-check hover:stroke-[#706c6c] stroke-transparent" width="12" height="12" viewBox="0 0 24 24" strokeWidth="2.5"  fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M5 12l5 5l10 -10" />
          </svg>
          </button>
          <h2 className="text-md">{task.name}</h2>
        </div>
      </div>
      <p className="text-sm text-gray-600 mt-1 ml-6">{task.description}</p>
    </div>
  )
}

export default CardTask;