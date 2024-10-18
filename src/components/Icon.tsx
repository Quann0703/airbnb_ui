'use client';

import { TbEaseInControlPoint } from 'react-icons/tb';
interface IconProps {
    className?: string;
}

export const NextArrowIcon = ({ className }: IconProps) => {
    return (
        <svg
            width={16}
            height={17}
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                d="M6.18726 2.81384L11.4686 8.09523C11.6513 8.27786 11.6513 8.57398 11.4686 8.75662L6.18726 14.038"
                stroke="#717171"
                strokeWidth="1.4"
            />
        </svg>
    );
};

export const PrevArrowIcon = () => {
    return (
        <svg width={16} height={17} viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M9.81274 2.81384L4.53142 8.09523C4.34874 8.27786 4.34874 8.57398 4.53142 8.75662L9.81274 14.038"
                stroke="#717171"
                strokeWidth="1.4"
            />
        </svg>
    );
};

export const AlterIcon = () => {
    return (
        <svg width={16} height={17} viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M5.00001 8.42593C6.30601 8.42593 7.41801 9.26093 7.83001 10.4259H14V12.4259H7.82901C7.64583 12.9448 7.32351 13.4034 6.89728 13.7514C6.47106 14.0995 5.95734 14.3236 5.41231 14.3994C4.86727 14.4751 4.3119 14.3996 3.80691 14.1809C3.30193 13.9623 2.86677 13.6091 2.54903 13.1598C2.23128 12.7105 2.04318 12.1825 2.00529 11.6336C1.9674 11.0846 2.08118 10.5358 2.33419 10.0471C2.5872 9.55846 2.96969 9.14877 3.43985 8.86285C3.91001 8.57693 4.44974 8.42578 5.00001 8.42593ZM5.00001 10.4259C4.73479 10.4259 4.48044 10.5313 4.2929 10.7188C4.10537 10.9064 4.00001 11.1607 4.00001 11.4259C4.00001 11.6912 4.10537 11.9455 4.2929 12.133C4.48044 12.3206 4.73479 12.4259 5.00001 12.4259C5.26523 12.4259 5.51958 12.3206 5.70712 12.133C5.89465 11.9455 6.00001 11.6912 6.00001 11.4259C6.00001 11.1607 5.89465 10.9064 5.70712 10.7188C5.51958 10.5313 5.26523 10.4259 5.00001 10.4259ZM11 2.42593C11.55 2.42604 12.0893 2.57732 12.5591 2.86326C13.0289 3.14919 13.4111 3.55876 13.6639 4.04721C13.9166 4.53566 14.0302 5.0842 13.9923 5.63286C13.9544 6.18152 13.7663 6.7092 13.4488 7.15822C13.1312 7.60724 12.6963 7.96032 12.1916 8.17888C11.6869 8.39743 11.1319 8.47305 10.5871 8.39747C10.0424 8.32188 9.52889 8.09801 9.10278 7.7503C8.67667 7.4026 8.35433 6.94445 8.17101 6.42593H2.00001V4.42593H8.17001C8.37702 3.84086 8.76033 3.33435 9.26716 2.97617C9.77398 2.61799 10.3794 2.42575 11 2.42593ZM11 4.42593C10.7348 4.42593 10.4804 4.53129 10.2929 4.71883C10.1054 4.90636 10 5.16072 10 5.42593C10 5.69115 10.1054 5.9455 10.2929 6.13304C10.4804 6.32058 10.7348 6.42593 11 6.42593C11.2652 6.42593 11.5196 6.32058 11.7071 6.13304C11.8947 5.9455 12 5.69115 12 5.42593C12 5.16072 11.8947 4.90636 11.7071 4.71883C11.5196 4.53129 11.2652 4.42593 11 4.42593Z"
                fill="#222222"
            />
        </svg>
    );
};

