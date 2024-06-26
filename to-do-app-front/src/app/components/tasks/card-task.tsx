import { Task } from "@/app/model/task";

interface CardTaskProps {
  task: Task;
}

const CardTask: React.FC<CardTaskProps> = ({ task }) => {
  return (
    <div key={task.id} className="bg-white rounded-lg  border p-4 w-[17vw] mt-2 hover:cursor-pointer hover:shadow-md">
      <div className="flex items-center justify-start gap-2">
        {/** crear un input propio para animacion de completado de tarea */}
        <h2 className="text-md">{task.name}</h2>
      </div>
      <p className="text-sm text-gray-600 mt-1">{task.description}</p>
    </div>
  )
}

export default CardTask;