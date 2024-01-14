import React, { useState, useEffect } from 'react'
import { IoMdHeartEmpty } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

const Popular = () => {
    const [popularData, setPopularData] = useState([]);
    const [visibleRange, setVisibleRange] = useState({ start: 0, end: 3 });
    const [index, setIndex] = useState(0)

    let currentIndex = popularData[index];

    useEffect(() => {
        fetch("https://fakestoreapi.com/products/category/women's clothing", {
            cache: 'force-cache'
        })
        .then(res => res.json())
        .then(data => {
            setPopularData(data)
        })
    }, [])

    const extract = (text) => {
        const words = text.split(' ');
        return words.slice(0, 4).join(' ');
    };

    const handlePrev = () => {
        const newStart = Math.max(visibleRange.start - 4, 0);
        const newEnd = newStart + 3;
        setVisibleRange({ start: newStart, end: newEnd });
      };
    
      const handleNext = () => {
        const newStart = Math.min(visibleRange.start + 4, popularData.length - 4);
        const newEnd = newStart + 3;
        setVisibleRange({ start: newStart, end: newEnd });
      };
    
      const visibleItems = popularData.slice(visibleRange.start, visibleRange.end + 1);
    
    const popularItems = visibleItems.map(info => (
        <div key={info.id} className='lg:w-[23%] md:w-[23%] w-[100%] rounded-md bg-gray-200 mb-4 border-gray-200 border'>
            <div className='relative'>
            <img src={info.image} alt="" className=' object-cover object-center w-[100%] h-[200px] rounded-md'/>
            <div className='absolute top-10 right-4 text-[2rem] text-[#FF6B6B] drop-shadow-[10px]'>
            <IoMdHeartEmpty className='mb-4'/>
            <FaCartShopping />
            </div>
            </div>
            <div className='px-2 py-4'>
                <p className='flex justify-between items-center'>{extract(info.title)} <span className='bg-[#FF6B6B] text-white p-2 text-[13.216px] rounded-[10px]'>${info.price}</span>
            </p>
            <p className='text-yellow-500 flex my-2 text-[10px]'>&#9733; &#9733; &#9733; &#9733; &#9733;<span className='text-[#040734]'>10</span><span className='text-[#040734] ml-auto'>200units</span></p>
            </div>
        </div>
    ))

    //  Mobile popular demand slider 

    function handleMobilePrev() {
        setIndex(prev => { 
            if(prev === 0) {
            return  prev = popularData.length - 1
            }
            return prev - 1
        })
    }

    function handleMobileNext() {
        setIndex(prev => { 
            if(prev === popularData.length - 1) {
            return  prev = 0
            }
            return prev + 1
        })
    }

    const mobileSliderData =  popularData.length > 0 && (<div key={currentIndex.id} className='lg:w-[23%] md:w-[23%] w-[100%] rounded-md bg-gray-200 mb-4 border-gray-200 border'>
    <div className='relative'>
    <img src={currentIndex.image} alt="" className=' object-cover object-center w-[100%] h-[200px] rounded-md'/>
    <div className='absolute top-10 right-4 text-[2rem] text-[#FF6B6B] drop-shadow-[10px]'>
    <IoMdHeartEmpty className='mb-4'/>
    <FaCartShopping />
    </div>
    </div>
    <div className='px-2 py-4'>
        <p className='flex justify-between items-center'>{extract(currentIndex.title)} <span className='bg-[#FF6B6B] text-white p-2 text-[13.216px] rounded-[10px]'>${currentIndex.price}</span>
    </p>
    <p className='text-yellow-500 flex my-2 text-[10px]'>&#9733; &#9733; &#9733; &#9733; &#9733;<span className='text-[#040734]'>10</span><span className='text-[#040734] ml-auto'>200units</span></p>
    </div>
</div>)

  return (
    <div>
        <h3 className='my-4 text-[24px] font-bold text-center capitalize'>Popular demands</h3>
    <div className='lg:flex md:flex flex-col lg:flex-row md:flex-row relative justify-between hidden'>
        {popularItems}
        <button onClick={handlePrev} className='absolute left-0 bg-black p-2 text-white text-[1.5rem] rounded-md top-32'><FaAngleLeft /></button>
        <button onClick={handleNext} className='right-0 absolute bg-black p-2 text-white text-[1.5rem] rounded-md top-32'><FaAngleRight /></button>
    </div>
    <div className='w-[100%] relative'>
    <div className='flex flex-col justify-between lg:hidden md:hidden w-[80%] mx-auto'>
    {mobileSliderData}
        <button onClick={handleMobilePrev} className='absolute left-0 bg-black p-2 text-white text-[1.5rem] rounded-md top-32'><FaAngleLeft /></button>
        <button onClick={handleMobileNext} className='right-0 absolute bg-black p-2 text-white text-[1.5rem] rounded-md top-32'><FaAngleRight /></button>
    </div>
    </div>
    </div>
  )
}

export default Popular