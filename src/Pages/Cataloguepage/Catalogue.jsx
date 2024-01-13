import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import ProductCard from './ProductCard'
import Sidebar from './SidebarC'

const Catalogue = () => {
  return (
    <div className='max-w-[1440px] mx-auto'>
        <Navbar />
        <main className='flex justify-between w-[90%] mx-auto'>
          <Sidebar />
          <ProductCard />
        </main>
        <Footer />
    </div>
  )
}

export default Catalogue