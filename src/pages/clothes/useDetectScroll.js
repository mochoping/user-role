import {useCallback, useEffect, useState} from "react";


const useDetectScroll = () => {
    const[scroll, setScroll] = useState(0);

    const handelProgressBar = useCallback(
        ()=>{
            const totalScroll = document.documentElement.scrollTop;
            const windowHeight = document.documentElement.scrollHeight
                                         - document.documentElement.clientHeight;
            const scroll = `${(totalScroll/windowHeight)*100}%`;
            setScroll(scroll); // 변수명 다르게 했을때도 작동하는지 확인할 것
        }, [] );

    useEffect(() => {
        window.addEventListener("scroll", handelProgressBar);
        return () => {
            window.removeEventListener("scroll", handelProgressBar);
        };
    }, [handelProgressBar]);




    return { scroll }
}

export default useDetectScroll;