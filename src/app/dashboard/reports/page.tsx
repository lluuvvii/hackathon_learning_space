import React from 'react'
import Sidebar from '../components/Sidebar'

function page() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', fontFamily: 'Arial, sans-serif', marginTop: '65px' }}>
      <Sidebar />
    </div>
  )
}

export default page