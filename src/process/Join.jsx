import { NavLink } from 'react-router-dom';

const Join = () => {
  return (
    <>
      <div className='absolute top-0 right-0 z-[-1] bg-[##F4EAD1] w-full h-[9vh] shadow-md rounded-b-2xl'></div>
      <main className='grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8'>
        <div className='text-center m-16 sm:mt-14'>
          <h1 className='mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl'>請問是否已加入會員</h1>
          <p className='mt-6 text-base leading-7 text-gray-600'>成為進階會員享更多服務</p>
          <div className='mt-10 flex items-center justify-center gap-x-6'>
            <NavLink to='/member'>
              <button className='rounded-md bg-[#2E5099] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#FCA017] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>前往會員中心</button>
            </NavLink>
          </div>
        </div>
      </main>
    </>
  );
};

export default Join;
