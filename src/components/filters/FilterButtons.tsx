import { ChevronDown } from "lucide-react";

interface FilterButtonsProps {
  onTypeClick: () => void;
  onLanguageClick: () => void;
  className?: string;
  size?: "mobile" | "tablet" | "desktop";
}

export default function FilterButtons({
  onTypeClick,
  onLanguageClick,
  className = "",
  size = "tablet", 
}: FilterButtonsProps) {
  
  const buttonSizes = {
    mobile: {
      type: "w-btn-small h-[32px] text-sm",
      language: "w-btn-large h-[32px] text-sm ml-2",
      iconSize: 16,
    },
    tablet: {
      type: "w-btn-small h-8 text-sm",
      language: "w-btn-large h-8 text-sm",
      iconSize: 16,
    },
    desktop: {
      type: "w-105 h-10 text-lg",
      language: "w-145 h-10 text-lg",
      iconSize: 24,
    },
  };

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <button
        onClick={onTypeClick}
        className={`${buttonSizes[size].type} bg-gradient-to-r from-buttonPrimary to-buttonSecondary text-white rounded-full px-2 flex items-center gap-2`}
      >
        <ChevronDown size={buttonSizes[size].iconSize} /> Type
      </button>
      <button
        onClick={onLanguageClick}
        className={`${buttonSizes[size].language} bg-gradient-to-r from-buttonPrimary to-buttonSecondary text-white px-2 rounded-full flex items-center gap-2`}
      >
        <ChevronDown size={buttonSizes[size].iconSize} /> Language
      </button>
    </div>
  );
}
