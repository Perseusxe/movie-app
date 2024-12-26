import { FilmIcon } from "lucide-react";
import { SearchIcon } from "lucide-react";
import { MoonIcon } from "lucide-react";

export const Header = () => {
  return (
    <header className=" bg-[#09090B] flex p-[10px] w-full h-[59px] items-center justify-around">
        <div className="flex items-center">
        <FilmIcon className="stroke-indigo-700 outline-[0px]" />
        <p className="text-[#4338CA] font-[700 text-[16px] ml-[7px]">Movie Z</p>
        </div>
      <div className="flex items-center">
        <div className="w-[36px] h-[36px] border-[1px] rounded-[10px] border-[#27272A] justify-center items-center flex ml-[140px]">
          <SearchIcon className="stroke-[#FAFAFA] w-[17px] h-[17px]" />
        </div>
        <div className="w-[36px] h-[36px] border-[1px] rounded-[10px] border-[#27272A] justify-center items-center flex ml-[10px]">
          <MoonIcon className="stroke-[#FAFAFA] w-[17px] h-[17px]" />
        </div>
      </div>
    </header>
  );
};
