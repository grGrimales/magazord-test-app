
"use client";

import { useState } from "react";
import { Building, MapPin, Link, Camera, ChevronDown, ChevronUp, Smile } from "lucide-react";
import Image from "next/image";

export default function UserProfile() {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <div className="p-6 flex flex-col items-center w-full  sm:w-64 fade-in" >
      <div className="relative sm:w-104 sm:h-104 lg:w-150 lg:h-150">
        <Image
          src="/images/imageProfile.png"
          alt="User Avatar"
          width={104}
          height={104}
          className="rounded-full border-4 border-white shadow-md  sm:w-104 sm:h-104 lg:w-150 lg:h-150"
        />
        <div className="absolute bottom-0 right-0 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md">
         <span className="text-lg">😎</span> 
        </div>
      </div>

      <div className="flex flex-col w-64 mt-3 p-4">
        <h2 className="text-xl font-semibold text-textPrimary text-center ">
          Gabriel Cordeiro
        </h2>
        <p className="text-textSecondary text-sm text-left">
          Head development team Front-End
        </p>
        <p className="text-textSecondary text-sm  ml-8">
          Magazord - Tagged (#BZ)
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
          <div className="bg-background  shadow-sm  flex flex-col gap-4 text-textHighlight rounded-2xl sm:bg-transparent sm:p-0 sm:items-start sm:w-fit fade-in">
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

