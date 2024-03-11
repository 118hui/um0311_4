import { useState } from 'react';

const Faq = () => {
  return (
    <section>
      <div className='mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20'>
        <span className='mb-2 block text-xl font-semibold text-primary'>FAQ</span>
        <h2 className='sm:text-3xl text-2xl font-bold title-font mb-4 text-gray-900'>是否有任何問題?</h2>
      </div>
      <div className='-mx-4 flex flex-wrap'>
        <div className='w-full px-4 lg:w-1/2'>
          <AccordionItem header='請問我一定要成為進階會員嗎?' text='小動物都是有靈性的，它不會跟你說謝謝，但其實它都知道。它的存在本身就夠溫暖我們，我們不奢求它能為我們做什麼感動的事，只願它平安度過此生，與我們相伴到老！' />
          <AccordionItem header='如果之後因個人因素，可以取消預約嗎?' text='小動物都是有靈性的，它不會跟你說謝謝，但其實它都知道。它的存在本身就夠溫暖我們，我們不奢求它能為我們做什麼感動的事，只願它平安度過此生，與我們相伴到老！' />
          <AccordionItem header='請問有哪些付款方式?' text='小動物都是有靈性的，它不會跟你說謝謝，但其實它都知道。它的存在本身就夠溫暖我們，我們不奢求它能為我們做什麼感動的事，只願它平安度過此生，與我們相伴到老！' />
        </div>
        <div className='w-full px-4 lg:w-1/2'>
          <AccordionItem header='貓咪課程什麼時候才有團體跟安親住宿?' text='小動物都是有靈性的，它不會跟你說謝謝，但其實它都知道。它的存在本身就夠溫暖我們，我們不奢求它能為我們做什麼感動的事，只願它平安度過此生，與我們相伴到老！' />
          <AccordionItem header='如果直接到中心接洽，需要事前預約嗎?' text='小動物都是有靈性的，它不會跟你說謝謝，但其實它都知道。它的存在本身就夠溫暖我們，我們不奢求它能為我們做什麼感動的事，只願它平安度過此生，與我們相伴到老！' />
          <AccordionItem header='有怪獸商城什麼時候開放?' text='小動物都是有靈性的，它不會跟你說謝謝，但其實它都知道。它的存在本身就夠溫暖我們，我們不奢求它能為我們做什麼感動的事，只願它平安度過此生，與我們相伴到老！' />
        </div>
      </div>
    </section>
  );
};

export default Faq;

const AccordionItem = ({ header, text }) => {
  const [active, setActive] = useState(false);

  const handleToggle = (event) => {
    event.preventDefault();
    setActive(!active);
  };
  return (
    <div className='mb-8 w-full rounded-2xl bg-[#81C5E6] p-4 shadow-[0px_20px_95px_0px_rgba(201,203,204,0.30)] dark:bg-dark-2 dark:shadow-[0px_20px_95px_0px_rgba(0,0,0,0.30)] sm:p-8 lg:px-6 xl:px-8'>
      <button className={`faq-btn flex w-full text-left`} onClick={(event) => handleToggle(event)}>
        <div className='mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary/5 text-primary dark:bg-white/5'>
          <svg className={`fill-primary stroke-primary duration-200 ease-in-out ${active ? 'rotate-180' : ''}`} width='17' height='10' viewBox='0 0 17 10' xmlns='http://www.w3.org/2000/svg'>
            <path d='M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z' fill='' stroke='' />
          </svg>
        </div>

        <div className='w-full'>
          <h4 className='mt-1 text-lg font-semibold text-dark dark:text-white'>{header}</h4>
        </div>
      </button>

      <div className={`pl-[62px] duration-200 ease-in-out ${active ? 'block' : 'hidden'}`}>
        <p className='py-3 text-base leading-relaxed text-black dark:text-dark-6'>{text}</p>
      </div>
    </div>
  );
};
