import VerifyModal from '@/components/modals/VerifyModal';

const VerifyPage = ({ params }: { params: { id: string } }) => {
    const { id } = params;
    return <VerifyModal id={id} />;
};

export default VerifyPage;
