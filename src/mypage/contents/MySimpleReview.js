
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {Cookies} from "react-cookie";
import moment from 'moment';
import 'bulma/css/bulma.min.css';
import "moment/locale/ko"; // 한국 시간대로(09시간 차), 위 코드와 합칠 수 없다
//CSS로 인한 이름 변경 : review -> +simple
function MySimpleReview(){

    const cookies = new Cookies();

    const api = axios.create({
        baseURL : 'http://localhost:8080/api',
        withCredentials : true
    });

    let [user_id, setUser_id] = useState("ReactCSSTester");
    let [place_id, setPlace_id] = useState(123456);
    let [content, setContent] = useState("");
    let [recmnd, setRecmnd] = useState("");
    const [reviewData, setReviewData] = useState([]);
    let renderWrite = <div>로그인 필요</div>;
    let renderRecmnd;

    // 리뷰 목록 받기
    function getReviews(){
        api.post('/review/simple/findByUserId/'+user_id,)
        .then((Reviews)=>{
            console.log('리뷰 정보 획득 성공..!');
            setReviewData(Reviews.data);
        }).catch((Error)=>{
            console.log(Error);
        })
    }

    // onLoad
    useEffect(() =>{
        // 테스트용 기본 세션 주입
        window.sessionStorage.setItem("user_id","TestUser");
        console.log('테스트용 세션 정보 생성 : ',window.sessionStorage.getItem("user_id"));
        getReviews();
    },[]);
    

    // 받은 리뷰 목록 랜더링
    const renderReviews = reviewData.map(review => {
        // let getDate = moment(review.review_date).format('YYYY-MM-DD a HH:mm');
        let getDate = moment(review.review_date).utc().format('lll'); // 위와 같은 코드
        return (
            // 리뷰id를 유니크키로 삼아서 목록 출력 / 추천여부는 name으로 구분
            <div className="simpleReview" key={review.review_id}>
                <div className="simpleReviewUser">{review.user_id}</div>
                <div className={"simpleReviewContent_"+review.recmnd}>{review.content}</div>
                <div className="simpleReviewDate">{getDate}</div>
            </div>
        );
    });

    function getPlaceReview(){
        api.post('/review/simple/findByPlaceId/'+place_id,).then((Response)=>{
            console.dir(Response.data);
        }).catch((Error)=>{
            console.log(Error);
        })
    }


    function getUserReview(){
        api.post('/review/simple/findByUserId/'+user_id,).then((Response)=>{
            console.dir(Response.data);
        }).catch((Error)=>{
            console.log(Error);
        })
    }












    return(
        <>
            <h1>내 한줄 리뷰 페이지</h1>
            현재 유저 ID : {user_id} <br/><br/>
            {/* 현재 장소에 달린 리뷰 목록 */}
            리뷰정보
            <div>
                {renderReviews}
            </div>
        </>
    );
}

export default MySimpleReview;


