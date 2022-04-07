import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css'
export const useMessage = () => {
    toast.configure({
        position:'top-right',
        autoClose: 3000,
        
    })

    const successMessage = (text) => {
        if(text) {
            toast.success(text)
        }
    }

    const errorMessage = (text) => {
        if (text) {
            toast.error(text)
        }
    }
    return { successMessage, errorMessage}
}