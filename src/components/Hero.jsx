import React from 'react'

export default function Hero() {
  return (
    <>
    <div className="relative">
    <img src="./Hero.png" alt="Hero" className="h-[700px] w-full"/>
    <div className=" absolute top-[354px] left-20 flex flex-col w-[622px] h-[306px] bg-gradient-to-r from-[#4DCA79] to-[#1CBDDD] pt-[24px] pr-[40px] pb-[32px] pl-[40px]">
    <div>
    <h1 className="font-bold text-5xl leading-[48px] text-white">We Crush Your Competitors, Goals, And Sales Records - Without The B.S.</h1>
    </div>
    <div className="mt-8">
    <button className="btn rounded pt-[12px] pr-[20px] pb-[12px] pl-[20px] bg-orange text-white">GET FREE CONSULTATION</button>
    </div>
    </div>
    </div>
    </>
  )
}
