"use client";

import { useState } from "react";
import { X } from "lucide-react"; 

interface FilterModalProps {
  filterType: "type" | "language" | null;
  onClose: () => void;
}

export default function FilterModal({ filterType, onClose }: FilterModalProps) {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  if (!filterType) return null;

  const options =
    filterType === "type"
      ? ["All", "Sources", "Forks", "Archived", "Mirrors"]
      : ["All", "Java", "TypeScript", "HTML", "CSS"];


  const handleSelect = (option: string) => {
    setSelectedOptions((prev) =>
      prev.includes(option) ? prev.filter((o) => o !== option) : [...prev, option]
    );
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50  flex items-end sm:items-center justify-center">
      <div className="bg-white w-full sm:w-[400px] h-[95vh] sm:rounded-lg p-5 relative">
        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-24 h-2 bg-[#C4C4C4] rounded-lg"></div>

        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold  text-black">
            {filterType === "type" ? "Type" : "Language"}
          </h2>
          <button onClick={onClose} className="text-alertRed w-6 h-6 cursor-pointer">
            <X size={24} strokeWidth={2} /> 
          </button>
        </div>

        <ul className="space-y-2">
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
                className={`w-5 h-5 flex items-center justify-center border rounded-sm border-[#BFBFBF] ${
                  selectedOptions.includes(option) ? "bg-buttonSecondary" : "bg-white"
                }`}
              >
                {selectedOptions.includes(option) && (
                  <span className="text-white text-sm font-bold">✔</span>
                )}
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
    </div>
  );
}
