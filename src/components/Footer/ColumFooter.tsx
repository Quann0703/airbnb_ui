"use client";

interface row {
  title: string;
  link?: string;
}

interface ColumFooterProps {
  rows?: row[];
  title: string;
}
const ColumFooter: React.FC<ColumFooterProps> = ({ rows, title }) => {
  return (
    <div className="flex flex-col items-start gap-4 flex-[1_0_0]">
      <div className="self-stretch text-black font-inter font-medium leading-[150%]">
        {title}
      </div>
      {rows?.map((row, index) => {
        return (
          <div
            key={index}
            className="self-stretch text-gray-600 font-inter text-sm leading-[150%]"
          >
            {row.title}
          </div>
        );
      })}
    </div>
  );
};

export default ColumFooter;
