import React, { useEffect, useState } from 'react'
import { IoMdHeartEmpty } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import Promotions from './Promotions';

const ProductCard = () => {
    const [product, setProduct] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products', {
            cache: 'force-cache'
        })
        .then(res => res.json())
        .then(data => {
            setProduct(data)
        })
    }, [])

    const extract = (text) => {
        const words = text.split(' ');
        return words.slice(0, 4).join(' ');
    };

    const addToCart = (item) => {
        const existingCartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
        const existingProductIndex = existingCartItems.findIndex((cartItem) => cartItem.id === item.id);

        if (existingProductIndex !== -1) {
          existingCartItems[existingProductIndex].quantity += 1;
        } else {
          existingCartItems.push({ ...item, quantity: 1 });
        }
        localStorage.setItem('cartItems', JSON.stringify(existingCartItems));
    };

    const Items = product.map(info => (
        <div key={info.id} className='lg:w-[30%] md:w-[30%] w-[100%] rounded-md bg-gray-200 mb-4 border-gray-200 border'>
            <div className='relative'>
            <img src={info.image} alt="" className=' object-cover object-center w-[100%] h-[200px] rounded-md'/>
            <div className='absolute top-10 right-4 text-[2rem] text-[#FF6B6B] drop-shadow-[10px]'>
            <IoMdHeartEmpty className='mb-4'/>
            <FaCartShopping onClick={() => addToCart(info)}/>
            </div>
            </div>
            <div className='px-2 py-4'>
                <p className='flex justify-between items-center'>{extract(info.title)} <span className='bg-[#FF6B6B] text-white p-2 text-[13.216px] rounded-[10px]'>${info.price}</span>
            </p>
            <p className='text-yellow-500 flex my-2 text-[10px]'>&#9733; &#9733; &#9733; &#9733; &#9733;<span className='text-[#040734]'>10</span><span className='text-[#040734] ml-auto'>200units</span></p>
            </div>
        </div>
    ))

  return (
    <section className='w-[100%] lg:w-[70%] md:w-[70%]'>
        <div className=''>
          <section className='flex mt-10 justify-between flex-col lg:flex-row md:flex-row'>
            <div className='w-[100%] lg:w-[50%] md:w-[50%]'>
            <div style={{ backgroundImage: 'url("https://colorlib.com/wp/wp-content/uploads/sites/2/hoodie-mockups.jpeg")' }} className='bg-cover bg-center h-[30vh] p-6 flex justify-start items-start flex-col rounded-lg mb-4 bg-gray-700 bg-blend-overlay text-[#FFF200]'>
                <p className='lg:text-[2rem] md:text-[2rem] text-[1.5rem] lg:w-[50%] uppercase'>Winter <br /> is <br /> here</p>
                <p>20%-off</p>
            </div>
            <div style={{ backgroundImage: 'url("https://img.freepik.com/free-photo/rack-clothes-store_23-2148929536.jpg?size=626&ext=jpg&ga=GA1.2.1207199826.1690666781&semt=ais")' }} className='bg-cover bg-center h-[30vh] p-6 flex justify-start items-start flex-col rounded-lg bg-gray-700 bg-blend-overlay text-[#FFF200] mb-4'>
                <p className='lg:text-[2rem] md:text-[2rem] text-[1.5rem] lg:w-[60%] md:w-[60%] uppercase'>checkout our latest exquisite suits</p>
            </div>
            </div>
            <div style={{ backgroundImage: 'url("https://img.freepik.com/free-photo/portrait-woman-posing-with-fake-plastic-gun_23-2150368031.jpg?size=626&ext=jpg&ga=GA1.2.1207199826.1690666781&semt=ais")' }} className='bg-cover bg-center h-[62vh] p-6 flex justify-start items-start flex-col rounded-lg lg:w-[48%] md:w-[48%] bg-gray-700 bg-blend-overlay text-[#FFF200]'>
                <p className='lg:text-[2rem] md:text-[2rem] text-[1.5rem] lg:w-[80%] md:w-[80%] w-[90%] uppercase mt-auto'>trending: CASUAL GROOVY COMBO OFFER</p>
            </div>
            </section>
            <div className='my-8'>
           <Promotions />
            </div>
        </div>
        <div>
            <p className='my-4 text-[24px] font-bold'>See more product</p>
            <div className='flex flex-col lg:flex-row md:flex-row flex-wrap justify-between items-center'>
            {Items}
            </div>
        </div>
    </section>
  )
}

export default ProductCard