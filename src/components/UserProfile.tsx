
"use client";

import { useState } from "react";
import { Building, MapPin, Link, Camera, ChevronDown, ChevronUp, Smile } from "lucide-react";
import Image from "next/image";

export default function UserProfile() {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <div className="p-6 flex flex-col items-center w-full  sm:w-64" >
      <div className="relative sm:w-104 sm:h-104 lg:w-150 lg:h-150">
        <Image
          src="/images/imageProfile.png"
          alt="User Avatar"
          width={104} 
          height={104}
          className="rounded-full border-4 border-white shadow-md  sm:w-104 sm:h-104 lg:w-150 lg:h-150"
        />
        <div className="absolute bottom-0 right-0 bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-md">
          {/* <Smile size={18} className="text-yellow-500" /> */}
          <span className="text-lg">😎</span>
        </div>
      </div>

      <div className="flex flex-col items-center  w-full mt-3">
        <h2 className="text-xl font-semibold text-textPrimary text-center sm:text-left">
          Gabriel Cordeiro
        </h2>
        <p className="text-textSecondary text-sm text-center">
          Head Development Team Front-End
        </p>

        <button
          className="text-textHighlight text-sm mt-2 sm:hidden flex flex-col items-center"
          onClick={() => setShowLinks(!showLinks)}
        >
          Informações Adicionais
          <span className="mt-1 flex justify-center">
            {showLinks ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
          </span>
        </button>

        <div className={`mt-4 text-sm ${showLinks ? "block" : "hidden"} sm:block w-full`}>
          <div className="bg-background  shadow-sm  flex flex-col gap-4 text-textHighlight rounded-2xl sm:bg-transparent sm:p-0 sm:items-start sm:w-fit">
            <a href="#" className="flex items-center gap-2 hover:underline  hover:text-textHover transition-colors">
              <Building size={16} /> Magazord - plataforma
            </a>
            <a href="#" className="flex items-center gap-2 hover:underline  hover:text-textHover transition-colors">
              <MapPin size={16} /> Rio do Sul - SC
            </a>
            <a href="#" className="flex items-center gap-2 hover:underline  hover:text-textHover transition-colors">
              <Link size={16} /> Cordas.hub.uok
            </a>
            <a href="#" className="flex items-center gap-2 hover:underline  hover:text-textHover transition-colors">
              <Camera size={16} /> Gabriel.s.cordeiro
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

