import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TestIndex from './index/TestIndex';
import reportWebVitals from './reportWebVitals';
// import SimpleReview from './review/SimpleReview';
// import Review from './review/Review';
// import Mypage from './mypage/Mypage';




ReactDOM.render(
  <TestIndex/>,
  // <Mypage/>,
    // <SimpleReview />,
    // <GetReview/>,
    // <Review/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
