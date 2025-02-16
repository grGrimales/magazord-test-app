import { Search } from "lucide-react";

interface SearchInputProps {
  placeholder?: string;
  onBlur?: () => void;
  className?: string;
  size?: "small" | "medium" | "large"; 
}

export default function SearchInput({ placeholder = "Search Here", onBlur, className = "", size = "medium" }: SearchInputProps) {
  const sizeClasses = {
    small: {
      icon: "text-textHighlight ml-2",
      input: "text-sm",
    },
    medium: {
      icon: "text-textSecondary text-2xl",
      input: "text-lg",
    },
    large: {
      icon: "text-textSecondary text-2xl",
      input: "text-lg",
    },
  };

  return (
    <div className={`border-b-[#F4F4F4] rounded-lg shadow-sm flex items-center w-full px-3 py-2 ${className}`}>
      <Search size={24} className={sizeClasses[size].icon} />
      <input
        type="text"
        placeholder={placeholder}
        className={`w-full bg-transparent outline-none px-2 text-textSecondary ${sizeClasses[size].input}`}
        onBlur={onBlur}
      />
    </div>
  );
}