export const StarIcon = () => (
    <svg width={12} height={13} viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_5_371)">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.66025 1.51806L4.11375 4.84993L0.41625 5.32618C0.344982 5.33525 0.277819 5.36459 0.222749 5.41073C0.167679 5.45687 0.127021 5.51785 0.10561 5.58643C0.0841998 5.655 0.0829385 5.72829 0.101976 5.79756C0.121014 5.86683 0.15955 5.92918 0.213 5.97718L2.94787 8.43906L2.211 12.1336C2.19682 12.2044 2.20338 12.2778 2.2299 12.3449C2.25642 12.4121 2.30177 12.4702 2.3605 12.5122C2.41923 12.5542 2.48884 12.5784 2.56097 12.5818C2.63311 12.5852 2.70469 12.5677 2.76712 12.5314L6 10.6576L9.23438 12.5314C9.29677 12.5676 9.36826 12.5849 9.44029 12.5815C9.51231 12.578 9.58181 12.5539 9.64045 12.5119C9.6991 12.47 9.74441 12.412 9.77096 12.345C9.7975 12.2779 9.80416 12.2047 9.79012 12.1339L9.05325 8.43906L11.7881 5.97718C11.8414 5.92918 11.8799 5.86689 11.8989 5.79771C11.9179 5.72852 11.9166 5.65534 11.8952 5.58684C11.8739 5.51835 11.8333 5.45742 11.7784 5.41129C11.7234 5.36515 11.6564 5.33574 11.5852 5.32656L7.88775 4.84993L6.34012 1.51806C6.31002 1.45322 6.26201 1.39834 6.20175 1.35988C6.14149 1.32142 6.07149 1.30098 6 1.30098C5.92851 1.30098 5.85851 1.32142 5.79825 1.35988C5.73799 1.39834 5.68998 1.45322 5.65987 1.51806H5.66025Z"
                fill="#717171"
            />
        </g>
        <defs>
            <clipPath id="clip0_5_371">
                <rect width={12} height={12} fill="white" transform="translate(0 0.925934)" />
            </clipPath>
        </defs>
    </svg>
);

export const DotIcon = () => {
    return (
        <svg width={2} height={2} viewBox="0 0 2 2" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx={1} cy={1} r={1} fill="#4B5563" />
        </svg>
    );
};

export const LanguageIcon = () => {
    return (
        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M19.25 12C19.25 16.0041 16.0041 19.25 12 19.25C7.99594 19.25 4.75 16.0041 4.75 12C4.75 7.99594 7.99594 4.75 12 4.75C16.0041 4.75 19.25 7.99594 19.25 12Z"
                stroke="#4B5563"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M15.25 12C15.25 16.5 13.2426 19.25 12 19.25C10.7574 19.25 8.75 16.5 8.75 12C8.75 7.5 10.7574 4.75 12 4.75C13.2426 4.75 15.25 7.5 15.25 12Z"
                stroke="#4B5563"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path d="M5 12H19" stroke="#4B5563" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};

export const HomeIcon = ({ className }: IconProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            fill="none"
            viewBox="0 0 32 32"
            className={className}
        >
            <path
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M9 25.667h14A2.667 2.667 0 0 0 25.667 23V13L16 6.334 6.334 13v10A2.667 2.667 0 0 0 9 25.667Z"
            />
            <path
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M13 20.999a2.667 2.667 0 0 1 2.666-2.667h.667A2.667 2.667 0 0 1 19 21v4.667h-6V21Z"
            />
        </svg>
    );
};
export const CleanIcon = ({ className }: IconProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="none"
            viewBox="0 0 32 32"
            className={className}
        >
            <path
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M20 6.333c0 3.682-1.985 7-5.667 7 3.682 0 5.667 3.318 5.667 7 0-3.682 1.985-7 5.667-7-3.682 0-5.667-3.318-5.667-7ZM10.667 17c0 2.21-2.124 4.333-4.334 4.333 2.21 0 4.334 2.124 4.334 4.334 0-2.21 2.124-4.334 4.333-4.334-2.21 0-4.333-2.124-4.333-4.333Z"
            />
        </svg>
    );
};
export const CheckIcon = ({ className }: IconProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="none"
            viewBox="0 0 32 32"
            className={className}
        >
            <path
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M20.333 6.333h-8.666A2.667 2.667 0 0 0 9 9v16.667h14V9a2.667 2.667 0 0 0-2.667-2.667Z"
            />
            <path
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.333 16A.667.667 0 1 1 18 16a.667.667 0 0 1 1.333 0Z"
            />
            <path
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M6.333 25.667h19.334"
            />
        </svg>
    );
};
export const CalenderIcon = ({ className }: IconProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="none"
            viewBox="0 0 32 32"
            className={className}
        >
            <path
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M6.333 11.667A2.667 2.667 0 0 1 9 9h14a2.667 2.667 0 0 1 2.667 2.667V23A2.667 2.667 0 0 1 23 25.667H9A2.667 2.667 0 0 1 6.333 23V11.667Zm4.334-5.334V11m10.666-4.667V11m-11 3.333h11.334"
            />
        </svg>
    );
};

