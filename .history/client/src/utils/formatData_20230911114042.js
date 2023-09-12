/**
 * ham format tien te Viet Nam
 * @param {*} money chuoi tien te can format
 * @returns chuoi tien te da duoc format
 * Author: TinhTT (11/09/2023)
 */
export const formatMoney = (money) => {
  return money.toLocaleString("vi", { style: "currency", currency: "VND" });
};
export const formatDate = () => {};
export const formatEmail = () => {};
