'use client'
import Btn from '@/components/Btn'
import Image from 'next/image'
import { useEffect } from 'react'
import errImg from "@/../public/warning.png"

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
  return (
    <div className='h-screen flex flex-col gap-12 justify-center items-center md:px-0 px-5'>
      <Image src={errImg} alt='error image' width={200} height={200}></Image>
      <h2 className='md:text-5xl text-4xl capitalize text-center'>Something went wrong!</h2>
      <div className='flex items-center gap-6'>
        <button
          className='px-6 py-3 bg-primaryColor text-white capitalize border border-[#55372F] hover:bg-transparent hover:text-primaryColor duration-200 text-center'
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
        >
          Try again
        </button>
        <Btn text="Back to home" link='/'></Btn>
      </div>

    </div>
  )
}