import styles from "./HorizentalCMenu.module.css";
import {useEffect, useRef} from "react";

const HorizentalCMenu = () => {
        // 명칭 캐러샐
        /* 에러 -> 자바스크립트 파일을 HTML이 로딩하기 전에 읽어서 에러남 window.onload()나 새로운 addEventListener를 통해 load이벤트 받는식으로 구현 필요
        리액트는 가상DOM을 통해 제어하는 방식이 일반적이기 때문에 직접적으로 DOM에 접근하는 addEventListener는 특정 상황에서만 씀
        const slider = document.querySelector('.barlist');
        let mouseIsLeave = false; // 마우스가 클릭 되었을 떄만 실행되게함. (클릭시 true)
        let startX, //요소기준 x
            scrollLeft; //전체 문서기준 x

        slider.addEventListener('mousedown',(e) => {
                mouseIsLeave = true;
                console.log(e.pageX,slider.offsetLeft,scrollLeft)// 이건또 무슨 문법
                scrollLeft = slider.scrollLeft; // -> 스크롤이 얼만큼 이동했는지 보여주는 값
                startX = e.pageX - slider.offsetLeft;// 박스 안에서의 x좌표
                // e.pageX 전체 문서에서 마우스가 클릭한 x 좌표
                // slider.offsetLeft 전체 문서에서 현재 박스의 마진값을 뺀 실제 위치의 시작 x좌표

        });// 마우스 클릭했을때 발생 이벤트
        slider.addEventListener('mouseleave',() => {
                mouseIsLeave = false;
        });
        slider.addEventListener('mouseup',() => {
                mouseIsLeave = false;
        });
        slider.addEventListener('mousemove',(e) => {
                if(!mouseIsLeave) return;
                e.preventDefault();
                const x = e.pageX - slider.offsetLeft;
                const walk = (x - startX) *1;
                slider.scrollLeft = scrollLeft - walk;
        });// 마우스가 움직일때만 e 포함

         onMouseDown={e => console.log('onMouseDown')}
                */
        const scrollLeftRef = useRef(null);// 스크롤할 요소 참조
        const scrollBeginRef = useRef(null);// 스크롤할 요소 참조
        const scrollRightRef = useRef(null);// 스크롤할 요소 참조
        // 요소 처음과 끝 그리고 중간점


        const handleWheel = (e) => { // e 클릭이벤트
                        e.preventDefault(); // 기본동작 막기
                const currentClickedPosition = e.currentTarget.value
                        if(currentClickedPosition >0) {// deltaX는 읽기 전용이라는데,
                                scrollLeftRef.current.scrollIntoView({
                                        behavior: 'smooth',
                                        block: 'nearest',
                                        inline: 'center'}) // 마우스를 찍고 이동한 방향에 따라서 화면이 좌우로 이동
                        } if (currentClickedPosition<0) {
                                scrollRightRef.current.scrollIntoView({
                                        behavior: 'smooth',
                                        block: 'nearest',
                                        inline: 'center'
                                })
                }
                        console.log('onMouseDown')
                        console.log(e)
                };



        /* 리엑트 공식 사이트 예제 설정한 요소를 향해 화면 이동
        function handleScrollToFirstCat() {
                scrollLeftRef.current.scrollIntoView({// 해당 요소를 뷰에 들어오게 스크롤한다?
                        behavior: 'smooth',
                        block: 'nearest',
                        inline: 'center'
                });
        }

        function handleScrollToSecondCat() {
                scrollBeginRef.current.scrollIntoView({
                        behavior: 'smooth',
                        block: 'nearest',
                        inline: 'center'
                });
        }

        function handleScrollToThirdCat() {
                scrollRightRef.current.scrollIntoView({
                        behavior: 'smooth',
                        block: 'nearest',
                        inline: 'center'
                });
        }

        */





    return (
        <div className={styles.wrap}>
            <div className={styles.scroll__wrap} onMouseDown={(e)=>{handleWheel(e)}}>
            <div className={styles.scrollElement} ref={scrollLeftRef}>1</div>
            <div className={styles.scrollElement}>2</div>
            <div className={styles.scrollElement}>3</div>
            <div className={styles.scrollElement}>4</div>
            <div className={styles.scrollElement}>5</div>
            <div className={styles.scrollElement}>6</div>
            <div className={styles.scrollElement}>7</div>
                    {/*<div className={styles.scrollElement} ref={scrollLeftRef} onMouseDown={handleScrollToFirstCat}>5</div>
            <div className={styles.scrollElement}  ref={scrollBeginRef} onMouseDown={handleScrollToSecondCat}>6</div>
            <div className={styles.scrollElement}   ref={scrollRightRef} onMouseDown={handleScrollToThirdCat}>7</div>*/}
            <div className={styles.scrollElement}>8</div>
            <div className={styles.scrollElement}>9</div>
            <div className={styles.scrollElement}>10</div>
            <div className={styles.scrollElement}>11</div>
            <div className={styles.scrollElement} ref={scrollRightRef}>12</div>

            </div>
        </div>
    )
}

export default HorizentalCMenu;