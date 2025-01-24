'use client'

import { Menu } from 'lucide-react'
import Image from 'next/image'
import { useSidebar } from '@/contexts/sidebar-context'

// New component for mobile header
function MobileHeader() {
  const { toggle } = useSidebar()

  return (
    <header className="fixed top-0 z-30 w-full bg-black/95 px-4 py-3 md:hidden">
      <div className="flex items-center justify-between">
        <button
          onClick={toggle}
          className="text-white hover:text-purple-400"
        >
          <Menu className="h-6 w-6" />
        </button>
        
        <Image
          src="/logo.png"
          alt="ELYX AI"
          width={24}
          height={24}
          className="mr-2"
        />
      </div>
    </header>
  )
}

export default MobileHeader 