export const GardenIcon = ({ className }: IconProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="none"
            viewBox="0 0 32 32"
            className={className}
        >
            <path
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M6.333 17.333c0-7.466 19.334-11 19.334-11S24.333 25.667 16 25.667c-5.333 0-9.667-3-9.667-8.334Z"
            />
            <path
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M6.333 25.667s4.334-7 10-10"
            />
        </svg>
    );
};

export const WifiIcon = ({ className }: IconProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="none"
            viewBox="0 0 32 32"
            className={className}
        >
            <path
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M6.333 11.667A2.667 2.667 0 0 1 9 9h14a2.667 2.667 0 0 1 2.667 2.667V23A2.667 2.667 0 0 1 23 25.667H9A2.667 2.667 0 0 1 6.333 23V11.667Zm4.334-5.334V11m10.666-4.667V11m-11 3.333h11.334"
            />
        </svg>
    );
};

export const WasherIcon = ({ className }: IconProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="none"
            viewBox="0 0 32 32"
            className={className}
        >
            <path
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M19 16a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
            <path
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M25.667 16A9.667 9.667 0 0 1 16 25.667 9.667 9.667 0 0 1 6.333 16 9.667 9.667 0 0 1 16 6.333 9.667 9.667 0 0 1 25.667 16Z"
            />
        </svg>
    );
};

export const AirIcon = ({ className }: IconProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="none"
            viewBox="0 0 32 32"
            className={className}
        >
            <path
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M14.333 9.667H23A2.667 2.667 0 0 0 25.667 7v-.667m-9.334 10h-6m-.666-6.666H6.333m7.334 12.666H6.333"
            />
            <path
                stroke="#141414"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M25.667 16.333H21m-2.667 6H23A2.667 2.667 0 0 1 25.667 25v.667"
            />
        </svg>
    );
};

export const RefrigeratorIcon = ({ className }: IconProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="none"
            viewBox="0 0 32 32"
            className={className}
        >
            <path
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M21.667 25.667H10.333A2.667 2.667 0 0 1 7.667 23v-9.667L16 7.667l8.334 5.666V23a2.667 2.667 0 0 1-2.667 2.667ZM8 14.333h16m-8-6.666V6.333"
            />
        </svg>
    );
};

export const KitchenIcon = ({ className }: IconProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="none"
            viewBox="0 0 32 32"
            className={className}
        >
            <path
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M6.333 9A2.667 2.667 0 0 1 9 6.333h14A2.667 2.667 0 0 1 25.667 9v12.667A2.667 2.667 0 0 1 23 24.333H9a2.667 2.667 0 0 1-2.667-2.666V9ZM21 6.667V24"
            />
            <path
                stroke="#141414"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M9 24.667v1m14-1v1M12.333 10.333l-2 2m7.334-2-7.334 7.334"
            />
        </svg>
    );
};

