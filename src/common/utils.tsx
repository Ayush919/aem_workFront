import {toast} from "react-toastify";

export const successToast = (message: string) =>
    toast.success(message, {
        position: 'top-center',
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: 'colored',
        pauseOnFocusLoss: false,
        className: "toastStyling"
    })