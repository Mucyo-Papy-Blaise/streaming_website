import { Loader } from 'lucide-react'

const LoadingComponent = () => {
  return (
    <div className='flex items-center justify-center h-screen'>
      <Loader className='w-7 h-7 animate-spin' />
    </div>
  )
}

export default LoadingComponent