export const PetIcon = ({ className }: IconProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            fill="none"
            viewBox="0 0 22 22"
            className={className}
        >
            <path
                fill="#141414"
                d="m17.972 4.028-.741-.115a.75.75 0 0 0 .856.856l-.115-.741ZM16.59 7.885l.56-.5a.75.75 0 0 0-1.09-.03l.53.53ZM7.884 16.59l-.53-.53a.75.75 0 0 0 .032 1.09l.498-.56Zm-3.856 1.382.74.115a.75.75 0 0 0-.855-.856l.115.741Zm1.382-3.857-.56.5a.75.75 0 0 0 1.09.03l-.53-.53Zm8.705-8.705.53.53a.75.75 0 0 0-.03-1.09l-.5.56Zm4.598-1.267a3.13 3.13 0 0 0 .037-.476h-1.5a1.6 1.6 0 0 1-.019.246l1.482.23Zm-.38-.893a3.1 3.1 0 0 0-.476.037l.23 1.482c.08-.012.162-.019.246-.019v-1.5Zm3.084 3.083a3.083 3.083 0 0 0-3.084-3.083v1.5c.875 0 1.584.709 1.584 1.583h1.5Zm-3.084 3.084a3.083 3.083 0 0 0 3.084-3.084h-1.5c0 .875-.71 1.584-1.584 1.584v1.5ZM16.03 8.383a3.078 3.078 0 0 0 2.303 1.034v-1.5c-.47 0-.892-.204-1.183-.531l-1.12.997Zm-7.615 8.738 8.706-8.706-1.061-1.06-8.706 8.705 1.06 1.06Zm1.002 1.212c0-.916-.4-1.74-1.034-2.303l-.997 1.12c.327.292.53.713.53 1.183h1.5Zm-3.084 3.084a3.083 3.083 0 0 0 3.084-3.084h-1.5c0 .875-.71 1.584-1.584 1.584v1.5ZM3.25 18.333a3.083 3.083 0 0 0 3.083 3.084v-1.5a1.583 1.583 0 0 1-1.583-1.584h-1.5Zm.037-.476a3.103 3.103 0 0 0-.037.476h1.5c0-.084.006-.166.019-.246l-1.482-.23Zm.38.893c.161 0 .32-.012.476-.037l-.23-1.482c-.08.012-.162.019-.246.019v1.5ZM.583 15.667a3.083 3.083 0 0 0 3.084 3.083v-1.5a1.583 1.583 0 0 1-1.584-1.583h-1.5Zm3.084-3.084a3.083 3.083 0 0 0-3.084 3.084h1.5c0-.875.71-1.584 1.584-1.584v-1.5Zm2.303 1.034a3.078 3.078 0 0 0-2.303-1.034v1.5c.47 0 .891.204 1.183.531l1.12-.997Zm7.615-8.738-8.706 8.706 1.061 1.06 8.706-8.705-1.061-1.06Zm-1.002-1.212c0 .916.4 1.74 1.034 2.303l.997-1.12a1.578 1.578 0 0 1-.53-1.183h-1.5ZM15.667.583a3.083 3.083 0 0 0-3.084 3.084h1.5c0-.875.71-1.584 1.584-1.584v-1.5Zm3.083 3.084A3.083 3.083 0 0 0 15.667.583v1.5c.874 0 1.583.71 1.583 1.584h1.5Z"
            />
        </svg>
    );
};

export const CameraIcon = ({ className }: IconProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="none"
            viewBox="0 0 32 32"
            className={className}
        >
            <path
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="m20.667 13.333 5-3v11.334l-5-3M9 23h8.667a2.667 2.667 0 0 0 2.666-2.667v-8.666A2.667 2.667 0 0 0 17.667 9H9a2.667 2.667 0 0 0-2.667 2.667v8.666A2.667 2.667 0 0 0 9 23Z"
            />
        </svg>
    );
};

export const BicycleIcon = ({ className }: IconProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="none"
            viewBox="0 0 32 32"
            className={className}
        >
            <circle
                cx="9.333"
                cy="17.333"
                r="3"
                stroke="#141414"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
            />
            <circle
                cx="22.667"
                cy="17.333"
                r="3"
                stroke="#141414"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
            />
            <path
                stroke="#141414"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="m21.333 14.667-1.666-7h5.666m-12.666 9.666h3.666m0 0-4.666-7H14 9.333m7 7h3m-13 7h19.334"
            />
        </svg>
    );
};

export const DryerIcon = ({ className }: IconProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="none"
            viewBox="0 0 32 32"
            className={className}
        >
            <path
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M24.333 18.667c0 5.333-3.666 7-8.333 7-5.333 0-8.333-3.8-8.333-7s1.666-6.111 3-7c0 3.733 3.555 6.11 5.333 6-3.2-4.8-.444-10.111 1.333-11.334 0 6 7 7 7 12.334Z"
            />
        </svg>
    );
};

