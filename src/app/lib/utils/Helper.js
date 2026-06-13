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

const authUser = async () => {
  const response = await fetch(`${process.env.SITE_URL}/api/auth/me`);
  console.log("authUser");
  if (response.status == 200) {
    const data = await response.json();
    console.log("data-me: ", data);
    return data.user;
  } else {
    return null;
  }
};

export { ShowSwl, toPersianDigits, formatPrice };
