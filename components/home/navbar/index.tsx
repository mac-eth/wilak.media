import { Bars3Icon } from '@heroicons/react/24/outline'
import DesktopNavigation from 'components/home/navbar/DesktopNavigation'
import Image from 'next/image'
import LandingImage from 'assets/landingimage.avif'
import Logo from 'assets/mark.svg'
import MobileNavigation from 'components/home/navbar/MobileNavigation'
import { useState } from 'react'

const navigation = [
  { name: 'Services', href: '#' },
  { name: 'Case Studies', href: '#' },
  { name: 'Blogs', href: '#' },
  { name: 'Training', href: '#' },
  { name: 'Book a Call', href: '#' },
]

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl">
        <div className="px-6 pt-6 lg:max-w-2xl lg:pl-8 lg:pr-0">
          <nav
            className="flex items-center justify-between lg:justify-start"
            aria-label="Global"
          >
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image alt="Your Company" className="h-8 w-auto" src={Logo} />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-stone-200 lg:hidden"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
            <DesktopNavigation navigation={navigation} />
          </nav>
        </div>
      </div>
      <MobileNavigation
        navigation={navigation}
        Logo={Logo}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
    </header>
  )
}

export default Navbar
