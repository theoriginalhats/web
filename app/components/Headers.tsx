import Link from 'next/link'
import { Menu } from 'lucide-react'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center h-16">
          <nav>
            <Link 
              href="https://discord.gg/getfrost" 
              className="text-gray-400 hover:text-gray-300 transition-colors"
            >
              Discord
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
