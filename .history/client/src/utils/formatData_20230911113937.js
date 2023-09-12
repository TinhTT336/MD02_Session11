/**
 * ham format tien te Viet Nam
 * @param {*} money chuoi tien te can format
 * @returns chuoi tien te da duoc format
 */
export const formatMoney = (money) => {
  return money.toLocaleString("vi", { style: "currency", currency: "VND" });
};
export const formatDate = () => {};
export const formatEmail = () => {};
