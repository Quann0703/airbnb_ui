'use client';

import { CldUploadWidget } from 'next-cloudinary';
import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import Button from '../Button';

interface ImageUploadProps {
    value: string;
    onChange: (value: string) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ value, onChange }) => {
    const [isUploading, setIsUploading] = useState(false);

    return (
        <CldUploadWidget
            uploadPreset="add_Image_airbnb" // Thay bằng upload preset của bạn
            options={{
                cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
                maxFiles: 3,
            }}
            onSuccess={(result) => {
                if (typeof result.info !== 'string' && result.info?.secure_url) {
                    console.log('Upload successful:', result.info.secure_url);
                    onChange(result.info.secure_url);
                } else {
                    console.error('Upload failed or no secure_url found');
                }
                setIsUploading(false);
            }}
        >
            {({ open }) => {
                const handleOnClick = () => {
                    setIsUploading(true);
                    open();
                };

                // Nếu `value` tồn tại, hiển thị nút
                if (value) {
                    return <Button icon={FaPlus} rounded base onClick={handleOnClick} />;
                }

                // Giao diện tải lên ban đầu
                return (
                    <div
                        className="relative cursor-pointer hover:opacity-70 transition border-dashed border-2 p-20 border-neutral-300 flex flex-col justify-center items-center gap-4 text-neutral-600"
                        onClick={handleOnClick}
                    >
                        {isUploading ? (
                            <p>Uploading...</p>
                        ) : (
                            <div className="font-semibold text-lg">Click to upload</div>
                        )}
                    </div>
                );
            }}
        </CldUploadWidget>
    );
};

export default ImageUpload;
