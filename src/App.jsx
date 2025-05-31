import React from 'react'
import bag from './assets/Bag .png'
import Bag from './assets/Bag.svg'
import search from './assets/search.svg'
import arrow from './assets/arrow.png'
import chair from './assets/chair.png'
import chair1 from './assets/chair1.png'
import chair2 from './assets/chair2.png'
import chair3 from './assets/chair3.png'
import leftarow from './assets/letarow.png'
import rightarrow from './assets/rightarrow.png'
import star from './assets/Star.png'
import plus from './assets/plus.png'
import dining from './assets/dining.png'
import living1 from  './assets/living1.png'
import living2 from  './assets/living2.png'
import person from './assets/person.png'
import person1 from './assets/person1.svg'
import person2 from './assets/person2.svg'
import facebook from './assets/001-facebook.svg'
import twitter from './assets/003-twitter.svg'
import instagram from './assets/004-instagram.svg'
import rightarr from './assets/rightarr.png'



function App() {
  return (
     <>
          <div>
             <div className='h-[1084px] w-full bg-[url(/src/assets/backpic.png)] flex flex-col'>
                   <div className='flex flex-row justify-between p-8'>
                        <p className='text-lg font-bold text-white'>Panto</p>
                        <ul className='flex flex-row gap-7 text-white text-lg'>
                            <li>Furniture</li>
                            <li>Shop</li>
                            <li>About Us</li>
                            <li>Contact</li>
                        </ul>
                        <div>
                            <img src={bag} alt="" />
                        </div>
                   </div>
                   
                   <div className='flex flex-col items-center px-8 mt-10'>
                        <h1 className='text-7xl font-bold text-white w-[861px] h-[208px] text-center'>Make Your Interior More Minimalistic Modern</h1>
                   </div>
                   <div className='flex flex-col items-center '>
                     <p className='mt-0 text-xl w-[606px] h-[76px] text-center text-white font-[Gilroy-Regular] font-thin'>Turn your room with panto into a lot more minimalist and mordern with ease and speed</p>
                  </div>
                  <div className='flex flex-col  items-center pt-5'>
                       <div className='rounded-full ring-transparent border-1 border-gray-300 h-[56px] w-[344px] flex flex-row justify-between items-center pl-[20px] pr-[8px] pt-[8px] pb-[8px] bg-[#494b4d] opacity-90'>
                           <input type='text' placeholder='Search furniture' className='text-xl placeholder:text-white  border-none outline-none w-full'/>
                           <div className='h-[45px] w-[45px] bg-amber-500 rounded-full flex items-center p-[14px] '>
                                <img src={search} alt="" />
                           </div>
                       </div>
                  </div>
             </div>
             <div className=' flex flex-row justify-around mt-20'>
                 <div className='w-[242px] h-[104px] text-3xl font-bold text-start pt-[50px]'>
                       Why<br/> Choosing Us
                 </div>
                 <div className='flex flex-col gap-4'>
                     <p className='h-[30px] w-[172px] text-2xl font-semibold'>Luxury facilities</p>
                     <p className='w-[284px] h-[80px] font-(family-name:Gilroy-Regular) text-[16px]'>The advantage of hiring a workspace with us is that givies you comfortable service and all-around facilities</p>
                     <div className='flex flex-row gap-3 items-start'>
                         <p className='text-amber-600'>More Info</p>
                         <img src={arrow} alt="" className='h-[24px] w-[48px]'/>
                     </div>
                 </div>
                 <div className='flex flex-col gap-4'>
                     <p className='h-[30px] w-[182px] text-2xl font-semibold'>Affordable Price</p>
                     <p className='w-[284px] h-[80px] font-(family-name:Gilroy-Regular) text-[16px]'>You can get a workspace of the highst quality at an affordable price and still enjoy the facilities that are only here</p>
                     <div className='flex flex-row gap-3 items-start'>
                         <p className='text-amber-600'>More Info</p>
                         <img src={arrow} alt="" className='h-[24px] w-[48px]'/>
                     </div>
                 </div>
                 <div className='flex flex-col gap-4'>
                     <p className='h-[30px] w-[172px] text-2xl font-semibold'>Many Choices</p>
                     <p className='w-[284px] h-[80px] font-(family-name:Gilroy-Regular) text-[16px]'>We provide many unique work space choices so that you can choose the workspace to your liking</p>
                     <div className='flex flex-row gap-3 items-start'>
                         <p className='text-amber-600'>More Info</p>
                         <img src={arrow} alt="" className='h-[24px] w-[48px]'/>
                     </div>
                 </div>
             </div>
             <div className='mt-20 flex flex-col items-center bg-[#f7f7f7] w-full pl-20'>
                  <div className='text-3xl font-bold pt-15'>
                      Best Selling Product
                  </div>
                  <div className='pt-10'>
                    <div className='flex flex-row gap-2 h-[57px] w-[348px] bg-[#eeeeee] rounded-full justify-between items-center p-6 '>
                         <div className='rounded-full bg-white h-[45px] w-[84px] flex items-center justify-center'>
                              <p className='text-[18px] font-(family-name:Gilroy-Regular) font-normal text-[#1E1E1E]'>Chair</p>
                         </div>
                         <div className='rounded-full h-[45px] w-[84px] flex items-center justify-center hover:bg-white '>
                              <p className='text-[18px] font-(family-name:Gilroy-Regular) font-normal text-[#1E1E1E]'>Beds</p>
                         </div>
                         <div className='rounded-full h-[45px] w-[84px] flex items-center justify-center hover:bg-white '>
                              <p className='text-[18px] font-(family-name:Gilroy-Regular) font-normal text-[#1E1E1E]'>Sofa</p>
                         </div>
                         <div className='rounded-full h-[45px] w-[84px] flex items-center justify-center hover:bg-white '>
                              <p className='text-[18px] font-(family-name:Gilroy-Regular) font-normal text-[#1E1E1E]'>Lamp</p>
                         </div>
                    </div>
                  </div>
                  <div className='pt-25 flex flex-row gap-5 '>
                     <div className='flex flex-col'>
                          <div  className='w-[268px] h-[239px] rounded-xl'>
                              <div className='-mt-10'>
                                 <img src={chair} alt="" />
                              </div>
                              <div className='flex flex-row justify-start '>
                                 <img src={leftarow} alt=""  className='-mt-15 '/>
                             </div>
                          </div>
                          <div className='w-[268px] h-[203px] bg-white rounded-xl gap-4'>
                              <div className='flex flex-col p-5 gap-2'>
                                       <p className='text-[#8d8d8d] text-[17px]'>chair</p>
                                       <p className='text-[22px] font-bold'>Sakarias Armchair</p>
                                      <div className='flex flex-row gap-1'>
                                        <img src={star} alt="" />
                                        <img src={star} alt="" />
                                        <img src={star} alt="" />
                                        <img src={star} alt="" />
                                        <img src={star} alt="" />
                                      </div>
                              </div>
                              <div className='p-5 flex flex-row justify-between'>
                                   <div className='text-[#0D1B39] flex flex-row'>
                                        <p className='text-[#0D1B39] font-bold text-[16px]'>$</p>
                                        <p className='pt-1 font-bold'>369</p>
                                   </div>
                                   <div className='h-[40px] w-[40px] bg-[#091B3C] rounded-full p-[10px] mb-1'>
                                        <img src={plus} alt="" />
                                   </div>
                              </div>
                          </div>
                     </div>
                     <div className='flex flex-col'>
                          <div  className='w-[268px] h-[239px]'>
                               <div className='-mt-10'>
                                    <img src={chair1} alt="" />
                               </div>
                          </div>
                          <div className='w-[268px] h-[203px] bg-white rounded-xl gap-4'>
                              <div className='flex flex-col p-5 gap-2'>
                                       <p className='text-[#8d8d8d] text-[17px]'>chair</p>
                                       <p className='text-[22px] font-bold'>Baltsar Chair</p>
                                      <div className='flex flex-row gap-1'>
                                        <img src={star} alt="" />
                                        <img src={star} alt="" />
                                        <img src={star} alt="" />
                                        <img src={star} alt="" />
                                        <img src={star} alt="" />
                                      </div>
                              </div>
                              <div className='p-5 flex flex-row justify-between'>
                                   <div className='text-[#0D1B39] flex flex-row'>
                                        <p className='text-[#0D1B39] font-bold text-[16px]'>$</p>
                                        <p className='pt-1 font-bold'>299</p>
                                   </div>
                                   <div className='h-[40px] w-[40px] bg-[#091B3C] rounded-full p-[10px] mb-1'>
                                        <img src={plus} alt="" />
                                   </div>
                              </div>
                          </div>
                     </div>
                     <div className='flex flex-col'>
                          <div  className='w-[268px] h-[239px]'>
                               <div className='-mt-35'>
                                    <img src={chair2} alt="" />
                               </div>
                          </div>
                          <div className='w-[268px] h-[203px] bg-white rounded-xl gap-4'>
                              <div className='flex flex-col p-5 gap-2'>
                                       <p className='text-[#8d8d8d] text-[17px]'>chair</p>
                                       <p className='text-[22px] font-bold'>Anjay Chair</p>
                                      <div className='flex flex-row gap-1'>
                                        <img src={star} alt="" />
                                        <img src={star} alt="" />
                                        <img src={star} alt="" />
                                        <img src={star} alt="" />
                                        <img src={star} alt="" />
                                      </div>
                              </div>
                              <div className='p-5 flex flex-row justify-between'>
                                   <div className='text-[#0D1B39] flex flex-row'>
                                        <p className='text-[#0D1B39] font-bold text-[16px]'>$</p>
                                        <p className='pt-1 font-bold'>519</p>
                                   </div>
                                   <div className='h-[40px] w-[40px] bg-[#091B3C] rounded-full p-[10px] mb-1'>
                                        <img src={plus} alt="" />
                                   </div>
                              </div>
                          </div>
                     </div>
                     <div className='flex flex-col'>
                          <div  className='w-[268px] h-[239px]'>
                             <div className='-mt-10'>
                                   <img src= {chair3} alt="" className='w-[400px]'/>
                             </div>
                             <div className='flex flex-row justify-end'>
                                 <img src={rightarr} alt=""  className='-mt-19'/>
                             </div>
                          </div>
                          <div className='w-[268px] h-[203px] bg-white rounded-xl gap-4'>
                              <div className='flex flex-col p-5 gap-2'>
                                       <p className='text-[#8d8d8d] text-[17px]'>chair</p>
                                       <p className='text-[22px] font-bold'>Nyantuy Chair</p>
                                      <div className='flex flex-row gap-1'>
                                        <img src={star} alt="" />
                                        <img src={star} alt="" />
                                        <img src={star} alt="" />
                                        <img src={star} alt="" />
                                        <img src={star} alt="" />
                                      </div>
                              </div>
                              <div className='p-5 flex flex-row justify-between'>
                                   <div className='text-[#0D1B39] flex flex-row'>
                                        <p className='text-[#0D1B39] font-bold text-[16px]'>$</p>
                                        <p className='pt-1 font-bold'>921</p>
                                   </div>
                                   <div className='h-[40px] w-[40px] bg-[#091B3C] rounded-full p-[10px] mb-1'>
                                        <img src={plus} alt="" />
                                   </div>
                              </div>
                          </div>
                     </div>
                  </div>
                  <div className='pt-10 flex flex-row gap-2'>
                      <p className='text-amber-600'>View All</p>
                      <img src={rightarrow} alt="" />
                  </div>
             </div>
             <div className='pt-30 flex flex-row gap-20'>
                 <div className='shadow-xl rounded-r-[20px] rounded-b-[20px] w-[600px] h-[400px] bg-[url(/src/assets/room.png)] bg-cover bg-center bg-no-repeat relative'>
                     <div className='w-[495px] h-[422px] bg-[#040202] opacity-5 absolute -top-15 left-0 rounded-r-[30px]'></div>
                     <div className='w-[495px] h-[301px] bg-[#040202] opacity-5 absolute -top-0 -right-15 mt-20 mb-20 rounded-[30px]'></div>
                 </div>
                 <div className='flex flex-col gap-4 '>
                       <p className='pl-10 text-amber-600 text-[18px] font-normal tracking-[3.15px]'>EXPERIENCE</p>
                       <p className=' pl-10 w-[413px] h-[104px] text-3xl  text-[42px] font-bold font-[Gilroy] capitalize not-italic'> we provide you the best experience</p>
                       <p className='pl-10 w-[556px] h-[100px] font-normal text-[18px] text-sm/8 font-[Gilroy-Regular]'>You don't have to worry about the result because all of these interiors are made by people who are professionals in their fields with an elegant and lucurious style and with premium quality materials</p>
                       <div className='gap-2 flex flex-row pl-10'>
                              <div className='text-amber-600 font-[ Gilroy-Medium] text[14px] font-normal'>More Info</div>
                              <div><img src={rightarrow} alt="" /></div>
                       </div>
                 </div>
             </div>
             <div className='flex flex-row pl-[30px] justify-between pt-55'>
             <div className='flex flex-col gap-4 '>
                       <p className='pl-10 text-amber-600 text-[18px] font-normal tracking-[3.15px] capitalize'>Materials</p>
                       <p className=' pl-10 w-[413px] h-[156px] text-3xl  text-[42px] font-bold font-[Gilroy] capitalize not-italic'>Very serious materials for making furniture</p>
                       <p className='pl-10 w-[556px] h-[100px] font-normal text-[18px] text-sm/8 font-[Gilroy-Regular]'>Because panto was very serious about designing furniture for our environment, using a very expensive and famous capital but at a relatively low price</p>
                       <div className='gap-2 flex flex-row pl-10'>
                              <div className='text-amber-600 font-[ Gilroy-Medium] text[14px] font-normal'>More Info</div>
                              <div><img src={rightarrow} alt="" /></div>
                       </div>
                 </div>
                  <div className='flex flex-row gap-7'>
                      <div className='flex flex-col gap-7'>
                         <div> <img src={living1} alt="" className='shadow-xl -mt-20'/></div>
                          <div><img src={living2} alt="" className='shadow-xl  mt-8 h-[229px] w-[229px] '/></div>
                      </div>
                      <img src={dining} alt=""  className='shadow-xl '/>
                  </div>
             </div>
             <div className='pt-30 flex flex-col items-center gap-3'>
                   <p className='text-amber-600 text-[18px] font-normal font-[Gilroy-SemiBold] tracking-[3.15px]'>Testimonials</p>
                   <p className='text-[42px] font-bold capitalize'>Our Client Reviews</p>
                   <div className='flex flex-row gap-5'>
                         <div className='w-[370px] h-[476px] bg-[url(./assets/image1.png)] bg-cover bg-center bg-no-repeat relative'>
                              <div className='w-[334px] h-[239px] bg-[url(./assets/union.png)] bg-cover bg-center bg-no-repeat relative mt-[220px] ml-[15px]'>
                                 <div className='w-[66px] h-[66px] bg-white rounded-full p-[8px] ml-33'>
                                    <img src={person}alt="" className='rounded-full'/>
                                </div>
                                <div className='flex flex-col gap-1 items-center'>
                                   <p className=' text-[18px] font-bold'>Bang Upin</p>
                                   <p className='text-[12px] font-[Gilroy]'>Pedagang Asongan</p>
                                </div>
                                <div className='flex flex-col gap-2 items-center mt-5'>
                                      <p className=' text-[14px] font-normal text-center'>“Terimakasih banyak, kini ruanganku<br/> menjadi lebih mewah dan terlihat <br/>mahal“</p>
                                      <div className='flex flex-row gap-1'>
                                           <img src={star} alt="" />
                                           <img src={star} alt="" />
                                           <img src={star} alt="" />
                                           <img src={star} alt="" />
                                           <img src={star} alt="" className='opacity-50'/>
                                      </div>
                                </div>
                              </div>
                         </div>
                         <div className='w-[370px] h-[476px] bg-[url(./assets/image2.png)] bg-cover bg-center bg-no-repeat relative'>
                              <div className='w-[334px] h-[239px] bg-[url(./assets/union.png)] bg-cover bg-center bg-no-repeat relative mt-[220px] ml-[15px]'>
                                <div className='w-[66px] h-[66px] bg-white rounded-full p-[8px] ml-33'>
                                    <img src={person1}alt="" className='rounded-full'/>
                                </div>
                                <div className='flex flex-col gap-1 items-center'>
                                   <p className=' text-[18px] font-bold'>Bang Upin</p>
                                   <p className='text-[12px] font-[Gilroy]'>Pedagang Asongan</p>
                                </div>
                                <div className='flex flex-col gap-2 items-center mt-5'>
                                      <p className=' text-[14px] font-normal text-center'>“Terimakasih banyak, kini ruanganku<br/> menjadi lebih mewah dan terlihat <br/>mahal“</p>
                                      <div className='flex flex-row gap-1'>
                                           <img src={star} alt="" />
                                           <img src={star} alt="" />
                                           <img src={star} alt="" />
                                           <img src={star} alt="" />
                                           <img src={star} alt="" className='opacity-50'/>
                                      </div>
                                </div>
                              </div>
                         </div>
                         <div div className='w-[370px] h-[476px] bg-[url(./assets/image3.png)] bg-cover bg-center bg-no-repeat relative'>
                              <div className='w-[334px] h-[239px] bg-[url(./assets/union.png)] bg-cover bg-center bg-no-repeat relative mt-[220px] ml-[15px]'>
                              <div className='w-[66px] h-[66px] bg-white rounded-full p-[8px] ml-33'>
                                    <img src={person2}alt="" className='rounded-full'/>
                                </div>
                                <div className='flex flex-col gap-1 items-center'>
                                   <p className=' text-[18px] font-bold'>Bang Upin</p>
                                   <p className='text-[12px] font-[Gilroy]'>Pedagang Asongan</p>
                                </div>
                                <div className='flex flex-col gap-2 items-center mt-5'>
                                      <p className=' text-[14px] font-normal text-center'>“Terimakasih banyak, kini ruanganku<br/> menjadi lebih mewah dan terlihat <br/>mahal“</p>
                                      <div className='flex flex-row gap-1'>
                                           <img src={star} alt="" />
                                           <img src={star} alt="" />
                                           <img src={star} alt="" />
                                           <img src={star} alt="" />
                                           <img src={star} alt="" className='opacity-50'/>
                                      </div>
                                </div>
                              </div>
                              
                         </div>
                    </div> 
             </div>
             <div className='mt-[214px] bg-[#f7f7f7] h-[462px] w-full'>
                  <div className='pt-[118px] pl-[118px] pr-[118px] pb-[58px] flex flex-col gap-10'>
                       <div className='flex flex-row gap-60'>
                           <div className='gap-7 flex flex-col'>
                               <p className='text-[24px] font-bold'>Panto</p>
                               <p className='h[72px] w-[293px] text-[14px]  leading-[24px]'>The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.</p>
                           </div>
                           <div className='flex flex-col gap-5 text[14px]'>
                              <p className='text-amber-600'>Services</p>
                              <p className='w-[133px] h-[24px]'>Email Markating</p>
                              <p>Campaigns</p>
                              <p>Branding</p>
                           </div>
                           <div className='flex flex-col gap-5'>
                              <p className='text-amber-600'>Furniture</p>
                              <p>Chairs</p>
                              <p>Beds</p>
                              <p>All</p>
                           </div>
                           <div className='flex flex-col gap-5'>
                              <p className='text-amber-600'>Fallow Us</p>
                              <div className='flex flex-row gap-2'>
                                   <img src={facebook} alt="" />
                                   FaceBook
                              </div>
                              <div className='flex flex-row gap-2'>
                                   <img src={instagram} alt="" />
                                   Instagram
                              </div>
                              <div className='flex flex-row gap-2'>
                                   <img src={twitter} alt="" />
                                   Twitter
                              </div>
                           </div>
                       </div>
                       <div className='flex flex-row justify-between pt-20'>
                           <p>Copyright © 2025</p>
                           <div className='flex flex-row gap-5'>
                              <p>Terms & Conditions</p>
                              <p>Privacy Policy</p>
                           </div>

                       </div>
                  </div>
             </div>
        </div>
     </>
  )
}

export default App
