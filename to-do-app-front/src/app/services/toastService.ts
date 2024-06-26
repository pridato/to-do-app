import { useToast } from '@chakra-ui/react'

/**
 * @api {Service} ToastService ToastService
 * @apiGroup Services
 * @apiDescription Servicio para mostrar mensajes de alerta en la aplicación.
 */

function useToastService() {
  const toast = useToast()

  /**
   * metodo para mostrar un error en la aplicación
   * @param message mensaje a mostrar
   */
  const showError = (message: string) => {
    toast({
      title: "Error",
      description: message,
      status: "error",
      duration: 3000,
      isClosable: true,
    })
  }

  /**
   * metodo para mostrar un mensaje de éxito en la aplicación
   * @param message mensaje a mostrar
   */
  const showSuccess = (message: string) => {
    toast({
      title: "Éxito",
      description: message,
      status: "success",
      duration: 3000,
      isClosable: true,
    })
  }

  /**
   * metodo para mostrar un mensaje de informacion en la aplicación
   * @param message mensaje a mostrar
   */
  const showInfo = (message: string) => {
    toast({
      title: "Información",
      description: message,
      status: "info",
      duration: 3000,
      isClosable: true,
    })
  }

  return {
    showError,
    showSuccess,
    showInfo
  }
}

export default useToastService;