import swal from "sweetalert";

const ShowSwl = (title, icon, buttons) => {
  return swal({ title, icon, buttons });
};

function toPersianDigits(str) {
  return str.toString().replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);
}

export { ShowSwl, toPersianDigits };
