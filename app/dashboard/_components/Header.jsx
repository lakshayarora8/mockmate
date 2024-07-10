import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <div className='flex p-4 items-center justify-between bg-secondary shadow-sm'>
        <Image src={'./logo.svg'} width={150} height={100} alt='logo' />
        <ul className='flex gap-6' >
            <li className='hover:text-primary hover:font-bold transition-all cursor-pointer'>Dashboard</li>
            <li className='hover:text-primary hover:font-bold transition-all cursor-pointer'>Questions</li>
            <li className='hover:text-primary hover:font-bold transition-all cursor-pointer'>Upgrade</li>
            <li className='hover:text-primary hover:font-bold transition-all cursor-pointer'>How it works?</li>
        </ul>
        <UserButton/>
    </div>
  )
}

export default Header
