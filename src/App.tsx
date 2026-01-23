import { useState } from 'react'
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
  const { fontScale, increaseFont, decreaseFont, resetFont, canDecrease, canIncrease } =
    useFontScale()
  const { isAutoScroll, setIsAutoScroll, scrollSpeed, setScrollSpeed } = useAutoScroll()

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
      />

      <PrayerGrid prayers={PRAYERS} fontScale={fontScale} />

      <ExtendedPrayerGrid prayers={EXTENDED_PRAYERS} fontScale={fontScale} />

      <Footer />

      <AutoScrollButton
        isAutoScroll={isAutoScroll}
        onToggle={() => setIsAutoScroll((prev) => !prev)}
      />
    </div>
  )
}

export default App
