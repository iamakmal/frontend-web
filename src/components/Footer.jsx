import React from 'react'

export default function Footer() {
  return (
    <>
<footer className="footer md:grid-rows-2 lg:grid-rows-1 p-10 bg-main text-white px-[20px]">
  <nav className="md:col-span-2">
  <img className="h-[25px] w-[238.89px] px-10 mb-[20px]" src="/Logo.png" alt="logo"/>
  <p className="text-[16px] leading-[19.2px] font-normal">Your goal is our target. Not anything in between. We use<br/> online marketing platforms and tools to achieve single<br/> objective - your business results.</p>
  </nav> 
  <nav className="">
    <h6 className="text-white font-semibold text-[21px] leading-[25.41px]">Our Technologies</h6> 
    <a href="#" className="link link-hover font-medium text-[14px] leading-[16.94px]">ReactJS</a>
    <a href="#" className="link link-hover font-medium text-[14px] leading-[16.94px]">Gatsby</a>
    <a href="#" className="link link-hover font-medium text-[14px] leading-[16.94px]">NextJS</a>
    <a href="#" className="link link-hover font-medium text-[14px] leading-[16.94px]">NodeJS</a>
  </nav> 
  <nav className="">
    <h6 className="text-white font-semibold text-[21px] leading-[25.41px]">Our Services</h6> 
    <a href="#" className="link link-hover font-medium text-[14px] leading-[16.94px]">Social Media Marketing</a>
    <a href="#" className="link link-hover font-medium text-[14px] leading-[16.94px]">Web & Mobile App<br/> Development</a>
    <a href="#" className="link link-hover font-medium text-[14px] leading-[16.94px]">Data & Analytics</a>
  </nav> 
</footer>
<footer className="footer px-[20px] py-4 border-t bg-main text-white">
  <nav className="place-self-center">
  <p className="font-medium text-[14px] leading-[16.94px]">Privacy Policy | Terms & Conditions</p>
  </nav>
</footer>
</>
  )
}
