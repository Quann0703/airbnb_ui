'use client';
import { cancelReservation } from '@/actions/reservation/cancelReservation';
import Container from '@/components/Container';
import Heading from '@/components/Heading';
import ReservationCard from '@/components/properties/ReservationCard';
import { useRouter } from 'next/navigation';
import React, { useCallback, useState } from 'react';
import toast from 'react-hot-toast';

interface TripsProps {
    reservations?: SafeReservation[];
}
const TripsClient: React.FC<TripsProps> = ({ reservations }) => {
    const [deleteId, setDeleteId] = useState('');
    const router = useRouter();
    const onCancel = useCallback(async (id: string) => {
        setDeleteId(id);
        const res = await cancelReservation(id);
        if (res) {
            toast.success('bạn đã hủy chuyến đi thành công');
            setDeleteId('');
            router.refresh();
        } else {
            toast.error('bạn chưa hủy chuyến đi vui lòng xem xét lại');
            setDeleteId('');
        }
    }, []);

    return (
        <Container>
            <div className="w-full mx-auto pt-32">
                <Heading title="Chuyến đi" fontSize="text-3xl" />

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 mm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4  gap-5 ">
                    {reservations?.map((reservation: any) => {
                        return (
                            <ReservationCard
                                key={reservation?._id}
                                property={reservation.property}
                                startDate={reservation.startDate}
                                endDate={reservation.endDate}
                                totalPrice={reservation.totalPrice}
                                actionId={reservation._id}
                                onAction={onCancel}
                            />
                        );
                    })}
                </div>
            </div>
        </Container>
    );
};

export default TripsClient;
