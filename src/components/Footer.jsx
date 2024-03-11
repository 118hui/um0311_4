import { logo } from '../assets';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='w-full bg-[#2E5099] py-20'>
      <div className='md:max-w-[1480px] m-auto grid md:grid-cols-5 max-[780px]:grid-cols-2  gap-8 max-w-[600px]  px-4 md:px-0'>
        <div className='col-span-2 '>
          <img src={logo} className='h-[40px]' />
          <h3 className='text-2xl font-bold mt-10 text-white'>聯絡我們</h3>
          <h3 className='py-2 text-white'>電話 : 0900-761-178</h3>
          <h3 className='py-2 text-white'>地址 : 台中市⻄屯區市政北一路1號3樓</h3>
          <h3 className='py-2 text-white'>Email:umonster.asia@gmail.com</h3>
          <div className='flex gap-4 py-4'>
            <div className='p-4 bg-[#E9F8F3] rounded-2xl'>
              <FaFacebookF size={25} style={{ color: '#FCA017' }} />
            </div>

            <div className='p-4 bg-[#E9F8F3] rounded-2xl'>
              <FaInstagram size={25} style={{ color: '#FCA017' }} />
            </div>
          </div>
        </div>

        <div>
          <h3 className='text-2xl font-bold text-white'>主要項目</h3>
          <ul className='py-6 text-white'>
            <NavLink to='/about'>
              <li className='py-2 text-lg hover:text-[#FCA017]'>關於我們</li>
            </NavLink>
            <NavLink to='/know'>
              <li className='py-2 text-lg hover:text-[#FCA017]'>知識專欄</li>
            </NavLink>
            <NavLink to='/limited'>
              <li className='py-2 text-lg hover:text-[#FCA017]'>期間限定</li>
            </NavLink>
            <NavLink to='/serve'>
              <li className='py-2 text-lg hover:text-[#FCA017]'>服務項目</li>
            </NavLink>
          </ul>
        </div>

        <div>
          <h3 className='text-2xl font-bold text-white'>其它連結</h3>
          <ul className='py-6 text-white'>
            <NavLink to='/member'>
              <li className='py-2 text-lg hover:text-[#FCA017]'>會員登入</li>
            </NavLink>
            <NavLink to='/contact'>
              <li className='py-2 text-lg hover:text-[#FCA017]'>聯絡我們</li>
            </NavLink>
            <li className='py-2 text-white'>怪獸商城</li>
          </ul>
        </div>

        <div className='max-[780px]:col-span-2'>
          <h3 className='text-2xl font-bold text-white'>有怪獸寵物行為矯正中心</h3>
          <h3 className='py-2 text-white'>
            希望以更完整、更值得信賴的 <br></br> 專業形象與大家見面。
            <div className='mt-14'>
              &copy; 2024 All rights reserved<br></br>有怪獸企業有限公司
            </div>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;
