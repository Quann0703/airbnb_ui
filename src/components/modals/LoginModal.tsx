'use client';

import axios from 'axios';

import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { AiFillGithub } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { useState, useCallback } from 'react';
import useRegisterModal from '@/hooks/useRegisterModal';
import useLoginModal from '@/hooks/useLoginModal';
import toast from 'react-hot-toast';

import Modal from './Modal';
import Heading from '../Heading';
import Input from '../inputs/Input';
import Button from '../Button';
import { useRouter } from 'next/navigation';
import { signIn } from '@/auth';
import { authenticate, authenticateGoogle } from '@/utils/actions';
import useReactiveModal from '@/hooks/useReactiveModal';
import ReactiveModal from './ReactiveModal';

const LoginModal = () => {
    const router = useRouter();
    const registerModal = useRegisterModal();
    const loginModal = useLoginModal();
    const reactiveModal = useReactiveModal();
    const [isLoading, setIsLoading] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FieldValues>({
        defaultValues: {
            email: '',
            password: '',
        },
    });
    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        setIsLoading(true);
        const { email, password } = data;
        const res = await authenticate(email, password);
        if (res?.error) {
            if (res?.code === 2) {
                reactiveModal.onOpen();
                loginModal.onClose();
                setIsLoading(false);
            }
            toast.error(res.error);
        } else {
            setIsLoading(false);
            toast.success('logged in');
            loginModal.onClose();
            router.push('/home');
            router.refresh();
        }
    };
    const loginGoogle = async () => {
        const res = await authenticateGoogle();
        console.log(res);
        return res;
    };
    const toggle = useCallback(() => {
        loginModal.onClose();
        registerModal.onOpen();
    }, [loginModal, registerModal]);
    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Heading title="Welcome back" subtitle="Login to your account" />
            <Input id="email" label="Email" disabled={isLoading} register={register} errors={errors} required />

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
                    <div>First time using Airbnb ?</div>
                    <div onClick={toggle} className="text-neutral-800 cursor-pointer hover:underline">
                        Create an account
                    </div>
                </div>
            </div>
        </div>
    );
    return (
        <>
            <Modal
                title="Login"
                disabled={isLoading}
                actionLabel="Continue"
                isOpen={loginModal.isOpen}
                onSubmit={handleSubmit(onSubmit)}
                onClose={loginModal.onClose}
                body={bodyContent}
                footer={footerContent}
            />
            <ReactiveModal />
        </>
    );
};

export default LoginModal;
