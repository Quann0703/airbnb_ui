'use client';

import { useMemo, useState } from 'react';
import { Steps } from 'antd';
import { SmileOutlined, SolutionOutlined, UserOutlined } from '@ant-design/icons';
import Modal from './Modal';
import useReactiveModal from '@/hooks/useReactiveModal';
import Heading from '../Heading';
import Input from '../inputs/Input';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import Button from '../Button';

const ReactiveModal = () => {
    const [isLoading, setIsLoading] = useState(false);
    const reactiveModal = useReactiveModal();
    const [current, setCurrent] = useState(0);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FieldValues>({
        defaultValues: {
            email: '',
        },
    });
    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        const { email } = data;
        setCurrent(1);
    };

    let bodyContent = (
        <>
            <Steps
                current={current}
                items={[
                    {
                        title: 'Login',
                        // status: 'finish',
                        icon: <UserOutlined />,
                    },
                    {
                        title: 'Verification',
                        // status: 'finish',
                        icon: <SolutionOutlined />,
                    },

                    {
                        title: 'Done',
                        // status: 'wait',
                        icon: <SmileOutlined />,
                    },
                ]}
            />
            {current === 0 && (
                <>
                    <div className="flex flex-col gap-4 mt-3">
                        <Heading
                            title="Tài khoản của bạn chưa được kích hoạt"
                            subtitle="nhập lại email để gửi lại mã"
                        />
                        <Input id="email" label="email" disabled={isLoading} register={register} errors={errors} />

                        <Button label="Resend" small onClick={handleSubmit(onSubmit)} />
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
            onSubmit={() => {}}
            body={bodyContent}
        />
    );
};

export default ReactiveModal;
