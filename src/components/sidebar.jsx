import { HomeIcon, TruckIcon, MapIcon, MessageSquareIcon, BarChartIcon } from "lucide-react";

const Sidebar = () => {
  return (
    
   
     <div className="fixed top-0 left-0 h-screen w-64 bg-white shadow-lg flex flex-col">
      {/* Logo */}
      <div className="flex items-center gap-2 px-6 py-4">
        <img src="src/components/logo.png" alt="Logo" className="w-8 md:w-10 lg:w-12 h-auto object-fit rounded-lg" /> 
        <h1 className="text-xl font-bold">ShipSync</h1>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-4 mt-6 px-4">
        <a
          href="#"
          className="flex items-center gap-3 bg-orange-500 text-white rounded-full px-4 py-2 font-medium"
        >
          <HomeIcon size={20} /> Dashboard
        </a>
        <a href="#" className="flex items-center gap-3 text-gray-700 hover:text-orange-500">
          <TruckIcon size={20} /> Orders
        </a>
        <a href="#" className="flex items-center gap-3 text-gray-700 hover:text-orange-500">
          <TruckIcon size={20} /> Shipments
        </a>
        <a href="#" className="flex items-center gap-3 text-gray-700 hover:text-orange-500">
          <MapIcon size={20} /> Map Overview
        </a>
        <a href="#" className="flex items-center gap-3 text-gray-700 hover:text-orange-500 relative">
          <MessageSquareIcon size={20} /> Messages
          <span className="absolute right-[-10px] top-[4px] bg-red-500 text-white text-xs rounded-full px-2">
            7
          </span>
        </a>
        <a href="#" className="flex items-center gap-3 text-gray-700 hover:text-orange-500">
          <BarChartIcon size={20} /> Analytics
        </a>
      </nav>
    </div>
  );
};

export default Sidebar;
