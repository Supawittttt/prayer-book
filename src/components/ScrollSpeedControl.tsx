import { SCROLL_CONFIG } from '../constants/config'

interface ScrollSpeedControlProps {
  scrollSpeed: number
  onChange: (speed: number) => void
}

export function ScrollSpeedControl({ scrollSpeed, onChange }: ScrollSpeedControlProps) {
  return (
    <label className='flex flex-col text-sm font-medium text-gray-600'>
      ความเร็วการเลื่อน:{' '}
      <span className='text-gray-900 font-semibold'>{scrollSpeed.toFixed(0)} px/s</span>
      <input
        type='range'
        min={SCROLL_CONFIG.MIN_SPEED}
        max={SCROLL_CONFIG.MAX_SPEED}
        step={SCROLL_CONFIG.SPEED_STEP}
        value={scrollSpeed}
        onChange={(event) => onChange(Number(event.target.value))}
        className='mt-2 h-2 w-64 rounded-full bg-gray-200 accent-blue-600'
      />
    </label>
  )
}
