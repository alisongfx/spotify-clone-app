import React from 'react'
import { ChevronLeft, ChevronRight, Play } from 'lucide-react'
import Image from 'next/image'

const Main = () => {
    return (
        <main className="flex-1 p-6">
          <div className='flex items-center gap-4'>
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronLeft />
            </button>
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronRight />
            </button>
          </div>

          <h1 className='font-semibold text-3xl mt-10'>Good Afternoon</h1>

          <div className="grid grid-cols-3 gap-4 mt-4">
            <a href='#' className='bg-white/5 flex group items-center gap-4 rounded overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src="/album.jpg" width={104} height={104} alt="album rock" />
              <strong>Rock Music</strong>
              <button className='w-12 h-12 flex items-center pl-1 justify-center rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href='#' className='bg-white/5 flex group items-center gap-4 rounded overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src="/album.jpg" width={104} height={104} alt="album rock" />
              <strong>Rock Music</strong>
              <button className='w-12 h-12 flex items-center pl-1 justify-center rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>            <a href='#' className='bg-white/5 flex group items-center gap-4 rounded overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src="/album.jpg" width={104} height={104} alt="album rock" />
              <strong>Rock Music</strong>
              <button className='w-12 h-12 flex items-center pl-1 justify-center rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href='#' className='bg-white/5 flex group items-center gap-4 rounded overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src="/album.jpg" width={104} height={104} alt="album rock" />
              <strong>Rock Music</strong>
              <button className='w-12 h-12 flex items-center pl-1 justify-center rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>            <a href='#' className='bg-white/5 flex group items-center gap-4 rounded overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src="/album.jpg" width={104} height={104} alt="album rock" />
              <strong>Rock Music</strong>
              <button className='w-12 h-12 flex items-center pl-1 justify-center rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>            <a href='#' className='bg-white/5 flex group items-center gap-4 rounded overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src="/album.jpg" width={104} height={104} alt="album rock" />
              <strong>Rock Music</strong>
              <button className='w-12 h-12 flex items-center pl-1 justify-center rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
          </div>

          <h2 className='font-semibold text-2xl mt-10'>Made for Alison Savian</h2>

          <div className='grid grid-cols-8 gap-4 mt-4'>
            <a href='#' className='bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10'>
              <Image src="/album.jpg" className="w-full" width={120} height={104} alt="album rock" />
              <strong className='font-semibold'> Daily Mix 1</strong>
              <span className='text-sm text-zinc-400'>Rock Balboa</span>
            </a>
            <a href='#' className='bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10'>
              <Image src="/album.jpg" className="w-full" width={120} height={104} alt="album rock" />
              <strong className='font-semibold'> Daily Mix 1</strong>
              <span className='text-sm text-zinc-400'>Rock Balboa</span>
            </a>
            <a href='#' className='bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10'>
              <Image src="/album.jpg" className="w-full" width={120} height={104} alt="album rock" />
              <strong className='font-semibold'> Daily Mix 1</strong>
              <span className='text-sm text-zinc-400'>Rock Balboa</span>
            </a>
            <a href='#' className='bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10'>
              <Image src="/album.jpg" className="w-full" width={120} height={104} alt="album rock" />
              <strong className='font-semibold'> Daily Mix 1</strong>
              <span className='text-sm text-zinc-400'>Rock Balboa</span>
            </a>
            <a href='#' className='bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10'>
              <Image src="/album.jpg" className="w-full" width={120} height={104} alt="album rock" />
              <strong className='font-semibold'> Daily Mix 1</strong>
              <span className='text-sm text-zinc-400'>Rock Balboa</span>
            </a>
          </div>

        </main>
    )
}

export default Main