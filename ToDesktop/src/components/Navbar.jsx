import React, { useState } from 'react'
import brand from '../assets/asset-0.png'
import asset1 from '../assets/asset 1.svg'

const Navbar = () => {

    const[menuBar, setMenuBar] = useState(false);

    const handleMenuBar = () => {
        setMenuBar(!menuBar);
        console.log(menuBar);
        
    }
  return (
    <nav className='p-3 flex bg-white justify-between items-center'>
      <a href="#" id='brand' className='flex gap-2 items-center flex-1'>
        <img className='object-cover max-w-12 max-h-12' src={brand} alt="logo" />
        <span className='text-lg font-medium font-display'>ToDesktop</span>
      </a>
      <div id="nav-menu" className='hidden lg:flex gap-12'>
        <a href="#" className='font-medium hover:text-primary'>Pricing</a>
        <a href="#" className='font-medium hover:text-primary'>Docs</a>
        <a href="#" className='font-medium hover:text-primary'>ChangeLog</a>
        <a href="#" className='font-medium hover:text-primary'>Blogs</a>
        <a href="#" className='font-medium hover:text-primary'>Login</a>
      </div>
      <div className='hidden lg:flex flex-1 justify-end'>
        <button className='flex  items-center gap-2 border border-gray-400 px-6 py-2 rounded-lg hover:border-gray-600'>
          <img src={asset1} alt="electrin-developer" />
          <span>Electron Developers</span>
          <i className='fa-solid fa-arrow-right'></i>
        </button>
      </div>
      <button className='p-2 lg:hidden' onClick={handleMenuBar}>
        <i className='fa-solid fa-bars text-gray-600'></i>
      </button>

      <div id='nav-dialog' className={`fixed hidden bg-white z-10 ${menuBar? 'md:hidden': ''} inset-0 p-3`} >
        <div id='nav-bar' className='flex justify-between'>
            <a href="#" id='brand' className='flex gap-2 items-center'>
                <img className='object-cover max-w-12 max-h-12' src={brand} alt="logo" />
                <span className='text-lg font-medium font-display'>ToDesktop</span>
            </a>
            <button className={`p-2  ${menuBar? 'md:hidden': 'md:block'}`} onClick={handleMenuBar}>
                <i className='fa-solid text-gray-600 fa-xmark'></i>
            </button>
        </div>
        <div className='mt-6 '>
            <a href="#" className='font-medium m-3 p-3 hover:bg-gray-50 block rounded-lg'>Pricing</a>
            <a href="#" className='font-medium m-3 p-3 hover:bg-gray-50 block rounded-lg'>Docs</a>
            <a href="#" className='font-medium m-3 p-3 hover:bg-gray-50 block rounded-lg'>ChangeLog</a>
            <a href="#" className='font-medium m-3 p-3 hover:bg-gray-50 block rounded-lg'>Blogs</a>
            <a href="#" className='font-medium m-3 p-3 hover:bg-gray-50 block rounded-lg'>Login</a>
        </div>

        <div className='h-[1px] bg-gray-300'></div>

        <button className='mt-6 w-full flex items-center gap-2 px-6 py-4 rounded-lg hover:bg-gray-50'>
            <img src={asset1} alt="electrin-developer" />
            <span>Electron Developers</span>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
