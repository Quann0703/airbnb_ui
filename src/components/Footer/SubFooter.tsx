"use client";

import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { DotIcon, LanguageIcon } from "../Icon";

const SubFooter = () => {
  return (
    <>
      <div className="w-[1280px] h-px bg-gray-200" />

      <div className="flex justify-between items-center self-stretch">
        <div className="flex items-center gap-2">
          <div className="text-gray-600 font-inter text-sm leading-5">
            © 2024 Airbnb, Inc.
          </div>
          <DotIcon />
          <div className="text-gray-600 font-inter text-sm leading-5">
            Privacy
          </div>
          <DotIcon />

          <div className="text-gray-600 font-inter text-sm leading-5">
            Terms
          </div>
          <DotIcon />

          <div className="text-gray-600 font-inter text-sm leading-5">
            Sitemap
          </div>
        </div>
        <div className="flex items-start gap-10">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <LanguageIcon />
              <div className="text-gray-600 font-inter text-sm font-medium leading-5 underline">
                English (US)
              </div>
            </div>
            <div className="flex items-center gap-1">
              đ
              <div className="text-gray-600 font-inter text-sm font-medium leading-5 underline">
                VND
              </div>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <FaFacebook size={20} />
            <FaTwitter size={20} />
            <FaInstagram size={20} />
          </div>
        </div>
      </div>
    </>
  );
};

export default SubFooter;
