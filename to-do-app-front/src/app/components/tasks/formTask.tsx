import { useEffect, useRef } from "react";
import CardTask from "./card-task";
import { TaskKeys } from "@/app/enums/taskKeys";

interface formTasksProps {
  showTaskForm: boolean;
  setShowTaskForm: any;
}

const FormTasks: React.FC<formTasksProps> = ({ showTaskForm, setShowTaskForm }) => {

  const inputRef = useRef<HTMLInputElement>(null);

  /**
   * useEffect: Hook que se ejecuta después de que el componente se renderiza. Se actualiza cuando showTaskForm cambia.
   * la funcion ejecuta si el ref se aplica correctamente al input se enfoca en el input.
   */
  useEffect(() => {
    if (showTaskForm) {
      inputRef.current?.focus();
    }
  }, [showTaskForm])

  return (
    <div className="mt-4 border rounded-md shadow-sm w-[20vw] px-4 py-2">
      <input ref={inputRef} type="text" placeholder="Nombre de la tarea" className="text-xl text-gray-400 font-semibold focus:outline-none" />
      <input type="text" placeholder="Descripción" className=" text-gray-400 text-sm focus:outline-none" />
      {/** card fecha vencimiento y prioridad*/}
      <div className="flex items-start justify-start gap-3">
        <CardTask task={TaskKeys.DueDate} />
        <CardTask task={TaskKeys.Priority} />
      </div>
      {/** card recordatorios y etiquetas */}
      <div className="flex items-start justify-start gap-3 mt-2">
        <CardTask task={TaskKeys.Reminders} />
        <CardTask task={TaskKeys.Tags} />
      </div>
    </div>
  )
}

export default FormTasks;