import { FilmIcon } from "lucide-react";
import { Email } from "./email";
import { MovieIcon } from "./MovieIcon";
import { Phone } from "./phone";

export const Footer = () => {
  return (
    <div className="w-full h-[308px] bg-[#4338CA] p-[20px]">
      <p className="flex text-[#FAFAFA] gap-[8px] items-center">
        <FilmIcon color={"#FAFAFA"} /> Movie Z
      </p>
      <p className="text-[#FAFAFA] mt-[10px]">
        © 2024 Movie Z. All Rights Reserved.
      </p>
      <div className="flex text-[#FAFAFA]">
        <div>
          <p className="mt-[25px]">Contact Information</p>
          <div className="flex items-center gap-[8px] mt-[10px]">
            <Email />
            <div>
              <h3 className=" m-0">Email:</h3>
              <p className=" m-0">support@movieZ.com</p>
            </div>
          </div>
          <div className="flex items-center gap-[8px] mt-[25px]">
            <Phone />
            <div>
              <h3 className=" m-0">Phone:</h3>
              <p className=" m-0">+976 (11) 123-4567</p>
            </div>
          </div>
        </div>
        <div className="mt-[25px] ml-[25px] ">
          <p className="m-[7px]">Follow us</p>
          <h3 className="m-[7px]">Facebook</h3>
          <h3 className="m-[7px]">Instagram</h3>
          <h3 className="m-[7px]">Twitter</h3>
          <h3 className="m-[7px]">Youtube</h3>
        </div>
      </div>
    </div>
  );
};
