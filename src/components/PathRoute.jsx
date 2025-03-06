

// const PathRoute = () => {
// Header와 Footer 사용
// 로그인 정보에 따라 보여줄 페이지 설정
// 이외 전체 페이지 경로 설정
// ViewController 와 같은 역활


import {useState} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import ProtectedRoute from "./ProtectedRoute";
import CompanyPage from "../pages/CompanyPage";
import axios from "axios";
import UserPage from "../pages/UserPage";
import AdminPage from "../pages/AdminPage";
import PostList from "../pages/post/PostList";
import SearchPost from "../pages/post/SearchPost";
import InsertPost from "../pages/post/InsertPost";
import PostDetail from "../pages/post/PostDetail";
import UpdatePost from "../pages/post/UpdatePost";
import Main from "../pages/boot-page/Main";
import Navbar from "./Navbar";
import ProductList from "../pages/product/ProductList";
import ProductDetail from "../pages/product/ProductDetail";
import ProductSearch from "../pages/product/ProductSearch";
import ClothesList from "../pages/clothes/ClothesList";
import ClothesDetail from "../pages/clothes/ClothesDetail";
import AddClothes from "../pages/clothes/AddClothes";
import EditClothes from "../pages/clothes/EditClothes";
import ProductUpdate from "../pages/product/ProductUpdate";

const PathRoute =() => {
    const [user, setUser] = useState(null);


        return(
            <BrowserRouter>
                {/*경로와 관계없는 jsx 파일은 Route 외부에 작성*/}
                <Navbar/>
                {/*네비게이션바 헤더 푸터의 경우 BrowserRouter 내부 Routes 외부에 작성 */}
                <Routes>
                    {/* 0. 관리자 , 회사, 유저에 관계없이 전체접근 가능 Components */}
                    <Route path="/home" element={<Home/>  }/>
                    <Route path="/" element={<Main/>  }/>

                    <Route path="/posts" element={<PostList/>}/>
                    <Route path="/posts/:postId" element={<PostDetail/>}/>
                    <Route path="/posts/search" element={<SearchPost/>}/>
                    <Route path="/posts/create" element={<InsertPost/>}/>

                    {/*PostDetail 에서 수정버튼 내부 to 속성에 작성한 경로 값 설정*/}
                    <Route path="/posts/edit/:postId" element={<UpdatePost/>}/>

                    {/*Product 경로 설정*/}
                    <Route path="/products" element={<ProductList/>}/>
                    <Route path="/products/:productId" element={<ProductDetail/>}/>
                    <Route path="/products/search" element={<ProductSearch/>}/>
                    <Route path="/products/edit/:productId" element={<ProductUpdate/>}/>


                    {/*Clothes 경로 설정*/}
                    <Route path="/clothesList" element={<ClothesList />} />
                    <Route path="/clothes" element={<ClothesList />} />
                    <Route path="/clothes/:id" element={<ClothesDetail />} />
                    <Route path="/clothes/add" element={<AddClothes />} />
                    <Route path="/clothes/edit/:id" element={<EditClothes />} />


                    <Route path="/login" element={<Login setUser={setUser}/>  }/>

                    {/* 1. 관리자, 접근 가능 Components */}
                    <Route path="/company" element={   <ProtectedRoute allowedRoles={ [1] }>
                        <AdminPage user={user} />
                    </ProtectedRoute>                       }
                    />

                    {/* 2. 회사, 접근 가능 Components */}
                    <Route path="/company" element={ <ProtectedRoute allowedRoles={ [2] } >
                                                        <CompanyPage user={user}/>
                                                    </ProtectedRoute>}
                    />
                    {/* 3. 유저, 접근 가능 Components */}
                    <Route path="/company" element={   <ProtectedRoute allowedRoles={ [3] }>
                        <UserPage user={user} />
                    </ProtectedRoute>                       }
                    />


                </Routes>

            </BrowserRouter>
        )

}

export default PathRoute;