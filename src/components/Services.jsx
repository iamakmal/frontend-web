import React from 'react'

export default function Services() {
  return (
    <div className="mt-[80px]">
    <div className="flex justify-center items-center text-left">

    <div>
    <img src="./service1.png" className="h-[414px] w-[414px]"/>
    </div>

    <div className="h-[187px] w-[542px]">
        <h1 className="text-main font-semibold text-[27px] leading-[33px] mb-[20px]">Web & Mobile App Development</h1>
        <p className="text-[16px] font-normal leading-[19.36px] mb-[20px]">Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.</p>
        <button className="btn rounded pt-[12px] pr-[20px] pb-[12px] pl-[20px] bg-orange text-white">LEARN MORE</button>
    </div>
    </div>

    <div className="flex mt-[80px] justify-center items-center text-left">

    <div className="h-[206px] w-[542px]">
        <h1 className="text-main font-semibold text-[27px] leading-[33px] mb-[20px]">Digital Strategy Consulting</h1>
        <p className="text-[16px] font-normal leading-[19.36px] mb-[20px]">Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and startegic overview to find the most efficient model for your business.</p>
        <button className="btn rounded pt-[12px] pr-[20px] pb-[12px] pl-[20px] bg-orange text-white">LEARN MORE</button>
    </div>

    <div>
    <img src="./service2.png" className="h-[416px] w-[414px]"/>
    </div>

    </div>
    </div>
  )
}
