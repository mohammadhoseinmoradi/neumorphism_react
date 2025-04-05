import { useState } from "react";
import ImageItem1 from "../assets/img/img.webp";
import ImageItem2 from "../assets/img/img (1).webp";
import ImageItem3 from "../assets/img/img (2).webp";
import ImageItem4 from "../assets/img/img (3).webp";
import ImageItem5 from "../assets/img/img (4).webp";
import ImageItem6 from "../assets/img/pic1.jpeg";
import ImageItem7 from "../assets/img/pic2q.jpeg";
import ImageItem8 from "../assets/img/pic2q.jpeg";
import ImageItem9 from "../assets/img/pic2q.jpeg";
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";
import { IoSearchCircleSharp } from "react-icons/io5";
import { FaUpload } from "react-icons/fa";
import { CgStyle } from "react-icons/cg";
import { MdAppRegistration } from "react-icons/md";
import { MdAccountCircle } from "react-icons/md";

const ProfilePage = () => {
  const [selectedItem, setSelectedItem] = useState<string | null>("پروفایل");
  const [showModal, setShowModal] = useState<boolean>(false);

  const menuItems = ["حساب کاربری", "امور مالی", "گالری من", "خروج"];

  // محتوای مربوط به هر بخش
  const content = { 
    "حساب کاربری": (
        <div className=" w-full  flex items-start justify-start p-6">
      <div className="w-full  text-white rounded-2xl shadow-lg p-6">
        {/* پروفایل */}
        <div className="flex items-center gap-4 border-b border-gray-700 pb-4">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-yellow-400 rounded-full"></div>
          <div>
            <p className="text-sm text-gray-400">Handle</p>
            <p className="text-lg font-semibold">improvedbelovedcarp</p>
          </div>
        </div>

        {/* اطلاعات حساب */}
        <div className="mt-4 space-y-4 flex  flex-col">
          <h2 className="text-lg font-semibold">اطلاعات حساب کاربری </h2>
          <div>
            <p className="text-sm text-gray-400">شماره همراه :</p>
            <p className="text-md">09154969927</p>
          </div>

        </div>

        {/* دکمه‌ها */}
        <div className="mt-6 flex justify-between">
          <button className="bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 transition">ویرایش پروفایل</button>
          <button className="bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600 transition">خروج</button>
        </div>

        {/* حذف حساب */}
        <div className="mt-4 text-right">
          <button className="text-sm text-gray-500 hover:text-gray-400">حذف حساب کاربری</button>
        </div>
      </div>
    </div>
    ),
    "امور مالی": (
        <div className=" w-full  flex items-start justify-start p-6">
        <div className="w-full  text-white rounded-2xl shadow-lg p-6">
          {/* پروفایل */}
          <div className="flex items-center justify-end gap-4 border-b border-gray-700 pb-4">
          <div>
              <p className="text-sm text-gray-400"> : میزان اعتبار شما </p>
              <p className="text-lg font-semibold">200.000 </p>
            </div>
            <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-yellow-400 rounded-full"></div>
         
          </div>
  
          {/* اطلاعات حساب */}
          <div className="mt-4 space-y-4 flex  flex-col">
            <h2 className="text-lg font-semibold">  افزایش اهتبار </h2>
            <div>
              <p className="text-sm text-gray-400">وارد کردن مفدار دلخواه</p>
              <input type="text" className="items h-10 w-50 text-center mt-5" placeholder="50.000"></input>
            </div>
            <div className="flex justify-between" >
            <div
              className="relative group  items  rounded-3xl w-32 h-32  flex justify-center items-center  mt-8 mr-6"
            >
              <div className="absolute top-0 right-full mr-2 hidden group-hover:block text-center bg-black text-white p-2 rounded-md opacity-75 w-48">
                   توصیف رندوم
              </div>
              <div className="flex flex-col items-center justify-center rounded-xl text-center  cursor-pointer">
                    <p>100.000</p>
              </div>
            </div>
            <div
              className="relative group  items  rounded-3xl w-32 h-32  flex justify-center items-center  mt-8 mr-6"
            >
              <div className="absolute top-0 right-full mr-2 hidden group-hover:block text-center bg-black text-white p-2 rounded-md opacity-75 w-48">
                   توصیف رندوم
              </div>
              <div className="flex flex-col items-center justify-center rounded-xl text-center  cursor-pointer">
                    <p>100.000</p>
              </div>
            </div>
            <div
              className="relative group  items  rounded-3xl w-32 h-32  flex justify-center items-center  mt-8 mr-6"
            >
              <div className="absolute top-0 right-full mr-2 hidden group-hover:block text-center bg-black text-white p-2 rounded-md opacity-75 w-48">
                   توصیف رندوم
              </div>
              <div className="flex flex-col items-center justify-center rounded-xl text-center  cursor-pointer">
                    <p>100.000</p>
              </div>
            </div>
            <div
              className="relative group  items  rounded-3xl w-32 h-32  flex justify-center items-center  mt-8 mr-6"
            >
              <div className="absolute top-0 right-full mr-2 hidden group-hover:block text-center bg-black text-white p-2 rounded-md opacity-75 w-48">
                   توصیف رندوم
              </div>
              <div className="flex flex-col items-center justify-center rounded-xl text-center  cursor-pointer">
                    <p>100.000</p>
              </div>
            </div>
            </div>


            
          </div>
  
          {/* دکمه‌ها */}
          <div className="mt-6 flex items-center justify-center">
            <button className=" bg-blue-500 px-20 py-3 rounded-lg hover:bg-blue-600 transition"> پرداخت</button>

          </div>
  
        </div>
      </div>
    ),
    "گالری من": (
        <div className="w-full  p-6 font-sans overflow-y-auto ">
        <div className="w-full overflow-y-auto">
          {/* عنوان */}
          <h1 className="text-3xl font-bold text-white mb-5 ">Gallery</h1>
      
          
          {/* گالری - شبکه ۲ در ۲ */}
        <div className="flex gap-20 w-full overflow-y-auto">
        <div className="flex h-max w-full flex-col   gap-2">
            {/* کارت اول */}
            <div className="rounded-lg text-center">
              <div className="text-2xl font-bold">
              <img
                src={ImageItem6}
                className="rounded-2xl cover-image"
                alt="Example WebP"
              />
              </div>
            </div>
            
            {/* کارت دوم */}
            <div className="rounded-lg text-center">
              <div className="text-2xl font-bold">
              <img
                src={ImageItem6}
                className="rounded-2xl "
                alt="Example WebP"
              />
              </div>
            </div>
            
            {/* کارت سوم */}
            <div className=" rounded-lg text-center">
              <div className="text-2xl font-bold">
              <img
                src={ImageItem6}
                className="rounded-2xl "
                alt="Example WebP"
              />
              </div>
            </div>
            
            {/* کارت چهارم */}
            <div className=" rounded-lg text-center">
              <div className="text-2xl font-bold">
              <img
                src={ImageItem6}
                className="rounded-2xl "
                alt="Example WebP"
              />
              </div>
            </div>
          </div>
          <div className="flex h-max w-full flex-col   gap-2">
            {/* کارت اول */}
            <div className="bg-gray-100 p-6 rounded-lg text-center">
              <div className="text-2xl font-bold">080</div>
            </div>
            
            {/* کارت دوم */}
            <div className="bg-gray-100 p-6 rounded-lg text-center">
              <div className="text-2xl font-bold">080</div>
            </div>
            
            {/* کارت سوم */}
            <div className="bg-gray-100 p-6 rounded-lg text-center">
              <div className="text-2xl font-bold">Josefina</div>
            </div>
            
            {/* کارت چهارم */}
            <div className="bg-gray-100 p-6 rounded-lg text-center">
              <div className="text-2xl font-bold">CHARMS</div>
            </div>
          </div>
          <div className="flex h-max w-full flex-col  gap-2">
            {/* کارت اول */}
            <div className="bg-gray-100 p-6 rounded-lg text-center">
              <div className="text-2xl font-bold">080</div>
            </div>
            
            {/* کارت دوم */}
            <div className="bg-gray-100 p-6 rounded-lg text-center">
              <div className="text-2xl font-bold">080</div>
            </div>
            
            {/* کارت سوم */}
            <div className="bg-gray-100 p-6 rounded-lg text-center">
              <div className="text-2xl font-bold">Josefina</div>
            </div>
            
            {/* کارت چهارم */}
            <div className="bg-gray-100 p-6 rounded-lg text-center">
              <div className="text-2xl font-bold">CHARMS</div>
            </div>
          </div>
          <div className="flex h-max w-full flex-col  gap-2">
            {/* کارت اول */}
            <div className="bg-gray-100 p-6 rounded-lg text-center">
              <div className="text-2xl font-bold">080</div>
            </div>
            
            {/* کارت دوم */}
            <div className="bg-gray-100 p-6 rounded-lg text-center">
              <div className="text-2xl font-bold">080</div>
            </div>
            
            {/* کارت سوم */}
            <div className="bg-gray-100 p-6 rounded-lg text-center">
              <div className="text-2xl font-bold">Josefina</div>
            </div>
            
            {/* کارت چهارم */}
            <div className="bg-gray-100 p-6 rounded-lg text-center">
              <div className="text-2xl font-bold">CHARMS</div>
            </div>
          </div>

        </div>
      
          
        </div>
      </div>
    ),
    "ثبت نام ورود": (
      <div className="w-full flex justify-center items-center">
        <h2>صفحه ثبت نام یا ورود</h2>
      </div>
    ),
  };

  const handleItemClick = (item: string) => {
    setSelectedItem(item);
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const toggleModal = () => setShowModal(!showModal);

  return (
    <div className="flex flex-col items-center justify-between min-h-screen relative w-full overflow-y-auto">
      <div className="wave-container">
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
      </div>

      {/* منوی کناری */}
      <div className="w-1/9 h-min p-4 flex flex-col items-center justify-start fixed top-60 right-10 rounded-3xl items  ">
        <div className="w-full flex flex-col items-center text-white text-s space-y-3">
          {menuItems.map((item, index) => (
            <div
              key={index}
              onClick={() => handleItemClick(item)} // هنگامی که روی هر آیتم کلیک می‌شود
              className={`w-full flex items-center justify-end text-white text-lg cursor-pointer p-2 rounded-md my-2 ${
                selectedItem === item ? "items  " : "in"
              }`}
            >
                    <div className="flex flex-row items-center justify-end rounded-xl text-center  cursor-pointer">
              <p className="text-[24] mr-3">{item}</p>
             
              {/* <MdAccountCircle size={35} color="gray" />     */}

              </div>
            </div>
          ))}
        </div>
      </div>

      {/* نمایش محتوای مربوط به گزینه انتخاب‌شده */}
      <div className="flex w-7/8 justify-start items-start mb-20 absolute top-55 left-35 overflow-y-auto">
        <div className="w-full flex flex-col items-center pt-4 rounded-3xl menuS pb-4">
          {content[selectedItem as string]}
        </div>
      </div>

  
    </div>
  );
};

export default ProfilePage;
