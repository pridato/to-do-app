"use client"
import { useEffect, useRef, useState } from "react";
import FormTasks from "../components/tasks/formTask";
import { getTasksUser } from "../services/taskService";
import useUserStore from "../context/userStore";
import { Task } from "../model/task";
import useToastService from "../services/toastService";
import CardTask from "../components/tasks/card-task";
import { toast, ToastContainer } from 'react-toastify';
import CustomToast from "../components/toast/customToast";
import 'react-toastify/dist/ReactToastify.css';


export default function App() {

  const [isEditing, setIsEditing] = useState(false)
  const [tasks, setTasks] = useState<Task[]>([])
  const user = useUserStore();
  // 'tarea completada' redirect null y open tmb
  const showToast = (message:string, redirect:string, showTask:boolean) => { 
    toast(<CustomToast message={message} redirect={redirect} openToast={showTask ? handleOpenTask : null} />) }
  const [taskCreated, setTaskCreated] = useState<Task | null>(null)

  // para evitar problemas de renderizado infinito que nos probocaba el uso de useToastService directamente
  // creamos una referencia para el hook
  const toastServiceRef = useRef(useToastService());
  const toastService = toastServiceRef.current;

  useEffect(() => {


    if (!user?.user?.id) return

    /**
     * Función para obtener las tareas del usuario
     */
    const fetchTasks = async () => {
      try {
        const data = await getTasksUser(user?.user?.id!);
        setTasks(data);
      } catch (error) {
        toastService.showError('Error al obtener las tareas');
      }
    }

    fetchTasks();

  }, [user?.user?.id, toastService]);

  /**
   * Función para manejar el evento de edición de tareas
   */
  const handleEdit = () => {
    setIsEditing(true)
  }

  /**
   * metodo para manejar la creación de una nueva tarea
   * Básicamente se usa esta función para cuando en el hijo formTask se completa una tarea, se añada a la lista de tareas
   * @param newTask tarea a insertar
   */
  const handleNewTask = (newTask: Task) => {
    setTasks(prevTasks => [...prevTasks, newTask]);
    setTaskCreated(newTask); // -> para mostrar el toast
    showToast('Añadido a', 'Bandeja de entrada', true)
  };

  /**
   * metodo para manejar la apertura de una tarea
   * @param task tarea a abrir
   */
  const handleOpenTask = () => {
    //TODO abrir un modal de la tarea
    toast.dismiss() // cerrar
  }

  /**
   * metodo para manejar la tarea completada
   * @param task tarea completada
   */
  const handleCompletedTask = (task: Task) => {
    // 1º a través de un map se recorren todas las tareas y la task en concreto que mandamos se actualiza en esta lista 
    const updatedTasks = tasks.filter(t => t.id !== task.id)
    setTasks(updatedTasks);
    showToast('Tarea completada', '', false)
  }

  return (
    <main className="mt-10 ml-4">
      <h1 className="font-bold text-2xl">Hoy</h1>
  
      <div className="flex flex-col items-start justify-start mt-4">
        <div className="font-semibold">25 Jun · Hoy <span className="text-[#A2A2A2] ml-2">{tasks.length}</span></div>
      </div>
  
      {tasks.length > 0 && (
        tasks.map((task) => (
          <CardTask task={task} key={task.id} onTaskComplete={handleCompletedTask}/>
        ))
      )}
  
      {!isEditing ? (
        <button onClick={handleEdit} className="text-[#A2A2A2] hover:text-[#AB2C12] mt-4 gap-2 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-plus" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#AB2C12" fill="none" strokeLinecap="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 5l0 14" />
            <path d="M5 12l14 0" />
          </svg>
          <span>Añadir tarea</span>
        </button>
      ) : (
        <FormTasks showTaskForm={isEditing} setShowTaskForm={setIsEditing} onNewTask={handleNewTask} />
      )}
  
      {/** toast container */}
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar
        newestOnTop
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </main>
  );
}