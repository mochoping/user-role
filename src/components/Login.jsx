import {useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

const Login = ({setUser}) =>{
    const[ userId,setUserId] = useState("");
    const[ userPassword,setUserPassword] = useState("");

    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault(); // 제출을 지연시킨다음 로그인이 무사히 되는지 확인

        axios
            .post("http://localhost:8080/api/user/login",
                {userId, userPassword}
            )
            .then((res)=>{
                    if(res.data.status === "success") {
                        // 벡엔드에서 가녀오는 사용자 데이터를 자바스크립트 내부에서 관리할 수 있도록
                        // userData에 담가주고 userData에 담긴 데이터를 user 변수이름에 저장할 수 있도록 setUser 설정
                        const userData = res.data.user;
                        setUser(userData);
                        localStorage.setItem("user", JSON.stringify(userData));
                        alert("로그인 성공");

                        navigate(res.data.redirect);
                    } else {
                        alert("로그인 실패 아이디와 비밀번호가 일치하지 않습니다.");
                    }
                }
            )
            .catch( (err)=>{
                    alert("백엔드 연결에 있어 문제가 발생했습니다.")
                }
            );



    }
    return(
        <div>
            <h2>로그인</h2>
            <form onSubmit={handleLogin}>
                <label>아이디</label>
                    <input type="text"
                           value={userId}
                           onChange={(e) => setUserId((e.target.value))}/>
                <label>비밀번호</label>
                    <input type="password"
                           value={userPassword}
                           onChange={(e) => setUserPassword((e.target.value))}/>
                    <button>로그인</button>

            </form>
        </div>
)


}

export default Login;