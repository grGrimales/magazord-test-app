"use client";

import { useState, useEffect, useRef } from "react";
import { Search } from "lucide-react";
import FilterModal from "./FilterModal";
import FilterDropdown from "./FilterDropdown";
import FilterButtons from "./FilterButtons";
import SearchInput from "./SearchInput";

export default function Filters() {
  const [filterType, setFilterType] = useState<"type" | "language" | null>(null);
  const [showSearch, setShowSearch] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 640);
      setIsTablet(width >= 640 && width < 1024);
      setIsDesktop(width >= 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {isMobile ? (
        <div className="bg-background rounded-lg p-2 mt-4 flex items-center w-full">
          {showSearch ? (
            <SearchInput 
                placeholder="Type Something Here..."
                onBlur={() => setShowSearch(false)} 
                className="bg-background"
                size="small" />
          ) : (
            <div className="flex items-center w-full bg-background">
              <FilterButtons
                onTypeClick={() => setFilterType("type")}
                onLanguageClick={() => setFilterType("language")}
                size="mobile"
              />
              <button onClick={() => setShowSearch(true)} className="p-2 ml-auto text-textHighlight">
                <Search size={24} />
              </button>
            </div>
          )}
        </div>
      ) : isTablet ? (
        <div className="flex flex-col gap-2 mt-7">
          <FilterButtons
            onTypeClick={() => setFilterType("type")}
            onLanguageClick={() => setFilterType("language")}
            size="tablet"
          />
          <SearchInput  size="medium" />
        </div>
      ) : (
        <div className="flex flex-row justify-between items-center gap-4 mt-12">
          <SearchInput className="mt-4"  size="large" />
          <FilterButtons
            onTypeClick={() => setFilterType("type")}
            onLanguageClick={() => setFilterType("language")}
            size="desktop"
          />
        </div>
      )}

      {/* Modal  Mobile */}
      {filterType && isMobile && <FilterModal filterType={filterType} onClose={() => setFilterType(null)} />}

      {/* Dropdown - Tablet e Desktop */}
      {filterType && (isTablet || isDesktop) && (
        <div ref={dropdownRef} className="relative">
          <FilterDropdown filterType={filterType} onClose={() => setFilterType(null)} />
        </div>
      )}
    </>
  );
}
