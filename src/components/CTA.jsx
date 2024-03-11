import { pets } from '../assets';

import { NavLink } from 'react-router-dom';

const Cta = () => {
  return (
    <div className='w-full bg-[#BE6E3A] py-20'>
      <div className='md:max-w-[1480px] m-auto grid md:grid-cols-2 gap-8 max-w-[600px] items-center  px-4 md:px-0'>
        <img src={pets} className='w-[650px] mx-auto' />

        <div>
          <h1 className='py-2 text-4xl font-semibold'>
            快來<span className='text-[#FCA017]'>有怪獸</span>預約諮詢課程!
          </h1>
          <p className='py-2 text-lg text-white'>希望用正向教育幫助更多狗狗和貓咪融入人類家庭。</p>
          <NavLink to='/four'>
            <button className='w-40 h-12 bg-[#FCA017] cursor-pointer rounded-3xl border-2 border-[#FCA017] shadow-[inset_0px_-2px_0px_1px_#f1a706] group  transition duration-300 ease-in-out'>
              <span className='font-medium text-lg text-white group-hover:text-black'>立即諮詢</span>
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Cta;
