export const formatCurrency = (amount?: number) => {
    if (typeof amount !== 'number' || isNaN(amount)) {
        amount = 0;
    }
    return amount.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
};
