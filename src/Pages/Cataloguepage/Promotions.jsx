import React from 'react'

const Promotions = () => {
  return (
    <div className='grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-4'>
         <div style={{ backgroundImage: "url('https://images.pexels.com/photos/63580/neckties-cravats-ties-fashion-63580.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')" }} className='bg-cover bg-center h-[30vh] mb-4 flex'>
            <p className='mt-auto bg-black text-[#FFF200] w-[100%] px-4 py-2 text-[1.2rem] capitalize'>silk office suit ties</p>
        </div>
        <div style={{ backgroundImage: "url('https://img.freepik.com/free-vector/various-color-checkered-cotton-shirts-folded-stack_1441-3074.jpg?size=626&ext=jpg&ga=GA1.1.1207199826.1690666781&semt=ais')" }} className='bg-cover bg-center h-[30vh] mb-4 flex lg:grid-rows-2 md:grid-rows-2 lg:col-span-2 md:col-span-2'>
            <p className='mt-auto bg-black text-[#FFF200] w-[100%] px-4 py-2 text-[1.2rem] capitalize'>free delivery deals</p>
        </div>
        <div style={{ backgroundImage: "url('https://img.freepik.com/free-photo/stack-clothes-white-background-closeup_93675-132644.jpg?size=626&ext=jpg&ga=GA1.2.1207199826.1690666781&semt=ais')" }} className='bg-cover bg-center h-[30vh] mb-4 flex'>
            <p className='mt-auto bg-black text-[#FFF200] w-[100%] px-4 py-2 text-[1.2rem] capitalize'>new jean trouser arrivals</p>
        </div>
        <div style={{ backgroundImage: "url('https://img.freepik.com/free-photo/studio-shot-pretty-black-woman-with-white-shopping-bag-standing-yellow-background-trendy-spring-fashionable-look_273443-29.jpg?size=626&ext=jpg&ga=GA1.2.1207199826.1690666781&semt=ais')" }} className='bg-cover bg-center h-[30vh] mb-4 flex'>
            <p className='mt-auto bg-black text-[#FFF200] w-[100%] px-4 py-2 text-[1.2rem] capitalize'>top Discount sales</p>
        </div>
        <div style={{ backgroundImage: "url('https://img.freepik.com/free-photo/full-shot-smiley-man-with-sale-tag_23-2149220646.jpg?size=626&ext=jpg&ga=GA1.2.1207199826.1690666781&semt=ais')" }} className='bg-cover bg-center h-[30vh] mb-4 flex'>
            <p className='mt-auto bg-black text-[#FFF200] w-[100%] px-4 py-2 text-[1.2rem] capitalize'> promotion promotion</p>
        </div>
    </div>
  )
}

export default Promotions