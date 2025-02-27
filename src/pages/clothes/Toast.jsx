
import {useEffect, useState} from "react";

const Toast = () => {
    const [toast, setToast] = useState(false);

    const copyUrl = async  () => {
        await navigator.clipboard.writeText(url);
        setToast(true);
    }

    function Toast({setToast, text}){
        useEffect(() => {
            const timer = setTimeout(() => {
                setToast(false);
            }, 1500);
            return () => {
                clearTimeout(timer);
            };
        }, [setToast]);

        return (
            <div>
                <p>{text}</p>
            </div>
        );
    }


    return (
        <div className="Toast-container">
            Toast Component
        </div>
    )
}

export default Toast;