"use client";
 
import { FaSearch } from "react-icons/fa";
import { useState} from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
 
export const ModernSearchBar = () => {
  const [inputValue, setInputValue] = useState("");
 
  return (
    <>
      <div className="flex items-center p-1 rounded-full  max-w-[30rem] w-full border border-primary/10 border-opacity-10 gap-">
        <Input
          className="rounded-full py-3 w-full border-0 shadow-none focus-visible:ring-0"
          placeholder="Search"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button
          variant="secondary"
          className="border bg-primary text-primary-foreground  border-opacity-5 rounded-full px-2.5 py-3"
        >
          <FaSearch size={19} />
        </Button>
      </div>
    </>
  );
};