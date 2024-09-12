"use client";

import Image from "next/image";
import { NextArrowIcon, PrevArrowIcon } from "./Icon";

interface CustomArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

export const NextArrow: React.FC<CustomArrowProps> = ({
  className,
  style,
  onClick,
}) => {
  return (
    <div className={className} style={{ ...style }} onClick={onClick}>
      <div className="flex justify-center items-center p-1 w-6 h-6 rounded-full border border-[#b0b0b0] bg-white">
        <NextArrowIcon />
      </div>
    </div>
  );
};

export const PrevArrow: React.FC<CustomArrowProps> = ({
  className,
  style,
  onClick,
}) => {
  return (
    <div className={className} style={{ ...style }} onClick={onClick}>
      <div className="flex justify-center items-center p-1 w-6 h-6 rounded-full border border-[#b0b0b0] bg-white">
        <PrevArrowIcon />
      </div>
    </div>
  );
};
