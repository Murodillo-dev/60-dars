import React from 'react'
import rasm from './avatar.png'

const Card = () => {
    return (
        <div className='w-60 h-60 bg-[#3b3b3b] m-4 rounded-[20px] relative flex justify-center items-center flex-wrap p-5 box-border blur-sm hover:scale-110 hover:blur-0 rotate-X-12  hover:rotate-0 ease-in-out duration-300'>

            <img src={rasm} alt="" />

            <div className="circle w-[30px] h-[30px] absolute top-5 left-5 rounded-full bg-[#2b2b2b] flex justify-center items-center">
                <h1 className='text-[16px] text-[#858584]'>
                    1
                </h1>
            </div>

            <h1 className='text-white text-[22px] font-semibold'>
                Keepitreal
            </h1>

            <h2 className='text-[#858584] tetx-[16px]'>
                Total Sales:  <font className="text-white ml-2">34.53 ETH</font>
            </h2>
        </div>
    )
}

export default Card