import { Menu, X, Home, User, Mail } from 'lucide-react'
import { useState } from 'react'

interface Prayer {
  title: string
  description: string
}

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const prayers: Prayer[] = [
    {
      title: 'คำบูชาพระ',
      description: `อิมินา สักกาเรนะ ตัง พุทธัง อะภิปูชะยามิ
        อิมินา สักกาเรนะ ตัง ธัมมัง อะภิปูชะยามิ
        อิมินา สักกาเรนะ ตัง สังฆัง อะภิปูชะยามิ`
    },
    {
      title: 'คำนมัสการพระรัตนตรัย',
      description: `อะระหัง สัมมา สัมพุทโธ ภะคะวา 
        พุทธังภะคะวันตัง อภิวาเทมิ (กราบ)
        สะวาขาโต ภะคะวะตาธัมโม ธัมมังนะมัสสามิ (กราบ)
        สุปะฏิปันโน ภะคะวะโต สาวะกะสังโฆ สังฆัง นะมามิ (กราบ)`
    },
    {
      title: 'คำอาราธนาศีล 5',
      description: `มะยัง ภันเต วิสุง วิสุง รักขะนัตถายะ
        ติสะระเณนะสะหะ ปัญจะ สีลานิยาจามะ
        
        ทุติยัมปิ มะยังภันเต วิสุง วิสุง รักขะนัตถายะ
        ติสะระเณนะสะหะ ปัญจะ สีลานิยาจามะ

        ตะติยัมปิ มะยังภันเต วิสุง วิสุง รักขะนัตถายะ
        ติสะระเณนะสะหะ ปัญจะ สีลานิยาจามะ`
    },
    {
      title: 'คำนมัสการพระพุทธเจ้า',
      description: `นะโม ตัสสะ ภะคะวะโต อะระหะโต สัมมาสัมพุทธัสสะ 
      (3 จบ)`
    },
    {
      title: 'ไตรสรณคมณ์',
      description: `พุทธัง สะระณัง คัจฉามิ
        ธัมมัง สะระณัง คัจฉามิ
        สังฆัง สะระณัง คัจฉามิ

        ทุติยัมปิ พุทธัง สะระณัง คัจฉามิ
        ทุติยัมปิ ธัมมัง สะระณัง คัจฉามิ
        ทุติยัมปิ สังฆัง สะระณัง คัจฉามิ

        ตะติยัมปิ พุทธัง สะระณัง คัจฉามิ
        ตะติยัมปิ ธัมมัง สะระณัง คัจฉามิ
        ตะติยัมปิ สังฆัง สะระณัง คัจฉามิ`
    },
    {
      title: 'ศีล 5',
      description: `ปาณาติปาตา เวระมะณี สิกขาปะทัง สะมาทิยามิ
        อะทินนาทานา เวระมะณี สิกขาปะทัง สะมาทิยามิ
        กาเมสุมิจฉาจารา เวระมะณี สิกขาปะทัง สะมาทิยามิ
        มุสาวาทา เวระมะณี สิกขาปะทัง สะมาทิยามิ
        สุราเมระยะมัชชะปะมาทัฏฐานา เวระมะณี สิกขาปะทัง สะมาทิยามิ`
    }
  ]

  const extendedPrayers: Prayer[] = [
    {
      title: 'คำขอขมาพระรัตนตรัย',
      description: `สัพพัง อะปะราธัง ขะมะถะ เม ภันเต 
        อุกาสะ ทวารัตเยนะ กะตัง
        สัพพัง อะปะราธัง ขะมะถะ เม ภันเต 
        อุกาสะ ขะมามิ ภันเตฯ

        หากข้าพระพุทธเจ้า ได้เคยประมาทพลาดพลั้งล่วงเกิน 
        ต่อพระรัตนตรัย อันมีพระพุทธเจ้าทุกๆพระองค์ 
        พระปัจเจกพุทธเจ้าทุกๆพระองค์ พระธรรม 
        และพระอริยสงฆ์ทั้งหลาย 

        ในชาติก่อนก็ดี ชาตินี้ก็ดี ด้วยกายก็ดี ด้วยวาจาก็ดี 
        ด้วยใจก็ดี ด้วยเจตนาก็ดี ด้วยความรู้เท่าไม่ถึงการณ์ก็ดี
        
        ขอองค์สมเด็จพระสัมมาสัมพุทธเจ้าทุกๆพระองค์ 
        พระธรรม พระอริยสงฆ์ทั้งหลาย และผู้มีพระคุณทุกท่าน 
        ได้โปรดงดเว้นโทษให้แก่ข้าพระพุทธเจ้า
        ตั้งแต่บัดนี้เป็นต้นไป ตราบเท่าเข้าสู่พระนิพพานด้วยเทอญ`
    },
    {
      title: 'คำแผ่เมตตาให้แก่ตนเอง',
      description: `อะหัง สุขิโต โหมิ
        ขอให้ข้าพเจ้าจงมีความสุข

        อะหัง นิททุกโข โหมิ
        ขอให้ข้าพเจ้าจงปราศจากทุกข์

        อะหัง อเวโร โหมิ
        ขอให้ข้าพเจ้าจงปราศจากเวร

        อะหัง อัพยาปัชโฌ โหมิ
        ขอให้ข้าพเจ้าจงปราศจากความลำบาก

        อะหัง อะนีโฆ โหมิ
        ขอให้ข้าพเจ้าจงปราศจากอุปสรรค

        สุขี อัตตานัง ปะริหะรามิ
        จงรักษาตนให้มีความสุขตลอดกาลนานเทอญ`
    },
    {
      title: 'คำแผ่เมตตาให้แก่ผู้อื่น',
      description: `สัพเพ สัตตา 
        สัตว์ทั้งหลายทั้งปวง ที่เป็นเพื่อนทุกข์
        เกิด แก่ เจ็บ ตาย ด้วยกันทั้งหมดทั้งสิ้น

        อะเวรา โหนตุ 
        จงเป็นสุข เป็นสุขเถิด อย่าได้มีเวรแก่กันและกันเลย

        อัพยาปัชฌา โหนตุ 
        จงเป็นสุข เป็นสุขเถิด อย่าได้เบียดเบียนซึ่งกันและกันเลย

        อะนีฆา โหนตุ 
        จงเป็นสุข เป็นสุขเถิดอย่าได้มีความทุกข์กายทุกข์ใจเลย

        สุขี อัตตานัง ปะริหะรันตุ 
        จงมีความสุขกายสุขใจ
        รักษาตนให้พ้นจากทุกข์ภัยสิ้นเถิด`
    },
    {
      title: 'บทกรวดน้ำ หลวงพ่อฤาษีลิงดำ',
      description: `อิทัง ปุญญะ พะลัง

        ผลบุญใดที่ข้าพเจ้าได้บำเพ็ญ มาแล้ว ณ โอกาสนี้ 
        ข้าพเจ้าขออุทิศส่วนกุศลนี้ ให้แก่เจ้ากรรมนายเวรทั้งหลาย ที่เคยล่วงเกินมาแล้ว 
        
        ตั้งแต่ชาติก่อนก็ดี ชาตินี้ก็ดี ขอให้เจ้ากรรมนายเวรทั้งหลาย จงอนุโมทนาส่วนกุศลนี้ 
        และขอจงอโหสิกรรมให้แก่ข้าพเจ้าตั้งแต่วันนี้ตราบเท่าเข้าสู่พระนิพพาน

        และข้าพเจ้าขออุทิศส่วนกุศลนี้ ให้แก่เทพเจ้าทั้งหลาย ที่ปกปักรักษาตัวข้าพเจ้า 
        และเทพเจ้าทั้งหลายทั่วสากลพิภพ และพญายมราช 

        ขอให้เทพเจ้าทั้งหลาย และพญายมราช 
        จงอนุโมทนาส่วนกุศลนี้ และขอจงเป็นสักขีพยาน 
        ในการบำเพ็ญกุศลของข้าพเจ้าในครั้งนี้ด้วยเถิด

        และข้าพเจ้าขออุทิศส่วนกุศลนี้ ให้แก่ท่านทั้งหลาย 
        ที่ล่วงลับไปแล้ว ที่เสวยความสุขอยู่ก็ดี 
        เสวยความทุกข์อยู่ก็ดี เป็นญาติก็ดี มิใช่ญาติก็ดี 

        ขอให้ท่านทั้งหลายจงอนุโมทนาส่วนกุศลนี้ 
        พึงได้รับประโยชน์ และความสุข 
        เช่นเดียวกับข้าพเจ้า จะพึงได้รับ ณ กาลบัดเดี๋ยวนี้เถิด

        ผลและบุญใดที่ข้าพเจ้าได้บำเพ็ญแล้ว ณ โอกาสนี้ 
        ขอผลบุญนี้จงเป็นปัจจัย ให้ข้าพเจ้าได้เข้าถึง 
        ซึ่งพระนิพพาน ในชาติปัจจุบันนี้เทอญ`
    },
    {
      title: 'คำแผ่ส่วนบุญส่วนกุศล',
      description: `อิทัง เม มาตาปิตูนัง โหตุ สุขิตา โหนตุ มาตาปิตะโร
        - ขอส่วนบุญนี้จงสำเร็จแก่บิดามารดาของข้าพเจ้า ขอให้บิดามารดาของข้าพเจ้ามีความสุข

        อิทัง เม ญาตีนัง โหตุ สุขิตา โหนตุ ญาตะโย
        - ขอส่วนบุญนี้จงสำเร็จแก่ญาติทั้งหลายของข้าพเจ้า ขอให้ญาติทั้งหลายของรข้าพเจ้ามีความสุข

        อิทัง เม คุรูปัชฌายาจริยานัง โหตุ สุขิตา โหนตุ คุรูปัชฌายาจริยา
        - ขอส่วนบุญนี้จงสำเร็จแก่ครูอุปัชฌาย์อาจารย์ของข้าพเจ้า ขอให้ครูอุปัชฌาย์อาจารย์ของข้าพเจ้ามีความสุข

        อิทัง สัพพะเทวะตานัง โหตุ สุขิตา โหนตุ สัพเพ เทวา
        - ขอส่วนบุญนี้จงสำเร็จแก่เทวดาทั้งหลายทั้งปวง ขอให้เทวดาทั้งหลายทั้งปวงมีความสุข

        อิทัง สัพพะเปตานัง โหตุ สุขิตา โหนตุ สัพเพ เปตา
        - ขอส่วนบุญนี้จงสำเร็จแก่เปรตทั้งหลายทั้งปวง ขอให้เปรตทั้งหลายทั้งปวงมีความสุข

        อิทัง สัพพะเวรีนัง โหตุ สุขิตา โหนตุ สัพเพ เวรี
        - ขอส่วนบุญนี้จงสำเร็จแก่เจ้ากรรมนายเวรทั้งหลายทั้งปวง ขอให้เจ้ากรรมนายเวรทั้งหลายทั้งปวงมีความสุข

        อิทัง สัพพะสัตตานัง โหตุ สุขิตา โหนตุ สัพเพ สัตตา
        - ขอส่วนบุญนี้จงสำเร็จแก่สัตว์ทั้งหลายทั้งปวง ขอให้สัตว์ทั้งหลายทั้งปวงมีความสุขทั่วหน้ากันเทอญ`
    }
  ]

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 to-slate-100'>
      {/* Header */}
      <header className='bg-white shadow-sm sticky top-0 z-50'>
        <nav className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center h-16'>
            {/* Logo */}
            <div className='flex items-center'>
              <div className='w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center'>
                <span className='text-white font-bold text-xl'>✨</span>
              </div>
              <span className='ml-3 text-xl font-semibold text-gray-900'>หนังสือสวดมนต์</span>
            </div>

            {/* Desktop Navigation */}
            <div className='hidden md:flex space-x-8'>
              <a
                href='#home'
                className='flex items-center text-gray-700 hover:text-blue-600 transition-colors'
              >
                <Home className='w-4 h-4 mr-2' />
                Home
              </a>
              <a
                href='#about'
                className='flex items-center text-gray-700 hover:text-blue-600 transition-colors'
              >
                <User className='w-4 h-4 mr-2' />
                About
              </a>
              <a
                href='#contact'
                className='flex items-center text-gray-700 hover:text-blue-600 transition-colors'
              >
                <Mail className='w-4 h-4 mr-2' />
                Contact
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className='md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors'
              aria-label='Toggle navigation'
            >
              {mobileMenuOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className='md:hidden py-4 border-t border-gray-100'>
              <div className='flex flex-col space-y-3'>
                <a
                  href='#home'
                  className='flex items-center text-gray-700 hover:text-blue-600 transition-colors py-2'
                >
                  <Home className='w-4 h-4 mr-2' />
                  Home
                </a>
                <a
                  href='#about'
                  className='flex items-center text-gray-700 hover:text-blue-600 transition-colors py-2'
                >
                  <User className='w-4 h-4 mr-2' />
                  About
                </a>
                <a
                  href='#contact'
                  className='flex items-center text-gray-700 hover:text-blue-600 transition-colors py-2'
                >
                  <Mail className='w-4 h-4 mr-2' />
                  Contact
                </a>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section id='home' className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-28'>
        <div className='text-center'>
          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6'>
            <span className='block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600'>
              บทสวดมนต์ประจำวัน
            </span>
          </h1>
          <p className='text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed'>
            รวมบทสวดมนต์ที่สำคัญและสำหรับการปฏิบัติในชีวิตประจำวัน
          </p>
        </div>
      </section>

      {/* Content Grid Section */}
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
                <p className='text-gray-600 leading-relaxed whitespace-pre-line'>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id='extended' className='bg-white py-12 sm:py-16 lg:py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12'>
            บทเสริม
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6 lg:gap-8'>
            {extendedPrayers.map((item) => (
              <div
                key={item.title}
                className='bg-gradient-to-br from-slate-50 to-slate-100 p-4 rounded-xl hover:shadow-lg transition-shadow'
              >
                <h3 className='text-xl font-semibold text-gray-900 mb-2'>{item.title}</h3>
                <p className='text-gray-600 leading-relaxed whitespace-pre-line'>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='bg-gray-900 text-white py-8'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-col sm:flex-row justify-between items-center'>
            <p className='text-gray-400 text-sm text-center sm:text-left'>© EST.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
