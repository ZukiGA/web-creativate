import CreateToast from './create-toast'

const ToastError = (toast: any, message: string) => {
  return CreateToast(toast, message, 'Error', 'error')
}

export default ToastError
