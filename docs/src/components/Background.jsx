import React from 'react';

export default function background() {
  return (
    <>
    <div className='w-full h-screen z-[2] fixed'>
    <div className='absolute top-[5%] flex justify-center w-full text-[20px] font-bold text-zinc-400'> Documents</div>

      <h1 className='top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] absolute text-[22vw] text-zinc-700 tracking-tighter leading-none font-semibold'>Docs</h1>
      </div>
      </>
  )
}
