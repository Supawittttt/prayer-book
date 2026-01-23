import { Home, Menu, User, Mail, X, BookOpen } from 'lucide-react'

interface NavigationProps {
  mobileMenuOpen: boolean
  onMobileMenuToggle: () => void
}

export function Header({ mobileMenuOpen, onMobileMenuToggle }: NavigationProps) {
  return (
    <header className='bg-white shadow-sm sticky top-0 z-50'>
      <nav className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          {/* Logo */}
          <div className='flex items-center'>
            <div className='w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center'>
              <BookOpen className='w-6 h-6 text-white' />
            </div>
            <span className='ml-3 text-xl font-semibold text-gray-900'>หนังสือสวดมนต์</span>
          </div>

          {/* Desktop Navigation */}
          <div className='hidden md:flex space-x-8'>
            <a href='#' className='flex items-center text-gray-600 hover:text-gray-900'>
              <Home className='w-4 h-4 mr-2' />
              Home
            </a>
            <a href='#' className='flex items-center text-gray-600 hover:text-gray-900'>
              <User className='w-4 h-4 mr-2' />
              About
            </a>
            <a href='#' className='flex items-center text-gray-600 hover:text-gray-900'>
              <Mail className='w-4 h-4 mr-2' />
              Contact
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={onMobileMenuToggle}
            className='md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors'
            aria-label='Toggle navigation'
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className='md:hidden py-4 border-t border-gray-100'>
            <div className='flex flex-col space-y-3'>
              <a href='#' className='flex items-center text-gray-600 hover:text-gray-900'>
                <Home className='w-4 h-4 mr-2' />
                Home
              </a>
              <a href='#' className='flex items-center text-gray-600 hover:text-gray-900'>
                <User className='w-4 h-4 mr-2' />
                About
              </a>
              <a href='#' className='flex items-center text-gray-600 hover:text-gray-900'>
                <Mail className='w-4 h-4 mr-2' />
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
