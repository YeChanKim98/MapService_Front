import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UpdateAcc from './contents/UpdateAcc';
import WithdrawAcc from './contents/WithdrawAcc';
import MyReserve from './contents/MyReserve';
import MyReview from './contents/MyReview';
import MySimpleReview from './contents/MySimpleReview';
import Inquery from './contents/Inquiry';
import MypageMenu from './MypageMenu';
import Navbar from '../component/Navbar';
// import Review from '../review/Review';



const Mypage = () => {
    return (
        <div>
            <Navbar/>
            <div class='myPage'>
                <Router>
                    <MypageMenu/>
                    <div className="mypageContent">
                        <Routes>
                            <Route path="/mypage/UpdateAcc" element={<UpdateAcc />} />
                            <Route path="/mypage/WithdrawAcc" element={<WithdrawAcc />} />
                            <Route path="/mypage/MySimpleReview" element={<MySimpleReview />}/>
                            <Route path="/mypage/MyReview" element={<MyReview />}/>
                            <Route path="/mypage/MyReserve" element={<MyReserve />}/>
                            <Route path="/mypage/Inquery" element={<Inquery />}/>
                            <Route path="*" element={<UpdateAcc />}/>
                        </Routes>
                    </div>
                </Router>
            </div>
        </div>
    );
}

export default Mypage;


