export const formatDate = (date: Date | null): string => {
    if (!date) return ''; // Trả về chuỗi rỗng nếu date là null

    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();

    // Đảm bảo ngày có 2 chữ số nếu ngày < 10
    const formattedDay = day < 10 ? `0${day}` : day;

    return `Ngày ${formattedDay} tháng ${month} năm ${year}`;
};
