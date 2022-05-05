import React from 'react';

const Navbar = () => {

    return(
    <nav class="navbar is-success" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
        <a class="navbar-item" href="#">
            {/* <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"> */}
            <t1><ju class="title">주</ju>변</t1>
            <t2><tam class="title">탐</tam>색 서비스</t2>
        </a>

        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
        <a class="navbar-item">
            주변 검색
        </a>

        <a class="navbar-item">
            게시판
        </a>

        <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
            기타 서비스
            </a>

            <div class="navbar-dropdown">
            <a class="navbar-item">
                서비스 1
            </a>
            <a class="navbar-item">
                서비스 2
            </a>
            <a class="navbar-item">
                서비스 3
            </a>
            <hr class="navbar-divider"/>
            <a class="navbar-item">
                서비스 4
            </a>
            </div>
        </div>
        </div>

        {/* 세션에 따라 내용 변경 */}
        <div class="navbar-end">
            <div class="navbar-item">
                <div class="buttons">
                <a class="button is-primary">
                    <strong>Sign up</strong>
                </a>
                <a class="button is-light">
                    Log in
                </a>
                </div>
            </div>
        </div>
    </div>
    </nav>
    );
}
export default Navbar;

// 창 크기에 따른 메뉴 압축 동작 안 함(햄버거 버튼)