import styles from "./HorizentalCMenu.module.css";
import {useEffect, useRef, useState} from "react";

const HorizentalCMenu2 = () => {
    const sliderRef = useRef(null); // .barlist 요소를 참조
    const [isMouseDown, setIsMouseDown] = useState(false); // 마우스 눌림 상태
    const [startX, setStartX] = useState(0); // 드래그 시작 X 좌표
    const [scrollLeft, setScrollLeft] = useState(0); // 초기 스크롤 위치

    // 마우스 누를 때
    const handleMouseDown = (e) => {
        setIsMouseDown(true);
        setScrollLeft(sliderRef.current.scrollLeft);
        setStartX(e.pageX - sliderRef.current.offsetLeft);

    };

    // 마우스 뗄 때
    const handleMouseUp = () => {
        setIsMouseDown(false);
    };

    // 마우스가 요소 밖으로 나갈 때
    const handleMouseLeave = () => {
        setIsMouseDown(false);
    };

    // 마우스 이동 시
    const handleMouseMove = (e) => {
        if (!isMouseDown) return;
        e.preventDefault();
        const x = e.pageX - sliderRef.current.offsetLeft;
        const walk = (x - startX) * 1; // 드래그 거리
        sliderRef.current.scrollLeft = scrollLeft - walk; // 스크롤 위치 업데이트

    };

    return (
        <div
            className={styles.scroll__wrap}
    ref={sliderRef}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
        >

                <div className={styles.scrollElement}>아이템 1</div>
                <div className={styles.scrollElement}>아이템 1</div>
                <div className={styles.scrollElement}>아이템 1</div>
                <div className={styles.scrollElement}>아이템 1</div>
                <div className={styles.scrollElement}>아이템 1</div>
                <div className={styles.scrollElement}>아이템 1</div>
                <div className={styles.scrollElement}>아이템 1</div>
                <div className={styles.scrollElement}>아이템 1</div>
                <div className={styles.scrollElement}>아이템 1</div>
                <div className={styles.scrollElement}>아이템 1</div>
                <div className={styles.scrollElement}>아이템 1</div>
                <div className={styles.scrollElement}>아이템 1</div>


        </div>
    );

}

export default HorizentalCMenu2;