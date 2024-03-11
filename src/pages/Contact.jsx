const Contact = () => {
  return (
    <div>
      <div className='absolute top-0 right-0 z-0 bg-[#F4EAD1] w-full h-[9vh] shadow-lg rounded-b-2xl'></div>
      <section className='body-font relative'>
        <div className='container px-5 py-24 mx-auto'>
          <div className='flex flex-col text-center w-full mb-12'>
            <h1 className='sm:text-3xl text-2xl font-bold title-font mb-4 text-black'>聯絡我們</h1>
          </div>
          <div className='lg:w-1/2 md:w-2/3 mx-auto'>
            <div className='flex flex-wrap -m-2'>
              <div className='p-2 w-1/2'>
                <div className='relative'>
                  <label htmlFor='name' className='leading-7 text-sm text-gray-700 font-bold'>
                    姓名
                  </label>
                  <input type='text' id='name' name='name' className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-sky-700 focus:bg-white focus:ring-2  text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out' />
                </div>
              </div>
              <div className='p-2 w-1/2'>
                <div className='relative'>
                  <label htmlFor='email' className='leading-7 text-sm text-gray-700 font-bold'>
                    手機
                  </label>
                  <input type='email' id='email' name='email' className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2  text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out' />
                </div>
              </div>
              <div className='p-2 w-full'>
                <div className='relative'>
                  <label htmlFor='email' className='leading-7 text-sm text-gray-700 font-bold'>
                    Email
                  </label>
                  <input type='email' id='email' name='email' className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2  text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out' />
                </div>
              </div>
              <div className='p-2 w-full'>
                <div className='relative'>
                  <label htmlFor='message' className='leading-7 text-sm text-gray-700 font-bold'>
                    問題內容
                  </label>
                  <textarea id='message' name='message' className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2  h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out'></textarea>
                </div>
              </div>
            </div>
            <br />
            <div className='text-center'>
              <button className='w-40 h-12 bg-[#FCA017] cursor-pointer rounded-3xl border-2 border-[#FCA017] shadow-[inset_0px_-2px_0px_1px_#f1a706] group  transition duration-300 ease-in-out'>
                <span className='font-medium text-lg text-white group-hover:text-black'>送出</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
