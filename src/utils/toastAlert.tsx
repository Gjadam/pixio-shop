import Swal from "sweetalert2";

const toastAlert = Swal.mixin({
    toast: true,
    position: "bottom-end",
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
  });

  export default toastAlert