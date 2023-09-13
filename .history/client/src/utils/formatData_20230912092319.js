/**
 * ham format tien te Viet Nam
 * @param {*} money chuoi tien te can format
 * @returns chuoi tien te da duoc format
 * Author: TinhTT (11/09/2023)
 */
export const formatMoney = (money) => {
  return money.toLocaleString("vi", { style: "currency", currency: "VND" });
};
/**
 * ham dinh dang chuoi thoi gian
 * @param {*} date chuoi thoi gian can dinh dang
 * @returns dinh dang thoi gian theo kieu ngay-thang-nam
 * Author: TinhTT(12/9/2023)
 */
export const formatDate = (date) => {
  // lay ra dinh dang thoi gian cua chuoi dua vao thoi gian thuc
  const today = new Date(date);
  // lay ra nam
  let year = today.getFullYear();
  // lay ra thang
  let month = today.getMonth() + 1;
  // lay ra ngay
  let day = today.getDate();
  // tra ra chuoi can dinh dang
  return `${day}-${month}-${year}`;
};
/**
 * Validate email
 * @param {*} email : chuỗi email cần kiểm tra
 * @returns true nếu đúng định dạng, false nếu sai định dạng
 * Author: NVQUY(12/09/2023)
 */
export const ValidateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
