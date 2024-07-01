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
import i18next from "i18next";
import useLangStore from "../context/langStore";

function App() {
  const lang = useLangStore();
  
  const [isEditing, setIsEditing] = useState(false)
  const [tasks, setTasks] = useState<Task[]>([])
  const user = useUserStore();
  const showToast = (message: string, redirect: string, showTask: boolean) => { 
    toast(<CustomToast message={message} redirect={redirect} openToast={showTask ? handleOpenTask : null} />)
  }
  const [taskCreated, setTaskCreated] = useState<Task | null>(null)

  const toastServiceRef = useRef(useToastService());
  const toastService = toastServiceRef.current;

  useEffect(() => {
    const i18next = lang.i18next;
    console.log('idioma cambiado')

    if (!user?.user?.id) return

    const fetchTasks = async () => {
      try {
        const data = await getTasksUser(user?.user?.id!);
        setTasks(data);
      } catch (error) {
        toastService.showError(i18next.t('Error al obtener las tareas'));
      }
    }

    fetchTasks();
  }, [user?.user?.id, toastService, lang.i18next]);

  const handleEdit = () => {
    setIsEditing(true)
  }

  /**
   * metodo para añadir una nueva tarea
   * @param newTask tarea a añadir. Cuidado tiene k tener id
   */
  const handleNewTask = (newTask: Task) => {
    setTasks(prevTasks => [...prevTasks, newTask]);
    setTaskCreated(newTask);
    showToast(i18next.t('Añadido a'), i18next.t('Bandeja de entrada'), true)
  };

  /**
   * TODO: metodo para abrir la tarea completada y editarla...
   */
  const handleOpenTask = () => {
    toast.dismiss()
  }

  const handleCompletedTask = (task: Task) => {
    let updatedTasks = tasks.filter(t => t.id !== task.id)
    setTasks(updatedTasks);
    showToast(i18next.t('Tarea completada'), '', false)
  }

  return (
    <main className="mt-10 ml-4">
      <h1 className="font-bold text-2xl">{i18next.t('Hoy')}</h1>
  
      <div className="flex flex-col items-start justify-start mt-4">
        <div className="font-semibold">25 Jun · {i18next.t('Hoy')} <span className="text-[#A2A2A2] ml-2">{tasks.length}</span></div>
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
          <span>{i18next.t('Añadir tarea')}</span>
        </button>
      ) : (
        <FormTasks showTaskForm={isEditing} setShowTaskForm={setIsEditing} onNewTask={handleNewTask} />
      )}
  
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

export default App;