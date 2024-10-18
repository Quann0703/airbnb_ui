'use client';

import SubFooter from '../Footer/SubFooter';

const FooterRoot = () => {
    return (
        <div className="flex flex-col ">
            <div className="flex flex-col items-start gap-8 self-stretch  pb-6 px-20 bg-gray-50 mt-auto">
                <SubFooter />
            </div>
        </div>
    );
};

export default FooterRoot;
