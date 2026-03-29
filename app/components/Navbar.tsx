'use client'

import { CircleX, House, Menu  } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

const Navbar = () => {
    const [mobVisible, setMobVisible] = useState(false)

    const toggleButton = () => setMobVisible(!mobVisible)

    useEffect(() => {
        document.body.style.overflow = mobVisible ? "hidden" : "auto"

        return () => {
            document.body.style.overflow = "auto"
        }
    }, [mobVisible])

  return (
    <>
        <header>
            <div id="navDesktop" className="w-full h-full flex-1 flex justify-between items-center p-6 sticky bg-gray-50 drop-shadow-black border-b border-b-gray-300">
                <div className="flex items-center gap-5">
                    <House size={45} color="#fafafa"  className="bg-indigo-600 rounded-md p-2" />
                    <h2 className="text-xl md:text-2xl font-semibold capitalize">KD Properties</h2>
                </div>
                {
                    mobVisible ? <CircleX className="md:hidden" size={28} onClick={toggleButton} /> : <Menu className="md:hidden" size={28} onClick={toggleButton} /> 
                }
                
                <div className="md:flex items-center gap-10 hidden">
                    <ul className="flex justify-between items-center gap-10">
                        <li className="text-gray-500 font-semibold text-lg hover:text-indigo-600 duration-500 ease-in-out"><Link href={'/'}>Home</Link></li>
                        <li className="text-gray-500 font-semibold text-lg hover:text-indigo-600 duration-500 ease-in-out"><Link href={'/'}>About</Link></li>
                        <li className="text-gray-500 font-semibold text-lg hover:text-indigo-600 duration-500 ease-in-out"><Link href={'/'}>Properties</Link></li>
                    </ul>
                    <Link href={'/'} className="bg-black py-3 px-6 rounded-md text-white font-bold text-lg hover:bg-indigo-600 duration-500 ease-in-out">Contact</Link>
                </div>
            </div>
        </header>
        { mobVisible && 
            <div className="w-full h-screen flex flex-col items-center justify-center gap-10 bg-white z-40 overflow-y-hidden">
                <ul className="h-auto flex flex-col justify-center items-center gap-8">
                    <li className="text-gray-500 font-semibold text-lg hover:text-indigo-600 duration-500 ease-in-out"><Link href={'/'}>Home</Link></li>
                    <li className="text-gray-500 font-semibold text-lg hover:text-indigo-600 duration-500 ease-in-out"><Link href={'/'}>About</Link></li>
                    <li className="text-gray-500 font-semibold text-lg hover:text-indigo-600 duration-500 ease-in-out"><Link href={'/'}>Properties</Link></li>
                </ul>
                <Link href={'/'} className="bg-black py-3 px-6 rounded-md text-white font-bold text-lg hover:bg-indigo-600 duration-500 ease-in-out">Contact</Link>
            </div>
        }
    </>
  )
}

export default Navbar
