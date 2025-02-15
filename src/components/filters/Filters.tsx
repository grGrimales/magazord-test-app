
"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronDown, Search } from "lucide-react";
import FilterModal from "./FilterModal";
import FilterDropdown from "./FilterDropdown";

export default function Filters() {
  const [filterType, setFilterType] = useState<"type" | "language" | null>(null);
  const [showSearch, setShowSearch] = useState(false); 
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isTabletOrDesktop, setIsTabletOrDesktop] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
      setIsTablet(window.innerWidth >= 640 && window.innerWidth < 1024);
      setIsDesktop(window.innerWidth >= 1024);
      setIsTabletOrDesktop(window.innerWidth >= 640);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {isMobile ? (
        // ✅ Mobile: Botones dentro de la caja de búsqueda
        <div className="bg-background rounded-lg p-2  mt-4 flex items-center w-full">
          {showSearch ? (
            // 🟢 SOLO la barra de búsqueda cuando se hace clic en el botón de búsqueda
            <div className="flex items-center w-full bg-background">
              <Search size={20} className="text-textHighlight ml-2" />
              <input
                type="text"
                placeholder="Type Something Here..."
                className="w-full bg-transparent outline-none px-2 text-textSecondary"
                onBlur={() => setShowSearch(false)} 
              />
            </div>
          ) : (
            // 🔵 Botones de filtro dentro de la caja de búsqueda
            <div className="flex items-center w-full bg-background">
              <button
                onClick={() => setFilterType("type")}
                className="w-btn-small h-[32px] text-sm text-white py-2 px-3 rounded-full bg-gradient-to-r from-buttonPrimary to-buttonSecondary flex items-center justify-start gap-2"
              >
                <ChevronDown size={16}  /> Type
              </button>

              <button
                onClick={() => setFilterType("language")}
                className="w-btn-large h-[32px] text-sm text-white py-2 px-3 rounded-full bg-gradient-to-r from-buttonPrimary to-buttonSecondary flex items-center justify-start gap-2 ml-2"
              >
                <ChevronDown size={16}  /> Language
              </button>

              <button onClick={() => setShowSearch(true)} className="p-2 ml-auto text-textHighlight">
                <Search size={24} />
              </button>
            </div>
          )}
        </div>
      ) : isTablet ? (
        // ✅ Tablet: Botones arriba y barra de búsqueda abajo
        <div className="flex flex-col gap-2 mt-7">
          {/* 🔹 Botones alineados en fila */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setFilterType("type")}
              className="w-btn-small h-8 text-sm  bg-gradient-to-r  from-buttonPrimary to-buttonSecondary text-textWhite rounded-full px-2 flex items-center gap-2"
            >
              <ChevronDown size={16}  className="text-textWhite text-base"/> Type
            </button>
            <button
              onClick={() => setFilterType("language")}
              className="w-btn-large h-8 text-sm  bg-gradient-to-r from-buttonPrimary to-buttonSecondary text-textWhite px-2 rounded-full flex items-center gap-2"
            >
              <ChevronDown size={16}  className="text-textWhite text-base"/> Language
            </button>
          </div>

          {/* 🔹 Caja de búsqueda alineada debajo */}
          <div className="border-b-[#F4F4F4] rounded-lg shadow-sm flex items-center w-full px-3 py-2 mt-4">
            <Search size={24} className="text-textSecondary text-2xl" />
            <input
              type="text"
              placeholder="Search Here"
              className="w-full bg-transparent outline-none px-2 text-lg text-textSecondary"
            />
          </div>
        </div>
      ) : (
        // ✅ Desktop: Botones a la derecha y búsqueda a la izquierda
        <div className="flex flex-row justify-between items-center gap-4 mt-12">
          {/* 🔹 Caja de búsqueda a la izquierda */}
          <div className="border-b-[#F4F4F4] rounded-lg shadow-sm flex items-center w-full px-3 py-2 mt-4">
            <Search size={24} className="text-textSecondary text-2xl" />
            <input
              type="text"
              placeholder="Search Here"
              className="w-full bg-transparent outline-none px-2 text-lg text-textSecondary"
            />
          </div>

          {/* 🔹 Botones a la derecha */}
          <div className="flex items-center gap-4">
          <button
              onClick={() => setFilterType("type")}
              className="w-105 h-10 text-lg  bg-gradient-to-r  from-buttonPrimary to-buttonSecondary text-textWhite rounded-full px-2 flex items-center gap-2"
            >
              <ChevronDown size={24}  className="text-textWhite"/> Type
            </button>
            <button
              onClick={() => setFilterType("language")}
              className="w-145 h-10 text-lg  bg-gradient-to-r from-buttonPrimary to-buttonSecondary text-textWhite px-2 rounded-full flex items-center gap-2"
            >
              <ChevronDown size={24}  className="text-textWhite"/> Language
            </button>
          </div>
        </div>
      )}


      {filterType && isMobile && (
        <FilterModal filterType={filterType} onClose={() => setFilterType(null)} />
      )}

      {filterType && isTabletOrDesktop && (
        <div ref={dropdownRef} className="relative">
          <FilterDropdown filterType={filterType} onClose={() => setFilterType(null)} />
        </div>
      )}
    </>
  );
}
