import { hero } from '../assets';
import CTA from '../components/CTA';
import Lesson from '../components/Lesson';
import News from '../components/News';
import LimitedItem from './LimitedItem';

import { NavLink } from 'react-router-dom';

const Hero = () => {
  return (
    <div>
      <div className='w-full h-screen'>
        <img className='top-0 left-0 w-full h-screen object-cover' src={hero} alt='/' />
        <div className='bg-black/40 opacity-30 absolute top-0 left-0 w-full h-screen' />
        <div className='absolute top-0 w-full h-full flex flex-col justify-center item-center text-white'>
          <div className='md:left-[10%] max-w-[1100px] m-auto absolute p-4'>
            <h1 className='font-bold text-4xl md:text-7xl drop-shadow-2xl'>你的過程，牠的一輩子</h1>
            <p className='max-w-[600px] drop-shadow-2xl py-2 text-xl'>一直秉持著正向、積極、熱情的態度，把正向訓練的精神帶給更多貓家庭與狗家庭，拉近您跟寵物的距離。</p>
            <NavLink to='/join'>
              <button className='w-40 h-12 bg-[#FCA017] cursor-pointer rounded-3xl border-2 border-[#FCA017] shadow-[inset_0px_-2px_0px_1px_#f1a706] group  transition duration-300 ease-in-out'>
                <span className='font-medium text-lg text-white group-hover:text-black'>立即諮詢</span>
              </button>
            </NavLink>
            <NavLink to='/four'>
              <button className='m-3 w-40 h-12 bg-white cursor-pointer rounded-3xl  hover:bg-[#FCA017] transition duration-300 ease-in-out'>
                <span className='font-medium text-lg text-black'>訂單查詢</span>
              </button>
            </NavLink>
          </div>
        </div>
      </div>
      <Lesson />
      <News />
      <LimitedItem />
      <CTA />
    </div>
  );
};

export default Hero;
