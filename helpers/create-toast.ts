const CreateToast = (
  toast: any,
  message: string,
  title: string,
  status: 'info' | 'warning' | 'success' | 'error' | 'loading'
) => {
  return toast({
    position: 'top-right',
    title,
    description: message,
    status,
    duration: 5000,
    isClosable: true
  })
}

export default CreateToast
