import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav className = "font-bold">
            <ul className = "flex gap-4">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/women">Women</Link></li>
                <li><Link href="/men">Men</Link></li>
                <li><Link href="/explore">Explore</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar