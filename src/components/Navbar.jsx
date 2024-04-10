import React from 'react'

export default function Navbar() {
  return (
    <>
    <div className="navbar bg-main w-full">
  <div className="navbar-start w-full md:w-1/3">
    <img className="h-[25px] w-[238.89px] px-[25px]" src="/Logo.png" alt="logo"/>
  </div>
  <div className="navbar-end md:hidden">
  <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="inline-block w-[31px] h-[24px] stroke-white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>SERVICES</a></li>
        <li><a>ABOUT US</a></li>
        <li><a>CONTACT US</a></li>
        <li><a>CAREERS</a></li>
      </ul>
    </div>
  </div>
  <div className="navbar-end w-2/3 hidden md:flex md:flex-row md:justify-start lg:justify-end">
    <ul className="menu menu-horizontal px-1 text-white">
      <li><a>SERVICES</a></li>
      <li><a>ABOUT US</a></li>
      <li><a>CONTACT US</a></li>
      <li><a>CAREERS</a></li>
    </ul>
  </div>
</div>
    </>
  )
}
