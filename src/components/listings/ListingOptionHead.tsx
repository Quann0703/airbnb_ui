'use client';
interface ListingOptionHeadProps {
    title: string;
    iconSrc?: string;
}
const ListingOptionHead: React.FC<ListingOptionHeadProps> = ({ title, iconSrc }) => {
    return (
        <div className="inline-flex items-center gap-1 relative flex-[0_0_auto] ">
            <img className="relative w-4 h-4 cursor-pointer" alt="Share" src={iconSrc} />
            <div className="relative w-fit mt-[-1.00px] [font-family:'Messina_Sans-SemiBold',Helvetica] font-semibold text-black text-base tracking-[0] leading-[normal] underline whitespace-nowrap cursor-pointer">
                {title}
            </div>
        </div>
    );
};

export default ListingOptionHead;
