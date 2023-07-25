import { useState } from 'react'
import Topbar from './Pages/Layouts/Topbar'

function App() {
  const [count, setCount] = useState(0)



  return (
    <>
      <div className='px-5  sm:px-10 md:px-20 lg:px-20 xl:px-32 max-w-[1800px] w-full mx-auto'>

        <Topbar />
        <section className='flex flex-col-reverse sm:flex-col-reverse md:flex-row lg:flex-row xl:flex-row items-center justify-between py-20 gap-y-20'>
          <div className='flex flex-col gap-10'>
            <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-6xl font-extrabold'>Find & Hire Expert Freelancers</h1>
            <p className='text-black/60'>Work with the best freelance talent from around the world on our secure flexible and cost-effecive platform</p>
            <div className='flex gap-5'>
              <button className='bg-green-500 rounded-full px-10 py-3 text-white font-extrabold active:opacity-50 hover:bg-green-800 transition-all duration-500 whitespace-nowrap'>Contact us</button>
              <button className='bg-white border border-green-500 text-green-500 rounded-full px-10 py-3 font-extrabold active:opacity-50 hover:bg-gray-100 transition-all duration-500 whitespace-nowrap'>learn more</button>

            </div>
          </div>
          <img src="/assets/images/img-1.png" alt="" />
        </section>

        <section>
          <div className='flex flex-col gap-5 items-center'>
            <h3 className='text-4xl font-extrabold text-center'>what we do</h3>
            <p className='text-center'>Starting with a holistic assessment of your digital marketing, createive and <br /> development needs, we'll recommend flexible solutions</p>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 py-20'>
            <WhatweDoCard />
            <WhatweDoCard />
            <WhatweDoCard />
            <WhatweDoCard />
            <WhatweDoCard />
            <WhatweDoCard />


          </div>
        </section>
        <section>
          <div className='flex flex-col gap-5 items-center'>
            <h3 className='text-4xl font-extrabold text-center'>Chec our Satisfied <br/>Clients</h3>
            <div className='border-b-4 border-green-500 rounded-full w-[100px]'></div>
          </div>

          <div className='grid  gap-10 grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 py-20'>
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />

           


          </div>
        </section>
      </div>

      <footer className='px-5  sm:px-10 md:px-20 lg:px-20 xl:px-32 max-w-[1800px] w-full mx-auto bg-[#272f42]'>
        <div className='py-20 flex flex-col md:flex-row lg:flex-row xl:flex-row justify-between gap-20'>
          <div className='flex w-full md:w-1/2 lg:w-1/2 xl:w-1/2 flex-col gap-20'>
            <div className='flex flex-col gap-5'>
              <h1 className='text-white text-xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-3xl font-medium first-letter:uppercase'>we'd love to have you jouin us!</h1>
              <p className='text-white/20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eveniet facilis excepturi, non laboriosam, saepe corrupti recusandae quidem autem ratione neque dolorem id! Hic nesciunt, similique id tempora atque sint?</p>
            </div>
            <div className='flex flex-col gap-5'>
              <h6 className='uppercase text-white/60'>social media</h6>
              <ul className='flex gap-5'>
                <li><div className='w-10 h-10 bg-gray-100 rounded-full'></div></li>
                <li><div className='w-10 h-10 bg-gray-100 rounded-full'></div></li>
                <li><div className='w-10 h-10 bg-gray-100 rounded-full'></div></li>
                <li><div className='w-10 h-10 bg-gray-100 rounded-full'></div></li>

              </ul>
            </div>
          </div>

          <div className='w-full md:w-1/2 lg:w-1/2 xl:w-1/2 flex flex-col gap-5'>
            <p className='text-white'>
              Contact
            </p>
            <div className='flex flex-col gap-10'>
            <input type="text" placeholder='Enter your Name' className='w-full placeholder:text-white/20  bg-transparent border-b-[1px] pb-2 text-white border-white/30 outline-none' />
            <input type="text" placeholder='Enter your mail' className='w-full placeholder:text-white/20  bg-transparent border-b-[1px] pb-2 text-white border-white/30 outline-none' />
          
            <textarea type="text" placeholder='your message' rows={5} className='w-full placeholder:text-white/20 bg-transparent border-b-[1px] pb-2 text-white border-white/30 outline-none'></textarea>
            <button className='bg-green-500 w-fit rounded-full px-10 py-3 text-white font-extrabold active:opacity-50 hover:bg-green-800 transition-all duration-500'>Contact</button>

            </div>
          </div>
        </div>
      </footer>

    </>
  )
}

export default App

const WhatweDoCard = () => {
  return (
    <>
      <div className='flex flex-col items-center gap-5 bg-gray-50/60 hover:bg-white hover:shadow-xl py-10 px-14 transition-all duration-500'>
        <div className='w-10 h-10 bg-green-500 rounded-full'></div>
        <h5 className='text-xl font-bold text-center '>Programming & Development</h5>
        <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        <p href="#" className='first-letter:capitalize text-green-500 mt-5'>learn more</p>
      </div>
    </>
  )
}


const TestimonialCard =()=>{
  return(
    <>
    <div className='flex flex-col gap-5 p-10 border border-black/5 shadow-sm'>
      <p className='italic'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi cum illum possimus suscipit optio repudiandae minima, eum nihil, est deserunt architecto minus, nulla accusantium rerum officia laborum autem fugit ad.</p>
      <div className='flex gap-5 items-center'>
        <div className='w-10 h-10 bg-green-500 rounded-full'></div>
        <div >
          <p className='text-sm font-medium capitalize'>Cham</p>
          <p className='text-xs'>Product Engineer</p>
        </div>
      </div>
    </div>
    </>
  )
}