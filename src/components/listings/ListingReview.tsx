'use client';

import Image from 'next/image';

const ListingReview = () => {
    return (
        <>
            <div className="space-y-8">
                {/* Rating and Reviews Summary */}
                <div className="flex items-center space-x-2">
                    <div className="flex items-center space-x-1">
                        <div className="w-8 h-8 rounded-full bg-gray-200" />
                        <div className="text-2xl font-semibold">5.0</div>
                    </div>
                    <div className="w-1 h-1 bg-black rounded-full" />
                    <div className="text-2xl font-semibold">7 reviews</div>
                </div>

                {/* Rating Bars */}
                <div className="grid grid-cols-2 gap-x-20 gap-y-4">
                    <div className="space-y-4">
                        {['Cleanliness', 'Communication', 'Check-in'].map((item, index) => (
                            <div key={index} className="flex justify-between items-center">
                                <div className="text-base font-medium">{item}</div>
                                <div className="flex items-center space-x-3">
                                    <div className="relative w-32 h-1 bg-gray-200 rounded">
                                        <div
                                            className="absolute top-0 left-0 h-1 bg-black rounded"
                                            style={{ width: '100%' }}
                                        />
                                    </div>
                                    <div className="text-xs font-semibold">5.0</div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="space-y-4">
                        {['Accuracy', 'Location', 'Value'].map((item, index) => (
                            <div key={index} className="flex justify-between items-center">
                                <div className="text-base font-medium">{item}</div>
                                <div className="flex items-center space-x-3">
                                    <div className="relative w-32 h-1 bg-gray-200 rounded">
                                        <div
                                            className="absolute top-0 left-0 h-1 bg-black rounded"
                                            style={{
                                                width: item === 'Location' ? '98%' : item === 'Value' ? '94%' : '100%',
                                            }}
                                        />
                                    </div>
                                    <div className="text-xs font-semibold">
                                        {item === 'Location' ? '4.9' : item === 'Value' ? '4.7' : '5.0'}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Reviews List */}
                <div className="space-y-10">
                    {[
                        { name: 'Jose', date: 'December 2021', review: 'Host was very attentive.' },
                        { name: 'Luke', date: 'December 2021', review: 'Nice place to stay!' },
                        {
                            name: 'Shayna',
                            date: 'December 2021',
                            review: 'Wonderful neighborhood, easy access to restaurants and the subway, cozy studio apartment with a super comfortable bed. Great host, super helpful and responsive. Cool murphy bed...',
                        },
                        {
                            name: 'Josh',
                            date: 'November 2021',
                            review: 'Well designed and fun space, neighborhood has lots of energy and amenities.',
                        },
                        {
                            name: 'Vladko',
                            date: 'November 2020',
                            review: 'This is an amazing place. It has everything one needs for a monthly business stay. Very clean and organized place. Amazing hospitality and affordable price.',
                        },
                        {
                            name: 'Jennifer',
                            date: 'January 2022',
                            review: 'A centric place, near a subway station and a supermarket with everything you need.',
                        },
                    ].map((review, index) => (
                        <div key={index} className="flex space-x-6">
                            <div className="w-14 h-14 rounded-full bg-gray-200 relative">
                                <Image
                                    src="https://i.pinimg.com/564x/6a/40/17/6a4017db63f7f8e7c56e406f829e6be2.jpg"
                                    alt=""
                                    fill
                                    className="w-[104px] h-[104px] rounded-full absolute object-cover"
                                />
                            </div>
                            <div className="space-y-2">
                                <div className="flex flex-col">
                                    <div className="text-base font-semibold">{review.name}</div>
                                    <div className="text-sm text-gray-500">{review.date}</div>
                                </div>
                                <div className="text-base">{review.review}</div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Show All Reviews Button */}
                <div className="pt-8">
                    <button className="px-6 py-2 bg-white border border-black rounded-lg shadow-sm font-medium">
                        Show all 12 reviews
                    </button>
                </div>
            </div>
        </>
    );
};

export default ListingReview;
