import { ReactNode } from 'react'
import '@/app/globals.css'
import Navbar from './components/Navbar'
import BootstrapInitializer from './components/BootstrapInitializer'
import Footer from './components/Footer'

export const metadata = {
  title: 'Home Page',
  description: 'Template Home Page with Bootstrap',
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
