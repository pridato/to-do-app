import { TaskKeys } from "@/app/enums/taskKeys";

interface CardTaskProps {
  task: TaskKeys;
}

const CardTask: React.FC<CardTaskProps> = ({ task }) => {

  const renderCard = (taskKey: TaskKeys) => {
    switch(taskKey) {
      case TaskKeys.DueDate:
        return (
          <button className="border rounded-md w-[5vw] text-sm px-3 py-1 hover:bg-gray-200 border-gray-300 flex items-center justify-center gap-2">
            <span className="text-xs">img</span>
            <span className="text-gray-400">Hoy</span>
            <button className="text-xs">X</button>
          </button>
        )
      case TaskKeys.Priority:
        return (
          <button className="border rounded-md w-[1vw] text-sm px-3 py-1 hover:bg-gray-200 border-gray-300 flex items-center justify-center gap-2">
            <span className="text-gray-400">B</span>
          </button>
        )
      case TaskKeys.Reminders:
        return (
          <button className="border rounded-md w-[8vw] text-sm px-3 py-1 hover:bg-gray-200 border-gray-300 flex items-center justify-center gap-2">
            <span className="text-xs">img</span>
            <span className="text-gray-400 text-xs">ACTUALIZAR</span>
          </button>
        )
      case TaskKeys.Tags:
        return (
          <button className="border rounded-md w-[8vw] text-sm px-3 py-1 hover:bg-gray-200 border-gray-300 flex items-center justify-center gap-2">
            <span className="text-xs">img</span>
            <span className="text-gray-400 text-xs">Etiquetas</span>
          </button>
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