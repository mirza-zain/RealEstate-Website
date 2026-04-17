import { url } from "inspector";
import Image from "next/image";

export default function FeaturedListing() {
  return (
    <div className="pt-24 px-6">
        <div className="flex justify-between items-center">
            <h2 className="text-3xl font-semibold">Featured Listings</h2>
            <div className="bg-gray-200 px-14 py-4 rounded-xl shadow-2xl">  
                <ul className="flex justify-evenly items-center gap-15 cursor-pointer">
                    <li className="text-base font-semibold text-slate-600 hover:text-sky-600 duration-300 ease-in-out">All</li>
                    <li className="text-base font-semibold text-slate-600 hover:text-sky-600 duration-300 ease-in-out">Sale</li>
                    <li className="text-base font-semibold text-slate-600 hover:text-sky-600 duration-300 ease-in-out">Rent</li>
                </ul>
            </div>
        </div>
        <div>
            <div>
                <img src='https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=1200' alt="" />
            </div>
        </div>
    </div>
  )
}
