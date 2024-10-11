'use client';

import { useState } from 'react';
import Modal from './Modal';
import useReactiveModal from '@/hooks/useReactiveModal';
import Heading from '../Heading';
import Input from '../inputs/Input';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import Button from '../Button';
import { sendRequest } from '@/utils/api';
import toast from 'react-hot-toast';
import useLoginModal from '@/hooks/useLoginModal';
import { Step, StepLabel, Stepper } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CheckIcon from '@mui/icons-material/Check';

const steps = [
    { title: 'Login', icon: <LoginIcon /> },
    { title: 'Verification', icon: <CheckCircleIcon /> },
    { title: 'Done', icon: <CheckIcon /> },
];

const ReactiveModal = () => {
    const [isLoading, setIsLoading] = useState(false);
    const reactiveModal = useReactiveModal();
    const loginModal = useLoginModal();
    const [current, setCurrent] = useState(0);
    const [userId, setUserId] = useState('');
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FieldValues>({
        defaultValues: {
            email: '',
            code: '',
        },
    });
    const onResendActive: SubmitHandler<FieldValues> = async (data) => {
        const { email } = data;
        const res = await sendRequest<IBackendRes<any>>({
            url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/auth/retry-active`,
            method: 'POST',
            body: {
                email,
            },
        });
        if (res?.data) {
            setUserId(res?.data?._id);
            setCurrent(1);
        } else {
            toast.error('bạn nhập sai code hoặc code đã hết hạn');
        }
    };

    const onCheckCode: SubmitHandler<FieldValues> = async (data) => {
        const { code } = data;
        const res = await sendRequest<IBackendRes<any>>({
            url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/auth/check-code`,
            method: 'POST',
            body: {
                code,
                _id: userId,
            },
        });
        if (res?.data) {
            setCurrent(2);
        } else {
            toast.error('Call APIs error');
        }
    };

    const onAccept = () => {
        loginModal.onOpen();
        reactiveModal.onClose();
    };

    let bodyContent = (
        <>
            <Stepper activeStep={current}>
                {steps.map((step, index) => (
                    <Step key={index}>
                        <StepLabel icon={step.icon}>{step.title}</StepLabel>
                    </Step>
                ))}
            </Stepper>

            {current === 0 && (
                <>
                    <div className="flex flex-col gap-4 mt-3">
                        <Heading
                            title="Tài khoản của bạn chưa được kích hoạt"
                            subtitle="nhập lại email để gửi lại mã"
                        />
                        <div className="flex flex-row gap-4 mt-3 items-center">
                            <div className="flex-grow-[8]">
                                <Input
                                    id="email"
                                    label="email"
                                    disabled={isLoading}
                                    register={register}
                                    errors={errors}
                                />
                            </div>
                            <div className="flex-grow-[2]">
                                <Button label="Resend" onClick={handleSubmit(onResendActive)} />
                            </div>
                        </div>
                    </div>
                </>
            )}
            {current === 1 && (
                <>
                    <div className="flex flex-col gap-4 mt-3">
                        <Heading title="Bạn đã gửi lại mã xác nhận" subtitle="vui lòng nhập mã xác nhận" />
                        <div className="flex flex-row gap-4 mt-3 items-center">
                            <div className="flex-grow-[8]">
                                <Input
                                    id="code"
                                    label="code"
                                    disabled={isLoading}
                                    register={register}
                                    errors={errors}
                                />
                            </div>
                            <div className="flex-grow-[2]">
                                <Button label="active" onClick={handleSubmit(onCheckCode)} />
                            </div>
                        </div>
                    </div>
                </>
            )}
            {current === 2 && (
                <>
                    <div className="flex flex-col gap-4 mt-3">
                        <div className="font-light text-neutral-500 mt-2">
                            Bạn đã xác nhận thành công xin vui lòng đăng nhập
                        </div>
                    </div>
                </>
            )}
        </>
    );
    return (
        <Modal
            isOpen={reactiveModal.isOpen}
            title="kich hoat tai khoan"
            onClose={reactiveModal.onClose}
            actionLabel="Xác nhận"
            onSubmit={onAccept}
            body={bodyContent}
        />
    );
};

export default ReactiveModal;
