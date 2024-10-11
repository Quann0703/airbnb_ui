'use client';

import Heading from '../Heading';
import ListingOptionHead from './ListingOptionHead';

interface ListingHeadProps {
    title?: string;
    id?: string;
    currentUser?: SafeUser | null;
    address?: string;
}

const ListingHead: React.FC<ListingHeadProps> = ({ title, id, currentUser, address }) => {
    return (
        <>
            <Heading title={title} />
            <div className="flex items-start px-0 py-2 relative">
                <div className="relative flex-1 mt-[-1.00px] [font-family:'Messina_Sans-SemiBold',Helvetica] font-semibold text-black text-base tracking-[0] leading-[normal] underline">
                    {address}
                </div>
                <div className="inline-flex items-start gap-4 relative flex-[0_0_auto]">
                    <ListingOptionHead title="Share" iconSrc="https://c.animaapp.com/w7q9qlYG/img/share.svg" />
                    <ListingOptionHead title="Save" iconSrc="https://c.animaapp.com/w7q9qlYG/img/frame.svg" />
                </div>
            </div>
        </>
    );
};

export default ListingHead;
