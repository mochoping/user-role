

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

const PathRoute =() => {
    const [user, setUser] = useState(null);


        return(
            <BrowserRouter>
                {/*경로와 관계없는 jsx 파일은 Route 외부에 작성*/}
                <Routes>
                    {/* 0. 관리자 , 회사, 유저에 관계없이 전체접근 가능 Components */}
                    <Route path="/" element={<Home/>  }/>
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