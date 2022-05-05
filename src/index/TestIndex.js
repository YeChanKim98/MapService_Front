// 리뷰관련 페이지 중 어떤 페이지를 반환할지 정하고, 반환하는 파일
import React from 'react';
import './TestIndex.css'

const TestIndex = () =>{

    return (
        <div className='imgWrap'>
            좌측에서 우측으로 흰색 반투명 레이어 이동
            좌 우 측에 동그라미 버튼 아래서 위로 페이드 인
            두 버튼은 기본 흑백
            호버 시 그레이 스케일 0 및 크기 확대
            <img class='backgroundImage' src='/img/testBack.jpg'></img>
        </div>
    );
}

export default TestIndex;