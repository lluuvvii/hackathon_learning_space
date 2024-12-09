import { ReactNode } from 'react'
import '@/app/globals.css'
import Navbar from './components/Navbar'
import BootstrapInitializer from './components/BootstrapInitializer'
import Footer from './components/Footer'

export const metadata = {
  title: 'HLS | Hackathon Learning Space',
  description: 'digital learning space for hackathons'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='/hackathon_learning_space_logo.png' type='image/png' />
      </head>
      <body className='bg-light text-dark'>
        <BootstrapInitializer />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
