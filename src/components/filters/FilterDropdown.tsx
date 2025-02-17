"use client";
import { useState } from "react";

interface FilterDropdownProps {
  filterType: "type" | "language";
  onClose: () => void;
}

export default function FilterDropdown({ filterType, onClose }: FilterDropdownProps) {
  const options =
    filterType === "type"
      ? ["All", "Sources", "Forks", "Archived", "Mirrors"]
      : ["All", "Java", "TypeScript", "HTML", "CSS"];

  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleSelect = (option: string) => {
    setSelectedOptions((prev) =>
      prev.includes(option) ? prev.filter((o) => o !== option) : [...prev, option]
    );
  };

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-20  z-40 fade-in" onClick={onClose}></div>

      <div className="absolute top-full  md:right-0 -mt-11 md:mt-2 w-64 bg-white shadow-lg rounded-lg border border-gray-200 z-50">
        <ul className="space-y-2 p-2">
          {options.map((option) => (
            <li
              key={option}
              onClick={() => handleSelect(option)}
              className={`flex items-center px-4 py-2 rounded-lg cursor-pointer transition ${
                selectedOptions.includes(option)
                  ? "bg-gradient-to-r from-[#0056A6]/5 to-[#0587FF]/5"
                  : "hover:bg-gradient-to-r hover:from-[#0056A6]/5 hover:to-[#0587FF]/5"
              }`}
            >
              <div
                className={`w-5 h-5 flex items-center justify-center border border-[#BFBFBF] ${
                  selectedOptions.includes(option) ? "bg-buttonSecondary" : "bg-white"
                }`}
              >
                {selectedOptions.includes(option) && <span className="text-white text-sm font-bold">✔</span>}
              </div>
              <span
                className={`ml-3 text-base font-normal ${
                  selectedOptions.includes(option) ? "text-buttonSecondary" : "text-textPrimary"
                }`}
              >
                {option}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