export const PolicyIcon = ({ className }: IconProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="25"
            fill="none"
            viewBox="0 0 24 25"
            className={className}
        >
            <g clipPath="url(#a)">
                <path
                    fill="#E31C5F"
                    fillOpacity=".2"
                    d="m12.5 2.94.292.003c2.146.037 4.42.491 6.823 1.368l.385.144V18.14l-.004.065a.5.5 0 0 1-.235.362l-.058.03-5.712 2.539a2.692 2.692 0 0 0-.16-1.14c-.125-.352-.383-.89-.521-1.197a159.974 159.974 0 0 0-3.046-6.26l-.165-.319c-.235-.456-.413-.815-.658-1.103a1.87 1.87 0 0 0-2.882 0c-.303.356-.516.842-.823 1.421-.248.483-.494.967-.737 1.453L5 4.454l.385-.143c2.399-.875 4.668-1.329 6.81-1.368l.305-.003Z"
                />
                <path
                    fill="#E31C5F"
                    d="M12.5.94c2.8 0 5.759.637 8.878 1.908a1 1 0 0 1 .619.845l.003.081V18.14a2.5 2.5 0 0 1-1.382 2.236l-.103.049-7.521 3.343c-.23.102-.931.163-1.398.171H11.5v-.5a2.5 2.5 0 0 0 1.979-.982l6.63-2.946a1.5 1.5 0 0 0 .888-1.273L21 18.14V3.774l-.346-.138C17.778 2.504 15.061 1.94 12.5 1.94c-2.56 0-5.278.564-8.154 1.696L4 3.774v12.247c-.34.704-.674 1.408-1 2.109V3.774a1 1 0 0 1 .623-.926C6.74 1.578 9.7.94 12.5.94Z"
                />
                <path
                    stroke="#222"
                    d="m8 21.287.343-.443c.798-1.017 1.296-1.944 1.481-2.756.14-.616.116-1.258-.24-1.78-.34-.497-.932-.794-1.584-.794s-1.244.297-1.584.794c-.355.52-.38 1.16-.24 1.78.184.811.682 1.739 1.48 2.756l.344.442Zm0 0 .322.36c.575.629 1.087 1.06 1.612 1.357.407.23.82.37 1.226.418.44.051.88-.007 1.28-.17a2.516 2.516 0 0 0 1.535-1.97c.06-.421.013-.842-.144-1.285-.125-.353-.383-.89-.521-1.198a159.974 159.974 0 0 0-3.046-6.26c-.324-.612-.524-1.07-.823-1.422a1.87 1.87 0 0 0-2.882 0c-.303.356-.516.842-.823 1.421A160.325 160.325 0 0 0 2.69 18.8c-.141.315-.397.847-.52 1.197a2.654 2.654 0 0 0-.145 1.287 2.515 2.515 0 0 0 2.815 2.139 3.27 3.27 0 0 0 1.226-.419c.525-.296 1.037-.727 1.612-1.357l.322-.36Z"
                />
            </g>
            <defs>
                <clipPath id="a">
                    <path fill="#fff" d="M0 .44h24v24H0z" />
                </clipPath>
            </defs>
        </svg>
    );
};

export const SafeIcon = ({ className }: IconProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="49"
            height="49"
            fill="none"
            viewBox="0 0 49 49"
            className={className}
        >
            <g filter="url(#a)">
                <rect width="32" height="32" x="8.5" y="6.3" fill="url(#b)" rx="16" shapeRendering="crispEdges" />
                <g clipPath="url(#c)">
                    <path
                        fill="#fff"
                        d="m24.5 14.7.28.185c1.92 1.28 3.82 1.915 5.72 1.915h.5v6.25c0 4.035-2.895 6.75-6.5 6.75S18 27.085 18 23.05V16.8h.5c1.9 0 3.8-.635 5.725-1.915l.275-.185Zm3.5 4.54-4.75 4.75L21 21.74l-1.06 1.06 3.31 3.31 5.81-5.81L28 19.24Z"
                    />
                </g>
            </g>
            <defs>
                <linearGradient id="b" x1="8.5" x2="40.5" y1="22.3" y2="22.3" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#E61E4D" />
                    <stop offset=".5" stopColor="#E31C5F" />
                    <stop offset="1" stopColor="#D70466" />
                </linearGradient>
                <clipPath id="c">
                    <path fill="#fff" d="M16.5 14.3h16v16h-16z" />
                </clipPath>
                <filter
                    id="a"
                    width="48"
                    height="48"
                    x=".5"
                    y=".3"
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                        in="SourceAlpha"
                        result="hardAlpha"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    />
                    <feOffset dy="2" />
                    <feGaussianBlur stdDeviation="4" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0" />
                    <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_6002_6066" />
                    <feBlend in="SourceGraphic" in2="effect1_dropShadow_6002_6066" result="shape" />
                </filter>
            </defs>
        </svg>
    );
};
