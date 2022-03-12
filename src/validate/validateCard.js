import valid from "card-validator";

export default function validateCard(values) {
  let error = {};
  let creditCard = valid.number(values.number);

  creditCard.expirationDate = valid.expirationDate(values.expiry);
  creditCard.cardHolderName = valid.cardholderName(values.name);
  creditCard.cvc = valid.cvv(values.cvc);

  error.show = true;
  error.message = "Thẻ không chính xác. Vui lòng nhập lại!";
  error.cname = false;
  error.cnumber = false;
  error.cexp = false;
  error.ccvc = false;

  if (values.cvc === null || !values.cvc.trim()) {
    error.message = "Mã bảo mật không được rỗng!";
  } else if (creditCard.cvc.isValid) {
    error.ccvc = true;
  } else {
    error.message = "Mã bảo mật không hợp lệ!";
  }

  if (values.expiry === null || !values.expiry.trim()) {
    error.message = "Ngày hết hạn không được rỗng!";
  } else if (creditCard.expirationDate.isValid) {
    error.cexp = true;
  } else {
    error.message = "Ngày hết hạn không hợp lệ!";
  }

  if (values.name === null || !values.name.trim()) {
    error.message = "Tên không được rỗng!";
  } else if (creditCard.cardHolderName.isValid) {
    error.cname = true;
  } else {
    error.message = "Tên không hợp lệ!";
  }

  if (values.number === null || !values.number.trim()) {
    error.message = "Mã thẻ không được rỗng!";
  } else if (creditCard.isValid) {
    error.cnumber = true;
  } else {
    error.message = "Mã thẻ không hợp lệ!";
  }

  if (error.cnumber && error.cname && error.cexp && error.ccvc) {
    error.show = false;
  }

  return error;
}
