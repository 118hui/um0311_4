import { useState } from 'react';
import Faq from '../components/Faq';

import { serve, serve_2, serve_3, serve_4, serve_5, serve_6 } from '../assets';

import { NavLink } from 'react-router-dom';

const Serve = () => {
  const [showCard, setShowCard] = useState('all');

  const handleProject = (category) => {
    setShowCard(category);
  };
  return (
    <section>
      <div className='absolute top-0 right-0 z-0 bg-[#F4EAD1] w-full h-[9vh] shadow-lg rounded-b-2xl'></div>
      <div className='container px-5 py-24 mx-auto relative z-10'>
        <div className='flex flex-col text-center w-full mb-12'>
          <h1 className='sm:text-3xl text-2xl font-bold  mb-4 mt-4 text-black'>服務項目</h1>
        </div>
        <div className='w-full flex flex-wrap justify-center -mx-4'>
          <div className='w-full px-4 lg:w-auto'>
            <ul className='flex flex-wrap justify-center mb-12 space-x-1'>
              <li className='mb-1'>
                <button onClick={() => handleProject('all')} className={`inline-block rounded-lg py-2 px-5 text-center text-lg font-semibold transition md:py-3 lg:px-8 ${showCard === 'all' ? 'activeClasses bg-amber-500 text-white' : 'inactiveClasses text-body-color dark:text-dark-6 hover:bg-primary hover:text-[#FCA017]'}`}>
                  所有課程
                </button>
              </li>
              <li className='mb-1'>
                <button onClick={() => handleProject('狗狗')} className={`inline-block rounded-lg py-2 px-5 text-center text-lg font-semibold transition md:py-3 lg:px-8 ${showCard === '狗狗' ? 'activeClasses bg-amber-500 text-white' : 'inactiveClasses text-body-color dark:text-dark-6 hover:bg-primary hover:text-[#FCA017]'}`}>
                  狗狗課程
                </button>
              </li>
              <li className='mb-1'>
                <button onClick={() => handleProject('貓咪')} className={`inline-block rounded-lg py-2 px-5 text-center text-lg font-semibold transition md:py-3 lg:px-8 ${showCard === '貓咪' ? 'activeClasses bg-amber-500 text-white' : 'inactiveClasses text-body-color dark:text-dark-6 hover:bg-primary hover:text-[#FCA017]'}`}>
                  貓咪課程
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className='flex flex-wrap -mx-4'>
          <PortfolioCard ImageHref={serve} category='狗狗' title='一對一課程' button='課程內容' buttonHref='#' showCard={showCard} />
          <PortfolioCard ImageHref={serve_2} category='狗狗' title='團體' button='課程內容' buttonHref='#' showCard={showCard} />
          <PortfolioCard ImageHref={serve_3} category='狗狗' title='安親住宿' button='課程內容' buttonHref='#' showCard={showCard} />
          <PortfolioCard ImageHref={serve_4} category='狗狗' title='到府照顧' button='課程內容' buttonHref='#' showCard={showCard} />
          <PortfolioCard ImageHref={serve_5} category='貓咪' title='一對一課程' button='課程內容' buttonHref='#' showCard={showCard} />
          <PortfolioCard ImageHref={serve_6} category='貓咪' title='到府照顧' button='課程內容' buttonHref='#' showCard={showCard} />
        </div>
        <Faq />
      </div>
    </section>
  );
};

export default Serve;

const PortfolioCard = ({ showCard, category, ImageHref, title, button }) => {
  return (
    <>
      <div className={`w-full px-4 md:w-1/2 xl:w-1/3 ${showCard === 'all' || showCard === category.toLowerCase() ? 'block' : 'hidden'}`}>
        <div className='relative mb-12'>
          <div className='overflow-hidden rounded-[10px]'>
            <img src={ImageHref} alt='portfolio' className='w-full h-[400px] object-cover' />
          </div>
          <div className='absolute bottom-0 left-0 w-full z-5 rounded-b-2xl bg-[#2E5099] dark:bg-dark-2 py-[10px] px-3 text-center shadow-portfolio dark:shadow-box-dark transform -translate-y-0'>
            <span className='text-[#FCA017] mb-2 block text-xl font-bold'>{category}</span>
            <h3 className='text-white dark:text-white mb-5 text-xl font-bold'>{title}</h3>
            <NavLink to='/four' activeClassName='active'>
              <button className='text-white dark:text-dark-6 hover:border-primary hover:bg-[#FCA017] inline-block rounded-lg border border-white dark:border-dark-3 py-[10px] px-7 text-md font-medium transition'>{button}</button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};
