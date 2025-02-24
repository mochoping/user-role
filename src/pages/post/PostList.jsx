import {useEffect, useState} from "react";
import apiService from "./apiService";
import PostDetail from "./PostDetail";
import {Link} from "react-router-dom";
import axios from "axios";


const PostList = () => {
    const [posts,setPosts]=useState([]);
    const [err,setErr]=useState(null); // 변수 두 값이 모두 존재하지 않아도 전달을 진행하도록 함. (에러를 최소화 하려는 스크립트의 성질을 이용)
    const [keyword, setKeyword] = useState("");

    // keyword를 통해 가져온 추천 검색어 목록 형태
    const [sugs, setSugs] = useState([]);  // 추천 검색어 리스트
    const [scope, setScope] = useState(false); // 추천 검색어 표시 여부

    const [goodsug, setGoodsug] = useState([]);


    useEffect(() => {// 페이지 로드시 자동 실행
        apiService.getAllPosts(setPosts,setErr)}, []);


    /*
    getAllPosts 를 불러온후 세부 설정을 할 경우 사용할 방법
    useEffect(() => {
        apiService.getAllPosts(
            function(data){
                setPosts(data);
            },
            function (err) {
                setErr("게시물을 불러오는데 오류가 발생했습니다.")

            }
        )
    }, []);
    */



/*
    //1. 검색어 입력시 추천 검색어 제공 기능
    const handleChange = (e) =>{
        const value = e.targer.value.trim(); //
        setKeyword(value);

        if (value) {
            axios
                .get(`http://localhost:8080/api/post/searcj?keyword=${value}`)
                .then((res) => {
                const 제안리스트 = res.data?.map(post => post.postTitle) || [];
                setSugs(제안리스트);
                setScope(true);
            })
                .catch( (err)=>{
                    console.log(err)
                    setSugs();
                    setScope(false);
                })

        }


    }
*/

    function handleChange(e){
        setKeyword(e.target.value)
        apiService.suggestedPosts(keyword,setGoodsug)
     if(goodsug){
         setSugs(goodsug);
         setScope(true);
     } else {
         setSugs();
         setScope(false);
     }

    }


    //2. 추천 검색어 클릭시 검색어 입력창에 자동 입력
    function handleSug(sug){
        setKeyword(sug);
        setScope(false);
    }



    const handleSearch = () => {

        if(!keyword.trim()){
            alert("검색어를 입력하세요")
            return
        }
        apiService.searchPosts(keyword, setPosts, setErr)
    }

    return (
        <div className="PostList-container">
            <h2>게시물 목록</h2>
            {err && <p style={{color: "red"}}>{err}</p>}
            <label>검색</label>
            <input type={"text"}
                   value={keyword}
                   onChange={handleChange}
                   onBlur={ ()=> setTimeout( () => setScope(false), 200)}

                />
            {scope && sugs.length > 0 && (
                <ul>
                    {sugs.map(
                        (sug,index)=> (
                            <li key={index} onMouseDown={ ()=> handleSug(sug)}>
                                {sug}
                            </li>
                        )
                    )}
                </ul>
            )}
            {/* onChange={(e)=>setKeyword(e.target.value)} */}
            <button onClick={handleSearch}>찾기</button>
            <ul>
                {posts.map(post => (
                    <li key={post.postId}>
                        <h3>{post.postTitle}</h3>
                        <p>{post.postContent}</p>
                        <Link to={`/posts/${post.postId}`}>이동하기</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default PostList;