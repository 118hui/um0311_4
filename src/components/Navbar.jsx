import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { logo } from '../assets';

import { IoArrowRedoOutline } from 'react-icons/io5';
import { GiDogHouse } from 'react-icons/gi';
import { FaDog } from 'react-icons/fa6';
import { PiCat } from 'react-icons/pi';
import { MdOutlinePets } from 'react-icons/md';
import { PiBone } from 'react-icons/pi';

//import { menu_d } from '../assets';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOnClick = () => {
    setIsOpen(false);
  };

  const [isHeaderExpanded, setIsHeaderExpanded] = useState(false);

  const handleScroll = () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 0) {
      setIsHeaderExpanded(true);
    } else {
      setIsHeaderExpanded(false);
    }
  };

  window.addEventListener('scroll', handleScroll);

  return (
    <div className={`w-full h-[80px] fixed z-50  ${isHeaderExpanded ? 'bg-[#F4EAD1] shadow-md rounded-b-2xl' : ''}`}>
      <div className='md:max-w-[1480px] max-w-[600px] m-auto w-full h-full flex justify-between items-center md:px-0 px-4'>
        <NavLink exact to='/'>
          <img src={logo} alt='' className='h-[40px] z-auto' />
        </NavLink>
        <button className='block focus:outline-none' onClick={() => setIsOpen(!isOpen)}>
          <svg className='w-12 h-12 text-[#FCA014]' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
            {isOpen ? <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' /> : <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16m-7 6h7' />}
          </svg>
        </button>
        <div className={`${isOpen ? 'block' : 'hidden'} absolute top-4 right-0 mt-16 bg-[#FCA014]/95 w-[30vh] h-[48vh] shadow-lg p-10 rounded-2xl`}>
          <ul className='flex flex-col justify-center items-start pt-5 mt-2 gap-2'>
            <li>
              <NavLink to='/about' onClick={handleOnClick} activeClassName='active' className='text-[#F4EAD1] hover:bg-[#2E5099] rounded-2xl text-4xl font-bold flex'>
                關於我們
                <div className='pl-2'>
                  <FaDog />
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink exact to='/four' onClick={handleOnClick} activeClassName='active' className='text-[#F4EAD1] hover:bg-[#2E5099] rounded-2xl text-4xl font-bold flex'>
                知識專欄
                <div className='pl-2'>
                  <MdOutlinePets />
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink exact to='/serve' onClick={handleOnClick} activeClassName='active' className='text-[#F4EAD1] hover:bg-[#2E5099] rounded-2xl text-4xl font-bold flex'>
                服務項目
                <div className='pl-2'>
                  <PiCat />
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink exact to='/member' onClick={handleOnClick} activeClassName='active' className='text-[#F4EAD1] hover:bg-[#2E5099] rounded-2xl text-4xl font-bold flex'>
                會員登入
                <div className='pl-2'>
                  <GiDogHouse />
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink to='/contact' onClick={handleOnClick} activeClassName='active' className='text-[#F4EAD1] hover:bg-[#2E5099] rounded-2xl text-4xl font-bold flex'>
                聯絡我們
                <div className='pl-2'>
                  <PiBone />
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink to='/' onClick={handleOnClick} activeClassName='active' className='text-[#F4EAD1] hover:bg-[#2E5099] rounded-2xl text-4xl font-bold flex '>
                怪獸商城
                <div className='pl-2'>
                  <IoArrowRedoOutline />
                </div>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Menu;
