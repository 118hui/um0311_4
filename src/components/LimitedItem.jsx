import { dog_1, dog_2, cat_1 } from '../assets';
import { NavLink } from 'react-router-dom';

const limitedItem = () => {
  return (
    <div className='px-5 py-24 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
      <h1 className='sm:text-4xl text-3xl font-bold text-center  text-black mb-5'>期間限定課程</h1>
      <div className='grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full'>
        <div className='overflow-hidden transition-shadow duration-300 bg-[#2E5099] rounded-2xl'>
          <img src={cat_1} className='object-cover w-full h-64' alt='' />
          <div className='p-5 border border-t-0'>
            <p className='mb-3 text-xs font-semibold tracking-wide uppercase'>
              <a href='/' className='transition-colors duration-200 text-white hover:text-deep-purple-accent-700' aria-label='Category' title='traveling'>
                20 Dec 2024
              </a>
              <span className='text-white'>— 28 Dec 2024</span>
            </p>
            <a href='/' aria-label='Category' title='Visit the East' className='inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 text-white'>
              期間限定
            </a>
            <p className='mb-2 text-white'>寵物就像是上天賜給你的小天使一樣，他用他的一生給你帶來快樂與陪伴，也希望無論前面的路怎樣，你給他的不是拋棄，而是看他到老，老有所依。</p>
            <div className='text-center'>
              <NavLink to='/four'>
                <button className='w-40 h-12 bg-[#FCA017] cursor-pointer rounded-3xl border-2 border-[#FCA017] shadow-[inset_0px_-2px_0px_1px_#f1a706] group  transition duration-300 ease-in-out'>
                  <span className='font-medium text-lg text-white group-hover:text-black'>更多訊息</span>
                </button>
              </NavLink>
            </div>
          </div>
        </div>
        <div className='overflow-hidden transition-shadow duration-300 bg-[#2E5099] rounded-2xl'>
          <img src={dog_1} className='object-cover w-full h-64' alt='' />
          <div className='p-5 border border-t-0'>
            <p className='mb-3 text-xs font-semibold tracking-wide uppercase'>
              <a href='/' className='transition-colors duration-200 text-white hover:text-deep-purple-accent-700' aria-label='Category' title='traveling'>
                16 Jan 2024
              </a>
              <span className='text-white'>— 25 Jan 2024</span>
            </p>
            <a href='/' aria-label='Category' title='Simple is better' className='inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 text-white'>
              期間限定
            </a>
            <p className='mb-2 text-white'>寵物就像是上天賜給你的小天使一樣，他用他的一生給你帶來快樂與陪伴，也希望無論前面的路怎樣，你給他的不是拋棄，而是看他到老，老有所依。</p>
            <div className='text-center'>
              <NavLink to='/four'>
                <button className='w-40 h-12 bg-[#FCA017] cursor-pointer rounded-3xl border-2 border-[#FCA017] shadow-[inset_0px_-2px_0px_1px_#f1a706] group  transition duration-300 ease-in-out'>
                  <span className='font-medium text-lg text-white group-hover:text-black'>更多訊息</span>
                </button>
              </NavLink>
            </div>
          </div>
        </div>
        <div className='overflow-hidden transition-shadow duration-300 bg-[#2E5099] rounded-2xl'>
          <img src={dog_2} className='object-cover w-full h-64' alt='' />
          <div className='p-5 border border-t-0'>
            <p className='mb-3 text-xs font-semibold tracking-wide uppercase'>
              <a href='/' className='transition-colors duration-200 text-white hover:text-deep-purple-accent-700' aria-label='Category' title='traveling'>
                8 Feb 2024
              </a>
              <span className='text-white'>— 15 Feb 2024</span>
            </p>
            <a href='/' aria-label='Category' title='Film It!' className='inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 text-white'>
              期間限定
            </a>
            <p className='mb-2 text-white'>寵物就像是上天賜給你的小天使一樣，他用他的一生給你帶來快樂與陪伴，也希望無論前面的路怎樣，你給他的不是拋棄，而是看他到老，老有所依。</p>
            <div className='text-center'>
              <NavLink to='/four'>
                <button className='w-40 h-12 bg-[#FCA017] cursor-pointer rounded-3xl border-2 border-[#FCA017] shadow-[inset_0px_-2px_0px_1px_#f1a706] group  transition duration-300 ease-in-out'>
                  <span className='font-medium text-lg text-white group-hover:text-black'>更多訊息</span>
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
};

export default limitedItem;
