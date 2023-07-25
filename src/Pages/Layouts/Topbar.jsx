import React from 'react'

function Topbar() {
  const links = [
    {
      id: 1,
      name: 'services',
      path: ''
    },
    {
      id: 1,
      name: 'about us',
      path: ''
    },
    {
      id: 1,
      name: 'blog',
      path: ''
    },
  ]

  return (
    <>
    
     <header className=' py-5 select-none sticky top-0 bg-white/90 backdrop-blur-sm'>
          <div className='flex justify-between items-center'>
            <h1 className='text-xl font-extrabold'>Logo .</h1>
            <ul className='hidden sm:hidden lg:flex md:flex xl:flex  gap-[20px] '>
              {links.map((list, index) =>
                <li key={index}><p className='capitalize cursor-pointer active:opacity-50'>
                  {list.name}
                </p></li>
              )}
            </ul>
            <div className='flex gap-[20px] items-center'>
              <p className='uppercase'>En</p>
              <button className='bg-green-500 rounded-full px-10 py-3 text-white font-extrabold active:opacity-50 hover:bg-green-800 transition-all duration-500'>Contact</button>
            </div>

          </div>
        </header>
    </>
  )
}

export default Topbar