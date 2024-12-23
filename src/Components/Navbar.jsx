import React from 'react'

import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Navbar = () => {
  return (
    
    <nav className='container-x justify-between  py-1 flex items-center'>
      <div className="logo flex items-center cursor-pointer">
        <img className='w-20 h10' src="/images/logo.jpg" />
        <p className='ml-1 text-xl text-primary font-oswald'>Herbs  & <span className='text-darkSecondary font-bold'> Spices</span></p>
      </div>
      <div className="search w-1/2 flex items-center">
  <input
    className="border-l-2 pl-3 rounded-l-lg h-8 w-[92%] border-t-2 border-b-2  border-gray-300 focus:border-primary focus:outline-none"
    type="text"
    placeholder="Search your Products"
  />
  <SearchIcon className="border-r-2 w-10  rounded-lg text-4xl cursor-pointer text-black border-t-2 border-b-2" />
</div>

      <div className='flex '>
      <AccountCircleIcon className='mr-2 cursor-pointer' />
        <p className='mr-2 cursor-pointer'>Login</p> |
        <p className='ml-2 cursor-pointer'>Register</p>
      </div>
    </nav>
  )
}

export default Navbar
