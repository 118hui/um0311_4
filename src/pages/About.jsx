import { about, map } from '../assets';

const About = () => {
  return (
    <section>
      <div className='absolute top-0 right-0 z-[-1] bg-[#F4EAD1] w-full h-[9vh] shadow-md rounded-b-2xl'></div>
      <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
        <div className='flex flex-col text-center w-full mb-12 mt-4 z-10'>
          <h1 className='sm:text-3xl text-2xl font-bold mb-4 mt-4 text-black'>關於有怪獸</h1>
        </div>
        <div className='grid gap-6 row-gap-10 lg:grid-cols-2'>
          <div className='lg:py-6 lg:pr-16'>
            <div className='flex'>
              <div className='flex flex-col items-center mr-4'>
                <div>
                  <div className='flex items-center justify-center w-10 h-10 border rounded-full'>
                    <svg className='w-4 text-gray-600' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' viewBox='0 0 24 24'>
                      <line fill='none' strokeMiterlimit='10' x1='12' y1='2' x2='12' y2='22' />
                      <polyline fill='none' strokeMiterlimit='10' points='19,15 12,22 5,15' />
                    </svg>
                  </div>
                </div>
                <div className='w-px h-full bg-gray-400' />
              </div>
              <div className='pt-5 pb-8'>
                <p className='mb-2 text-lg font-bold'>是什麼原因?</p>
                <p className='text-gray-600 font-bold'>近年來，越來越多家庭有養寵物，但在有限或不當的寵物知識裡，常常衍生許多寵物行為問題，造成許多家⼈與寵物的衝突以及遺憾，為了減少這樣的不幸，有怪獸狗貓行為矯正中心就此成立。</p>
              </div>
            </div>
            <div className='flex'>
              <div className='flex flex-col items-center mr-4'>
                <div>
                  <div className='flex items-center justify-center w-10 h-10 border rounded-full'>
                    <svg className='w-4 text-gray-600' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' viewBox='0 0 24 24'>
                      <line fill='none' strokeMiterlimit='10' x1='12' y1='2' x2='12' y2='22' />
                      <polyline fill='none' strokeMiterlimit='10' points='19,15 12,22 5,15' />
                    </svg>
                  </div>
                </div>
                <div className='w-px h-full bg-gray-400' />
              </div>
              <div className='pt-1 pb-8'>
                <p className='mb-2 text-lg font-bold'>於是西元2016</p>
                <p className='text-gray-600 font-bold'>我們成立工作室！ 一直秉持著正向、積極、熱情的態度，把正向訓練的精神帶給更多貓家庭與狗家庭。 透過不打罵、正面鼓勵的方式讓毛孩們在愛中成長。</p>
              </div>
            </div>
            <div className='flex'>
              <div className='flex flex-col items-center mr-4'>
                <div>
                  <div className='flex items-center justify-center w-10 h-10 border rounded-full'>
                    <svg className='w-4 text-gray-600' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' viewBox='0 0 24 24'>
                      <line fill='none' strokeMiterlimit='10' x1='12' y1='2' x2='12' y2='22' />
                      <polyline fill='none' strokeMiterlimit='10' points='19,15 12,22 5,15' />
                    </svg>
                  </div>
                </div>
                <div className='w-px h-full bg-gray-400' />
              </div>
              <div className='pt-1 pb-8'>
                <p className='mb-2 text-lg font-bold'>西元2022特別的一年</p>
                <p className='text-gray-600 font-bold'>有怪獸的老師們除了有正向訓練的基礎背景外，必須同時具備豐富的貓行為與狗行為的專業知識背景，以及擁有 ABRA 貓訓練師與狗訓練師的證照。</p>
              </div>
            </div>
            <div className='flex'>
              <div className='flex flex-col items-center mr-4'>
                <div>
                  <div className='flex items-center justify-center w-10 h-10 border rounded-full'>
                    <svg className='w-4 text-gray-600' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' viewBox='0 0 24 24'>
                      <line fill='none' strokeMiterlimit='10' x1='12' y1='2' x2='12' y2='22' />
                      <polyline fill='none' strokeMiterlimit='10' points='19,15 12,22 5,15' />
                    </svg>
                  </div>
                </div>
                <div className='w-px h-full bg-gray-400' />
              </div>
              <div className='pt-1 pb-8'>
                <p className='mb-2 text-lg font-bold'>你的過程，牠的一輩子</p>
                <p className='text-gray-600 font-bold'>毛小孩就是家中永遠長不大的孩子。短短十來年，對我們來說只是個過程，卻是他們的一生。用愛他， 當然只希望可以給他最好的。真心希望所有⽑⼩孩都能開心、自信的過每一天。</p>
              </div>
            </div>
            <div className='flex'>
              <div className='flex flex-col items-center mr-4'>
                <div>
                  <div className='flex items-center justify-center w-10 h-10 border rounded-full'>
                    <svg className='w-6 text-gray-600' stroke='currentColor' viewBox='0 0 24 24'>
                      <polyline fill='none' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' strokeMiterlimit='10' points='6,12 10,16 18,8' />
                    </svg>
                  </div>
                </div>
              </div>
              <div className='pt-1'>
                <p className='mb-2 text-lg font-bold'>有怪獸貓狗行為矯正中心成立!</p>
              </div>
            </div>
          </div>
          <div className='relative'>
            <img className='inset-0 object-cover object-bottom w-full rounded-xl shadow-lg h-96 lg:absolute lg:h-full' src={about} alt='' />
          </div>
        </div>
        <br />
        <div className='grid gap-5 row-gap-8 lg:grid-cols-2 mt-6'>
          <div className='flex flex-col justify-center'>
            <div className='max-w-xl mb-6'>
              <h2 className='max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none'>
                我們位在台中市
                <br />
                的哪裡{' '}
                <span className='relative px-1'>
                  <div className='absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-[#2E5099]' />
                  <span className='relative inline-block text-[#FCA017]'>請查看地圖</span>
                </span>
              </h2>
              <p className='font-bold text-gray-600'>除了一般常見訓練課程外，我們也不定期舉辦寵物的行為講座及行為課程。 寵物陪伴照顧的部分也有安親、寄宿、及到府照顧。只要你想得到、只要是寵物日常大小事，就是有怪獸的事。</p>
            </div>
            <div className='grid gap-5 row-gap-8 sm:grid-cols-2'>
              <div className='bg-white border-l-5  border-deep-purple-accent-500 rounded-xl'>
                <div className='h-full p-5 border border-l-0 rounded-r'>
                  <h6 className='mb-2 font-semibold leading-5'>最繁華的政商中心</h6>
                  <p className='text-sm text-gray-600 font-bold'>有怪獸位於台中七期-最繁華的政商中心裡的新國自在商場 3 樓 正文心路上明顯的希臘建築、一樓即是星巴克 步行 3 分鐘到公園及綠園道</p>
                </div>
              </div>
              <div className='bg-white border-l-5  border-deep-purple-accent-400 rounded-xl'>
                <div className='h-full p-5 border border-l-0 rounded-r'>
                  <h6 className='mb-2 font-semibold leading-5'>方便好停車</h6>
                  <p className='text-sm text-gray-600 font-bold'>開車 5 分鐘上 74 快速道路、10 分鐘上國道一號 商場下方即有 24 小時的室內停車場 鬧中取靜的絕佳地點讓家長前來便利又好停車</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img className='object-cover w-full h-56 rounded-xl shadow-lg sm:h-96' src={map} alt='' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
