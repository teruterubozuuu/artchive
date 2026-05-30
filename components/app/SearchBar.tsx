import React from 'react'
import { Input } from '../ui/input'
import { Search } from 'lucide-react'

export default function SearchBar() {
  return (
    <div className='relative'>
        <Input type="search" placeholder='Search...' className='w-full pl-9 bg-mauve-200 min-h-10'/>
        <Search className='w-4 absolute top-5 -translate-y-1/2 left-3 text-mauve-500'/>
    </div>
  )
}
