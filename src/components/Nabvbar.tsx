import Link from 'next/link'
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { Button } from './ui/button'
import { Menu } from 'lucide-react'

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-primary">YourCompany</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              href="/dashboard" 
              className="text-gray-600 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out"
            >
              Dashboard
            </Link>
            <SignedOut>
              <SignInButton mode="modal">
                <Button variant="outline" size="sm">
                  Sign in
                </Button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton 
                appearance={{
                  elements: {
                    avatarBox: "w-10 h-10"
                  }
                }}
              />
            </SignedIn>
          </div>
          <div className="md:hidden flex items-center">
            <Button variant="ghost" size="sm" className="text-gray-500">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}