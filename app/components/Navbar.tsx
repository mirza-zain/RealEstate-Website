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
            <div id="navDesktop" className="w-full h-1/6 flex-1 flex justify-between items-center p-5 sticky bg-slate-50 drop-shadow-black border-b border-b-slate-300">
                <div className="flex items-center gap-5">
                    <House size={45} color="#fafafa"  className="bg-sky-600 rounded-lg p-2" />
                    <h2 className="text-xl md:text-2xl font-bold capitalize">KD Properties</h2>
                </div>
                {
                    mobVisible ? <CircleX className="md:hidden" size={28} onClick={toggleButton} /> : <Menu className="md:hidden" size={28} onClick={toggleButton} /> 
                }
                
                <div className="md:flex items-center gap-10 hidden">
                    <ul className="flex justify-between items-center gap-10">
                        <li className="text-slate-500 font-semibold text-base hover:text-sky-600 duration-500 ease-in-out"><Link href={'/'}>Home</Link></li>
                        <li className="text-slate-500 font-semibold text-base hover:text-sky-600 duration-500 ease-in-out"><Link href={'/'}>About</Link></li>
                        <li className="text-slate-500 font-semibold text-base hover:text-sky-600 duration-500 ease-in-out"><Link href={'/'}>Properties</Link></li>
                    </ul>
                    <Link href={'/'} className="bg-black py-3 px-6 rounded-md text-white font-bold text-base hover:bg-sky-600 duration-500 ease-in-out">Contact</Link>
                </div>
            </div>
        { mobVisible && 
            <div className="w-full h-screen flex flex-col items-center justify-center gap-8 bg-white z-40 overflow-y-hidden">
                <ul className="h-auto flex flex-col justify-center items-center gap-8">
                    <li className="text-slate-500 font-semibold text-base hover:text-sky-600 duration-500 ease-in-out"><Link href={'/'}>Home</Link></li>
                    <li className="text-slate-500 font-semibold text-base hover:text-sky-600 duration-500 ease-in-out"><Link href={'/'}>About</Link></li>
                    <li className="text-slate-500 font-semibold text-base hover:text-sky-600 duration-500 ease-in-out"><Link href={'/'}>Properties</Link></li>
                </ul>
                <Link href={'/'} className="bg-black py-3 px-6 rounded-md text-white font-bold text-base hover:bg-sky-600 duration-500 ease-in-out">Contact</Link>
            </div>
        }
        </header>
    </>
  )
}

export default Navbar
