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
import { useRouter } from 'next/navigation';
import useVerifyModal from '@/hooks/useVerifyModal';
import { authenticateGoogle } from '@/utils/actions';

// // chú ý doạn này thay bang FieldValue
// interface IFormInput {
//   name: string;
//   email: string;
//   password: string;
// }
const RegisterModal = () => {
    const router = useRouter();
    const loginModal = useLoginModal();
    const registerModal = useRegisterModal();
    const verifyModal = useVerifyModal();
    const [isLoading, setIsLoading] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password: '',
        },
    });
    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        setIsLoading(true);
        const { email, password, name } = data;

        const res = await sendRequest<IBackendRes<any>>({
            method: 'POST',
            url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/auth/register`,
            body: {
                email,
                password,
                name,
            },
        });
        if (res?.error) {
            toast.error(`${res?.error}`);
        } else {
            setIsLoading(false);
            toast.success('Đăng ký thành công cần xác minh code');
            registerModal.onClose();
            router.push(`/verify/${res?.data._id}`);
            verifyModal.onOpen();
        }
    };
    const toggle = useCallback(() => {
        registerModal.onClose();
        loginModal.onOpen();
    }, [loginModal, registerModal]);

    const loginGoogle = async () => {
        const res = await authenticateGoogle();

        return res;
    };
    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Heading title="Welcome to Airbnb" subtitle="Create an account?" />
            <Input id="email" label="Email" disabled={isLoading} register={register} errors={errors} required />
            <Input id="name" label="Name" disabled={isLoading} register={register} errors={errors} required />
            <Input
                id="password"
                label="Password"
                type="password"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
        </div>
    );
    const footerContent = (
        <div className="flex flex-col gap-4 mt-3">
            <hr />
            <Button outline label="Continue with Google" icon={FcGoogle} onClick={loginGoogle} />
            <Button outline label="Continue with Github" icon={AiFillGithub} onClick={() => {}} />
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
            title="Register"
            disabled={isLoading}
            actionLabel="Continue"
            isOpen={registerModal.isOpen}
            onSubmit={handleSubmit(onSubmit)}
            onClose={registerModal.onClose}
            body={bodyContent}
            footer={footerContent}
        />
    );
};

export default RegisterModal;
