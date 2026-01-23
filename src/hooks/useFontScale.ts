import { useState } from 'react'
import { FONT_CONFIG } from '../constants/config'

export function useFontScale() {
    const [fontScale, setFontScale] = useState(FONT_CONFIG.DEFAULT)

    const increaseFont = () =>
        setFontScale((prev) => Math.min(prev + FONT_CONFIG.STEP, FONT_CONFIG.MAX))

    const decreaseFont = () =>
        setFontScale((prev) => Math.max(prev - FONT_CONFIG.STEP, FONT_CONFIG.MIN))

    const resetFont = () => setFontScale(FONT_CONFIG.DEFAULT)

    const canDecrease = fontScale <= FONT_CONFIG.MIN
    const canIncrease = fontScale >= FONT_CONFIG.MAX

    return {
        fontScale,
        increaseFont,
        decreaseFont,
        resetFont,
        canDecrease,
        canIncrease
    }
}
