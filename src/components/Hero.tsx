import { FontScaleControl } from './FontScaleControl'
import { ScrollSpeedControl } from './ScrollSpeedControl'
import { SearchBar } from './SearchBar'

interface HeroProps {
  onFontIncrease: () => void
  onFontDecrease: () => void
  onFontReset: () => void
  canDecrease: boolean
  canIncrease: boolean
  scrollSpeed: number
  onScrollSpeedChange: (speed: number) => void
  searchQuery: string
  onSearchChange: (value: string) => void
}

export function Hero({
  onFontIncrease,
  onFontDecrease,
  onFontReset,
  canDecrease,
  canIncrease,
  scrollSpeed,
  onScrollSpeedChange,
  searchQuery,
  onSearchChange
}: HeroProps) {
  return (
    <section id='home' className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-28'>
      <div className='text-center'>
        <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6'>
          <span className='block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600'>
            บทสวดมนต์ประจำวัน
          </span>
        </h1>
        <p className='text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-6 leading-relaxed'>
          รวมบทสวดมนต์ที่สำคัญและสำหรับการปฏิบัติในชีวิตประจำวัน
        </p>
        <div className='flex justify-center mb-6'>
          <FontScaleControl
            onDecrease={onFontDecrease}
            onReset={onFontReset}
            onIncrease={onFontIncrease}
            canDecrease={canDecrease}
            canIncrease={canIncrease}
          />
        </div>
        <div className='flex justify-center mb-6'>
          <ScrollSpeedControl scrollSpeed={scrollSpeed} onChange={onScrollSpeedChange} />
        </div>
        <div className='flex justify-center'>
          <SearchBar value={searchQuery} onChange={onSearchChange} />
        </div>
      </div>
    </section>
  )
}
