import swal from "sweetalert";

const ShowSwl = (title, icon, buttons) => {
  return swal({ title, icon, buttons });
};

function toPersianDigits(str) {
  return str.toString().replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);
}

// const formatPrice = (price) => price.toLocaleString("fa-IR");

const formatPrice = (price) => {
  return Number(price).toLocaleString("fa-IR");
};

export { ShowSwl, toPersianDigits, formatPrice };
