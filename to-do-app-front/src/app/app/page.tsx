"use client"
import { useState } from "react";
import FormTasks from "../components/tasks/formTask";

export default function App() {

  const [isEditing, setIsEditing] = useState(false)

  const handleEdit = () => {
    setIsEditing(true)
  }

  return (
    <main className="mt-10 ml-4">
      <h1 className="font-bold text-2xl">Hoy</h1>

      <span className="text-[#A2A2A2] text-sm mt-2">contador tareas total...</span>

      <div className="flex flex-col items-start justify-start mt-4">
        <div className="font-semibold">25 Jun · Hoy <span className="text-[#A2A2A2] ml-2">0</span></div>
      </div>

      {
        /** boton añadir tareas */
        !isEditing ? (
          <button onClick={handleEdit} className="text-[#A2A2A2] hover:text-[#AB2C12] mt-4  gap-2 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-plus" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#AB2C12" fill="none" strokeLinecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 5l0 14" />
              <path d="M5 12l14 0" />
            </svg>
            <span>Añadir tarea</span>
          </button>
        )
          : (
            <FormTasks showTaskForm={isEditing} setShowTaskForm={setIsEditing} />
          )
      }

    </main>
  );
}