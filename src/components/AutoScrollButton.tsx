import { Pause, Play } from 'lucide-react'

interface AutoScrollButtonProps {
  isAutoScroll: boolean
  onToggle: () => void
}

export function AutoScrollButton({ isAutoScroll, onToggle }: AutoScrollButtonProps) {
  const buttonClasses = isAutoScroll
    ? 'bg-red-500 hover:bg-red-600 focus-visible:ring-red-500'
    : 'bg-blue-600 hover:bg-blue-700 focus-visible:ring-blue-500'

  return (
    <button
      type='button'
      aria-pressed={isAutoScroll}
      aria-label={isAutoScroll ? 'หยุด Auto Scroll' : 'เริ่ม Auto Scroll'}
      className={`fixed bottom-6 right-4 sm:right-6 z-50 p-4 rounded-full text-white shadow-xl transition-transform duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 ${buttonClasses}`}
      onClick={onToggle}
    >
      <span className='sr-only'>{isAutoScroll ? 'หยุด Auto Scroll' : 'เริ่ม Auto Scroll'}</span>
      {isAutoScroll ? <Pause className='w-5 h-5' /> : <Play className='w-5 h-5' />}
    </button>
  )
}
