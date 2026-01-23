import { useMemo, useState } from 'react'
import {
  Header,
  Hero,
  PrayerGrid,
  ExtendedPrayerGrid,
  Footer,
  AutoScrollButton
} from './components'
import { useFontScale, useAutoScroll } from './hooks'
import { PRAYERS, EXTENDED_PRAYERS } from './constants/prayers'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const { fontScale, increaseFont, decreaseFont, resetFont, canDecrease, canIncrease } =
    useFontScale()
  const { isAutoScroll, setIsAutoScroll, scrollSpeed, setScrollSpeed } = useAutoScroll()
  const normalizedQuery = searchQuery.trim().toLowerCase()

  const filteredPrayers = useMemo(() => {
    if (!normalizedQuery) {
      return PRAYERS
    }

    return PRAYERS.filter(
      (prayer) =>
        prayer.title.toLowerCase().includes(normalizedQuery) ||
        prayer.description.toLowerCase().includes(normalizedQuery)
    )
  }, [normalizedQuery])

  const filteredExtendedPrayers = useMemo(() => {
    if (!normalizedQuery) {
      return EXTENDED_PRAYERS
    }

    return EXTENDED_PRAYERS.filter(
      (prayer) =>
        prayer.title.toLowerCase().includes(normalizedQuery) ||
        prayer.description.toLowerCase().includes(normalizedQuery)
    )
  }, [normalizedQuery])

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 to-slate-100'>
      <Header
        mobileMenuOpen={mobileMenuOpen}
        onMobileMenuToggle={() => setMobileMenuOpen(!mobileMenuOpen)}
      />

      <Hero
        onFontIncrease={increaseFont}
        onFontDecrease={decreaseFont}
        onFontReset={resetFont}
        canDecrease={canDecrease}
        canIncrease={canIncrease}
        scrollSpeed={scrollSpeed}
        onScrollSpeedChange={setScrollSpeed}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      <PrayerGrid prayers={filteredPrayers} fontScale={fontScale} />

      <ExtendedPrayerGrid prayers={filteredExtendedPrayers} fontScale={fontScale} />

      <Footer />

      <AutoScrollButton
        isAutoScroll={isAutoScroll}
        onToggle={() => setIsAutoScroll((prev) => !prev)}
      />
    </div>
  )
}

export default App
