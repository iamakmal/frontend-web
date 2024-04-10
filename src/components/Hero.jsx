import React from 'react'

export default function Hero() {
  return (
    <>
    <div className="relative w-full">
    <img src="./Hero.png" alt="Hero" className="h-[218px] w-full object-cover"/>
    <div className="w-full h-[294px] lg:[absolute top-[354px] left-20 h-[306px]] flex flex-col bg-gradient-to-r from-[#4DCA79] to-[#1CBDDD] pt-[24px] pr-[40px] pb-[32px] pl-[40px]">
    <div>
    <h1 className="font-bold text-white text-[36px] leading-[36px] md:[text-5xl leading-[48px]]">We Crush Your Competitors, Goals, And Sales Records - Without The B.S.</h1>
    </div>
    <div className="mt-5">
    <button className="btn rounded pt-[12px] pr-[20px] pb-[12px] pl-[20px] bg-orange text-white">GET FREE CONSULTATION</button>
    </div>
    </div>
    </div>
    </>
  )
}
