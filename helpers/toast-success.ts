import CreateToast from './create-toast'

const ToastSuccess = (toast: any, message: string) => {
  return CreateToast(toast, message, 'Éxito', 'success')
}

export default ToastSuccess
