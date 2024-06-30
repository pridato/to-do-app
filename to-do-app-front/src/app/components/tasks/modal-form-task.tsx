import useUserStore from '@/app/context/userStore';
import { RestMessage } from '@/app/model/restMessage';
import { Task } from '@/app/model/task';
import { addTask } from '@/app/services/taskService';
import useToastService from '@/app/services/toastService';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Textarea,
  Box,
} from '@chakra-ui/react'
import { IconAlarm, IconCalendarFilled, IconFlag, IconX } from '@tabler/icons-react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react'

interface ModalFormTaskProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalFormTask: React.FC<ModalFormTaskProps> = ({ isOpen, onClose }) => {
  const [priority, setPriority] = useState(false);
  const [reminder, setReminder] = useState(false);

  // task values
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const inputRef = useRef<HTMLInputElement>(null);

  const user = useUserStore();
  const toastService = useToastService();

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen])

  /**
   * metodo para accionar el evento de submit del formulario y enviarlo a spring
   * @param e html input event
   */
  const handleSubmit = (e: any) => {
    e.preventDefault();

    const task: Task = {
      name: name,
      userId: user.user?.id!,
      description: description,
      dueDate: new Date(),
      completed: false,
      projectId: 1
    }

    // addtask metodo propio de taskService.ts que añade una tarea
    addTask(task)
      .then((resp: RestMessage) => {
      })
      .catch((error) => {
        // si hay un error en la respuesta se muestra un mensaje de error
        toastService.showError(error.response.data.message);
      })
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} >
      <ModalOverlay />
      <ModalContent className="p-4 rounded-lg shadow-lg">
        <ModalHeader className="text-lg font-bold">
          <input value={name} onChange={(e) => setName(e.target.value)} ref={inputRef} type="text" placeholder="Nombre de la tarea" className="text-xl text-gray-400 font-semibold focus:outline-none" />
        </ModalHeader>
        <ModalBody>
          <Textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Descripción" className="mb-4" />
          <Box className="flex items-center mb-4">
            <button
              onClick={() => setPriority(!priority)}
              className={`border-gray-200 border rounded-md py-1 px-2 mr-2 text-gray-500 hover:bg-gray-100 flex items-center justify-center gap-2`}
            >
              <IconCalendarFilled width={18} height={18}/>
              <span>Hoy</span>
              <IconX width={14} height={14} className='stroke-gray-400 hover:stroke-gray-500'/>
            </button>
            <button
              onClick={() => setPriority(!priority)}
              className={`border-gray-200 border rounded-md py-1 px-2 mr-2 text-gray-500 hover:bg-gray-100 flex items-center justify-center gap-2`}
            >
              <IconFlag width={18} height={18} />
              <span>Prioridad</span>
              
            </button>
            <button
              onClick={() => setReminder(!reminder)}
              className={`border-gray-200 border rounded-md py-1 px-2 mr-2 text-gray-500 hover:bg-gray-100 flex items-center justify-center gap-2`}
            >
              <IconAlarm width={18} height={18} />
              <span>Recordatorios</span>
            </button>
          </Box>
        </ModalBody>
        <ModalFooter className="flex justify-between">
          <button onClick={handleSubmit} className="bg-[#dc4b3e] hover:bg-[#9b3930] rounded-md py-1 px-2 text-white w-full">Añadir tarea</button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default ModalFormTask;