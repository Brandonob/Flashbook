import React from 'react'
import { toast } from 'react-toastify'
import './Toast.css'

toast.configure();

export const Toast = () => {
    
    toast.info('This is a future implementation 😁', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        style: {backgroundColor: "#a31ef7"}
        });

}
