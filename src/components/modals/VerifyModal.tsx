'use client';

import Modal from './Modal';
import axios from 'axios';
import { AiFillGithub } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { useState, useCallback } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import useRegisterModal from '@/hooks/useRegisterModal';
import toast from 'react-hot-toast';

import Heading from '../Heading';
import Input from '../inputs/Input';
import Button from '../Button';

import useLoginModal from '@/hooks/useLoginModal';
import { sendRequest } from '@/utils/api';
import useVerifyModal from '@/hooks/useVerifyModal';
import { useRouter } from 'next/navigation';

// // chú ý doạn này thay bang FieldValue
// interface IFormInput {
//   name: string;
//   email: string;
//   password: string;
// }
interface VerifyModalProps {
    id: string;
}
const VerifyModal: React.FC<VerifyModalProps> = ({ id }) => {
    const loginModal = useLoginModal();
    const verifyModal = useVerifyModal();
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FieldValues>({
        defaultValues: {
            code: '',
        },
    });
    const toggleVerify = useCallback(() => {
        verifyModal.onClose();
        loginModal.onOpen();
    }, [loginModal, verifyModal]);
    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        // setIsLoading(true);
        const { code } = data;
        const res = await sendRequest<IBackendRes<any>>({
            url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/auth/check-code`,
            method: 'POST',
            body: {
                _id: id,
                code,
            },
        });
        if (res?.data) {
            toast.success('kick hoat tai khoan thanh cong');
            loginModal.onOpen();
            verifyModal.onClose();
        } else {
            toast.error('bạn nhập sai code hoặc code đã hết hạn');
        }
    };
    const toggle = useCallback(() => {
        verifyModal.onClose();
        loginModal.onOpen();
    }, [loginModal, verifyModal]);
    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Heading title="Mã code đã gửi đến email " subtitle="Vui long kiểm tra email" />
            <Input id="_id" label="_id" disabled={true} register={register} errors={errors} hidden value={id} />
            <Input id="code" label="code" disabled={isLoading} register={register} errors={errors} required />
        </div>
    );
    const footerContent = (
        <div className="flex flex-col gap-4 mt-3">
            <div className=" text-neutral-500 text-center mt-4 font-light ">
                <div className="flex flex-row items-center gap-2 justify-center">
                    <div>Already have account ?</div>
                    <div onClick={toggle} className="text-neutral-800 cursor-pointer hover:underline">
                        Log in
                    </div>
                </div>
            </div>
        </div>
    );
    return (
        <Modal
            title="Check code"
            disabled={isLoading}
            actionLabel="Submit"
            isOpen={verifyModal.isOpen}
            onSubmit={handleSubmit(onSubmit)}
            onClose={toggleVerify}
            body={bodyContent}
            footer={footerContent}
        />
    );
};

export default VerifyModal;
