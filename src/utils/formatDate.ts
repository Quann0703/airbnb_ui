export const formatDate = (date: Date | null) => {
    if (!date) return '';
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'long' });
    return `Ngày ${day} tháng ${month}`;
};
