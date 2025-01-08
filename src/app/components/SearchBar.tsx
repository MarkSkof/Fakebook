import { GoSearch } from "react-icons/go";
import React from "react";

interface SearchBarProps {
  placeHolder: string; 
  searchQuery: string; 
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void; 
}

export default function SearchBar({
  placeHolder,
  searchQuery,
  onSearchChange,
}: SearchBarProps) {
  return (
    <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
      <div>
        <span>
          <GoSearch />
        </span>
      </div>
      <input
        type="text"
        placeholder={placeHolder}
        value={searchQuery}
        onChange={onSearchChange}
        className="ml-2 p-2 rounded-lg border border-gray-300 flex-1"
        style={{ width: "100%" }}
      />
    </div>
  );
}
