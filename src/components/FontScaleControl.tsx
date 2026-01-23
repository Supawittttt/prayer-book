interface FontScaleControlProps {
  onDecrease: () => void
  onReset: () => void
  onIncrease: () => void
  canDecrease: boolean
  canIncrease: boolean
}

export function FontScaleControl({
  onDecrease,
  onReset,
  onIncrease,
  canDecrease,
  canIncrease
}: FontScaleControlProps) {
  return (
    <fieldset className='flex justify-center gap-3 text-sm border-0 p-0 m-0'>
      <legend className='sr-only'>ตัวปรับขนาดตัวอักษร</legend>
      <button
        type='button'
        className='px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed'
        onClick={onDecrease}
        disabled={canDecrease}
      >
        A-
      </button>
      <button
        type='button'
        className='px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50'
        onClick={onReset}
      >
        A
      </button>
      <button
        type='button'
        className='px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed'
        onClick={onIncrease}
        disabled={canIncrease}
      >
        A+
      </button>
    </fieldset>
  )
}
