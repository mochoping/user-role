import {Link} from "react-router-dom";
import Home from "./Home";
import AdminComponent from "../pages/AdminComponent";
import CompanyComponent from "../pages/CompanyComponent";
import UserComponent from "../pages/UserComponent";

const Navbar = ({user}) => {


    return(
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">

                <Link class="navbar-brand" to="/">메인</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link class="nav-link active" aria-current="page" to="/home">홈</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                               aria-expanded="false">
                                게시물
                            </a>
                            <ul className="dropdown-menu">
                                <Link class="dropdown-item" to="/posts">게시글목록</Link>
                                <Link class="dropdown-item" to="/posts/search">게시글 검색</Link>
                                <Link class="dropdown-item" to="/posts/create">게시글 작성</Link>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                               aria-expanded="false">
                                제품
                            </a>
                            <ul className="dropdown-menu">
                                <Link class="dropdown-item" to="/products">제품리스트</Link>
                                <Link class="dropdown-item" to="/products/search">제품 검색</Link>
                            </ul>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                               aria-expanded="false">
                                의류
                            </a>
                            <ul className="dropdown-menu">
                                <Link class="dropdown-item" to="/clothesList">의류목록</Link>
                                <Link class="dropdown-item" to="/">의류검색</Link>
                                <Link class="dropdown-item" to="/clothes/add">의류 추가하기</Link>
                            </ul>
                        </li>
                            <li>
                                {user?.role === 1 && (
                                    <li className="nav-item"><Link class="nav-link" to="/admin"> 관리자 페이지</Link></li>)}
                                {user?.role === 2 && (
                                    <li className="nav-item"><Link class="nav-link" to="/company"> 관리자 페이지</Link></li>)}
                                {user?.role === 3 && (
                                    <li className="nav-item"><Link class="nav-link" to="/user"> 관리자 페이지</Link></li>)}

                                <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                            </li>

                            {/*로그인 로그아웃 버튼*/}
                            {
                                user ? (
                                    <li className="nav-item">
                                        <Link class="nav-link" to="/logout">로그아웃</Link>
                                    </li>
                                ) : (
                                    <li className="nav-item">
                                        <Link class="nav-link" to="/login">로그인</Link>
                                    </li>
                                )
                            }
                    </ul>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>

)
}


const Navbars = ({
    user
}) => {

    return (
        <div className="Navbar-container">
            <Link to="/home">홈</Link>
            <Link to="/">메인</Link>
            <Link to="/posts">게시글목록</Link>
            <Link to="/posts/search">게시글 검색</Link>
            <Link to="/posts/create">게시글 작성</Link>
            <Link to="/products">제품리스트</Link>
            <Link to="/products/search">제품 검색</Link>


            {user?.role === 1 && (<Link to="/admin"> 관리자 페이지</Link>)}
            {user?.role === 2 &&(<Link to="/company"> 관리자 페이지</Link>)}
            {user?.role === 3 &&(<Link to="/user"> 관리자 페이지</Link>)}


        </div>
    )
}

export default Navbar;