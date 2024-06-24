
interface formTasksProps {
  showTaskForm: boolean;
  setShowTaskForm: any;
}

const FormTasks: React.FC<formTasksProps> = ({ showTaskForm, setShowTaskForm }) => {
  return (
    <div className="mt-4 border rounded-md shadow-sm w-[20vw] px-4 py-2">
      <h4 className="text-gray-400">Nombre de la tarea</h4>
      <span className="text-gray-400 text-sm">Descripción</span>
    </div>
  )
}

export default FormTasks;