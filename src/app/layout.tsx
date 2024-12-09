import { ReactNode } from 'react'
import '@/app/globals.css'
import Navbar from './components/Navbar'
import BootstrapInitializer from './components/BootstrapInitializer'
import Footer from './components/Footer'

export const metadata = {
  title: 'HLS | Hackathon Learning Space',
  description: 'digital learning space for hackathons',
  icons: {
    icon: '/assets/images/hackathon_learning_space_logo.ico',
  }
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body className='bg-light text-dark'>
        <BootstrapInitializer />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
