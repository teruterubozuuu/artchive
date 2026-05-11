import { menuItems } from '@/lib/constants'
import React from 'react'

export default function MobileSidebar() {

  return (
    <div className='md:hidden block fixed border bottom-0 w-full py-4'>
        <div className='flex  justify-around'>
        {menuItems.map((item)=>(
            <p key={item.id}>{item.icon}</p>
        ))}
        </div>
    </div>
  )
}
