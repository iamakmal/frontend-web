import React from 'react'

export default function Services() {
  return (
    <div className="mt-[60px]">

    <div className="grid gap-8 w-[335px] h-[572.82px] justify-center items-center m-5 md:[flex text-left]">
    <div>
    <img src="./service1.png" className="h-[275.82px] w-[275px] mx-[30px]"/>
    </div>
    <div className="text-center">
        <h1 className="text-main font-semibold text-[27px] leading-[33px] mb-[20px]">Web & Mobile App Development</h1>
        <p className="text-[16px] font-normal leading-[19.36px] mb-[20px]">Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.</p>
        <button className="btn rounded pt-[12px] pr-[20px] pb-[12px] pl-[20px] bg-orange text-white">LEARN MORE</button>
    </div>
    </div>

    <div className="grid gap-8 w-[335px] h-[572.82px] justify-center items-center m-5 mt-[60px] md:[flex text-left]">
    <div>
    <img src="./service2.png" className="h-[276px] w-[275px] mx-[30px]"/>
    </div>
    <div className="text-center">
        <h1 className="text-main font-semibold text-[27px] leading-[33px] mb-[20px]">Digital Strategy Consulting</h1>
        <p className="text-[16px] font-normal leading-[19.36px] mb-[20px]">Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and startegic overview to find the most efficient model for your business.</p>
        <button className="btn rounded pt-[12px] pr-[20px] pb-[12px] pl-[20px] bg-orange text-white">LEARN MORE</button>
    </div>
    </div>
    </div>
  )
}
