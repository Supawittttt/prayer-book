import { Search, X } from 'lucide-react'

interface SearchBarProps {
  value: string
  onChange: (value: string) => void
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className='w-full max-w-2xl'>
      <label className='relative block'>
        <span className='sr-only'>ค้นหาบทสวด</span>
        <Search className='pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400' />
        <input
          type='search'
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder='ค้นหาบทสวดหรือคำสำคัญ...'
          autoComplete='off'
          className='w-full rounded-2xl border border-gray-200 bg-white py-3 pl-12 pr-12 text-base text-gray-900 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200'
        />
        {value && (
          <button
            type='button'
            onClick={() => onChange('')}
            className='absolute right-4 top-1/2 -translate-y-1/2 rounded-full p-1 text-gray-400 transition hover:text-gray-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400'
          >
            <span className='sr-only'>ล้างคำค้นหา</span>
            <X className='h-4 w-4' />
          </button>
        )}
      </label>
    </div>
  )
}
