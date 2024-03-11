import { NavLink } from 'react-router-dom';

const News = () => {
  return (
    <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
      <h1 className='sm:text-4xl text-3xl font-bold text-center  text-gray-900 mb-4'>最新消息</h1>
      <div className='mb-10 border-t border-b divide-y '>
        <div className='grid py-8 sm:grid-cols-4'>
          <div className='mb-4 sm:mb-0'>
            <div className='space-y-1 text-lg font-semibold tracking-wide uppercase'>
              <a href='/' className='transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800' aria-label='Category'>
                公告
              </a>
              <p className='text-gray-600'>5 6月 2020</p>
            </div>
          </div>
          <div className='sm:col-span-3 lg:col-span-2 '>
            <div className='mb-3'>
              <NavLink to='/four' className='inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700'>
                <button className='text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl hover:text-[#2E5099]'>有怪獸寵物行為矯正中心</button>
              </NavLink>
            </div>
            <p className='text-gray-700'>沒養過狗的人很難想像和狗生活在一起是什麼感覺，養過狗的人也無法想像沒有狗該如何生活。</p>
          </div>
        </div>
        <div className='grid py-8 sm:grid-cols-4'>
          <div className='mb-4 sm:mb-0'>
            <div className='space-y-1 text-lg font-semibold tracking-wide uppercase'>
              <a href='/' className='transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800' aria-label='Category'>
                公告
              </a>
              <p className='text-gray-600'>15 9月 2020</p>
            </div>
          </div>
          <div className='sm:col-span-3 lg:col-span-2'>
            <div className='mb-3'>
              <NavLink to='/four' className='inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700'>
                <button className='text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl hover:text-[#2E5099]'>有怪獸寵物行為矯正中心</button>
              </NavLink>
            </div>
            <p className='text-gray-700'>沒養過狗的人很難想像和狗生活在一起是什麼感覺，養過狗的人也無法想像沒有狗該如何生活。</p>
          </div>
        </div>
        <div className='grid py-8 sm:grid-cols-4'>
          <div className='mb-4 sm:mb-0'>
            <div className='space-y-1 text-lg font-semibold tracking-wide uppercase'>
              <a href='/' className='transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800' aria-label='Category'>
                公告
              </a>
              <p className='text-gray-600'>28 12月 2020</p>
            </div>
          </div>
          <div className='sm:col-span-3 lg:col-span-2'>
            <div className='mb-3'>
              <NavLink to='/four' className='inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700'>
                <button className='text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl hover:text-[#2E5099]'>有怪獸寵物行為矯正中心</button>
              </NavLink>
            </div>
            <p className='text-gray-700'>沒養過狗的人很難想像和狗生活在一起是什麼感覺，養過狗的人也無法想像沒有狗該如何生活。</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
