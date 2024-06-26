import { useEffect, useRef } from "react";
import CardTask from "./card-task";
import { TaskKeys } from "@/app/enums/taskKeys";
import { useState } from "react";
import { addTask } from "@/app/services/taskService";
import { RestMessage } from "@/app/model/restMessage";
import useToastService from "@/app/services/toastService";
import useUserStore from "@/app/context/userStore";

interface formTasksProps {
  showTaskForm: boolean;
  setShowTaskForm: any;
}

const FormTasks: React.FC<formTasksProps> = ({ showTaskForm, setShowTaskForm }) => {

  const inputRef = useRef<HTMLInputElement>(null);
  const toastService = useToastService();
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  
  const user = useUserStore();
  /**
   * useEffect: Hook que se ejecuta después de que el componente se renderiza. Se actualiza cuando showTaskForm cambia.
   * la funcion ejecuta si el ref se aplica correctamente al input se enfoca en el input.
   */
  useEffect(() => {
    if (showTaskForm) {
      inputRef.current?.focus();
    }
  }, [showTaskForm])

  /**
   * metodo para accionar el evento de submit del formulario y enviarlo a spring
   * @param e html input event
   */
  const handleSubmit = (e: any) => {
    console.log(user.user?.id)
    e.preventDefault();
    addTask({
      name: name, 
      userId: user.user?.id!,
      description: description, 
      dueDate: new Date(),
      completed: false
    }).then((resp:RestMessage) => {
      toastService.showSuccess(resp.message);
      setShowTaskForm(false);
    }).catch((error) => {
      toastService.showError(error.message);
      console.log(error)
    })

    
  }

  return (
    <div className="mt-4 border rounded-md shadow-sm w-[20vw] px-4 py-2">
      <input value={name} onChange={(e) => setName(e.target.value)} ref={inputRef} type="text" placeholder="Nombre de la tarea" className="text-xl text-gray-400 font-semibold focus:outline-none" />
      <textarea value={description} onChange={(e) => setDescription(e.target.value)}  placeholder="Descripción" className=" text-gray-400 text-sm focus:outline-none"></textarea>
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

      <div className="mt-4 flex items-center justify-between">
        <span className="text-gray-600 text-base">Bandeja</span>
        {/** botones cancelar enviar task */}
        <div className="flex items-center justify-center gap-2">
          {/** cancelar task */}
          <button onClick={() => setShowTaskForm(false)} className="border rounded-md bg-gray-200 hover:bg-gray-300 px-1 py-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.0" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M18 6l-12 12" />
              <path d="M6 6l12 12" />
            </svg>
          </button>
          {/** enviar task */}
          <button onClick={handleSubmit} className="border rounded-md bg-red-400 hover:bg-red-500 px-1 py-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-send-2" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M4.698 4.034l16.302 7.966l-16.302 7.966a.503 .503 0 0 1 -.546 -.124a.555 .555 0 0 1 -.12 -.568l2.468 -7.274l-2.468 -7.274a.555 .555 0 0 1 .12 -.568a.503 .503 0 0 1 .546 -.124z" />
            <path d="M6.5 12h14.5" />
          </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default FormTasks;