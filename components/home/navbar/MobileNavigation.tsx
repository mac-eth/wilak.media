import { Dialog } from '@headlessui/react'
import Image from 'next/image'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

interface MobileNavigationProps {
  navigation: {
    name: string
    href: string
  }[]
  Logo: string
  mobileMenuOpen: boolean
  setMobileMenuOpen: (value: boolean) => void
}

const MobileNavigation = (props: MobileNavigationProps) => {
  return (
    <Dialog
      as="div"
      className="lg:hidden"
      open={props.mobileMenuOpen}
      onClose={props.setMobileMenuOpen}
    >
      <div className="fixed inset-0 z-50" />
      <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-stone-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div className="flex items-center justify-between">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Image className="h-8 w-auto" src={props.Logo} alt="" />
          </a>
          <button
            type="button"
            className="-m-2.5 rounded-md p-2.5 text-stone-200"
            onClick={() => props.setMobileMenuOpen(false)}
          >
            <span className="sr-only">Close menu</span>
            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6">
              {props.navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-stone-200 hover:bg-stone-300"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="py-6">
              <a
                href="#"
                className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-stone-200 hover:bg-stone-300"
              >
                Log in
              </a>
            </div>
          </div>
        </div>
      </Dialog.Panel>
    </Dialog>
  )
}

export default MobileNavigation
