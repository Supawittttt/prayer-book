import { Prayer } from '../constants/prayers'

interface PrayerGridProps {
  prayers: Prayer[]
  fontScale: number
}

export function PrayerGrid({ prayers, fontScale }: PrayerGridProps) {
  return (
    <section id='about' className='bg-white py-12 sm:py-16 lg:py-20'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className='text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12'>บทสวด</h2>
        <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6 lg:gap-8'>
          {prayers.map((item) => (
            <div
              key={item.title}
              className='bg-gradient-to-br from-slate-50 to-slate-100 p-4 rounded-xl hover:shadow-lg transition-shadow'
            >
              <h3 className='text-xl font-semibold text-gray-900 mb-2'>{item.title}</h3>
              <p
                className='text-gray-600 leading-relaxed whitespace-pre-line'
                style={{ fontSize: `${fontScale}rem` }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
