import React from 'react'
import Navbar from './Navbar'
import Image from 'next/image'
import {Heart,User,ShoppingBag,Search} from 'lucide-react'


const Header = () => {
  return (
    <div className='flex justify-between items-center p-4 shadow-md shadow-black-700'>
        <Navbar/>
        <div className="border border-red-500">
            <Image src="/images/raimentfest_logo.png" alt="RaimentFest Logo" width={220} height={64} />
        </div>
        <div>
            <Search className='inline-block mr-4'/>
            <Heart className='inline-block mr-4'/>
            <User className='inline-block mr-4'/>
            <ShoppingBag className='inline-block'/>
        </div>
    </div>
  )
}

export default Header