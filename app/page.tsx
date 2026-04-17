import { Search } from "lucide-react";
import FeaturedListing from "./pages/FeaturedListing";

export default function Home() {
  return (
    <>
    <div className="pt-16 pb-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
            Find your next <span className="text-sky-600 capitalize">perfect home</span>
          </h1>
          <p className="text-slate-500 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Browse through our exclusive listings of high-quality homes and apartments in prime locations.
          </p>

          <div className="relative max-w-2xl mx-auto group">
            <div className="absolute inset-y-0 left-5 flex items-center">
              <Search className="text-slate-400 group-focus-within:text-sky-500 transition-colors" size={20} />
            </div>
            <input 
              type="text" 
              placeholder="Search city, neighborhood, or street..." 
              className="w-full pl-14 pr-6 py-5 rounded-3xl bg-white border border-slate-200 shadow-xl shadow-slate-100 focus:ring-2 focus:ring-sky-100 focus:border-sky-400 transition-all outline-none text-slate-800"
              // value={}
              // onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>
      <FeaturedListing />
    </>
  );
}
