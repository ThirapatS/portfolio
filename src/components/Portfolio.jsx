import React from 'react';
import des from '../assets/70.png';
import A4 from '../assets/A4.png';

function Portfolio() {
  return (
    <div className="portfolio nav-width w-full relative overflow-x-hidden">
      <h1 className='text-7xl font-bold text-[#8C52FF] m-5'>Portfolio</h1>
      <div className="m-10 flex rounded-md">
        <img src={des} alt="" className=' w-[800px]'/>
        <p className='text-3xl flex flex-col justify-center ml-14'>          
          เข้าร่วมแข่งขันในรายการ Webtext editor<br /><br />
          การแข่งขันศิลปหัถกรรม ครั้งที่ 70<br />
          โรงเรียน สตรีสิริเกศ ได้ส่งนักเรียนเข้าแข่งขัน<br />
          ณ จ.ร้อยเอ็ด ในการแข่งขันระดับชาติ<br /><br />
          โดยมี ผู้ฝึกสอนเป็น<br />
          <li className='text-[#8C52FF]'>นายภูเบศ เศรษฐบุตร</li>
          <li className='text-[#8C52FF]'>นางสาวสุภัทรา ชูสาย</li><br /><br />
          นักเรียนผู้เข้าการแข่งขันได้แก่<br />
          <li className='text-[#8C52FF]'>นายธีรภัทร สีสัน</li>
          <li className='text-[#8C52FF]'>เด็กหญิงพิมพ์มาฎา โขนภูเขียว</li><br /><br />
        </p>
      </div>
      <div className="m-10 flex rounded-md">
        <img src={A4} alt="" className=' w-[800px]'/>
        <p className='text-3xl flex flex-col justify-center ml-14'>          
          เข้าร่วมแข่งขันในรายการ A-math<br /><br />
          โรงเรียน สตรีสิริเกศ ได้จัดการแข่งขัน<br />
          ณ โรงเรียนสตรีสิริเกศ<br /><br />
          นักเรียนผู้เข้าการแข่งขันได้แก่<br /><br />
          <li className='text-[#8C52FF]'>นายธีรภัทร สีสัน</li>
          <li className='text-[#8C52FF]'>นางสาวปิยธิดา ครองยุติ</li><br /><br />
        </p>
      </div>
    </div>
  )
}

export default Portfolio