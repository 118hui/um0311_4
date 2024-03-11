import { dog, cat, boy, home } from '../assets';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Lesson = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      <section className='pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]'>
        <div className='container mx-auto'>
          <div className='-mx-4 flex flex-wrap'>
            <div className='w-full px-4'>
              <div className='mx-auto mb-[60px] max-w-[510px] text-center'>
                <h2 className='mb-3 text-3xl font-bold leading-[1.2] text-black  sm:text-4xl md:text-[40px]'>主打課程</h2>
                <p className='text-md font-bold text-body-color dark:text-dark-6'>
                  提供狗、貓，一對一及團體課程，並有安心住宿及到府照顧，<br></br>多項服務課程。
                </p>
              </div>
            </div>
          </div>

          <div className={`-mx-4 flex flex-wrap justify-center transition-transform transform-gpu duration-300 ${isHovered ? '' : ''}`} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <TeamCard name='一對一課程' profession='一直秉持著正向、積極的態度，把正向訓練的精神帶給更多貓家庭與狗家庭。' imageSrc={dog} />
            <TeamCard name='團體課程' profession='一直秉持著正向、積極的態度，把正向訓練的精神帶給更多貓家庭與狗家庭。' imageSrc={cat} />
            <TeamCard name='安心住宿' profession='一直秉持著正向、積極的態度，把正向訓練的精神帶給更多貓家庭與狗家庭。' imageSrc={boy} />
            <TeamCard name='到府照顧' profession='一直秉持著正向、積極的態度，把正向訓練的精神帶給更多貓家庭與狗家庭。' imageSrc={home} />
          </div>
        </div>
      </section>
      <div className='text-center'>
        <NavLink to='/serve'>
          <button className='w-40 h-12 bg-[#FCA017] cursor-pointer rounded-3xl border-2 border-[#FCA017] shadow-[inset_0px_-2px_0px_1px_#f1a706] group  transition duration-300 ease-in-out'>
            <span className='font-medium text-lg text-white group-hover:text-black'>更多課程</span>
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Lesson;

const TeamCard = ({ imageSrc, name, profession }) => {
  return (
    <>
      <div className='w-full px-4 md:w-1/2 xl:w-1/4'>
        <div className='mx-auto mb-10 w-full max-w-[370px]'>
          <div className='relative overflow-hidden rounded-2xl'>
            <img src={imageSrc} alt='' className='w-full h-[480px] object-cover' />
            <div className='absolute bottom-5 left-0 w-full text-center'>
              <div className='relative mx-5 overflow-hidden rounded-xl bg-white px-3 py-5 dark:bg-dark-2'>
                <h3 className='text-xl font-bold text-dark dark:text-white'>{name}</h3>
                <p className='text-sm text-body-color dark:text-dark-6'>{profession}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
