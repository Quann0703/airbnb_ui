export const formatCurrency = (amount?: number) => {
    const validAmount = Number(amount);
    if (isNaN(validAmount)) {
        return '0₫';
    }
    return validAmount.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
};
