import {useState} from "react";
import axios from "axios";
import {css} from "./UserSearch.css";

const UserSearch = () => {
    const [userName , setUserName] =useState("");
    const [users, setUsers] = useState([]); // 검색결과의 경우 배열의 형태. 단일값일 경우가 드물기 떄문

    const searchUser = () => {
        if(!userName.trim()){
            alert("검색할 이름을 입력하세요");
            return;
        }

            // userParams() 는 주소값에 잇는 데이터를 가져와서 사용할 경우에 작성
        // userName 은 클라이엍느가 작성할 값을 API 주소로 가져가서 BackEnd 에 데이터 요청



        axios
            .get("http://localhost:8080/api/user/search?userName="+userName)
            .then( (res)=>{
                setUsers(res.data);
            })
            .catch(
                (err) => {
                    console.log("검색 err = " + err)
                    alert("백엔들 주소와 연결할 수 없는 상태입니다.");
                }
            )



    }

    const getUserRoleText = (role) => {
        switch (role) {
            case 1, "1":
                return "관리자";
            case 2, "2":
                return "업체";
            case 3, "3":
                return "사용자";
            default:
                return "알 수 없음";
        }
    }


    return(
        <div className="usersearch-container">
            <h2>사용자 검색</h2>
            <div className="input-container">
                <input type={"text"}
                        value={userName}
                       placeholder="검색할 이름을 입력하세요."
                onChange={(e)=> setUserName(e.target.value)}/>
            <button onClick={searchUser}>검색</button>
            </div>
            <ul className="user-list">
                {users.length >0
                    ?
                    (
                        users.map((user) => (
                            <li key={user.userId}>
                                    <strong>{user.userName}</strong> ({user.userEmail}) - 역활 {getUserRoleText(user.userRole)}

                            </li>
                    ))
                    )
                    :
                    (<div className="no-results">검색결과가 존재하지 않습니다.</div>)}
                {/*검색결과는 보통 List 다수의 결과가 나오기 때문*/}

            </ul>
        </div>
    )

}

export default UserSearch;