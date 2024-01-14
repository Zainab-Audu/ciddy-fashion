import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import ProductCard from './ProductCard'
import Sidebar from './SidebarC'
import Popular from './Popular'

const Catalogue = () => {
  return (
    <div className='max-w-[1440px] mx-auto'>
        <Navbar />
        <main className='w-[90%] mx-auto'>
          <div className='flex justify-between flex-col lg:flex-row md:flex-row'>
          <Sidebar />
          <ProductCard />
          </div>
         <Popular />
        </main>
        <Footer />
    </div>
  )
}

export default Catalogue